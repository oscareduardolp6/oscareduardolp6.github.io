---
title: "🛠️ Branded Types"
date: 2024-04-21
draft: false 
author: "Oscar López" 
image: /images/articles/branded-types-cover.png
tags: 
  - typescript
  - patterns
---
Como desarrollador, explorar y comprender los Branded Types en TypeScript ha sido una revelación para mí. Antes de sumergirnos en este tema, permíteme compartir una breve experiencia personal sobre cómo he evolucionado en mi percepción del trabajo bajo presión, algo que en muchos sentidos refleja mi acercamiento a conceptos complejos como los Branded Types.

Recuerdo cuando enorgullecerme de trabajar bajo presión era casi un distintivo de honor en mi currículum. El cumplir con fechas límite ajustadas y enfrentar proyectos complejos parecía un logro admirable. Sin embargo, con el tiempo, mi perspectiva cambió. Valoré más la calidad del trabajo sobre la velocidad, la tranquilidad sobre la prisa. Esta transformación de enfoque me llevó a apreciar más herramientas como los Branded Types en TypeScript, que nos permiten precisión y control sobre nuestros datos en lugar de simplemente cumplir con requisitos a toda costa. Esta nueva mentalidad también está relacionada con el concepto de "primitive obsession" en programación, donde la sobreutilización de tipos primitivos (como strings o números) puede conducir a un código poco mantenible y propenso a errores. Los Branded Types nos brindan una forma estructurada de combatir este "code smell" al crear tipos específicos que reflejan mejor las restricciones y expectativas de nuestros datos en el código.

¿Qué son exactamente los Branded Types en TypeScript? En términos simples, son una forma de crear tipos específicos que están relacionados con un valor particular. Esto significa que podemos definir tipos que solo acepten ciertos valores o características, proporcionando así un nivel adicional de seguridad y claridad en nuestro código.

Por ejemplo, consideremos el caso de un sistema donde necesitamos asegurar que un string no esté vacío. Con un Branded Type en TypeScript, podemos crear un tipo específico para esta situación:

```typescript
type NonEmptyString = string & { _brand: "NonEmptyString" };

function createNonEmptyString(value: string): NonEmptyString {
  if (!value.trim()) {
    throw new Error("String must not be empty");
  }
  return value as NonEmptyString;
}

const validString: NonEmptyString = createNonEmptyString("Hello, world!");
// const invalidString: NonEmptyString = createNonEmptyString(""); // Esto dará un error en tiempo de ejecución
```

En este ejemplo, `NonEmptyString` es un tipo que se compone de un string junto con una etiqueta `_brand` que lo identifica como no vacío. Al usar esta estrategia, podemos garantizar que ciertos valores cumplan con nuestras expectativas en tiempo de ejecución. Evitando tener que estar repitiendo validaciones para revisar que un `string` no esté vacío. 

Las conclusiones que podemos extraer de esta técnica son valiosas. Primero, muestra cómo TypeScript nos permite crear tipos que reflejen mejor nuestras intenciones y restricciones en el código. Esto conduce a un desarrollo más seguro y menos propenso a errores. Segundo, resalta la importancia de priorizar la calidad y la precisión sobre la velocidad pura al escribir software. Los Branded Types nos invitan a pensar más allá de la funcionalidad básica y a considerar la robustez y la claridad de nuestro código.

En última instancia, los Branded Types en TypeScript son una herramienta poderosa que nos ayuda a modelar nuestros datos de manera más efectiva, aportando una capa adicional de seguridad y robustez a nuestras aplicaciones. Al incorporar este enfoque en nuestro flujo de trabajo, podemos mejorar la calidad y la mantenibilidad de nuestro código, elevando así nuestra práctica de desarrollo a nuevos niveles de excelencia.