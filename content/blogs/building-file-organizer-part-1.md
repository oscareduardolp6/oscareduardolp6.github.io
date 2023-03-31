---
title: "Construyendo mi Organizador de archivos: Parte 1"
date: 2023-03-28T20:25:35-06:00
draft: false
author: "Oscar López"
image: /images/projects/file-organizer/banner.png
github_link: "https://github.com/oscareduardolp6/file-organizer"
tags: 
  - Deno 
  - Applications
  - Projects 
  - Making file organizer
description: "Mi proceso de construcción del proyecto de organizador de archivos"
---

Todos los días *descargamos* y creamos archivos, ya sea de *word, excel, bloc de notas, etc.* y, por lo menos en mi caso, siempre me encuentro dejando todas mis descargas 
en la carpeta por *default* y todos los archivos que creo en el **escritorio** con la promesa de algún día acomodarlos en un lugar adecuado. A pesar de que ese día sí llega, porque me gusta mantener mi escritorio en orden, creo que es una tarea que no debería hacer yo, sino que puedo automatizarla. 
Con eso en mente me he propuesto hacer un programa *propio* para organizar mis archivos bajo ciertos *criterios* que sean extendibles y *personalizables* de forma que a alguien más también le pueda servir. 
Esto lo hago para practicar más que nada y para tener opiniones distintas sobre mi proceso de *construcción* de *Software*, por lo que te ánimo a que me dejes tu opinión. 

## La idea 
El funcionamiento es básico, que yo pueda dejar los archivos en cualquier lugar de mi computadora y que el programa *eventualmente* mueva todo a un *folder* apropiado al proposito del archivo, esto basandose en *criterios* aplicados al nombre o extensión del archivo y que estos *criterios* puedan **sencillamente** extendidos por el usuario. 

## Caracteríticas 
1. **Directorio de inicio**: Por default, podría comenzar por el directorio del usuario, pero que se pueda especificar, por ejemplo, si quieres dejar todo en el *escritorio* y que solo desde ahí se haga la *magia*. 
2. **Organización por extensión de archivo**: Que, por ejemplo, todos los archivos `.mp3` los mande a una carpeta llamada *Music* .
3. **Criterios por defecto**: Que en cuánto esté instalado, tenga una serie de *criterios* preestablecidos, por ejemplo, poner los `.png` en la carpeta *images*.
4. **Exluir carpetas**: Si se tiene una carpeta o conjunto de carpetas que uno considera están bien organizadas y ahí no queremos que se *entrometa* el programa, poder incluirlo de forma que estas *carpetas* sean *ignoradas*.
5. **Poder crear reglas basandose en el nombre del archivo**: Por ejemplo, si un archivo comienza con *AUD* que se mueva a la carpeta de *WhatsappAudios*. Estos criterios serían del tipo: 
    - Comienza con 
    - Termina con 
    - Contiene 
6. **Borrado de temporal**: Permitir el vacíar todo el espacio ocupado por los temporales que olvidamos borrar. 

## Conclusiones 
A lo largo de esta serie voy a estar compartiendo mi proceso de *creación de software* esperando que alguien con menos *experiencia* le ayude o que alguien con mayor *experiencia* me haga notar mis errores o que me compartan ideas de lo que podría incluir.

Aquí les dejo el [Link](https://github.com/oscareduardolp6/file-organizer) al repositorio por si quieren echar un vistazo:

> [Repositorio](https://github.com/oscareduardolp6/file-organizer)

> [Siguiente Entrada](/blogs/building-file-organizer-part-2/)
