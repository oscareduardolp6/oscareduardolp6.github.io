---
title: "Obsidian: Knowledge base"
date: 2024-02-08
draft: false
author: "Oscar López"
image: /images/articles/Obsidian-Knowledgebase/cover-en.png
tags: 
  - obsidian
  - productivity
  - tools
  - systems
  - knowledge base
---

# 🗄️ Obsidian: Knowledge Organization

A couple of days ago, I shared the tool I use to manage all my knowledge base, and I had promised to share the systems I use to *organize and record* knowledge and information about my habits.

This time I want to share how I *organize* my notes and the things I learn. Personally, I am a software developer, so I have a specific *space* for the *knowledge* and **resources** I gather about technologies that interest me, and since that's my most "nourished" *space*, it will be the one I use as an example.

## 📋 Boards
Before diving into how I organize my *information*, it's important to mention the **Obsidian** *plugin* that makes all this possible: [Dataview](https://blacksmithgu.github.io/obsidian-dataview/).

**Dataview** is a community-developed **plugin** that allows querying the data and metadata of your notes in a manner very similar to languages like [SQL](https://en.wikipedia.org/wiki/SQL) or [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript). It enables you to generate tables, lists, and task lists from the information obtained from your notes. This is very powerful as it allows you to create systems to handle sets of notes as if they were database tables and manipulate their data as needed.

## 🖱 Technology Board Note
As I mentioned earlier, I have a board where I *group* all the knowledge I gather related to *technologies*, with technology being a term that can encompass a *framework*, a *language*, a *concept*, *paradigm*, *etc.*

This is just the way that works for me; everyone should adapt the system to their *mental structure*.

The note for my **technology** board looks like this.

````md 
---
tags:
  - tablero
---
# 🧠 Conocimientos de tecnologías 
```dataview
TABLE 
icon, 
file.inlinks as "Recurso" 
FROM #tecnologia 
AND -"Plantillas"
SORT file.name ASC
```
````

The first part, the part between the ---, is the Frontmatter, a section to define metadata for your file. In this case, I only add the tag indicating it's a board; this allows me to later list all the boards I have in a folder or similar things. For the purpose of this article, it doesn't matter much.

Then we have the title of the note, nothing new, and finally, at the end, we have the Dataview "query". The Dataview documentation tells us that to execute queries, we can do it in many ways, but here we use a language very similar to SQL to have a table.

What we're saying is that from all the notes tagged technology but not in the Templates folder, we're going to get the icon, which is a custom property I define for technology notes (we'll see more about this later), and we're going to get the inlinks, which are all the files that reference the technology note. That is, if we have a note Javascript, those are all the notes that have a [[Javascript]] within their content.

And finally, we just tell it to sort alphabetically by the name of the technology.

I understand that it might be a bit complicated for some people; if you have experience with SQL, it might seem very familiar, but I hope that seeing the example of what the plugin renders and the structure of each knowledge becomes clearer.

Once rendered by Dataview, the board looks like this:

<img src="/images/articles/Obsidian-Knowledgebase/Tech-board-note.png" alt="Render of the technology board" style="max-width:100%">

As we can see, it's a table that has the technology or concept name in the first column, in the second column, it has the icon I define, and in the third column, it has a list of all the notes that reference that technology.

## 💻 Technology Note
If we enter to see the structure of a technology note, the truth is that it's quite simple.

````md
---
tag: technology
icon: 🛻
---

# 🛻CQRS
```dataview
LIST
FROM [[]]
```
````

It only has the technology tag that identifies it as a technology, an icon that I define to make the association a bit simpler in my head when I see the list of technologies, and a query that shows a bit of the same as the general board, showing all the notes that reference that technology, in this case, CQRS.

Once the note is rendered, it looks like this:

<img src="/images/articles/Obsidian-Knowledgebase/Tech-note.png" alt="Render of the CQRS technology note" style="max-width:100%">


## 📜 Knowledge Note
I believe the best way to make something last over time is to make it involve as little resistance as possible because if you have to search for how you normally do it or you have to consider many things, you'll end up making exceptions that will make your system unreliable.

That's why technology notes or boards can be somewhat complex, but they are done once and that's it, whereas in daily life, we'll want to add knowledge and resources. This should involve the least friction possible.

That's why the way to define the knowledge or data note related to a technology is quite simple; the only requirement is that this note has the link / [[ ]] to the technology note, and if we think about it, it's even very semantic to do it.

For example, I have this note about the Constructor Setter pattern, a way to make objects mutable/immutable dynamically.

````md
# 👾 Constructor Setter

It's a pattern in [[Software Architecture|Architecture]] or [[Design Patterns|design]].

If you need a mutable object for a while and then want to make it immutable, you can use a design pattern called "Constructor Setter" (also known as "Setter Method") in combination with a state indicator. Here's an example in [[CSharp]]:

```csharp
public class MyMutableObject
{
    private bool isImmutable = false;
    private int property1;
    private string property2;

    public int Property1
    {
        get => property1;
        set
        {
            if (isImmutable)
                throw new InvalidOperationException("The object is immutable.");
            
            property1 = value;
        }
    }

    public string Property2
    {
        get => property2;
        set
        {
            if (isImmutable)
                throw new InvalidOperationException("The object is immutable.");
            
            property2 = value;
        }
    }

    public void MakeImmutable()
    {
        isImmutable = true;
    }
}
````

As you can see, in the same way of writing the information of the note, the parts from where I can link the corresponding *knowledge areas* emerge; this makes the notes of those *knowledge areas* reliable because it practically doesn't require effort to maintain the system.

## 🤔 Conclusion
My intention with the article was to share how I structure my notes to efficiently manage the knowledge or resources I acquire. I also hope this glimpse into my organization system serves as inspiration for others. Each person has their own workflow and unique needs, so this system can be adapted and evolve in many ways. If anyone has ideas on how to improve or expand this system, they are more than welcome. Collaboration and the exchange of ideas are essential for continuous development and improvement of our knowledge organization practices.

It is fundamental to highlight the importance of having a system that adapts to our way of thinking and working and, at the same time, requires the least possible friction for its long-term maintenance.

The key to this system lies in its simplicity and flexibility. By using tags, icons, and Dataview queries, I can organize my knowledge intuitively and efficiently. The structure of my notes facilitates the association and retrieval of relevant information. For example, if I ever need to remember how to create mutable/immutable objects dynamically in C#, I know that information will be linked to my note about C#.

In summary, sharing my organization system is not only a way to document my own process but also to highlight the importance of maintaining knowledge management systems that are accessible and practical in everyday life. Simplicity and ease of use are fundamental pillars to ensure the reliability and effectiveness of any knowledge organization system in the long term.
