---
title: "📊 Obsidian: Nutrition"
date: 2024-03-28
draft: false 
author: "Oscar López" 
image: /images/articles/Obsidian-nutrition/cover-en.png
tags: 
  - obsidian
  - productivity
  - tooling
  - systems
  - nutrition
---

Although I am not a fitness enthusiast, this year I have committed to improving my health. This has led me to pay much more attention to the nutritional information of my meals and to have greater control over my daily intake. However, like any developer, I don't want to spend too much time consistently doing these tasks. Therefore, I have developed a system that allows me to track my meals throughout the day in conjunction with my journal.

## 📓 Journal
In previous posts, I have mentioned that I maintain a journal where I record a lot of information about my day, including data that helps me track certain aspects of my life, such as my [**projects**](https://oscarlp6.dev/blogs/projects-obsidian/) or [**acquired knowledge**](https://oscarlp6.dev/blogs/obsidian-knowledge-organization/). In addition to this data, I also record the meals I consume throughout the day. Initially, I did this to diversify my diet while living alone and always preparing the same thing, but now I do it with the aim of having greater control over my eating habits.

To better understand what I have achieved, I will show the final result of my system. My journal is in [**Obsidian**](https://oscarlp6.dev/blogs/obsidian-introduction/), and this is where I visualize the information about my meals:

<img src="/images/articles/Obsidian-nutrition/image1.png" alt="Rendering my list of meals" style="max-width: 100%; margin-bottom: 1em">

As you can see, I have divided my day into 4 sections, corresponding to my 3 main meals and snacks or intermediate meals. Within each section, I link to the note of the corresponding meal.

## 🍽 Meal Structure
The structure of meal notes follows a defined template, using the native template engine of [**Obsidian**](https://oscarlp6.dev/blogs/obsidian-introduction/). The nutritional information section is of particular interest, as well as the `tags` I use to identify recipe-type notes:

```md
---
tag: receta
vegetariana: true
pescado: true
tipo_comida: 
- desayuno
dificultad_elaboracion: 5
---

# 🥫 {{title}} 
## 📊 Nutritional Information 
[Calories:: 0 kcal] 
[Proteins:: 0 g] 
[Fats:: 0 g] 
[Carbohydrates:: 0 g] 
[Fiber:: 0 g] 
[Sugars:: 0 g]
## 📋 Ingredients 
- 

## 🧑‍🍳 Recipe 
1. 

```

It is worth mentioning that for my use case, I do not require a high level of precision, so I obtain the values with an AI. I describe the recipe and portions to [ChatGPT](https://chat.openai.com/), and it provides me with a very good estimate of the nutritional information of the meal.

## 🍽 Restaurant Meals
On occasion, I consume meals from restaurants. These notes differ from homemade recipes but also include a nutritional information table.

```md
---
calificacion: 5
tags:
  - platillo
---

# 🐥 McDonald's [[Nugget]]

## 📊 Nutritional Information 
[Calories:: 50 kcal] 
[Proteins:: 2 g] 
[Fats:: 2 g] 
[Carbohydrates:: 3 g] 
[Fiber:: 0 g] 
[Sugars:: 1 g]
```

Once again, the `tag` allows me to differentiate that the note is about a meal, although in this case, a restaurant meal. Although the nutritional information calculation system does not matter much, it also has a *rating* property, which I use to record meals ordered at restaurants. Upon returning to the restaurant, I can see how I liked that meal last time, to know if I should order it again or not. This is not the topic for today, but let me know if you would like me to discuss how I compile my recommendations for meals from each restaurant.

## 📊 Calorie Report
At the end of the day, I use [Dataview](https://blacksmithgu.github.io/obsidian-dataview/), a plugin for Obsidian, which allows me to make queries to my notes similar to [SQL](https://aws.amazon.com/es/what-is/sql/#:~:text=Structured%20Query%20Language%20(SQL)%20is,management%20systems%20(RDBMSs).) to visualize the collected information:

<img src="/images/articles/Obsidian-nutrition/image2.png" alt="Rendering of the calorie and other macros report" style="max-width: 100%; margin-bottom: 1em">

The table shows each meal of the day and its nutritional information, as well as a total table. It is important to note that the information in the table reflects the amount of food consumed, meaning the quantity of each unit multiplied by the number of units.

For me, it was a bit complex to achieve the logic I wanted using [DQL](https://blacksmithgu.github.io/obsidian-dataview/queries/dql-js-inline/) (the Dataview query language). So, I took advantage of the fact that the plugin allows us to make queries and boards using `Javascript`.

```js
const todayMeals = dv.pages('outgoing([[#]]) and (#receta or #platillo)');
const exercises = dv.pages('outgoing([[#]]) and #tipo_ejercicio');

const numExercises = dv.current().file.lists.text.array().findLastIndex(text => text.includes('Serie_'))

// If the note contains exercise links, then we start from where the exercises end, which are recorded before the meal.
const start = numExercises === -1 ? 0 : numExercises;

const listOfMeals = dv.current().file.lists.text.array().slice(start, numExercises + todayMeals.length + 1);

const macrosNames = [
  'Calorias',
  'Proteinas',
  'Grasas',
  'Carbohidratos',
  'Fibra',
  'Azucares'
];

const rows = todayMeals.map(page => {
  const mealName = page.file.name;
  const mealInList = listOfMeals
    .find(_mealName => _mealName.includes(mealName)) ?? 'No encontrado';
  const times = getTimes(mealInList);
  const values = macrosNames.map(macroName => removeUnit(page[macroName]) * times);
  return [mealName, times, ...values]
})

dv.table(
  [
    'Comida',
    'Cantidad en el día',
    'Calorias (Kcal)',
    'Proteinas(g)',
    'Grasas (g)',
    'Carbohidratos (g)',
    'Fibra (g)',
    'Azucares (g)'
  ],
  rows
)

dv.header(3, "🤭 Totales");

const totals = rows.array().reduce((acc, val) => {
  const CALORIES_INDEX = 0;
  const PROTEINS_INDEX = 1;
  const FATS_INDEX = 2;
  const CARBS_INDEX = 3;
  const FIBER_INDEX = 4;
  const SUGAR_INDEX = 5;

  // The 2 added to the second index is because in the original array, the name of the meal and the quantities per day come first. Therefore, we need to advance 2 positions to access the value we are interested in.
  const totalCalories = acc[CALORIES_INDEX] + val[CALORIES_INDEX + 2];
  const totalProteins = acc[PROTEINS_INDEX] + val[PROTEINS_INDEX + 2];
  const totalFats = acc[FATS_INDEX] + val[FATS_INDEX + 2];
  const totalCarbs = acc[CARBS_INDEX] + val[CARBS_INDEX + 2];
  const totalFiber = acc[FIBER_INDEX] + val[FIBER_INDEX + 2];
  const totalSugar = acc[SUGAR_INDEX] + val[SUGAR_INDEX + 2];

  return [
    totalCalories,
    totalProteins,
    totalFats,
    totalCarbs,
    totalFiber,
    totalSugar
  ];

}, [0, 0, 0, 0, 0, 0] /*Totals start in 0 */);

const totalsWithName = totals.map((value, index) => [
  macrosNames[index],
  `${value} ${index === 0 ? 'Kcal' : 'g'}`
]);

dv.table(
  ['Macro', 'Total'],
  totalsWithName
)

function removeUnit(text) {
  if(!text) return 0;
  const [quantity, unit] = text.split(' ');
  return Number(quantity);
}

function getTimes(text) {
  const [timesText] = text.split(' ');
  const times = Number(timesText);
  if(!times) return 1;
  return times;
}
```

The first step is to obtain the meals of the day in `todayMeals`, so we use the "selection": `outgoing[[#]] and (#receta or #platillo)`. This means that we want to obtain all the links (the notes to which the note links, in this case, my journal of the day), and the `and` acts as a `join`, with the notes that have the `tag` *receta* or the `tag` *platillo*, that way, we would obtain the meals of the day.

To get the quantities of the meal, for example, the number of toasted breads, I have to obtain the journal list, since that information cannot be in the note because it is different every time. The problem is that in my journal, I also have a list of my exercises, so to avoid that list confusing the quantities I want to obtain, I take all the list bullets from the journal, and since the exercises are before the meal, I remove that number of elements, so that where it starts will be in the list of meals and not in the list of exercises, I do this with the `slice`, telling it to start where the *exercises* end and only take the number of *meals* there are.

This way, I get the texts in the list of meals, this to be able to obtain the quantity of food, the rest is that through a `map` to the meals of the day, I get each row of the first table, doing the calculations of the nutritional information per quantity.

And using a `reduce`, I get the totals.

## 🐛 Issues and Improvements
This system has its flaws, as shown below. I am open to suggestions and improvements to continue developing this system. 

### Eating the Same in 2 Meals
It has issues when registering the same recipe in 2 different meals, meaning if I have the same thing for breakfast and dinner, I have to register the quantity in a single spot because when doing the `join`, it doesn't take the 2 occurrences.

### Decimal Points
This is not a problem per se, but I have to limit the decimals to 2.

## 🤔 Conclusion
In conclusion, this system has allowed me to have greater control over my daily intake, helping me improve my eating habits and my overall health. I am excited to continue developing and improving this tool in the future.