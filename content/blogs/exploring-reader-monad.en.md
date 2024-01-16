---
title: "The Reader Monad in Action 📖"
date: 2024-01-16T19:00:00-06:00
draft: false
author: "Oscar López" 
image: /images/articles/exploring-reader-monad.png
tags: 
  - functional programming
  - fp-ts
  - reader 
  - reader monad 
  - monads
---

# 📖 My Experience with the Reader Monad
I embarked on what seemed like a trivial but profoundly educational side project. My task: to build a tool for managing inventories, sales, and purchases in a store. However, beyond the apparent simplicity of the project, my true purpose lies in delving into two technologies that have captured my attention remarkably: functional programming and Next.js.

## 🌐 Introduction
This project serves as a canvas where I can apply and refine my knowledge in functional programming, a paradigm that offers a unique perspective on tackling software problems. Although, I must confess, Next.js peeks into the scene mainly as a spectator, as what I wish to share focuses more on pure functionality.

Within this journey into functional programming, I decided to venture with the Reader Monad, an intriguing tool that acts as a clever "substitute" for dependency injection. Through this article, I will share my experiences, stumbling blocks, and discoveries while implementing the Reader Monad in a project where apparent simplicity gives way to a rich ground for learning and growing as a developer.

## ❔ What is the Reader Monad?
Drawing direct inspiration from the fp-ts documentation, the Reader Monad represents a computation that can read values from a shared environment, transmit values from function to function, and execute sub-computations in a modified environment.

Think of it as if your functions could access a kind of "global environment" where they find the information they need. This shared environment is passed from function to function, allowing each one to add its part before passing it to the next. It's like sharing a sheet of paper between different workstations, each contributing as it passes along.

In more familiar terms for those versed in object-oriented programming, the Reader Monad behaves like a "shared environment" acting as a global object. Each function can read from this giant object without having to pass information as a direct parameter.

Now, the reason why the Reader Monad stands out, according to the fp-ts documentation, is that its use for certain operations often proves clearer and simpler compared to the State Monad. Imagine the environment as a conductor connecting all the pieces of your code in a clear and easy-to-understand way. It's like using a global object, but in a more controlled and functional manner.

In summary, the Reader Monad offers an effective and readable way to handle operations involving the reading and manipulation of data in a shared environment, providing clarity and simplicity often superior to other alternatives.

### 🚀 Example

```ts 
import { option as O } from "fp-ts";
import * as R from "fp-ts/lib/Reader"
import { pipe } from "fp-ts/lib/function"

type UserContext = {
  user: string 
  role: string
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

## 🤔 Challenges and Learnings
At first, I faced an intriguing challenge: shifting my accustomed mindset regarding how dependencies are handled in programming. Although the concept of implicitly passing dependencies sounds simple, the practical application brought forth a series of learnings that, in retrospect, were fundamental to mastering this new tool.

In my first attempt to apply the *Reader Monad*, I based it on [this article](https://dev.to/gcanti/getting-started-with-fp-ts-reader-1ie5), by the creator of `fp-ts`, who obviously has much more knowledge than I do on the subject. So I tried to apply it following the structure according to how the article presented it. At the time, I didn't quite understand how it worked; I don't remember the barbarity I did, but I couldn't figure out how I could use it for the purposes I wanted.

Until after a whole day of wrestling with fp-ts, I managed to make things work the way I wanted. I don't know if it's the best way to do it, so if anyone has any recommendations, I would appreciate it if you left it in the comments.

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

## 🔚 Conclusion
The paradigm shift from object-oriented to a more functional approach has resulted not only in new learnings but also in a deeper appreciation for the elegance and clarity that this programming style offers.

I want to invite all readers to share their experiences and provide feedback. Functional programming is a continuous journey, and each perspective contributes to collective growth. Whether you're delving into this paradigm or are already an expert, I would love to hear your thoughts! Did you face similar challenges? Did you discover tricks that eased your transition to the functional way? I'm here to offer help and learn together on this exciting journey.