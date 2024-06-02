---
title: "🕒 Task vs Promise: Encadenación"
date: 2024-06-01
draft: false 
author: "Oscar López" 
image: /images/articles/Task-vs-Promise/Task-vs-Promise-banner.webp
tags: 
  - typescript
  - patterns
---

El primer lenguaje en el que aprendí a trabajar de forma *asíncrona* fue *JavaScript*. Al principio, me costó mucho trabajo porque era una forma de pensar completamente distinta a la que aprendí en la universidad. Una vez que logré interiorizar los principios de la programación *asíncrona*, me fue mucho más sencillo. Entonces, cuando comencé a trabajar en *C#*, de inmediato detecté las similitudes entre las `Task` y las `Promise`, pues son prácticamente equivalentes.

Pero al intentar encadenar promesas de la misma forma en la que se hace en *JavaScript*, me topé con una peculiaridad. La función que se recibe en el método `.then` de *JavaScript* es una función que espera el valor que está envuelto en la promesa. Es decir, si tenemos una `Promise<number>`, la función del `.then` es una función que recibe un `number`. En cambio, en *C#* el "equivalente" a `.then` es `.ContinueWith`, pero este método espera una función que recibe una `Task` del mismo tipo que la `Task` *original*. Es decir, si tenemos un `Task<string>`, el método `.ContinueWith` recibe una función que recibe un `Task<string>`. Esto me causó mucha confusión, y conversando con **ChatGPT** logré tener más claridad en el caso.

En caso de querer revisar mi proceso, esta es la [conversación](https://chatgpt.com/share/909c4bb1-d514-4279-a25a-05ce7d71103d)

### `.then` en *Javascript*
En *JavaScript*, el método `.then` se utiliza para manejar el resultado de una **promesa**. El manejador de `.then` recibe directamente el *valor resuelto* de la promesa. Además, *JavaScript* proporciona el método `.catch` para manejar errores.

**Ejemplo en JavaScript:**
```javascript
fetch('http://example.com')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```
En este ejemplo, si la promesa se resuelve, el manejador en el primer `.then` recibe el response y lo procesa. Si ocurre un error, el manejador en `.catch` se ejecuta.

### `.ContinueWith` en *C\#*
En C#, el método `.ContinueWith` de una `Task` se utiliza para continuar con la ejecución de código después de que una tarea se complete. A diferencia de `.then`, el manejador de `.ContinueWith` recibe una instancia de `Task<T>`, lo que permite acceder a más detalles acerca de la tarea, incluyendo su *estado, excepciones y resultado*.

**Ejemplo básico en C#:**
```csharp
Task<int> task = Task.Run(() => {
    // Simulando una operación asíncrona
    return 42;
});

task.ContinueWith(t => {
    if (t.IsFaulted)
    {
        // Manejar excepciones
        Console.WriteLine($"Error: {t.Exception.InnerException.Message}");
    }
    else if (t.IsCompletedSuccessfully)
    {
        // Manejar el resultado exitoso
        Console.WriteLine($"Resultado: {t.Result}");
    }
});
```
En este ejemplo, ContinueWith maneja tanto el resultado exitoso como las posibles excepciones. Esto es posible porque ContinueWith proporciona acceso a la tarea completa.

### El porqué
#### No hay `.catch` en *C\#*
En *C#*, no existe un método equivalente a `.catch` de las promesas en *JavaScript* que se encadene directamente a una `Task`. En cambio, los errores se manejan dentro del mismo manejador `ContinueWith` o utilizando bloques *try-catch* en combinación con `await`.

#### Opciones de `.ContinueWith` en *C\#*
El método `.ContinueWith` también permite especificar opciones que controlan *cuándo* se debe ejecutar el manejador de continuación, tales como `OnlyOnRanToCompletion` y `OnlyOnFaulted`.

**Ejemplo con opciones de ContinueWith:**
```csharp
Task<int> task = Task.Run(() => {
    // Simulando una operación que puede lanzar una excepción
    throw new InvalidOperationException("Error simulado");
    return 42;
});

task.ContinueWith(t => {
    Console.WriteLine($"Resultado: {t.Result}");
}, TaskContinuationOptions.OnlyOnRanToCompletion);

task.ContinueWith(t => {
    Console.WriteLine($"Error: {t.Exception.InnerException.Message}");
}, TaskContinuationOptions.OnlyOnFaulted);
```

En este ejemplo, se definen dos manejadores de continuación: uno que se ejecuta solo si la tarea se completa con éxito (`OnlyOnRanToCompletion`) y otro que se ejecuta solo si la *tarea falla* (`OnlyOnFaulted`).

### Conclusiones
Aunque tanto `.ContinueWith` en *C#* como `.then` en *JavaScript* sirven para continuar con la ejecución de código después de una operación *asíncrona*, hay diferencias importantes:

1. **Manejador de Continuación:** En *JavaScript*, el manejador `.then` recibe el *valor resuelto* de la **promesa**. En *C#*, el manejador `.ContinueWith` recibe una instancia de `Task<T>`, proporcionando acceso a más detalles de la tarea.
2. **Manejo de Errores:** *JavaScript* utiliza `.catch` para manejar **errores**. En *C#*, se manejan dentro del manejador `ContinueWith` o mediante bloques try-catch cuando se usa `await`.
3. **Opciones de Continuación:** *C#* permite especificar opciones en `.ContinueWith` para controlar cuándo se debe ejecutar el manejador de continuación, ofreciendo un control más granular.

Estas diferencias reflejan las distintas filosofías y capacidades de los lenguajes, proporcionando a los desarrolladores herramientas poderosas para manejar operaciones asíncronas en cada entorno.

Espero que este artículo te sea útil para entender mejor las diferencias entre .ContinueWith en C# y .then en JavaScript, así como las opciones para manejar errores y acceder a los detalles de las tareas en C#.