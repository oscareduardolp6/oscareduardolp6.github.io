---
title: '🏗️ `Is` Methods'
date: 2024-12-18
draft: false
author: 'Oscar López'
image: /images/articles/is-methods/cover.png
tags: 
  - typescript 
  - patterns
  - functional programming
---

Lately, I’ve been deeply *immersed* in *functional programming* with languages like *TypeScript* and to a much lesser extent with *Haskell*. Beyond the specificities of *functional programming* like [Monads](https://oscarlp6.dev/blogs/exploring-reader-monad/), I’ve been fascinated by concepts related to *typing*, such as *Union Types* and the utilities they bring.

Among these utilities, I’ve learned the concept of making *invalid states unrepresentable*. This means *avoiding* methods like `isX` and, instead of having to constantly *check* those *conditions*, knowing through the simple *type system* that your state is valid or invalid.

This is not exclusive to *functional programming*. In fact, it’s closely related to *concepts* like **Value Objects** in *object-oriented programming*, but it integrates well with **Algebraic Data Types**.

> Make illegal states unrepresentable  
> \- Yaron Minsky

## 🚯 Making Invalid States Unrepresentable
We’re used to situations where entities can exist in multiple states, and we typically use tools like `enums` or *constants*. While this is certainly better than using magic numbers or strings, it still has some drawbacks.

For example, we often have to *check* if the entity is in the state we need before we can work with it.

### ❎ Alternative with `is` or `enums`
With this approach, methods that depend on the `User` being in the *verified status* must *check* the *status* before executing their logic. This can lead to *runtime exceptions* and forces us to implement ways to *handle* those **errors**.

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
  if (!user.verified) throw new Error('Cannot send code to unverified user')
  console.log('Promo code sent')
}

const unverifiedUser = createUser('Oscar', 'oscareduardolp@gmail.com')

sendPromoCode(unverifiedUser) // No error & insecure at runtime

const verifiedUser = verifyUser(unverifiedUser)

sendPromoCode(verifiedUser) // No error
```
### ✅ Without `is` Methods or `enums`
By ensuring that the `sendPromoCode` method can only receive *verified users*, this method focuses solely on the logic of sending the promo code and doesn’t have the *responsibility* of validating if the *User* is in a *valid state*. Additionally, the *validation* is moved to a higher *level*, with type system verification providing additional safety.

```ts
// Without is methods or enums
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

## 📖 Conclusion
Adopting the approach of **making invalid states unrepresentable** allows us to build safer, more robust, and maintainable systems. By delegating validation to the type system itself, we reduce the burden of redundant checks in our code and eliminate an entire class of runtime errors, allowing the compiler to serve as our first line of defense.

Moreover, this practice is not limited to a specific paradigm. It fits well within both functional programming and object-oriented programming. By combining concepts such as **Algebraic Data Types, Value Objects**, or even techniques inspired by **Domain-Driven Design**, we can model our domains in a clearer, more readable, and semantic way.

Ultimately, *type-driven* design not only improves the development experience but also forces us to carefully consider our models, ensuring that our code faithfully represents business rules. In this way, we prevent invalid states from existing, even as a possibility, within our system.

💡 I invite you to reflect on your current practices and experiment with this technique in your next projects. The benefits might surprise you!

## 🗒️ References

This article is based on information from the following sources: 

- [Type First Development](https://tomasp.net/blog/type-first-development.aspx/): Type-Driven Development
- [Designing with types](https://fsharpforfunandprofit.com/posts/designing-with-types-intro/) Domain Modeling with Types
- [BettaTech](https://www.youtube.com/watch?v=K--Lmy8qUCQ): Video example of *connected and disconnected servers* 