---
title: '✍️ Obsidian: Journaling'
date: 2024-12-11
draft: false
author: 'Oscar López'
image: /images/articles/obsidian-journaling/cover.png
tags:
  - obsidian 
  - productividad
  - herramientas
---

Desde que tenía como 14 años, he encontrado muy *satisfactorio*, *relajante* y *desahogante* tener un **journal** donde anotar todo tipo de cosas que me ocurren a lo largo del día. Al principio, solo fue hacer un *resumen* de lo que había pasado en el día: eventos importantes, sentimientos, etc.

Con el tiempo, he ido cambiando la forma y las herramientas con las que lo hago. Primero lo hice en *OneNote*, en una tableta que tenía cuando tenía *14 años*. Después me cambié a *Journey*, una app especializada en eso que te permitía agregar sentimientos y ese tipo de cosas. Al ver que estaba un poco *atado* a la plataforma y, en ese momento, al dispositivo (pues no tenía una versión para computadora), me cambié a *Evernote*. Ahí era más simple, pero me daba la ventaja de ser multiplataforma. Sin embargo, sentía que algo me faltaba.

Un día, viendo un video en *YouTube*, me topé con la existencia de *Roam Research*, una app que te permitía organizar tus notas con enlaces. Esta idea me encantó, pero en ese momento estaba en *beta* y no pude obtener *acceso*. Eso me hizo sentir *decepcionado*. Estuve investigando y buscando alternativas que cumplieran con esa misma capacidad: el poder *enlazar* las cosas a forma de *grafo*. Me costó mucho trabajo encontrar una opción similar; incluso *consideré* *desarrollarla* yo mismo (un pensamiento muy entusiasta tenía XD). Hasta que por fin me encontré con una solución que cubría todo lo que necesitaba: **Obsidian**.

Lo que voy a mostrar aquí es cómo, aprovechando todas las capacidades que tiene **Obsidian**, he armado un sistema de *journaling* que funciona para mí y que me permite tener el control de muchos de los *aspectos* de mi vida.

## 🧩 Partes

Mi *journal* consta de muchas partes, cada una destinada a un aspecto importante en mi vida. En este artículo las voy a tocar por encima, pero si existe *interés* en alguna en particular, no duden en mencionarlo y puedo extenderme más en ese tema.

### 🟦 Meta Info

Al estar escrito en *Obsidian*, por lo tanto en *Markdown*, mis notas tienen una parte de *meta información* donde registro cosas relevantes al día, pero que de otra forma me sería más complicado ingresar de una forma más *natural*.

#### 💙 Sentimientos

Creo que es bueno ser consciente de cómo nos sentimos a lo largo del día, más allá de *bien o mal*. Me gusta tener esta parte para expresar con *palabras más precisas* cómo me sentí a lo largo del día: si el día fue *estresante*, si me sentí *abrumado*, *preocupado*, *emocionado*, *cansado*, etc.  
Esto, además, me permite notar *patrones* en mi comportamiento, ver en la mayoría de las veces qué es lo que me hace sentir abrumado o cómo me siento bajo ciertas situaciones. A su vez, sabiendo eso, gestiono mejor esas situaciones. Además, *promueve* ser más *preciso* al expresar nuestros sentimientos.

```md
---
sentimiento: 
	- contento
	- orgulloso
```
Al tenerlo en la metadata de la nota, puedo hacer queries de qué días me sentí molesto, contento, orgulloso, etc.

#### 😴 Sueño
Una parte fundamental de mi vida es dormir. Lo disfruto mucho. Por mucho tiempo batallé para saber cuánto tiempo dormir, pues algunas veces con 8 horas me levantaba cansado y, con menos horas, me levantaba fresco. Esta parte me permite llevar un registro de tiempos y cosas que hago en las ocasiones que mejor descanso. Registro hora de dormir y hora de despertar, además de la calidad.

```md
sueno: 
	dormir: 
		hora: 23
		minuto: 30
	despertar: 
		hora: 7
		minuto: 30
	rating: 5
```

Al igual que con los sentimientos, el tenerlo en la metadata me permite tener un tablero para promediar con cuánto tiempo de sueño descanso mejor.

#### 🎆 Eventos importantes
A todos nos ha pasado que alguna vez hablas con alguna amistad que te pregunta qué has hecho y te quedas en blanco. Has hecho muchas cosas en todo el tiempo que no se han visto, pero justo ahora no eres consciente de ello. Para mí, en esta parte anoto todas las cosas que creo que son dignas de contar en esas situaciones: un pequeño logro del trabajo, un avance en alguna meta de ejercicio, alguna comida nueva que hice, etc.

Con esto luego tengo un tablero en el que puedo seleccionar un rango de fechas y ver qué son ese tipo de cosas que han pasado en ese rango de tiempo.


````md
# Tablero de Logros / Eventos 
  ## 📆🏆 Mes
  ```dataview 
  TABLE evento
  FROM #bitacora 
  AND !"Plantillas"
  WHERE length(evento) > 0 
  AND date(file.name, "dd-MM-yyyy").month >= 12
  AND date(file.name, "dd-MM-yyyy").year = 2024
  SORT date(file.name, "dd-MM-yyyy") DESC
  ```
````


#### 🏷 Tags

Por último, la parte más importante: los *tags*. Estos me permiten, en primer lugar, saber que la nota que estoy escribiendo es parte de mi *journal*, gracias al *tag* `#journal`. De esta forma, no importa dónde escriba la nota, sé que será considerada dentro de lo que es el *journal*. Después de esa, hay varias etiquetas más y ahí estás limitado solo por lo que dicten tus necesidades, pero para mí son *2 las más importantes*:
1. `#siesta`: Como parte de mi *monitoreo* de sueño, también es importante tener en cuenta qué días necesité tomar una siesta porque el cansancio fue mucho.
2. `#dolor_de_x`: Marco con un tag cada que me siento mal de algo. Puede ser que me haya dolido la cabeza, el estómago, la espalda. Me gusta tener esa información por si evoluciona de una forma más *importante* la *enfermedad* o el *malestar*. Además, también me permite encontrar patrones con respecto a qué comí o qué pasó los días que me sentí mal que podría haber influido en ese *malestar*.

### 🟧 Información Principal  

Esta parte ya está más en forma de *journal* normal, salvo por algunas partes, pero es mucho más parte de lo que veo al revisar notas. Es más como el *contenido* de la nota y lo *redacto* de forma más *natural*.

#### 💪 Ejercicio  

Esta parte no es *redactada de forma natural*, sobre todo porque ni siquiera es algo que capturo en la nota del *journal*. Toda la información relacionada con mi *ejercicio* es una *metodología/sistema* aparte que tengo intenciones de revisar en otro artículo.  
Por ahora, lo que veo en la nota es un resumen de los ejercicios *realizados*.  
<img src="/images/articles/obsidian-journaling/image-exercise.png" alt="Renderizado de mi resumen de ejercicios" style="max-width: 100%; margin-bottom: 1em">

Y ya en cada nota *individual* puedo encontrar la información completa de *repeticiones*, variación, etc.

#### 🥪 Comida  

En esta parte anoto mis comidas a lo largo del día para llevar el *track* de los valores nutricionales de lo que he comido. De igual forma, este sistema ya lo revisé en el artículo de [Obsidian: Nutrición 🔗](https://oscarlp6.dev/blogs/nutrition-system-obsidian/). Ahí puedes ver el sistema al completo.  

En general, anoto lo que comí y se me *despliega* una tabla con los valores totales de mis *macronutrientes* ingeridos.  

#### 🚀 Proyectos  

La forma en la que *gestiono* mis proyectos y *documento* mis avances ya lo revisé en el artículo de [Obsidian: Proyectos 🔗](https://oscarlp6.dev/blogs/projects-obsidian/).  

De forma *resumida*, al igual que con el *ejercicio*, aquí solo tengo una *query* que me muestra las *tareas completadas* en el día que estuvieron relacionadas con alguno de los proyectos en los que trabajo. Me da mayor *visibilidad* de cómo voy avanzando en las cosas y cómo, de poco en poco, voy avanzando bastante.  

#### 🙌 Agradecimientos  

Me gusta tener presente las cosas por las que estoy *agradecido*, no de una forma *"mágica"*, sino de una forma que me permita apreciar las cosas que algunas veces damos por hecho o que, en su momento, nos hacían mucha ilusión y después olvidamos lo *afortunados* que somos por haberlas logrado.  
Me esfuerzo mucho en llenar esta parte lo mejor posible cada día. Además, después puedo *recolectar* todas las cosas en un *Tablero de agradecimientos* que me recuerda, en *conjunto*, todas las cosas por las que estoy agradecido.  
Es muy útil para los *días complicados*.  

<img src="/images/articles/obsidian-journaling/image-recognitions.png" alt="Renderizado de mi resumen de ejercicios" style="max-width: 100%; margin-bottom: 1em">

#### ✅ Anti Todo List  

Normalmente acostumbramos tener una lista de tareas para ver qué es lo que tenemos que hacer a lo largo del día. Yo tengo la mía. Pero también, al final del día, me gusta revisar todas las tareas que logré. Me da una dosis de satisfacción ver todo en lo que avancé, que no está relacionado con proyectos, pero que también es muy valioso e importante, por ejemplo, limpiar la casa o lavar los trastes.  

Como adición (y esto solo es una idea), puedes llevar algo similar de la gente con la que vives, no con el *afán* de contar quién hace más, sino con el *afán* de ser *consciente* de todo lo que los demás hacen, que tal vez no siempre apreciamos lo suficiente.  

#### 🏆 Reconocimientos  

Soy muy fan de la *cultura* de reconocer a las personas. Creo que muchas veces esperamos a los momentos *adecuados* o la *instancia adecuada* para *reconocer* a la gente. Por mi parte, procuro *reconocer* lo más pronto y lo más *específico* posible, para de verdad darle valor al reconocimiento. No me gustan nada las dinámicas donde se da apertura para dar *reconocimientos* y la gente *"reconoce"* a todos porque, por lo menos para mi *concepción*, reconocer a todos de *forma vaga y general* es lo mismo que no *reconocer a nadie*.  

Entonces, si puedo, me gusta *reconocerle* a la persona lo más pronto posible, pero en caso de que no, y además para yo tener un *registro* de las cosas valiosas de esa persona, voy registrando los *reconocimientos* a las personas a lo largo del día.  

Otra vez, aprovechando el poder de *dataview*, utilizo estos listados para que cada reconocimiento aparezca en la nota de cada persona.  

#### ❤‍🔥 Entradas  

Aquí escribo eventos del día, pero con mucho más detalle: cosas que me gustaron, cómo me hicieron sentir, cosas que me molestaron, por qué me molestaron, cosas que me intrigan. Esta es la parte más *personal*, pues el mayor propósito es *desahogarme* y poder aclarar mis ideas.  

De cualquier forma, a través de los *links* de **Obsidian** y de anotaciones de meta información, puedo agregar más datos a la nota. Por ejemplo, puedo escribir `(sentimiento:: emocionado)` y eso automáticamente se agregará al listado de *sentimientos* que hablé al principio.  

Más allá de eso, es la parte que menos *propósito* técnico tiene, pero es la que más importancia emocional tiene.  

#### 🧠 Pensamientos y cosas aprendidas  

Todos los días aprendemos algo. Esta sección me muestra un *resumen* de todas las notas que son *reflexiones* o *conocimientos* que anoté a lo largo del día, dándome mayor visibilidad de todo lo que aprendí ese día y que tal vez no soy tan *consciente*.  


### 📖 Conclusión  

Llevar un *journal* en **Obsidian** no solo me ha ayudado a organizar mejor mi día a día, sino también a reflexionar sobre mis experiencias, aprender de mis patrones y apreciar más las pequeñas cosas que a veces pasan desapercibidas. Lo interesante de este sistema es que no es estático; puedo adaptarlo según mis necesidades, añadir nuevas secciones o incluso simplificarlo si lo necesito.

Me encantaría saber si tú también llevas algún tipo de *journaling* o si tienes algún truco o idea que podría complementar este enfoque. ¿Hay algo que agregarías o cambiarías en un sistema como este? ¡Me encantaría leerlo! 😊
