---
title: "🍽️ Obsidian: Restaurant's rating" 
date: 2025-02-24
draft: false 
author: 'Oscar López'
image: /images/articles/obsidian-restaurants-rating/cover-en.png
tags: 
  - obsidian 
  - productivity
  - tooling
  - tools
---

I have a very *bad memory*, which is why I am so obsessed with having *systems* that make it easier for me to *search* for information. Many times, if I don't structure it very well, I won't *remember* how I saved it and will end up *losing* it anyway. This is a big part of why I like **Obsidian** so much as a tool; it allows me to *structure* things in a way very *similar* to how I do it mentally, meaning in *relationships*.

Due to this same lack of memory, I have encountered situations where, for example, I am someone who does not tolerate *spicy food* very well. So, when I go to a *restaurant* and want to order *chilaquiles*, I don't remember if last time I ordered the *green* ones and they were too spicy, or if they were fine, or if the *red* ones were better, etc. To *solve* this, as in many other *areas* of my life, I have a system that helps me *organize* this information so that I can *revisit* it easily the next time I go to the restaurant. This way, I can see if I liked something, what *details* it had, how much I liked it, etc.

## 🧩 Parts

My system consists of 3 parts:
1. **Restaurant**: The establishment or *chain*.
2. **Dish**: The specific dish I am going to *rate*.
3. **Journal**: This is usually *linked* thanks to the fact that in my [Journal](https://oscarlp6.dev/en/blogs/nutrition-system-obsidian/) I log my *meals*.

### 🍽 The Restaurant

I create a *note* for the *restaurant* because this will be the note I *visit* when I return to that place. Additionally, I use this note so that, when creating a new *dish*, it can be *linked* to the **restaurant** it *belongs to*.

The structure is very *simple*. For this example, I will use my *note* about *McDonald's*.

#### 🏗 General Structure

````md
---
tags: 
	- place 
	- restaurant
---

# 📌 McDonald's
## ⭐ Recommendations 

```dataview 
TABLE 
calificacion as "Rating" 
FROM [[]] 
WHERE calificacion 
```

## 🎫 Last Visit 
```dataview
LIST WITHOUT ID link(dateformat(file.cday, "dd-MM-yyyy")) 
FROM [[]] 
SORT file.cday DESC 
LIMIT 1
```
````

#### 👀 Example Note

<img src="/images/articles/obsidian-restaurants-rating/note-view.png" alt="Renderizado de mi resumen de ejercicios" style="max-width: 100%; margin-bottom: 1em">

Now let's *break down* each part of the note.

#### 🏷 Tags
The *restaurant* notes have the following *tags*: 
- Place
- Restaurant

Because my system includes various types of places, such as *companies*, it is necessary to make the *distinction* that it is a *restaurant*.

#### ⭐ Recommendations
The recommendations are nothing more than a [Dataview](https://oscarlp6.dev/blogs/obsidian-introduction/#-community) view that *compiles* all **Dish** notes, which we will see later, and displays them along with the *rating* I assigned. As shown in the image, I am a big *fan* of **McDonald's**.

#### 🎫 Last Visit
Finally, this section simply *searches* for the most *recent* entry that *references* the *establishment* and shows me the *corresponding* note for that date.
This is one of the parts I like the least because it *requires* me to *explicitly* mention the *establishment* in my [Journal](https://oscarlp6.dev/blogs/obsidian-journaling/) note. I want to improve the *query* so that it *detects* when I reference a dish linked to the establishment, but I haven't had time to do so.

### 🍕 The Dish

This note refers to the *dish* itself. I use this note from the *restaurant*, *linking* the note to the *restaurant* in the title to later retrieve the *rating*, but also to store nutritional information about the dish. This is more related to the *nutrition* aspect, so I won’t cover it here.

#### 🏗 General Structure

````md
---
calificacion: 5
tags:
  - dish
---

# 🥘 McMuffin Regular from [[McDonald's]]

My opinion on the food. Any *detail* I should remember.

## 📊 Nutritional Information 
[Calories:: 310 kcal] 
[Proteins:: 12 g] 
[Fats:: 13 g] 
[Carbohydrates:: 20 g] 
[Fiber:: 2 g] 
[Sugars:: 2 g]
````

The dish has the *tag* `dish` to make it easier to *filter* in *queries*. Additionally, I include the *rating* in the *metadata* on a *scale* from *1 to 5*.

In the body of the note, I can *include* any *relevant information*, such as whether the food was too *spicy*, if I should order it without *tomato*, or anything I want to remember for my next visit.

### ✍ Journal

I won’t show my *journal* because it contains private information, and besides, there isn’t much *complexity* to it. It simply involves mentioning the *restaurant* note in my *journal* entry.
Once again, this is the part of the *system* that I like the least because it only works if it’s my first time at the place and I create dish notes, or if I make an *explicit mention*.
If you have a better idea on how to ensure that each time I mention a *dish* note in my *meals* section, it gets *"logged"* as a visit, I would be very *grateful* if you left me a comment.

## 🏁 Conclusion

This system in **Obsidian** has allowed me to improve my organization and memory regarding restaurants and dishes I have tried. Although it has some areas for improvement, such as automating the last visit, its modular structure has been quite useful. In the end, the important thing is to have a system that adapts to my needs and can evolve over time. If you have suggestions on how to improve this methodology, I would love to hear them. Thanks for your time! 😊

