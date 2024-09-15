---
title: "✍️ Code Comments" 
date: 2024-09-13
draft: false 
author: "Oscar López" 
image: /images/articles/Code-Comments/cover.png
tags: 
  - Good Practices
  - Clean Code
---

Recently, I came across this [other article](https://dev.to/grantdotdev/code-comments-are-not-evil-20o9?utm_source=pocket_shared) where the author talks about when it’s appropriate to use *comments* in *code*, and when it’s not. It's a great article, and I recommend checking it out, even though I don’t fully agree with some of the points made.  
In this article, I’ll try to give my take on using comments, when to use them, when not to, alternatives, and the reasoning behind each decision. 

## 🗣 More Explicit Code

In my case, I think of comments as a way to give *context* to the people reading your code, but they should not be used to *explain* the way you *implemented* the logic. If the *implementation* of the logic requires comments, you’re likely not being *expressive enough* in your code. I believe it’s part of our *responsibility* to make sure the *code* **"explains"** itself, even if that means being overly *explicit* in some aspects.  

For instance, if I have this code:

```ts
const calculateTaxes = (income: number, personType: number): number => {
	const taxRate = personType === 1 // Is Moral Person 
		? 0.3 // Tax rate for moral person 
		: 0.2; // Tax rate for natural person 
	return income * taxRate; 
}
```

It has several comments that could *easily* be *replaced* by better variable naming and typing, rendering those comments *useless*.

A better approach might look like this:

```ts
const calculateTaxes = (income: number, personType: PersonTypeEnum): number => {
	const taxRate = personType === PersonTypeEnum.MoralPerson 
		? TAX_RATE_MORAL_PERSON 
		: TAX_RATE_NATURAL_PERSON; 
	return income * taxRate; 
}
```

Looking at it now, our function might have more code, but it now *explains* itself.  

## 🧰 Maintenance  
Another advantage of writing code that explains itself is that it’s safer and easier to maintain. It’s *very common*, and actually happens often, that comments become *outdated* relative to the code, which means the explanation in the comment no longer makes sense in the context of the function or class.  

## 🌍 Context  
A good way to use comments is to explain *why* certain code is doing something, rather than *what* it does. For example:

```ts
const calculateDiscount = (product: Product): number => {
	if(product.category === 'smartphone') return 0; // Smartphones has 0 discount
	return product.price * 0.2;
}
```

### ❎ Good
In this example, even though the comment might seem *"good"*, it actually doesn’t add any value. Simply by reading the *code*, we already know that *smartphones* have no discount, but the real question we have is why? This is important for respecting the business rule, but the comment doesn’t help with that. It just gives us the information we would already get from reading the code.

### ✔ Better
A better use of comments would be to explain *why* smartphones don’t get a discount, for example:

```ts
const calculateDiscount = (product: Product): number => {
	if(product.category === 'smartphones') return 0; // Since smartphones are now made to order, they cannot have any discounts 
	return product.price * 0.2;
}
```

This comment gives us much more information and helps us understand why that business rule exists.  
This is just an example, I know this code could be improved in terms of semantics and clarity, but I’ll leave that as an exercise for the reader XD.

## ⚰ Dead Code  
A *very bad* practice I’ve encountered in my work is *commenting* out code to *remove* it. In my opinion, this is not acceptable. In the long run, it makes the code much harder to read. Without proper *syntax highlighting*, it’s easy to lose track of where you’re working, and you might end up editing commented-out code. Plus, it just adds *noise* by showing old implementations that can interfere with new ideas.  
Today, there’s no need to do this. If we need to recover a piece of code, we can *rely* on *git* or another version control system. So please, stop doing that.

## ✅ `TODO` Comments  
The kind of comment you leave when there’s a missing functionality isn’t necessarily a bad comment *per se*, but it can cause problems if it’s forgotten and makes its way into *production*. Personally, I’d recommend having a *CI/CD* system that checks for all those `TODO`s and creates specific *issues*, so nothing gets left *behind*.  

## 👀 Important Considerations  

- When I talk about comments, I’m referring to those we use to explain things or even to prevent certain parts of the code from being executed, but I’m not including comments that are part of the documentation.

## 📖 Conclusion

In general, there is no *golden rule* for comments; it all depends on what you’re working on. But I think these recommendations can help you get rid of bad habits you may not even be aware of, and overall improve the way you write code.

If you have any thoughts, questions, or feedback, feel free to leave them in the comments, and I’d be happy to discuss them.