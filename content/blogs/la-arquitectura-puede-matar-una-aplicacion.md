---
title: "La Arquitectura Puede Matar Una Aplicacion"
date: 2022-08-15T20:21:02-05:00
author: "Oscar López"
draft: false
tags: 
  - Arquitectura
  - Deuda Técnica
  # - Deuda Tecnica 
  - Rotación de personal
---

Quiero hablar de la importancia de una buena arquitectura a la hora de construir una aplicación, ya que puede que 
de esto dependa no solo la fácilidad para agregar o mantener características, sino que también de eso puede depender 
qué tanta *rotación de personal* tienes, ya que a nadie le gusta trabaja en una base de código dónde agrega una característica 
sencilla puede derivar en comportamientos inesperados por la forma en la que está acoplado todo en el proyecto. 

## El problema

En muchas grandes empresas, sobretodo en latinoamerica, especificamente en México, es relativamente común encontrar que las grandes 
bases de código están construidas con una arquitectura que puede que haya sido poco adecuada para el tipo de proyecto, algo entendible completamente, uno no sabe cómo van a crecer las aplicaciones hasta que ya se le están saliendo de las manos. 

El problema rádica en cómo se enfrentan las empresas a este creciemiento del proyecto, algunas adoptando un nuevo enfoque en la construcción de aplicación, detectando patrones en el crecimiento e identificando posibles deudas técnicas, esto puede que minimice los problemas de rendimiento y escalabilidad de forma considerable en el futuro. 

Pero, por otra parte, hay empresas que debido a que la parte "*fuerte*" del negocio no está relacionada con el software siguen creciendo 
sin aprender de los patrones en el crecimiento, sin actualizar la infrastructura (ya sea el servidor, en aquellas empresas que aún 
cuentan con servidor propio, el *framework* con el que trabajan, etc.), esto tarde o temprano se va a convertir en un código 
increiblemente complicado de mantener, dónde el simple hecho de cambiar el comportamiento de cierto componente puede llevar a romper algo 
crítico en la aplicación, haciendo que el trabajar en esa base de código sea muy similiar a jugar *jenga*, algo **bastante estresante** para el desarrollador, esto sin mencionar que por lo general estas empresas tampoco cuentan con la cultura de los *test*. 

## Ejemplo 
> Es complicado estar buscando en todas las subcarpetas de cada carpeta de nuestra aplicación, porque no sabemos en dónde va a estar el 
> comportamiento que estamos buscando 


## Mis soluciones 

Hay que recordar que la arquitectura no solo es el cómo organizamos los archivos en nuestro servidor, la arquitectura debe estar más 
enfocada en el describir correctamente las relaciones en nuestra aplicación, en varias ocasiones me he encontrado con estructuras de 
carpetas del tipo 

`app/usuarios/componentes/caso_de_uso/usuarios/caso_de_uso_extra.js`

Esto, creo yo, es una pésima arquitectura, pues, si en la carpeta de usuarios puede existir un caso de uno que no corresponde a usuarios... **ESE CASO DE USO NO DEBERÍA ESTAR EN ESA CARPETA!!!**. 

## Conclusiones 



El hecho de ir creciendo la aplicación, sin preocuparnos de si la estructura representa bien las relaciones y funcionamiento en la aplicación vuelve confuso el aplicar cambios en el código. 




> La industria del software es una industria rota 
>
> -- [Freddy Vega](https://twitter.com/freddier)
