---
title: '✍️ Obsidian: Journaling'
date: 2024-12-11
draft: false
author: 'Oscar López'
image: /images/articles/obsidian-journaling/cover-en.png
tags:
  - obsidian 
  - productivity
  - tools
---

Since I was around 14 years old, I have found it very *satisfying*, *relaxing*, and *therapeutic* to keep a **journal** where I write down all sorts of things that happen to me throughout the day. At first, it was just about making a *summary* of what had happened during the day: important events, feelings, etc.

Over time, I’ve changed the way and the tools I use for it. At first, I did it in *OneNote* on a tablet I had when I was *14 years old*. Then I switched to *Journey*, an app specialized in this that allowed you to add feelings and that kind of thing. Seeing that I was a bit *tied* to the platform and, at at the time, to the device (since it didn’t have a desktop version), I moved to *Evernote*. It was simpler there, but it gave me the advantage of being cross-platform. However, I felt that something was missing.

One day, while watching a video on *YouTube*, I came across *Roam Research*, an app that allowed you to organize your notes with links. I loved this idea, but at that time it was in *beta*, and I couldn’t get *access*. This left me feeling *disappointed*. I researched and looked for alternatives that offered the same capability: being able to *link* things in a *graph-like* manner. I struggled a lot to find a similar option; I even *considered* *developing it* myself (very enthusiastic thinking, XD). Finally, I found a solution that met all my needs: **Obsidian**.

What I’m going to show here is how, by leveraging all the capabilities of **Obsidian**, I’ve built a *journaling* system that works for me and allows me to keep control of many *aspects* of my life.

## 🧩 Parts

My *journal* consists of many parts, each dedicated to an important aspect of my life. In this article, I’ll touch on them briefly, but if there’s *interest* in any particular one, feel free to mention it, and I can go into more detail on that topic.

### 🟦 Meta Info

Since it’s written in *Obsidian*, and therefore in *Markdown*, my notes have a *meta information* section where I record relevant things about the day that would otherwise be more complicated to log naturally.

#### 💙 Feelings

I think it’s good to be aware of how we feel throughout the day, beyond just *good or bad*. I like having this section to express with *more precise words* how I felt during the day: whether the day was *stressful*, if I felt *overwhelmed*, *worried*, *excited*, *tired*, etc.  
This also allows me to notice *patterns* in my behavior, see what usually makes me feel overwhelmed, or how I feel in certain situations. Knowing this, I can better manage those situations. Moreover, it *promotes* being more *specific* in expressing our feelings.

```md
---
feeling:
  - happy
  - proud
```

Having it in the note metadata, I can query which days I felt angry, happy, proud, etc.

#### 😴 Sleep

A fundamental part of my life is sleeping. I enjoy it a lot. For a long time, I struggled to know how much time I needed to sleep since sometimes 8 hours would leave me tired, and with fewer hours, I’d feel refreshed. This section helps me track times and actions on the occasions when I sleep best. I log bedtime, wake-up time, and quality.

```md
sleep:
  bedtime:
    hour: 23
    minute: 30
  wakeup:
    hour: 7
    minute: 30
  rating: 5
```

As with feelings, having this in metadata allows me to have a dashboard to average the sleep time during which I rest better.

#### 🎆 Important Events

It’s happened to all of us: you’re chatting with a friend who asks what you’ve been up to, and you go blank. You’ve done a lot since you last saw each other, but right now, you’re not aware of it. For me, in this section, I log everything I think is worth mentioning in such situations: a small work achievement, progress toward an exercise goal, a new dish I cooked, etc.

With this, I can later have a dashboard to select a date range and see the type of things that happened in that range.

````md
# Achievements/Events Dashboard
  ## 📆🏆 Month
  ```dataview
  TABLE event
  FROM #journal
  AND !"Templates"
  WHERE length(event) > 0
  AND date(file.name, "dd-MM-yyyy").month >= 12
  AND date(file.name, "dd-MM-yyyy").year = 2024
  SORT date(file.name, "dd-MM-yyyy") DESC
  ```
````

#### 🏷 Tags

Lastly, the most important part: *tags*. These allow me, firstly, to know that the note I’m writing is part of my *journal*, thanks to the `#journal` *tag*. This way, no matter where I write the note, I know it will be considered part of the *journal*. Beyond that, there are many more tags, and you’re only limited by your needs, but for me, there are *two main ones*:
1. `#nap`: As part of my *sleep tracking*, it’s also important to note which days I needed a nap because the exhaustion was too much.
2. `#pain_of_x`: I tag whenever I feel unwell. It might be a headache, stomachache, backache. I like having this information in case an *illness* or *discomfort* evolves into something more *serious*. Additionally, it helps me find patterns regarding what I ate or what happened on the days I felt unwell that could have influenced the *discomfort*.

### 🟧 Main Information

This section is more like a standard *journal*, except for a few parts, but it’s mostly what I see when reviewing notes. It’s more like the *content* of the note and is written in a more *natural* style.

#### 💪 Exercise

This section is not *written naturally*, especially because it’s not something I log in the *journal* note. All exercise-related information is a separate *methodology/system* that I plan to review in another article.  
For now, what I see in the note is a summary of the exercises *performed*.  
<img src="/images/articles/obsidian-journaling/image-exercise.png" alt="Rendered view of the summary of my daily exercise" style="max-width: 100%; margin-bottom: 1em">

And in each *individual* note, I can find full information on *repetitions*, variations, etc.

#### 🥪 Meals

In this section, I log my meals throughout the day to track the nutritional values of what I’ve eaten. Similarly, this system was reviewed in the [Obsidian: Nutrition 🔗](https://oscarlp6.dev/en/blogs/nutrition-system-obsidian/) article. There, you can see the full system.

In general, I log what I ate, and a table is *displayed* showing the total values of my *macronutrients* consumed.

#### 🚀 Projects

How I *manage* my projects and *document* my progress was already reviewed in the [Obsidian: Projects 🔗](https://oscarlp6.dev/en/blogs/projects-obsidian/) article.

In *summary*, just like with *exercise*, here I only have a *query* showing the *completed tasks* during the day related to any of the projects I work on. It gives me greater *visibility* into how I’m progressing and how, bit by bit, I’m making substantial progress.

#### 🙌 Gratitudes

I like to keep in mind the things I’m *grateful* for, not in a *"magical"* way, but in a way that allows me to appreciate things we sometimes take for granted or that once thrilled us and later forgot how *lucky* we are to have achieved them.  
I make a big effort to fill this section as thoroughly as possible each day. Later, I can *gather* all the entries in a *Gratitude Dashboard* that reminds me, *as a whole*, of all the things I’m grateful for.  
It’s very useful on *hard days*.

<img src="/images/articles/obsidian-journaling/image-recognitions.png" alt="Rendered view of my gratitudes lists" style="max-width: 100%; margin-bottom: 1em">


#### ✅ Anti To-Do List

We’re used to having a to-do list to see what we need to accomplish during the day. I have mine. But also, at the end of the day, I like to review all the tasks I completed. It gives me a dose of satisfaction to see everything I advanced, even if it’s unrelated to projects, but still very valuable and important, like cleaning the house or doing the dishes.

Additionally (and this is just an idea), you can track something similar for the people you live with, not with the *intent* of counting who does more, but with the *intent* of being *aware* of everything others do, which we might not always appreciate enough.

#### 🏆 Recognitions

I’m a big fan of the *culture* of recognizing others. I think we often wait for the *right moment* or the *right instance* to *acknowledge* people. Personally, I try to *recognize* as soon as possible and as *specifically* as possible to truly give value to the recognition. I really dislike dynamics where people are invited to give *recognitions*, and they *"acknowledge"* everyone because, at least in my *

conception*, vaguely and generally recognizing everyone is equivalent to recognizing *no one*.

So, if I can, I like to *recognize* the person as soon as possible. But in case I can’t, and also to have a *record* of valuable things about that person, I keep track of *recognitions* for people throughout the day.

Again, leveraging the power of *dataview*, I use these listings so that each recognition appears in the note for each person.

#### ❤‍🔥 Entries

Here, I write about events of the day, but with much more detail: things I liked, how they made me feel, things that upset me, why they upset me, things that intrigue me. This is the most *personal* part, as the main purpose is to *vent* and clarify my thoughts.

Still, through **Obsidian**’s *links* and metadata annotations, I can add more data to the note. For example, I can write `(feeling:: excited)`, and that will automatically add it to the *feelings* list I mentioned earlier.

Beyond that, it’s the part with the least *technical* purpose, but it holds the most emotional importance.

#### 🧠 Thoughts and Things Learned

Every day, we learn something. This section shows me a *summary* of all the notes that are *reflections* or *knowledge* I wrote down during the day, giving me greater visibility into everything I learned that day and might not be as *aware* of.

### 📖 Conclusion

Keeping a *journal* in **Obsidian** has not only helped me better organize my daily life but also reflect on my experiences, learn from my patterns, and appreciate the small things that sometimes go unnoticed. The interesting thing about this system is that it’s not static; I can adapt it to my needs, add new sections, or even simplify it if necessary.

I’d love to know if you also keep some kind of *journaling* or if you have any tips or ideas that could complement this approach. Is there anything you would add or change in a system like this? I’d love to hear about it! 😊