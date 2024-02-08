---
title: "Obsidian: Knowledge base"
date: 2024-02-08
draft: false
author: "Oscar López"
image: /images/articles/Obsidian-Knowledgebase/cover-es.png
tags: 
  - obsidian
  - productividad
  - herramientas 
  - sistemas 
  - base de conocimientos
---

# 🗄️ Obsidian: Organización de conocimientos 

Hace un par de días les compartí la herramienta que yo utilizo para gestionar toda mi base de conocimiento y había prometido compartir los sistemas que yo utilizo para poder *ordenar y registrar* conocimiento e información sobre mis hábitos. 

En esta ocasión quiero compartir la forma en la que yo *organizo* mis notas y las cosas que voy aprendiendo, en lo personal, yo soy desarrollador de software, entonces tengo un *espacio* especifico para los *conocimientos* y **recursos** que voy obteniendo acerca de tecnologías que me interesan y al ser ese mi *espacio* más *"nutrido"* será el que voy a utilizar como ejemplo.

## 📋Tableros 
Antes de comenzar a ver el cómo organizo mi *información*, es importante mencionar al **plugin** de *Obsidian* que hace todo esto posible: [Dataview](https://blacksmithgu.github.io/obsidian-dataview/). 

**Dataview** es un **plugin** desarrollado por la comunidad que permite hacer *"consultas"* a los datos y *metainformación* de tus notas de forma muy similar a cómo lo harías con lenguajes como [SQL](https://es.wikipedia.org/wiki/SQL) o como con [Javascript](https://developer.mozilla.org/es/docs/Web/JavaScript). Te permite generar tablas, listas y listas de tareas a partir de la información que obtiene de tus notas. Esto es algo muy potente, ya que te permite crear sistemas para tratar conjuntos de notas como si fueran tablas de base de datos y manipular sus datos según te convenga. 

## 🖱 Nota del tablero de tecnologías 
Como ya lo comentaba, yo tengo un tablero en el que *agrupo* todos los conocimientos que voy obteniendo con relacionados a *tecnologías*, siendo tecnología un *término* que puede agrupar algún *framework*, un  *lenguaje*, un *concepto*, *paradigma*, *etc.* 

Esta es solo la forma que me funciona a mí, ya cada quién debe *adaptar* el sistema a su *estructura mental*. 

La nota de mi *tablero* de **tecnologías** se ve así. 

````md 
---
tags:
  - tablero
---
# 🧠 Conocimientos de tecnologías 
```dataview
TABLE 
icon, 
file.inlinks as "Recurso" 
FROM #tecnologia 
AND -"Plantillas"
SORT file.name ASC
```
````

La primer parte, la parte que está entre los `---` es el [Frontmatter](https://help.obsidian.md/Getting+started/Glossary#Frontmatter) una parte para definir *metadata* de tu archivo. En este caso yo solo agrego el *tag* de que es un tablero, esto me permite después *listar* todos los tableros que tengo en una carpeta o cosas por el estilo. Para el proposito de este artículo no importa mucho. 

Después tenemos el título de la nota, nada nuevo y ya al final tenemos la *"query"* de *Dataview*, en la *documentación* de *Dataview* nos dice que para ejecutar *querys* lo podemos hacer de muchas formas, pero en esta utilizamos un lenguaje muy *similar* a [SQL](https://es.wikipedia.org/wiki/SQL), para tener una tabla. 

Lo que estamos diciendo es que de todas las notas que tengan el *tag* `tecnologia`  pero que no estén en la carpeta de *Plantillas* vamos a obtener el *icono*, esta es una propiedad *custom* que yo le defino a las notas de tecnología, lo vamos a ver más *adelante*, y vamos a obtener los *inlinks*, que son todos los *archivos* que hacen *referencia* a la nota de tecnología. Es decir, si tenemos una nota *Javascript*, son todas las notas que tengan dentro de su contenido un `[[Javascript]]` . 

Y al final solo le decimos que ordene de forma *alfabetica* por el nombre de la tecnología. 

Entiendo que para algunas personas puede ser un poco *complicado*, si tienes experiencia con *SQL* puede que te resulte muy *familiar*, pero espero que viendo el ejemplo de lo que *renderiza* el **plugin** y la estructura de cada *conocimiento* en general quede más claro. 

El tablero una vez renderizado por *Dataview* se ve así: 

<img src="/images/articles/Obsidian-Knowledgebase/Tech-board-note.png" alt="Renderizado del tablero de tecnologías" style="max-width:100%">

Como podemos ver, es una tabla que en la primer columna tiene el nombre de la *tecnología* o *concepto*, en la segunda columna, tiene el *icon* que yo le defino y en la tercera tiene una lista de todas las notas que hacen referencia a esa tecnología. 

## 💻 Nota de tecnología 
Si entramos a ver la *estructura* de una nota de **tecnología** la verdad es que es bastante simple. 

````
---
tag: tecnologia
icon: 🛻
---

# 🛻CQRS
```dataview
LIST
FROM [[]]
```
````

Solo tiene el *tag* `tecnologia` que lo *identifica* como una tecnología, *icono* que yo le defino, para hacer un poco más *sencilla* la *asociación* en mi cabeza al ver la lista de tecnologías y una *query* que muestra un poco de los mismo que el tablero general, muestra todas las notas que hagan *referencia* a esa tecnología, en el ejemplo, a **CQRS**. 

Una vez *renderizada* la nota se ve así: 

<img src="/images/articles/Obsidian-Knowledgebase/Tech-note.png" alt="Renderizado de la nota de tecnología de CQRS" style="max-width:100%">


## 📜 Nota de conocimiento 
Creo que la mejor forma de hacer que algo pueda *durar* en el tiempo, es hacer que eso que quieres hacer te implique la menor *resistencia* posible, ya que si tienes que búscar el cómo lo haces normalemente o tienes que tener muchas cosas en consideración vas a terminar haciendo *excepciones* que van a hacer que tu sistema no sea confiable. 

Por eso, las notas de *tecnología* o el tablero sí pueden llegar a ser algo *complejas*, pero se hacen una vez y ya, en cambio en el día a día vamos a querer agregar *conocimientos* y *recursos*. Esto debe de conllevar la menor *fricción* posible. 

Es por eso que la forma de definir la nota del *conocimiento* o *dato* relacionada a una tecnología es bastante simple, el único *requisito* es que esa nota tenga el *link* / `[[]]` a la nota de *tecnología* y si lo pensamos, es incluso muy *semántico hacerlo*. 

Por ejemplo, tengo esta nota sobre el *patrón Constructor Setter*, una forma de hacer objetos *mutables/inmutables* de forma dinámica. 

````md
# 👾 Constructor Setter 

Es un patrón de [[Arquitectura de Software|Arquitectura]] o de [[Patrones de diseño|diseño]]. 

Si necesitas un objeto mutable durante un tiempo y luego quieres hacerlo inmutable, puedes usar un patrón de diseño llamado "Constructor Setter" (también conocido como "Método Setter") en combinación con un indicador de estado. Aquí hay un ejemplo en [[CSharp]]: 

```csharp
public class MiObjetoMutable
{
    private bool esInmutable = false;
    private int propiedad1;
    private string propiedad2;

    public int Propiedad1
    {
        get => propiedad1;
        set
        {
            if (esInmutable)
                throw new InvalidOperationException("El objeto es inmutable.");
            
            propiedad1 = value;
        }
    }

    public string Propiedad2
    {
        get => propiedad2;
        set
        {
            if (esInmutable)
                throw new InvalidOperationException("El objeto es inmutable.");
            
            propiedad2 = value;
        }
    }

    public void HacerInmutable()
    {
        esInmutable = true;
    }
}

```
````

Como puedes ver, en la misma forma de *escribir* la información de la nota *emergen* las partes desde dónde la puedo *vincular* las *áreas de conocimiento* correspondientes, esto hace que las notas de esas *áreas de conocimiento* sean **confiables** porque prácticamente no conlleva *esfuerzo* el mantener el sistema.  

## 🤔 Conclusión 
Mi intención con el artículo era *compartir* el cómo *estructuro* mis notas para gestionar eficientemente los *conocimientos* o *recursos* que adquiero. También espero que este vistazo a mi sistema de organización sirva de *inspiración* para otros. Cada persona tiene su propio flujo de trabajo y necesidades únicas, por lo que este sistema puede adaptarse y *evolucionar* de muchas maneras. Si alguien tiene ideas sobre cómo podría mejorar o expandir este sistema serán más que bienvenidas. La colaboración y el intercambio de ideas son fundamentales para el desarrollo continuo y la mejora de nuestras prácticas de organización del conocimiento.

Es fundamental destacar la importancia de tener un sistema que se adapte a nuestra forma de pensar y trabajar, y que al mismo tiempo, requiera la menor fricción posible para su mantenimiento a largo plazo.

La clave de este sistema radica en su simplicidad y flexibilidad. Al emplear etiquetas, iconos y consultas Dataview, puedo organizar mis conocimientos de manera intuitiva y eficiente. La estructura de mis notas facilita la asociación y recuperación de información relevante. Por ejemplo, si alguna vez necesito recordar cómo crear objetos mutables/inmutables dinámicamente en C#, sé que esa información estará vinculada a mi nota sobre C#.

En resumen, compartir mi sistema de organización no solo es una forma de documentar mi propio proceso, sino también de destacar la importancia de mantener sistemas de gestión del conocimiento que sean accesibles y prácticos en el día a día. La simplicidad y la facilidad de uso son pilares fundamentales para garantizar la confiabilidad y eficacia de cualquier sistema de organización de conocimientos a largo plazo.