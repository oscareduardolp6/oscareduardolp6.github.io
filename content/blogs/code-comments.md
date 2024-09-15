---
title: "✍️ Comentarios"
date: 2024-09-13
draft: false
author: "Oscar López" 
image: /images/articles/Code-Comments/cover.png
tags: 
  - Buenas prácticas
  - Clean Code
---

Recientemente me topé con este [otro artículo](https://dev.to/grantdotdev/code-comments-are-not-evil-20o9?utm_source=pocket_shared) en el que habla acerca de cuándo es adecuado y cuándo no utilizar *comentarios* en el *código*, es un gran artículo y recomiendo que vayan a echarle un vistazo, a pesar de eso, aunque no coincido con algunos de los puntos que describe. 
En este artículo intentaré dar mi versión de los hechos acerca de utilizar comentarios, cuándo sí, cuándo no, alternativas y el porqué de cada de una de estas decisiones. 

## 🗣 Código más explícito

En mi caso, yo pienso en los comentarios como una forma de dar *contexto* a la gente que lee tu código, más no debe de ser una forma de *explicar* la forma en la que *implementaste* la lógica, si la *implementacion* de la lógica requiere agregar comentarios, lo más probable es que no estás siendo lo *suficientemente* expresivo en tu código, ya que creo que parte de nuestra *responsabilidad* es que el *código* se **"explique"** a sí mismo, incluso si esto *implica* ser excesivamente *explícito* en algunos aspectos. 

Es decir, si tengo este codigo: 

```ts
const calculateTaxes = (income: number, personType: number): number => {
	const taxRate = personType === 1 // Is Moral Person 
		? 0.3 // Tax rate for moral person 
		: 0.2; // Tax rate for natural person 
	return income * taxRate; 
}
```

Tiene varios comentarios que *fácilmente* podrían ser *reemplazados* por un mejor nombramiento de variables y tipado, dejando *inútiles* a esos comentarios. 

Un mejor enfoque sería algo como esto: 

```ts
const calculateTaxes = (income: number, personType: PersonTypeEnum): number => {
	const taxRate = personType === PersonTypeEnum.MoralPerson 
		? TAX_RATE_MORAL_PERSON 
		: TAX_RATE_NATURAL_PERSON; 
	return income * taxRate; 
}
```

Viéndolo así, es posible que nuestra función ahora tenga más código pero ahora se *explica* a sí mismo. 

## 🧰 Mantenimiento 
Otra ventaja de hacer que el código se explique a sí mismo, es que es más seguro y fácil de mantener, ya que es muy *sencillo* y de hecho ocurre mucho, que los comentarios queden *desactualizados* con respecto al código de forma que lo que explique el comentario no tenga mucho sentido con respecto a la función o clase. 

## 🌍 Contexto 
Una buena manera de usar los comentarios es no explicar el *qué* hace cierta parte del código sino el *porqué* lo hace, por ejemplo. 

```ts
const calculateDiscount = (product: Product): number => {
	if(product.category === 'smartphone') return 0; // Smartphones has 0 discount
	product.price * 0.2;
}
```

### ❎ Bien
En este ejemplo, aunque el comentario podría parecer que está *"bien"*, la realidad es que no nos aporta nada, simplemente leyendo el *código* nosotros ya podemos saber que los *smartphones* tienen cero descuento, pero la pregunta que tenemos es el porque, para también respetar esa regla de negocios, pero el comentario no nos ayuda con eso, se limita a darnos la información que obtendríamos leyendo el código. 

### ✔ Mejor
Una mejor forma de utilizar los comentarios, sería para explicar el *porqué* los *smartphones* no tienen descuento, por ejemplo: 

```ts
const calculateDiscount = (product: Product): number => {
	if(product.category === 'smartphones') return 0; // Since smartphones are now made to order, they cannot have any discounts 
	return product.price * 0.2; 
}
```

Este comentario nos da mucha más información y nos da mucho más idea de el porqué esa regla de negocio. 
Esto es parte del ejemplo, sé que este código podría mejorar en semántica y claridad , pero eso se queda como ejercicio para el lector XD.  

## ⚰ Código muerto  
Una *muy mala* práctica que me he encontrado en mi trabajo es el *comentar* el código para *eliminar* código, por mi parte, esto no es nada considerable, a la larga hace mucho más complicado de leer el código, sin el adecuado *resaltado* de *sintaxis* es muy sencillo de perder la concepción de dónde estar trabajando y puede que estés editando código comentado, y solo agrega *ruido* pudiendo ver viejas implementaciones de algo y dejando que estas se cuelen a las nuevas ideas. 
Hoy en día ya no es necesario hacer ese tipo de cosas, si necesitamos recuperar una pieza de código podemos *recurrir* a *git* o algún sistema de control de versiones, así que por favor dejen de hacer eso. 

## ✅ Comentario `TODO` 
El tipo de comentario que dejas cuándo te falta implementar una funcionalidad, no es un comentario malo *per se*, pero sí que puede desencadenar cosas muy malas si se olvida que se puso y llega a *producción*, en lo personal yo recomendaría tener un sistema de *CI/CD* que se encargue de revisar todos esos `TODO` y crear los *issues* especificos, para que nada se quede en el *olvido*. 

## 👀 Consideraciones importantes 

- Cuándo hablo de comentarios, me refiero a los comentarios que utilizamos para explicar o incluso para evitar que cierta parte del código sea ejecutado, pero no incluye los comentarios que forman parte de la documentación del código.

## 📖 Conclusión

En general, no existe una *regla de oro* acerca de los comentarios, todo a va a depender mucho de lo que estés haciendo, pero creo que estas recomendaciones te pueden servir si quieres irte quitando malas prácticas de las que tal vez no eres consciente y de forma *transversal*, mejorar la forma en la que escribes tu código. 

Si tienes alguna consideración, duda o reclamos, dejala en los comentarios y con gusto podremos hablar de ello. 
