---
title: "📊 Obsidian: Nutrición"
date: 2024-03-28
draft: false
author: "Oscar López" 
image: /images/articles/Obsidian-nutrition/cover-es.png
tags: 
  - obsidian 
  - productividad
  - herramientas
  - sistemas 
  - nutrición
---

A pesar de que no soy una persona fit, este año me he propuesto mejorar mi salud. Esto me ha llevado a prestar mucha más atención a la información nutricional de mis comidas y tener un mayor control sobre mi ingesta diaria. Sin embargo, como todo desarrollador, no quiero pasar demasiado tiempo realizando estas tareas de forma constante. Por ello, he desarrollado un sistema que me permite registrar las comidas a lo largo del día en combinación con mi journal.

## 📓 Journal
En posts anteriores he mencionado que mantengo un journal donde registro mucha información acerca de mi día, incluyendo datos que me ayudan a realizar un seguimiento de ciertos aspectos de mi vida, como mis [**proyectos**](https://oscarlp6.dev/blogs/projects-obsidian/) o [**conocimientos adquiridos**](https://oscarlp6.dev/blogs/obsidian-knowledge-organization/). Además de estos datos, también registro las comidas que consumo a lo largo del día. Al principio, lo hacía para diversificar mi alimentación al vivir solo y prepararme siempre lo mismo, pero ahora lo hago con el objetivo de tener un mayor control sobre mis hábitos alimenticios.

Para comprender mejor lo que he logrado, voy a mostrar el resultado final de mi sistema. Mi journal está en [**Obsidian**](https://oscarlp6.dev/blogs/obsidian-introduction/), y esta sería la parte donde visualizo la información sobre mis comidas:

<img src="/images/articles/Obsidian-nutrition/image1.png" alt="Renderizado mi lista de comidas" style="max-width: 100%; margin-bottom: 1em">

Como se puede observar, he dividido mi día en 4 secciones, correspondientes a mis 3 comidas principales y los snacks o comidas intermedias. Dentro de cada sección, enlazo a la nota de la comida correspondiente.

## 🍽 Estructura de la comida
La estructura de las notas de comida sigue una plantilla definida, utilizando el motor de plantillas nativo de [**Obsidian**](https://oscarlp6.dev/blogs/obsidian-introduction/). La sección de información nutricional es de especial interés, además de los `tags` que utilizo para identificar las notas de tipo *receta*:

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
## 📊 Información nutrimental 
[Calorias:: 0 kcal] 
[Proteinas:: 0 g] 
[Grasas:: 0 g] 
[Carbohidratos:: 0 g] 
[Fibra:: 0 g] 
[Azucares:: 0 g]
## 📋 Ingredientes 
- 

## 🧑‍🍳 Receta 
1. 

```

Cabe destacar que para mi caso de uso, no requiero muchísima presición, entonces los valores los obtengo con *IA*, le describo la receta y porciones a [ChatGPT](https://chat.openai.com/) y me da una muy buena *estimación* de la información nutrimental de la comida.  

## 🍽 Comidas de restaurantes
En ocasiones, consumo comidas de restaurantes. Estas notas se diferencian de las recetas caseras, pero también incluyen una tabla de información nutricional.

```md
---
calificacion: 5
tags:
  - platillo
---

# 🐥 Nugget de [[McDonalds]]

## 📊 Información nutrimental 
[Calorias:: 50 kcal] 
[Proteinas:: 2 g] 
[Grasas:: 2 g] 
[Carbohidratos:: 3 g] 
[Fibra:: 0 g] 
[Azucares:: 1 g]
```

De nuevo, el `tag` me permite diferenciar que la nota es de una comida, aunque en esta ocasión una comida de *restaurante*, aunque para el sistema para calcular la información nutrimental no importa mucho, también tiene una propiedad de *calificación*, esa propiedad la utilizo para registrar las comidas que pedí un restaurantes, al volver a ir al restaurante puedo ver qué me pareció la vez pasada esa comida, para saber si debería volver a pedirla o no, eso no viene al tema de hoy, pero comentenme si les gustaría que comentara la forma en la que recopilo mis *recomendaciones* de las comidas de cada *restaurante*.  

## 📊 Reporte de calorías 
Al final del día, utilizo [Dataview](https://blacksmithgu.github.io/obsidian-dataview/), un plugin de Obsidian, que me permite realizar consultas a mis notas de forma similar a [SQL](https://aws.amazon.com/es/what-is/sql/#:~:text=El%20lenguaje%20de%20consulta%20estructurada,una%20base%20de%20datos%20relacional.) para visualizar la información recopilada: 


<img src="/images/articles/Obsidian-nutrition/image2.png" alt="Renderizado del reporte de calorías y otras macros" style="max-width: 100%; margin-bottom: 1em">


La tabla muestra cada comida del día y su información nutricional, así como una tabla de totales. Es importante destacar que la información en la tabla refleja la cantidad de comida consumida, es decir, la cantidad de cada unidad multiplicada por el número de unidades.  

Para mi, fue un poco complejo lograr la lógica que quería utilizando [DQL](https://blacksmithgu.github.io/obsidian-dataview/queries/dql-js-inline/) (el lenguaje de consulta de **Dataview**)  entonces aproveché que el plugin nos permite hacer consultas y tableros utilizando `Javascript`.  

```js
const todayMeals = dv.pages('outgoing([[#]]) and (#receta or #platillo)');
const exercises = dv.pages('outgoing([[#]]) and #tipo_ejercicio');

const numExercises = dv.current().file.lists.text.array().findLastIndex(text => text.includes('Serie_'))

// Si la nota contiene links de ejercicios, entonces comenzamos desde donde terminen los ejercicios, que se registran antes de la comida
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

  // El 2 que se suma en el segundo indice es porque en el arreglo original viene el nombre de la comida
  // y las cantidades por día, entonces hay que adelantar 2 posiciones para acceder al valor que nos interesa
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

}, [0, 0, 0, 0, 0, 0] /*Los totales inician en 0 */);

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

Lo primero es obtener las comidas del día en `todayMeals`, entonces utilizamos la *"selección"*: `outgoing[[#]] and (#receta o #platillo)` . Esto significa que queremos obtener todos los *links (las notas a las que enlaza la nota, en este caso mi journal del día)*, el `and` actuaría como un `join`, con las notas que tengan el `tag` *receta* o el `tag` *platillo*, de esa forma obtendríamos las comidas del día. 

Para obtener las cantidades de la comida, por ejemplo, el número de panes tostados, tengo que obtener la lista de *journal*, ya que esa información no puede estar en la nota, porque es distinto cada vez, el problema es que en mi journal también tengo una lista de mis *ejercicios*, así que para evitar que esa lista *confunda* las cantidades que quiero obtener, tomo todos los *bullets* de lista del *journal* y como los ejercicios están antes que la comida, quito esa cantidad de elementos, de forma que donde comience, será en la lista de comidas y no en la lista de ejercicios, esto lo hago con el `slice` que le digo que comience donde terminan los *ejercicios* y solo tome la cantidad de *comidas* que haya. 

De esta forma obtengo los textos que hay en la lista de comidas, esto para poder obtener la cantidad comida, el resto es que a través de un `map` a las comidas del día obtengo cada fila de la primera tabla, haciendo los calculos de la información nutrimental por la cantidad. 

Y utilizando un `reduce`, obtengo los totales.  

## 🐛 Problemas y mejoras
Este sistema tiene sus fallos, como los mostrados a continuación. Estoy abierto a sugerencias y mejoras para seguir desarrollando este sistema.

### Cuando se come los mismo en 2 comidas 
Tiene problemas cuando se registra una misma *receta* en 2 comidas diferentes, es decir, si yo desayuno y ceno lo mismo, tengo que registrar la cantidad en un solo punto, porque al hacer el `join` no me toma las 2 apariciones. 

### Los puntos decimales  
Este no es un problema como tal, pero tengo que limitar los decimales a 2. 

## 🤔 Conclusión 
En conclusión, este sistema me ha permitido tener un mayor control sobre mi ingesta diaria, ayudándome a mejorar mis hábitos alimenticios y mi salud en general. Estoy emocionado por seguir desarrollando y mejorando esta herramienta en el futuro.


