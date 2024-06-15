---
title: "🧱 Inmutabilidad"
date: 2024-06-15
draft: false
author: "Oscar López" 
image: /images/articles/Immutability/Main.webp
tags: 
  - Arquitectura
  - Buenas prácticas
  - Clean Code

---

Recientemente en mi trabajo me tocó *enfrentarme* a una base de código que carecía prácticamente por completo de la inmutabilidad. Cada vez me he intentado acercar más a los conceptos y prácticas que vienen del mundo funcional, especialmente la *inmutabilidad*, por lo que al estar haciendo cambios en el código eché mucho de menos esta característica, pues creo que tiene muchísimas ventajas que abordaremos en este artículo.

## ❔ ¿Qué es la inmutabilidad?

La **inmutabilidad** se refiere a la propiedad de un objeto cuyo estado no puede ser modificado después de su creación. En lugar de cambiar el objeto existente, cualquier operación que modifique el estado del objeto devuelve un nuevo objeto con el estado modificado. Aquí tienes un ejemplo en C#:

```csharp
public class Persona
{
    public string Nombre { get; }
    public int Edad { get; }

    public Persona(string nombre, int edad)
    {
        Nombre = nombre;
        Edad = edad;
    }

    public Persona ConEdadIncrementada()
    {
        return new Persona(this.Nombre, this.Edad + 1);
    }
}

// Uso
var persona = new Persona("Oscar", 30);
var personaMayor = persona.ConEdadIncrementada();
Console.WriteLine(persona.Edad); // 30
Console.WriteLine(personaMayor.Edad); // 31
```

## 🧟 Efectos secundarios 

El tener **efectos secundarios** complica el saber dónde cambian las cosas. Tengo que meterme en cada método para ver qué cambios le hizo al objeto que se le pasó. Cuando un objeto es **inmutable**, cualquier modificación resulta en la creación de un nuevo objeto en lugar de cambiar el existente. Esto significa que puedo confiar en que un objeto no cambiará una vez que ha sido creado, reduciendo así la incertidumbre sobre el estado de los datos en mi aplicación.

## 🧩 Debugging 

A la hora de hacer **debug**, puedes saber que ciertos métodos van a cambiar un objeto porque devuelven uno nuevo. Sin esto, tendría que meterme al método para ver de qué forma lo cambió. La **inmutabilidad** simplifica el proceso de depuración porque cada transformación en los datos es explícita. En lugar de rastrear qué métodos pueden haber alterado un objeto en particular, sé que las transformaciones se realizan de manera controlada y predecible, facilitando la localización y corrección de errores.

## ⏳ Concurrencia 

La **inmutabilidad** te permite la **concurrencia** prácticamente de a gratis. Cuando los datos son inmutables, no hay riesgo de que múltiples hilos modifiquen el mismo objeto al mismo tiempo, lo que puede causar errores difíciles de reproducir y corregir. La inmutabilidad elimina estos problemas de raíz, permitiendo que los hilos trabajen en paralelo sin necesidad de sincronización explícita.

## 🧪 Testing 

Es más sencillo replicar casos de **prueba**, pues no hay efectos secundarios. En un entorno de pruebas, los objetos inmutables garantizan que cada prueba comienza con un estado conocido y no se verá afectada por pruebas anteriores. Esto facilita la creación de pruebas consistentes y repetibles, aumentando la confiabilidad de los resultados de las pruebas y la calidad del código.

## 🤔 Conclusión

Aunque en muchos casos tiene sentido **mutar objetos**, especialmente en contextos donde el rendimiento es crítico y la creación de nuevos objetos podría ser costosa, la **inmutabilidad** debería ser el modo por defecto. La claridad, simplicidad y seguridad que proporciona superan las desventajas en la mayoría de las aplicaciones. Adoptar la inmutabilidad no solo facilita el mantenimiento y la depuración del código, sino que también mejora la concurrencia y la confiabilidad de las pruebas, haciendo que el desarrollo de software sea más predecible y menos propenso a errores.