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

As a developer, exploring and understanding Branded Types in TypeScript has been a revelation to me. Before delving into this topic, let me share a brief personal experience on how I have evolved in my perception of working under pressure, something that in many ways reflects my approach to complex concepts like Branded Types.

I remember when taking pride in working under pressure was almost a badge of honor on my resume. Meeting tight deadlines and tackling complex projects seemed like an admirable achievement. However, over time, my perspective shifted. I valued quality of work over speed, tranquility over haste. This shift in focus led me to appreciate tools like Branded Types in TypeScript more, which allow us precision and control over our data rather than just meeting requirements at all costs. This new mindset is also related to the concept of "primitive obsession" in programming, where overusing primitive types (like strings or numbers) can lead to unmaintainable and error-prone code. Branded Types provide a structured way to combat this "code smell" by creating specific types that better reflect the restrictions and expectations of our data in the code.

What exactly are Branded Types in TypeScript? In simple terms, they are a way to create specific types that are related to a particular value. This means we can define types that only accept certain values or characteristics, providing an additional level of security and clarity in our code.

For example, let's consider a system where we need to ensure that a string is not empty. With a Branded Type in TypeScript, we can create a specific type for this situation:

```typescript
type NonEmptyString = string & { _brand: "NonEmptyString" };

function createNonEmptyString(value: string): NonEmptyString {
  if (!value.trim()) {
    throw new Error("String must not be empty");
  }
  return value as NonEmptyString;
}

const validString: NonEmptyString = createNonEmptyString("Hello, world!");
// const invalidString: NonEmptyString = createNonEmptyString(""); // This will give a runtime error
```

In this example, `NonEmptyString` is a type that consists of a string along with a `_brand` label that identifies it as non-empty. By using this strategy, we can ensure that certain values meet our expectations at compile time, avoiding runtime errors. This helps in preventing repetition of validations to check if a `string` is empty.

The insights we can draw from this technique are valuable. First, it shows how TypeScript allows us to create types that better reflect our intentions and constraints in the code. This leads to safer and less error-prone development. Second, it emphasizes the importance of prioritizing quality and precision over pure speed when writing software. Branded Types encourage us to think beyond basic functionality and consider the robustness and clarity of our code.

Ultimately, Branded Types in TypeScript are a powerful tool that helps us model our data more effectively, adding an additional layer of security and robustness to our applications. By incorporating this approach into our workflow, we can improve the quality and maintainability of our code, elevating our development practice to new levels of excellence.