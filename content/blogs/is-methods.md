---
title: '🏗️ Métodos `Is`'
date: 2024-12-18
draft: false
author: 'Oscar López'
image: /images/articles/is-methods/cover.png
tags: 
  - typescript 
  - patrones de diseño
  - programación funcional
---

Últimamente he estado muy *adentrado* en la *programación funcional* con lenguajes como *Typescript* y en mucha menos medida con *Haskell* y más allá de las partícularidades de la *programación funcional* como [Monadas](https://oscarlp6.dev/blogs/exploring-reader-monad/) , me ha llamado la atención conceptos relacionado con *tipado*, como los *Union Types* y las utilidades con la que *viene*. 

Entre estas útilidades he aprendido el concepto de hacer que los *estados inválidos sean irrepresentables*, es decir *evitar* los métodos de la forma `isX` y en lugar de tener que estar *verificando* esas *condiciones*, saber, por el simple *tipado*, que tu estado es inválido. 

Esto no es exclusivo de la *programación funcional*; de hecho, está muy relacionado con *conceptos* como los **Value Objects** de la *programación orientada a objetos*, pero se relaciona muy bien con los **Tipos Algebraicos** . 

> Make illegal states unrepresentable
> \- Yaron Minsky.

## 🚯 Hacer los estados inválidos irrepresentables 
Estamos acostumbrados a que cuando tenemos una entidad que puede estar en diferentes estados, utilizamos cosas como `enums` o *constantes*, que claro, es mejor que utilizar números o strings *mágicos*, pero de cualquier forma tiene ciertos problemas. 

Por ejemplo, el tener que estar *verificando* si la entidad está en el estado que necesitas para poder trabajar con ella. 

###  ❎ Alternativa con `is` o `enums` 
Con esta alternativa los métodos que dependen de que el `User` esté en *status verificado* tienen que *revisar* el *status* antes de ejecutar su acción, además de que puede *lanzar excepciones* en *runtime*, obligándonos a tener una forma de *controlar* ese **error**. 

```ts
type User = {
  id: string
  name: string
  email: string
  verified: boolean
}

const createUser = (name: string, email: string): User => ({
  id: crypto.randomUUID(),
  verified: false,
  name,
  email
});

const verifyUser = (user: User): User => ({
  ...user,
  verified: true
})

const sendPromoCode = (user: User): void => {
  if(!user.verified) throw new Error('Cannot send code to unverified user')
  console.log('Promo code sent')
}

const unverifiedUser = createUser('Oscar', 'oscareduardolp@gmail.com')

sendPromoCode(unverifiedUser) // No error & insecure at runtime

const verifiedUser = verifyUser(unverifiedUser)

sendPromoCode(verifiedUser) // No error
```

### ✅ Sin métodos `is` o `enums` 
De esta forma haciendo que el método de `sendPromoCode` solo pueda recibir *usuarios que ya han sido verificados*, este método solo tiene que encargarse por hacer la lógica del envío y no tiene la *responsabilidad* de verificar si el *Usuario* está en un *estado válido*. Además, la *verificación* se encuentra en un punto más *alto* e incluso tenemos una verificación desde el sistema de *tipado*. 
```ts 
// Sin métodos is o enums 
type UnverifiedUser = {
  id: string
  name: string
  email: string
}

type VerifiedUser = UnverifiedUser & { verifiedAt: Date }

const createUser = (name: string, email: string): UnverifiedUser => ({
  id: crypto.randomUUID(),
  name,
  email
});

const verifyUser = (unverifiedUser: UnverifiedUser): VerifiedUser => ({
  ...unverifiedUser,
  verifiedAt: new Date()
})

const sendPromoCode = (verifiedUser: VerifiedUser): void => {
  console.log('Promo code sent')
}

const unverifiedUser = createUser('Oscar', 'oscareduardolp@gmail.com')

sendPromoCode(unverifiedUser) // Error: 'UnverifiedUser' is not assignable to parameter of type 'VerifiedUser'

const verifiedUser = verifyUser(unverifiedUser)
sendPromoCode(verifiedUser) // No error
```

## 📖 Conclusión 
Adoptar el enfoque de **hacer los estados inválidos irrepresentables** nos permite construir sistemas más seguros, robustos y mantenibles. Al delegar la validación al propio sistema de tipos, no solo reducimos la carga de verificaciones redundantes en nuestro código, sino que también eliminamos una clase completa de errores en tiempo de ejecución, permitiendo que el compilador actúe como nuestra primera línea de defensa.

Además, esta práctica no está limitada a un paradigma específico, ya que encaja tanto en la programación funcional como en la orientada a objetos. Al combinar conceptos como **Tipos Algebraicos**, **Value Objects** o incluso técnicas inspiradas en **Domain-Driven Design**, podemos modelar nuestros dominios de manera más clara, legible y semántica.

En última instancia, el diseño basado en tipos no solo mejora la experiencia de desarrollo, sino que también nos obliga a pensar cuidadosamente en nuestros modelos, asegurándonos de que el código represente fielmente las reglas de negocio. De este modo, evitamos que estados inválidos existan, incluso como una posibilidad, en nuestro sistema.

💡 Te invito a reflexionar sobre tus prácticas actuales y experimentar con esta técnica en tus próximos proyectos. ¡Los beneficios pueden sorprenderte!

## 🗒 Referencias 
Este artículo fue basado en la información de las siguientes fuentes: 

- [Type First Development](https://tomasp.net/blog/type-first-development.aspx/): Desarollo dirigido por tipos 
- [Designing with types](https://fsharpforfunandprofit.com/posts/designing-with-types-intro/) Desarrollando el dominio con tipos 
- [BettaTech](https://www.youtube.com/watch?v=K--Lmy8qUCQ): Vídeo con ejemplo de *servidores conectados y desconectados*. 