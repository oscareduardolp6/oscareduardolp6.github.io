---
title: "La Monada Reader en Acción 📖"
date: 2024-01-16T19:00:00-06:00
draft: false
author: "Oscar López" 
image: /images/articles/exploring-reader-monad.png
tags: 
  - programación funcional 
  - fp-ts
  - reader 
  - monada reader
  - monadas
---

# 📖 Mi experiencia con La Monada Reader 
Me embarqué en un side project aparentemente trivial pero profundamente educativo. Mi tarea: construir una herramienta para gestionar inventarios, ventas y compras en una tienda. Sin embargo, más allá de la simplicidad aparente del proyecto, mi verdadero propósito radica en sumergirme en dos tecnologías que han capturado mi atención de manera notable: la programación funcional y Next.js.

## 🌐 Introducción 
Este proyecto actúa como un lienzo donde puedo aplicar y perfeccionar mis conocimientos en programación funcional, un paradigma que ofrece una perspectiva única para abordar problemas de software. Aunque, debo confesar, Next.js se asoma en el escenario principalmente como testigo, ya que lo que deseo compartir se centra más en la funcionalidad pura.

Dentro de este viaje por la programación funcional, decidí aventurarme con la monada Reader, una herramienta intrigante que actúa como un ingenioso "sustituto" de la inyección de dependencias. A través de este artículo, compartiré mis experiencias, tropiezos y descubrimientos al implementar la monada Reader en un proyecto donde la simplicidad aparente da paso a un rico terreno para aprender y crecer como desarrollador.

## ❔ ¿Qué es la Monada Reader? 
Tomando inspiración directa de la documentación de fp-ts, la monada Reader representa una computación que puede leer valores de un entorno compartido, transmitir valores de función a función y ejecutar sub-computaciones en un entorno modificado.

Piensa en ello como si tus funciones pudieran acceder a una especie de "entorno global" donde encuentran la información que necesitan. Este entorno compartido se pasa de función a función, permitiendo que cada una agregue su parte antes de pasarla a la siguiente. Es como si estuviéramos compartiendo una hoja de papel entre distintas estaciones de trabajo, cada una contribuyendo a medida que pasa.

En términos más familiares para aquellos versados en programación orientada a objetos, la monada Reader se comporta como un "entorno compartido" que actúa como un objeto global. Cada función puede leer de este objeto gigante sin tener que pasar la información como parámetro directo.

Ahora, la razón por la cual la monada Reader se destaca, según la documentación de fp-ts, es que su uso para ciertas operaciones a menudo resulta más claro y sencillo en comparación con la monada State. Imagina que el entorno es como un conductor que conecta todas las piezas de tu código de una manera clara y fácil de entender. Es como el uso de un objeto global, pero de manera más controlada y funcional.

En resumen, la monada Reader ofrece una forma eficaz y legible de manejar operaciones que implican la lectura y manipulación de datos en un entorno compartido, proporcionando claridad y simplicidad a menudo superiores a otras alternativas.

### 🚀 Ejemplo

```ts 
import { option as O } from "fp-ts";
import * as R from "fp-ts/lib/Reader"
import { pipe } from "fp-ts/lib/function"

type UserContext = {
  user: string 
  rol: string
}

type Product = {
  id: string 
  name: string 
  price: number
}

const getProduct = (id: string, user: string): Product => ({
  id, 
  name: 'Product 1', 
  price: 100
})

const hasAccess: R.Reader<UserContext, boolean> = context => context.user === 'admin' 


const searchProduct = (productId: string): R.Reader<UserContext, Product> => 
  context => getProduct(productId, context.user)


export const findProduct = (product: string): R.Reader<UserContext, O.Option<Product>> => pipe(
  R.Do, 
  R.bind('access', () => hasAccess), 
  R.bind('search', () => searchProduct(product)), 
  R.map(({ access, search }) => access ? O.of(search) : O.none), 
)

```


## 🤔 Retos y Aprendizajes 
Al principio me encontré ante un desafío intrigante: cambiar mi mentalidad acostumbrada en cuanto a cómo las dependencias se manejan en la programación. Aunque el concepto de pasar dependencias de forma implícita suena simple, la aplicación práctica trajo consigo una serie de aprendizajes que, en retrospectiva, fueron fundamentales para dominar esta nueva herramienta.

En mi primer intento por aplicar la *monada Reader* me basé en [este artículo](https://dev.to/gcanti/getting-started-with-fp-ts-reader-1ie5), del creador de `fp-ts`, por lo que obviamente tiene mucho más conocimiento que yo en el tema. Por lo que intenté aplicarla seguiendo la *estructura* de acuerdo a cómo lo el **artículo**, funciones que devuelven un `Reader`, en su momento no entendí bien sobre el funcionamiento, no recuerdo la *barbaridad* que hice, pero no logré decifrar el cómo podía utilizarla para los fines que quería. 

Hasta que después de un día entero de estarme peleando con `fp-ts`, logré hacer funcionar las cosas cómo yo quería, no sé si sea la mejor forma de hacerlo, si alguien tiene alguna recomendación apreciaría que me la dejara en los comentarios.  

```ts
export interface ProductCreatorDeps {
  nonEmptyStringCreator: NonEmptyStringCreator;
  nonNegativeNumberCreator: NonNegativeNumberCreator;
  imageSrcCreator: ImageSrcCreator;
  product: BasicProduct;
}
export interface BasicProduct {
  productId: string;
  name: string;
  price: number;
  urlImage: ImageSrc;
  booleanOptions: string[];
  selectiveOptions: Array<{
    name: string;
    items: string[];
  }>;
}

export interface Product {
  productId: string
  name: NonEmptyString
  price: NonNegativeNumber
  urlImage: ImageSrc
  booleanOptions: NonEmptyString[]
  selectiveOptions: SelectiveOption.SelectiveOption[]
}

const parseName = ({ product: { name }, nonEmptyStringCreator }: ProductCreatorDeps) => pipe(
  nonEmptyStringCreator(name), 
  E.fromOption(() => ({ message: `El nombre del producto no puede estar vacío`}))
)

const parsePrice = ({ product: { price }, nonNegativeNumberCreator }: ProductCreatorDeps) => pipe(
  nonNegativeNumberCreator(price), 
  E.fromOption(() => ({ message: `El precio <${price}> no puede ser un número no negativo`}))
)

const parseImageSrc = ({ product: { urlImage }, imageSrcCreator }: ProductCreatorDeps) => 
  imageSrcCreator(urlImage)

const parseBooleanOptions = ({ product: { booleanOptions }, nonEmptyStringCreator }: ProductCreatorDeps) => pipe(
  booleanOptions, 
  A.map(nonEmptyStringCreator), 
  A.sequence(O.Applicative), 
  E.fromOption(() => ({ message: `Alguna de las opciones (${JSON.stringify(booleanOptions)}) es un string vacío`}))
)

export const create: RE.ReaderEither<ProductCreatorDeps, DomainError, Product> = pipe(
  Deps.Do, 
  Deps.bind('name', () => parseName), 
  Deps.bind('price', () => parsePrice), 
  Deps.bind('urlImage', () => parseImageSrc), 
  Deps.bind('booleanOptions', () => parseBooleanOptions), 
  Deps.bind('selectiveOptions', () => SelectiveOption.create), 
  Deps.map(sequenceS(E.Applicative)),
  RE.map(val => val as Product),
)
```

## 🔚 Conclusión 
El cambio de paradigma desde la orientación a objetos hacia un enfoque más funcional ha resultado no solo en nuevos aprendizajes, sino en una apreciación más profunda de la elegancia y claridad que ofrece este estilo de programación.

Quiero invitar a todos los lectores a compartir sus experiencias y proporcionar feedback. La programación funcional es un viaje continuo, y cada perspectiva contribuye al crecimiento colectivo. Si estás incursionando en este paradigma o ya eres un experto, ¡me encantaría escuchar tus pensamientos! ¿Te enfrentaste a desafíos similares? ¿Descubriste trucos que facilitaron tu transición hacia lo funcional? Estoy aquí para ofrecer ayuda y aprender juntos en este emocionante viaje.