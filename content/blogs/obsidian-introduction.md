---
title: "Introducción a Obsidian"
date: 2024-01-27
draft: false
author: "Oscar López"
image: /images/articles/Obsidian-introduction/Obsidian-introduction-es.png
tags: 
  - obsidian
  - productividad
  - herramientas 
---

# 🚀 Mi sistema de *productividad* personal

Desde hace ya un tiempo he estado utilizando lo que ahora se conoce como *journaling*, desde siempre ha sido una forma de *desahogo personal*, ahí plasmo mis emociones, inquietudes y sentimientos, pero últimamente también ha evolucionado, gracias a herramientas como [Obsidian](https://obsidian.md/), en lo que mucha gente puede llamar un *segundo cerebro*, incluso antes [Obsidian](https://obsidian.md/) se definía como eso, como una herramienta para tu *segundo cerebro*, aunque no me encanta el término, sí es un hecho que es una herramienta *extremadamente* potente. 
A lo largo de 6 *artículos* voy a estar cubriendo los *sistemas* que he *"desarrollado"* para sacarle el máximo provecho a **Obsidian** como herramienta de *productividad* y *registro*. 

## 🪨 ¿Qué es [Obsidian](https://obsidian.md/)?  
Según su web: 
> **Obsidian** es la aplicación de escritura privada y flexible que se adapta a la forma en que piensas. 

Dicho de la forma más *simple y reduccionista*, **Obsidian** es un bloc de notas vitaminado, con muchísimas más posibilidades, pero a grandes rasgos sería un bloc de notas, te permite tomar notas en texto *"plano"*. 

Pero, hay mucho más allá, en lo personal yo siempre he sido fan de las aplicaciones de notas, cuando era *adolescente* llegué a utilizar [OneNote](https://www.microsoft.com/es-mx/microsoft-365/onenote/digital-note-taking-app) después descubrí [Evernote](https://evernote.com/es-es) y me encantó, por muchos años fue mi *herramienta preferida*, hasta que un día me enteré de una plataforma que permitía *"vincular"* notas, en ese momento no era consciente de ello, pero esa era una funcionalidad que siempre me había hecho falta en mis herramientas digitales, de hecho alguna vez un amigo me lo hizo notar ya que cuando le comenté sobre esa posiblidad en **Obsidian** me dijo: 
> Sí, recuerdo que tú tomabas notas en la escuela y apuntaba que una cosa hacía referencia a otra, tenías muchas flechas en tus apuntes. 

Fue en ese momento que noté que esa era una capacidad que había necesitado, pero como ni siquiera tenía idea de que se podía hacer, no la había echado de menos. 

En fin, regresemos al momento en el que veo aquel vídeo de youtube y veo que hablan de una *herramienta* que permite escribir notas, pero *"vinculandolas"* unas con otras, además de una forma muy sencilla con la notación `[[]]`. Esa herramienta era [Roam research](https://roamresearch.com/), en el momento que escuché de ella fui a búscarla y me llevé una tremenda *decepción* cuando ví que, en ese momento, apenas estaba en *early access*, había que pedir acceso a ella, además de que conllevaba un pago, si no mal recuerdo, en ese momento estudiaba la universidad, entonces no tenía un trabajo para *financiarme* un **súper bloc de notas**. Mis esperanzas se *desvanecieron*, pero me obsesioné con el tema, hasta que un día, de tanto búscar llegué a una aplicación muy *similar* a **Roam Research**, sobretodo tenía lo que yo estaba buscando, esta capacidad de poder *enlazar* notas unas con otras, además era *gratis* y no era en la nube, sino que era un programa local. 

En ese momento lo descargué y comencé a probarlo. Muy rápidamente quedé encantado, la herramienta es súper potente por si sola, pero **Obsidian** tiene el poder de la *comunidad* que ha desarrollado *plugins* que lo vuelven incluso más potente.

## 🔗 Enlaces 
Para mi una de las *características* más importantes de **Obsidian** es el hecho de que tiene la *capacidad* de *enlazar* notas, esto me interesaba mucho, porque creo que es la forma más *natural* en la que funciona el *cerebro*, relacionando una cosa con otra. 

Funciona de la siguiente manera, imagina que estás aprendiendo a programar, y acabas de aprender sobre las [Tablas Hash](https://es.wikipedia.org/wiki/Tabla_hash) , viste que las *Tablas Hash* son como los **objetos** en *Javascript* y los **diccionarios** en *Python*. 

Entonces la nota que escribes ser vería algo así.


![Nota de la tabla hash](/images/articles/Obsidian-introduction/HashTable-es.png)

Como puedes ver, *Objetos en Javascript* está encerrado entre `[[]]`, esto es porque es un enlace a otra nota, una nota que habla sobre los objetos en Javascript. 

Entonces, con **Obsidian** podemos ver el *gráfico* de relación de las notas, para la *Tabla Hash* sería así. 

![Grafo de relaciones entre Hashtable, objetos en javascript y los diccionarios en python](/images/articles/Obsidian-introduction/HashTable-graph-es.png)


Vemos como esta nota se relaciona con las 2 notas sobre los objetos y los diccionarios respectivamente, pero no solo eso, si aumentamos la *profundidad* del gráfico... 

![Grafo de relaciones entre Hashtable, objetos en javascript y los diccionarios en python](/images/articles/Obsidian-introduction/HashTable-graph-2-es.png)

Veremos que en un segundo nivel está *relacionada* con las notas acerca de *Javascript* y *Python*. 

De primeras puede parecer que es mucho *hype* por un simple gráfico, pero es mucho más, si lo piensas, todo lo que tengas en **Obsidian** ahora está accesible de forma *"relacional"*. 
Imagina que como yo, haces *journaling*, y un día un amigo, digamos que se llama *Arturo*, te recomienda una película, tú ese día lo anotas muy *casual* en tu *journal*, pero pasan 2 meses y ahora sí tienes tiempo para ver la película y no recuerdas cómo se llamaba, pero recuerdas que te la recomendó **Arturo**, en **Obsidian** sería tan sencillo como ir a la nota de *Arturo* y ver qué enlaces tiene, hasta encontrar el de la película, ya pudimos recuperar la información de forma más *natural*. Obviamente, en este ejemplo, hay muchas cosas que son *extraordinariamente mejorables*, con plugins podrías crear tableros de las películas que te recomendaron o películas que tienes pendiente de ver, etc. Se pueden crear miles de cosas, pero para dejar el ejemplo simple, eso es lo que obtendrías tan solo al *instalar* **Obsidian**. 

## 📑 Markdown 

Otra ventaja, que para otras personas puede ser una desventaja, es que **Obsidian** no es cómo otros editores de texto que te dan alternativas para *estilar* el texto, se basa en *formato estándar*, llamado [Markdown](https://es.wikipedia.org/wiki/Markdown), puede sonar complicado, pero al final solo es una forma de escribir que permite darle estilo al texto, por ejemplo para poner el texto en italica se hace con encerrando el texto en `*`

*Esto* está escrito así: `*Esto*` 
**Esto** está escrito así: `**Esto**` 

Existen muchas más cosas que puedes estilar utilizando *Markdown*, puedes agregar *links*, *citas*, *títulos*, etc. 

De hecho, la esté propio artículo está escrito en *Markdown*. 

Es bastante conocido, sobretodo en el mundo de la programación, creo yo, entonces para mi fue una ventaja, ya que ya conocía mucha de su *"sintaxis"*. 

## 🏠🕵 Local y privado 
Otra ventaja que en mi caso no me parece tan importante, pero que es bueno mencionar es que **Obsidian**, funciona el *local*, al final todas las notas que estás tomando son archivos de texto en tu computadora, por lo que no estás *"atado"* a la infraestructura de un tercero, cómo puede ser en el caso de **Notion** u otro tipo de herramientas, si eres una persona que se preocupa mucho por la *privacidad* y el saber dónde "viven" tus datos y cosas, este puede ser un punto fuerte para ti.  
## 🫂 Comunidad 
Otra ventaja que me encanta de **Obsidian** es que cuenta con una gran comunidad, de por si la herramienta viene con muchas funcionalidades por defecto, pero si a eso le agregamos todas las capacidades que agregan *plugins* de la comunidad el poder se vuelve prácticamente infinito. Por ejemplo, uno de los plugins que más me ha resuelto la vida es [Dataview](https://blacksmithgu.github.io/obsidian-dataview/), este plugin te permite hacer *consultas* tipo `SQL` en tus notas, permitiendote crear tablas, listas de tareas, listas de archivos de tus notas pudiendo usar filtros, ordenaciones, agrupaciones, etc.  

## 🤔Conclusión
Con sus características únicas, como la capacidad de enlazar notas de manera intuitiva y la flexibilidad de su sintaxis Markdown, **Obsidian** se ha integrado perfectamente en mi flujo de trabajo diario. Ya no solo registro mis pensamientos y emociones, sino que construyo una red de conexiones entre ellos, lo que me permite visualizar y comprender mejor la interconexión de mis ideas.

La fortaleza de **Obsidian** reside no solo en su potencia intrínseca, sino también en la comunidad vibrante que lo rodea. Los plugins desarrollados por esta comunidad amplían aún más sus capacidades, permitiéndome personalizar mi experiencia y adaptarla a mis necesidades específicas.

En artículos más adelante, voy a compartir el cómo yo utilizo la herramienta en mi gestión personal. 