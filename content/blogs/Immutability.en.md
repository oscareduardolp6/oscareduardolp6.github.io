---
title: "🧱 Immutability"
date: 2024-06-15
draft: false
author: "Oscar López" 
image: /images/articles/Immutability/Main.webp
tags: 
  - Architecture
  - Good practices
  - Clean Code

---

# 🧱 Immutability

Recently at work, I had to *deal* with a codebase that lacked immutability almost entirely. I have been trying to get closer to concepts and practices from the functional programming world, especially *immutability*, so when making changes to the code, I missed this feature a lot. I believe it has many advantages, which we will address in this article.

## ❔ What is Immutability?

**Immutability** refers to the property of an object whose state cannot be modified after its creation. Instead of changing the existing object, any operation that modifies the state of the object returns a new object with the modified state. Here is an example in C#:

```csharp
public class Person
{
    public string Name { get; }
    public int Age { get; }

    public Person(string name, int age)
    {
        Name = name;
        Age = age;
    }

    public Person WithIncreasedAge()
    {
        return new Person(this.Name, this.Age + 1);
    }
}

// Usage
var person = new Person("Oscar", 30);
var olderPerson = person.WithIncreasedAge();
Console.WriteLine(person.Age); // 30
Console.WriteLine(olderPerson.Age); // 31
```

## 🧟 Side Effects

Having **side effects** complicates knowing where things change. I have to look into each method to see what changes it made to the passed object. When an object is **immutable**, any modification results in the creation of a new object instead of changing the existing one. This means I can trust that an object will not change once it has been created, thereby reducing the uncertainty about the state of data in my application.

## 🧩 Debugging

When **debugging**, you can know that certain methods will change an object because they return a new one. Without this, I would have to look into the method to see how it changed. **Immutability** simplifies the debugging process because every transformation in the data is explicit. Instead of tracking which methods might have altered a particular object, I know that transformations are done in a controlled and predictable manner, making it easier to locate and fix errors.

## ⏳ Concurrency

**Immutability** allows **concurrency** practically for free. When data is immutable, there is no risk of multiple threads modifying the same object at the same time, which can cause hard-to-reproduce and fix errors. Immutability eliminates these problems at their root, allowing threads to work in parallel without the need for explicit synchronization.

## 🧪 Testing

It's easier to replicate test cases since there are no side effects. In a testing environment, immutable objects ensure that each test starts with a known state and will not be affected by previous tests. This facilitates the creation of consistent and repeatable tests, increasing the reliability of test results and the quality of the code.

## 🤔 Conclusion

Although in many cases it makes sense to **mutate objects**, especially in contexts where performance is critical, and creating new objects could be costly, **immutability** should be the default mode. The clarity, simplicity, and safety it provides outweigh the disadvantages in most applications. Adopting immutability not only makes code maintenance and debugging easier but also improves concurrency and test reliability, making software development more predictable and less error-prone.