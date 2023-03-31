---
title: "El Dominio: Construyendo mi Organizador de archivos (Parte 2)"
date: 2023-03-30T20:25:35-06:00
draft: false
author: "Oscar López"
image: /images/projects/file-organizer/banner.png
github_link: "https://github.com/oscareduardolp6/file-organizer"
tags: 
  - Deno 
  - Applications
  - Projects 
  - Making file organizer
  - Typescript
description: "El Dominio"
---

Lo primero en mi caso, fue plasmar en [Notion](https://www.notion.so/) las cosas que quería que tuviera mi *softaware*. 
Creo que es importante tener *más o menos* resuelto lo que quieres hacer antes de comenzar con el *código*, entre más puedas adelantar 
de *lógica* antes de comenzar a teclear mejor, aunque no siempre es posible eso. 

<img src="/images/projects/file-organizer/domain-image-1.png" alt="Mi tablero de Notion" style="width:60%;margin-bottom: 2em" />

**En mi caso la lógica es muy sencilla:**

Tomando un directorio base, entrar recursivamente a sus subcarpetas y archivos revisando cada archivo para ver si se adecua a alguno de los criterios utilizados para organizar. 

Bastante simple, tenemos 3 factores *básicos*: 
- Tendrá **recursividad** 
- Tendrá ciclos 
- Y la lógica de organización 

Ya con esto definido comienzo a darle forma a las estructuras. 

Para este proyecto estoy utilizando *Typescript*, entonces, lo primero que quiero es darle un poco de forma a las *opciones* de organización me refiero a: 
- Contiene en el nombre
- Tiene extensión tal
- El nombre termina con
- El nombre comienza con
- Tiene alguna extensión de este grupo

## Conditions 

Esto lo haré utilizando los `String Literal Types` de *Typescript* 

```ts 
// Conditions.ts 
export type Conditions = 
  'File Name Contains'
  | 'Extension'
  | 'File Name Ends With'
  | 'File Name Starts With'
```

## Pattern 

Después, solo para darle un poco de *semántica* a mis tipos, renombro el tipo `string` como `Pattern`. 
Esto solo para poder identificar mejor qué es lo que representa ese `string` y por si después tengo que agregar `Branded Types`. 
Un `Pattern` va a ser el string que en conjunto con la `Conditions` me va a decir qué condición se debe de cumplir, por ejemplo, que el nombre de archivo contenga *"Tarea"*

```ts
// Pattern.ts
export type Pattern = string[] 
```
## PathString 
Tomando en cuenta que una de las cosas que quiero hacer es mover archivos a otros directorios, creo que es buena ideas *asegurarme* que estos directorios existan, yo voy a asegurarme de que los directorios existan utilizando un `BrandedType` en conjunto con una librería que he estado utilizando llamada [NeverThrow](https://www.npmjs.com/package/neverthrow?activeTab=readme) para evitar *lanzar* excepciones y que el control de errores se sepa y maneje desde el tipado, es una libería bastante interesante. 


```ts 
import { Result, ok, err } from "neverthrow"; 
// Función de utilidad para verificar si un directorio existe
import { directoryExists } from "../Utils/Directory.ts";

// Creamos la Brand
type PathBrand = { readonly path: unique symbol }

// Definimos los posibles errores que pueden ocurrir
export type PathErrors = 'Directory Not Found'

// Creamos el Branded Type
export type PathString = string & PathBrand

// Función para crear el Branded Type, así aseguramos que el string tenga las caracteristicas que queremos 
// en mi caso, que sea un directorio que exista y aparte, devolvemos un result, por si ocurriera algún error
export const createPathString = async (str: string): Promise<Result<PathString,PathErrors>> => {
  const directoryExists_ = await directoryExists(str)
  if(!directoryExists_) return err('Directory Not Found')
  return ok(str as PathString)
}

```

## Rule

Y nuestra última *estructura* más básica, una *Regla(Rule)*, que será la representación de lo que quiero hacer con archivo, por ejemplo,moverlo a otro directorio o borrarlo y también toda la información que se requiera para hacerlo, como la nueva ruta. Para mi luce así: 
```ts 
type MoveRule = {
  action: 'Move To', 
  destination: PathString // Mover un archivo requiere saber a dónde, por eso incluyo esta propiedad
}

type DeleteRule = {
  action: 'Delete' // Borrar un archivo no requiere ningún otro dato
}
```

## Conclusiones 
Este ha sido mi avance durante la semana, no he tenido tanto tiempo como quiera, pero va tomando forma, por ahora ya tengo definido el cómo se van a estructurar las *acciones* del programa, el siguiente paso es comenzar a darle un poco de comportamiento y *test*. 

Este es una serie de *artículos* para documentar mi proceso de creación de software te dejo los links a la entrada anterior y a la siguiente: 
> [Anterior](/blogs/building-file-organizer-part-1/)