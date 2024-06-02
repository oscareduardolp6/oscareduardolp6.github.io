---
title: "🕒 Task vs Promise: Chaining"
date: 2024-06-01
draft: false 
author: "Oscar López" 
image: /images/articles/Task-vs-Promise/Task-vs-Promise-banner.webp
tags: 
  - typescript
  - patterns
---

The first language in which I learned to work asynchronously was *JavaScript*. Initially, it was very challenging because it was a completely different way of thinking from what I had learned in university. Once I internalized the principles of *asynchronous* programming, it became much easier. So, when I started working in *C#*, I immediately noticed the similarities between `Task` and `Promise` since they are practically equivalent.

But when trying to chain promises the same way as in *JavaScript*, I encountered a peculiarity. The function received in the `.then` method of *JavaScript* is a function that expects the value wrapped in the promise. That is, if we have a `Promise<number>`, the function in `.then` is a function that receives a `number`. However, in *C#*, the "equivalent" to `.then` is `.ContinueWith`, but this method expects a function that receives a `Task` of the same type as the *original* `Task`. That is, if we have a `Task<string>`, the `.ContinueWith` method receives a function that receives a `Task<string>`. This caused a lot of confusion, and by discussing it with **ChatGPT**, I was able to gain more clarity on the matter.

If you want to review my process, this is the [conversation](https://chatgpt.com/share/909c4bb1-d514-4279-a25a-05ce7d71103d)

### `.then` in JavaScript
In *JavaScript*, the `.then` method is used to handle the result of a **promise**. The handler in `.then` directly receives the *resolved value* of the promise. Additionally, *JavaScript* provides the `.catch` method to handle errors.

**Example in JavaScript:**
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
In this example, if the promise is resolved, the handler in the first `.then` receives the response and processes it. If an error occurs, the handler in `.catch` is executed.

### `.ContinueWith` in *C#*
In C#, the `.ContinueWith` method of a `Task` is used to continue with code execution after a task is completed. Unlike `.then`, the handler in `.ContinueWith` receives an instance of `Task<T>`, allowing access to more details about the task, including its *status, exceptions, and result*.

**Basic Example in C#:**
```cs
Task<int> task = Task.Run(() => {
    // Simulating an asynchronous operation
    return 42;
});

task.ContinueWith(t => {
    if (t.IsFaulted)
    {
        // Handle exceptions
        Console.WriteLine($"Error: {t.Exception.InnerException.Message}");
    }
    else if (t.IsCompletedSuccessfully)
    {
        // Handle successful result
        Console.WriteLine($"Result: {t.Result}");
    }
});
```
In this example, `ContinueWith` handles both the successful result and possible exceptions. This is possible because `ContinueWith` provides access to the entire task.

### The Reasoning
#### No `.catch` in *C#*
In *C#*, there is no direct equivalent to `.catch` for promises in *JavaScript* that chains directly to a `Task`. Instead, errors are handled within the same `ContinueWith` handler or by using *try-catch* blocks in combination with `await`.

#### Options for `.ContinueWith` in *C#*
The `.ContinueWith` method also allows specifying options that control *when* the continuation handler should be executed, such as `OnlyOnRanToCompletion` and `OnlyOnFaulted`.

**Example with ContinueWith Options:**
```cs
Task<int> task = Task.Run(() => {
    // Simulating an operation that may throw an exception
    throw new InvalidOperationException("Simulated error");
    return 42;
});

task.ContinueWith(t => {
    Console.WriteLine($"Result: {t.Result}");
}, TaskContinuationOptions.OnlyOnRanToCompletion);

task.ContinueWith(t => {
    Console.WriteLine($"Error: {t.Exception.InnerException.Message}");
}, TaskContinuationOptions.OnlyOnFaulted);
```

In this example, two continuation handlers are defined: one that executes only if the task completes successfully (`OnlyOnRanToCompletion`) and another that executes only if the *task fails* (`OnlyOnFaulted`).

### Conclusions
Although both `.ContinueWith` in *C#* and `.then` in *JavaScript* serve to continue code execution after an *asynchronous* operation, there are important differences:

1. **Continuation Handler:** In *JavaScript*, the `.then` handler receives the *resolved value* of the **promise**. In *C#*, the `.ContinueWith` handler receives an instance of `Task<T>`, providing access to more task details.
2. **Error Handling:** *JavaScript* uses `.catch` to handle **errors**. In *C#*, they are handled within the `ContinueWith` handler or by using try-catch blocks when using `await`.
3. **Continuation Options:** *C#* allows specifying options in `.ContinueWith` to control when the continuation handler should be executed, offering more granular control.

These differences reflect the different philosophies and capabilities of the languages, providing developers with powerful tools to handle asynchronous operations in each environment.

I hope this article helps you better understand the differences between `.ContinueWith` in C# and `.then` in JavaScript, as well as the options for handling errors and accessing task details in C#.