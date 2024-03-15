---
title: "🚀 Obsidian: Proyectos"
date: 2024-03-13
draft: false
author: "Oscar López" 
image: /images/articles/Obsidian-projects/cover-es.png
tags: 
  - obsidian 
  - productividad
  - herramientas
  - sistemas 
  - proyectos
---

Hace poco compartí cómo gestiono mi base de conocimientos, y prometí compartir los sistemas que utilizo para organizar y registrar información sobre mis metas y proyectos, tanto en el ámbito del software como en otras disciplinas.

En esta ocasión, quiero adentrarme en la manera en que estructuro y avanzo en mis proyectos, gestionando las tareas a realizar y aquellas que surgen en el camino. Como desarrollador, pero también como individuo comprometido con alcanzar metas en diversas áreas de mi vida, he ideado un sistema que me permite mantener el control y la visión global de cada proyecto, desde su concepción hasta su finalización.

Este sistema no solo se trata de administrar listas de tareas, sino de establecer un flujo de trabajo fluido que se adapte a los cambios y desafíos que surgen en el proceso. A lo largo de este artículo, compartiré los principios y herramientas que utilizo para mantenerme organizado, productivo y enfocado en cada uno de mis proyectos, sin importar su complejidad o alcance. En particular, me centraré en cómo gestiono el avance de mis proyectos, así como las tareas que van surgiendo a medida que avanzo en ellos.

## ❓ ¿Qué es un proyecto?

Un proyecto, desde mi perspectiva, abarca cualquier objetivo o meta que busco alcanzar en mi vida. No se limita únicamente al ámbito profesional, sino que engloba todas las facetas de mi existencia, desde el desarrollo de habilidades personales hasta la ejecución de iniciativas profesionales complejas.

- **Desarrollo de habilidades personales**: Aprender a tocar un instrumento musical, 
dominar un nuevo idioma o mejorar mis habilidades de comunicación interpersonal son ejemplos 
de proyectos que buscan el crecimiento personal.

- **Desarrollo profesional:** Crear una plataforma para un producto, diseñar un nuevo sistema de gestión empresarial o lanzar una campaña de marketing son proyectos que se enfocan en el avance y el éxito en el ámbito laboral.

- **Exploración y aprendizaje:** Sumergirme en el estudio de un nuevo lenguaje de programación, familiarizarme con un framework emergente o profundizar en un campo de conocimiento específico son proyectos que alimentan mi curiosidad intelectual y mi búsqueda de aprendizaje continuo.

Cada proyecto tiene sus propios desafíos, objetivos y líneas de tiempo, pero todos comparten el propósito común de impulsar mi crecimiento y desarrollo en diferentes áreas de mi vida. La gestión efectiva de estos proyectos es esencial para garantizar que pueda avanzar de manera sistemática hacia la consecución de mis metas y aspiraciones.

## 🏗️ Estructura de un proyecto 
### 🔍 Avances

En mi sistema, los avances de un proyecto se registran meticulosamente en una lista generada con Dataview. Cada día, reviso mi journal o diario y registro cualquier progreso relacionado con el proyecto en cuestión. Esto puede incluir avances significativos, obstáculos superados, o nuevas lecciones aprendidas. Enlazo cada entrada de avance al proyecto correspondiente y proporciono una descripción detallada de lo ocurrido. Esta práctica me permite mantener una visión general de los días en los que he avanzado en el proyecto y me ayuda a identificar patrones en mi proceso de trabajo.

Por ejemplo, en mi [proyecto para practicar la memoria 🔗](https://oscarlp6.dev/memory-project/), tengo el registro de cómo he ido avanzando en el proyecto. 

````md 
# 🧠 Proyecto de memoria 

## ➡ Avances 
```dataview 
LIST FROM [[]] AND #bitacora 
```
````

<img src="/images/articles/Obsidian-projects/image1-es.png" alt="Renderizado de la sección de avances de un proyecto" style="max-width: 100%; margin-bottom: 1em">



### 📋 Tareas

La lista de tareas es un componente esencial de mis proyectos. Cada tarea se describe de manera lo más accionable posible, es decir, se descompone en elementos pequeños y específicos que pueden ser realizados de forma individual. Utilizo la notación de ✅2024-03-14 de Dataview para marcar las tareas que avanzo en un día específico. Esto me permite mantener un registro detallado de mi progreso diario y facilita la revisión de las tareas completadas. Además, de esta forma al hacer mi nota *journal* puedo ver en ella las tareas que terminé relacionadas a cierto proyecto, una forma de motivarme y ver que voy avanzando. 

Las tareas en el proyectos: 

<img src="/images/articles/Obsidian-projects/image2-es.png" alt="Renderizado de la sección de avances de un proyecto" style="max-width: 100%; margin-bottom: 1em">

En la nota *journal* para poder ver los progresos en el día: 

<img src="/images/articles/Obsidian-projects/image3-es.png" alt="Vista de las tareas de proyectos logradas en el día" style="max-width: 100%; margin-bottom: 1em">

### 📝 Backlog

El backlog es una lista dinámica de ideas y funcionalidades que me gustaría incorporar al proyecto en el futuro. Estas ideas pueden surgir durante el desarrollo del proyecto o como resultado de la reflexión sobre sus objetivos. Utilizo el backlog para capturar estas ideas y revisar su viabilidad y relevancia en momentos posteriores. Cuando una idea del backlog se considera viable y relevante, la traslado a la lista de tareas para su implementación. Cada backlog es una nota independiente con el tag `backlog`, lo que me permite organizar y priorizar estas ideas de manera efectiva.

Por ejemplo, este es el *backlog* del [proyecto para practicar la memoria 🔗](https://oscarlp6.dev/memory-project/): 

<img src="/images/articles/Obsidian-projects/image4-es.png" alt="Vista de los backlogs de un proyecto" style="max-width: 100%; margin-bottom: 1em"> 

Y la estructura de la *query* de [Dataview 🔗](https://blacksmithgu.github.io/obsidian-dataview/) para poder ver todos los *backlogs* que vayamos *registrando*: 

````
## ✔ Backlog

```dataview 
LIST 
FROM [[]]
AND #backlog 
```
````

Y cada *backlog* es registrado con el `tag` de `backlog`

<img src="/images/articles/Obsidian-projects/image5-es.png" alt="Ejemplo de una nota backlog" style="max-width: 100%; margin-bottom: 1em"> 


### ⚙️ Status

Cada proyecto se gestiona según su estado actual. Utilizo diferentes estados para categorizar mis proyectos:

- **Todo**: Proyectos que son viables y tienen sentido, pero aún no han comenzado.
- **Analizar**: Ideas que requieren análisis y aún no tienen un plan definido.
- **En progreso**: Proyectos en los que actualmente estoy trabajando.
- **Cerrado**: Proyectos que han sido completados y no requieren más atención.
- **Mantenimiento**: Proyectos terminados que necesitan mantenimiento continuo.

### 🚀 Prioridad

Asigno a cada proyecto una prioridad para determinar su importancia relativa entre otros proyectos. Utilizo una escala de prioridades basada en múltiplos de 10, lo que me permite ajustar las prioridades según surjan nuevos proyectos o situaciones inesperadas. Esta práctica me ayuda a enfocar mis esfuerzos en los proyectos más importantes y a gestionar mejor mi tiempo y recursos.

### ⏱️ Tiempos

Es importante destacar que la gestión del tiempo no se aplica a todos los proyectos de la misma manera. Sin embargo, en proyectos donde se puede realizar una estimación de tiempo razonable, esta sección cobra relevancia. La sección de tiempos me permite tener un registro detallado de aspectos temporales clave, como la fecha de inicio y finalización del proyecto, estimaciones de tiempo y tiempo real empleado.

Esta información es especialmente útil cuando se combina con la sección de avances. Me permite analizar dónde estimé mal los tiempos, qué aspectos del proyecto consumieron más tiempo del previsto, o identificar qué fue lo que me frenó en ciertos momentos del proyecto. Esta retroalimentación me ayuda a mejorar futuras estimaciones de tiempo y a identificar áreas de mejora en mi gestión del proyecto.

### 🎉 Conclusión

La implementación de este sistema de gestión de proyectos ha demostrado ser invaluable en mi día a día. No solo me permite mantener un seguimiento detallado de mis metas y proyectos, sino que también me brinda la flexibilidad necesaria para explorar ideas y funcionalidades adicionales que podrían potenciar mis proyectos en el futuro.

Este enfoque no solo se trata de avanzar en tareas específicas, sino de tener una fuente de información continua que me permite aprender de mis errores y éxitos pasados. La capacidad de revisar mis avances anteriores y ver cómo se resolvieron los desafíos me ayuda a mejorar constantemente mi enfoque y habilidades.

Además, la estructura de datos generada por este sistema me permite crear tableros de Dataview personalizados que me proporcionan una visión general rápida de mis proyectos. Puedo identificar fácilmente qué proyectos necesitan atención o mantenimiento, qué proyectos están en progreso y cuáles podrían ser mis próximas áreas de enfoque.

En resumen, este sistema no solo mejora mi productividad y organización, sino que también alimenta mi motivación al proporcionarme una vía clara para alcanzar mis metas y un registro detallado de mi progreso en el camino.
