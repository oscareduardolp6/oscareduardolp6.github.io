---
title: "🍽️ Obsidian: Restaurantes" 
date: 2025-02-24
draft: false
author: 'Oscar López'
image: /images/articles/obsidian-restaurants-rating/cover.png
tags:
  - obsidian 
  - productividad 
  - herramientas
---

Yo soy una persona con muy *mala memoria*, es por eso que estoy tan obsesionado con tener *sistemas* que me faciliten el *buscar* información, porque muchas veces, si no estructuro muy bien esta, no *recuerdo* cómo la guardé y de igual forma la termino *perdiendo*. Esto mismo es gran parte del porqué me gusta tanto **Obsidian** como herramienta, me permite *estructurar* las cosas de forma muy *similar* a cómo lo hago mentalmente, es decir, en *relaciones*.

Por esta misma falta de memoria, he tenido situaciones en las que, por ejemplo, yo soy una persona que no tolera mucho el *picante*, entonces me ha tocado que voy a un *restaurante*, quiero pedir *chilaquiles*, pero no recuerdo si la vez pasada pedí los *verdes* y estos eran muy picantes, o si estaban bien, o si estaban mejor los *rojos*, etc. Para *solucionar* esto, como en muchas de las otras *áreas* de mi vida, tengo un sistema que me ayuda a *organizar* esta información de forma que pueda *visitarla* con facilidad la siguiente vez que vaya al restaurante, ver si algo me gustó, los *detalles* que tenía, cuánto me gustó, etc.

## 🧩 Partes

Mi sistema consta de 3 partes:
1. **Restaurante**: Como establecimiento o *cadena*.
2. **Platillo**: El platillo como tal que voy a *calificar*.
3. **Journal**: Normalmente esto se *enlaza* gracias a que en mi [Journal](https://oscarlp6.dev/en/blogs/nutrition-system-obsidian/) escribo mis *comidas*.

### 🍽 El Restaurante

Creo una *nota* del *restaurante*, porque esta va a ser la nota que voy a *visitar* cuando vuelva a ir al lugar. Además, voy a utilizar esa nota para que, al crear un nuevo *platillo*, este se pueda *enlazar* con el **restaurante** al que *pertenece*.

La estructura es muy *simple*. Para el ejemplo, voy a utilizar mi *nota* sobre *McDonald's*.

#### 🏗 Estructura general

````md
---
tags:
	- lugar
	- restaurante
---

# 📌 McDonald's
## ⭐ Recomendaciones

```dataview
TABLE
calificacion as "Calificación"
FROM [[]]
WHERE calificacion
```

## 🎫 Última visita
```dataview
LIST WITHOUT ID link(dateformat(file.cday, "dd-MM-yyyy"))
FROM [[]]
SORT file.cday DESC
LIMIT 1
```
````

#### 👀 Nota resultado

![[Pasted image 20250224011858.png]]

Ahora vamos a *desglosar* cada una de las partes de la nota.

#### 🏷 Tags
Las notas de *restaurante* tienen los *tags:*
- Lugar
- Restaurante

Porque en mi sistema existen varios tipos de lugar, por ejemplo, *empresas*, por eso es necesario hacer la *distinción* de que es un *restaurante*.

#### ⭐ Recomendaciones
Las recomendaciones no son nada más que una vista de [Dataview](https://oscarlp6.dev/blogs/obsidian-introduction/#-comunidad) que *recopila* todas las notas de **Platillos** que vamos a ver más adelante y me las muestra junto con la *calificación* que les puse. Como se puede apreciar en la imagen, yo soy muy *fan* de **McDonald's**.

#### 🎫 Última visita
Por último, esta sección solo *busca* cuándo fue la entrada más *reciente* en la que se hizo *referencia* al *establecimiento* y me muestra la nota *correspondiente* a esa fecha.
Esta es una de las partes que menos me gusta, porque *requiere* que yo llame *explícitamente* al *establecimiento* en mi nota de [Journal](https://oscarlp6.dev/blogs/obsidian-journaling/). Quiero mejorar la *query* de forma que se *detecte* cuando yo hago una referencia a un platillo que esté enlazado al establecimiento, pero no he tenido el tiempo para hacerlo.

### 🍕 El Platillo

Esta nota hace referencia al *platillo* en sí. Esta nota la utilizo desde el *restaurante*, *enlazando* la nota al *restaurante* en el título para después obtener la *calificación*, pero también para la información nutricional del platillo. Esto es más relacionado con la parte de *nutrición*, entonces no lo voy a abordar.

#### 🏗 Estructura general

````md
---
calificacion: 5
tags:
  - platillo
---

# 🥘 McMuffin normal de [[McDonald's]]

Mi opinión con respecto a la comida. Algún *detalle* que deba recordar.

## 📊 Información nutrimental
[Calorías:: 310 kcal]
[Proteínas:: 12 g]
[Grasas:: 13 g]
[Carbohidratos:: 20 g]
[Fibra:: 2 g]
[Azúcares:: 2 g]
````

El platillo tiene el *tag* `platillo` para poder *filtrarlo* rápidamente en las *queries*, pero además incluyo en la *metadata* la *calificación* que le doy en una *escala* del *1 al 5*.

Y en el cuerpo de la nota puedo *incluir* cualquier *información* relevante, si la comida estuvo muy *picante*, si debía pedirlo sin *jitomate*, cualquier cosa que quiera recordar la siguiente vez que vaya al lugar.

### ✍ Journal

El *journal* no lo voy a enseñar, porque sería mostrar información privada, además de que no tiene mucha *ciencia*, simplemente es incluir en mi nota *journal* alguna mención que *enlace* a la nota del *restaurante*.
De nuevo, esta es la parte que menos me gusta del *sistema*, porque eso lo hago para tener la referencia de cuándo fue la última vez que fui, pero eso solo funciona si es la primera vez que voy y creo las notas de los platillos o si hago la *mención explícita*.
Si tú tienes una mejor idea de cómo hacer que cada vez que mencione la nota de *platillos* en mi *sección* de comidas, eso se *"registre"* como una visita, te estaría muy *agradecido* de que me lo dejaras en un comentario.

## 🏁 Conclusión

Este sistema en **Obsidian** me ha permitido mejorar mi organización y memoria con respecto a los restaurantes y platillos que he probado. Aunque tiene algunos puntos de mejora, como la automatización de la última visita, su estructura modular me ha sido bastante útil. Al final, lo importante es tener un sistema que se adapte a mis necesidades y que pueda evolucionar con el tiempo. Si tienes sugerencias sobre cómo mejorar esta metodología, me encantaría leerlas. ¡Gracias por tu tiempo! 😊

