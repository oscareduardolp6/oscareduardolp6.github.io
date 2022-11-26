---
title: "Como No Hacer servicios"
date: 2022-11-26T16:35:49-06:00
author: "Oscar López"
draft: false 
tags:
  - Microservicios 
  - Servicios 
  - Arquitectura 
---

En los últimos años se ha puesto de moda el concepto de los *microservicios*, y con razón, esta es una arquitectura que permite desacoplar la áreas de negocio, de forma que cada una pueda escalar y evolucionar independientemente, además de evitar que si un área del sistema se cae, las caigan con ella. 

Todo esto suena como una estructura *idonea* (y lo es), si bien ninguna estructura es perfecta, esta tiene grandes ventajas en escalabilidad y confiabilidad. 

El problema, como en todo, es que si no se ejecuta de manera adecuada podemos terminar con un sistema más acoplado que si fuera un *monolito*, díficil de **mantener y de testear** . 

## ¿Qué son los servicios? 
Antes de ver los problemas que puede conllevar el *mal implementar* una arquitectura de microservicios, hay que acalarar **Qué es un servicio**. 

La idea de una arquitectura basada en *servicios* es que en lugar de tener un programa *monolitico* que tenga diferentes partes encargadas de distintas areas del negocio, tenemos *varios programas* encargado cada uno de un **area de negocio**. De esta forma, si el *servicio* que se encarga de enviar correos se cae o sufre algún fallo, el servicio principal del producto sigue en pie sin enterarse del fallo del servicio de correo. 

<img src="/images/FailSystem.gif" alt="Fallo en los servicios" style="width:70%;margin-bottom: 2em;" />

## El problema 
Todo esto suena súper bien, de qué forma podríamos *mal implementar* esta estructura. Pues bien, en el ejemplo anterior es muy sencillo ver todas las **ventajas**, pero perdemos de vista **problematicas** que nos aparecen en la vida real, por ejemplo, suponiendo que nuestra aplicación es una *aplicación de notas* que nos permite que las notas tengan un recordatorio por correo, en este caso, comenzaremos a ver un *problema*, si tenemos el *servicio de notas* y el *servicio de correos* de forma independiente... **¿Cómo hacemos para que se comuniquen?**. 

Bueno, la primer idea que se viene a la mente es crear un *endpoint* en el servicio de correos que permita que el servicio de notas *"programe un recordatorio*". 

Pero ahí nos encontramos con otro problema, si desacoplamos la lógica de notas y de correo del *monolito* para impedir que los fallos de una afectaran a la otra, a la hora de comunicarlas a través de un endpoint lo único que estamos haciendo es *reacoplarlas de una forma más complicada*, cómo diría *Morty* de **Rick & Morty**: 
> Es esclavitud con pasos extra 

Como puedes notar, esta idea más que solucionar nuestros problemas, solo nos *regresa* a los **problemas originales**, haciendo, de cierta forma, **inútil** el haber separado la lógica en *servicios*. 

## Solución 
Ok, ya vimos el cómo **no hacerlo**, entonces... **¿Cómo se haría?**.

Aquí nos topamos con un concepto muy *interesante*, la **EDA (Event Driven Architecture)**, en otro artículo hablaré más a fonde de la EDA , pero por ahora, con el concepto básico nos alcanza, la **idea principal** de esta arquitectura es remplazar la comunicación *directa* entre servicio, con los llamados, *Eventos de Dominio*, que son lanzados cada vez que tenemos un *cambio en el estado del dominio*, por ejemplo, que una nota que incluye recordatorio fue creada. 

<img src="/images/Events.gif" alt="Event Driven Architecture" style="width:70%;margin-bottom: 2em;" />

Esto nos permite mayor escalabilidad ya que es más sencillo que otros servicios también escuchen estos *eventos de dominio* y evita que volvamos a *acoplar* las áreas de negocio, ya que los eventos, idealmente, se publicarían en una cola de eventos que los persistiría hasta que todos los servicios sucritos hayan manejado ese evento. 

## Conlusión 
Si eres el líder de un equipo o en tu empresa están pensando en realizar una migración a una arquitectura de microservicios, considera estos puntos a la hora de diseñar la estructura, pues una mala arquítectura basada en servicios puede ser aún más complicada de mantener que un *monolito* si está mal implementada, *puede ser una buena intención, pero una mala ejecución*

## Créditos 
Gran parte de lo que he aprendido sobre las arquitecturas basadas en servicios y las arquitecturas basadas en eventos es gracias a [Codely](https://codely.com/). 