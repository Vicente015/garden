---
title: XPath
date: 2023-04-14
tags:
- seed
- learnings
---

XPath es un lenguaje de consulta pra seleccionar y localizar elementos en documentos XML.

El formato básico de una expresión XPath consta de una serie de pasos separados por barras ("/"). Cada paso especifica un elemento o atributo en la ruta de acceso al elemento deseado. Por ejemplo:

Ejemplo 1: Para seleccionar todos los elementos "libro" en un documento XML:

```bash
/libreria/libro
```

Ejemplo 2: Para seleccionar todos los elementos "precio" que estén dentro de un elemento "libro" cuyo atributo "categoria" sea igual a "novela":

```bash
/libreria/libro[@categoria='novela']/precio
```

## Expresiones

| Expresión                                   | Descripción                                               |
| ------------------------------------------- | --------------------------------------------------------- |
| nombre_nodo                                 | Selecciona todos los nodos hijos del señalado             |
| /                                           | Selecciona desde el nodo raíz                             |
| //                                          | Selecciona los nodos en el documento que coincidan con el |
| señalado sin importar dónde estén colocados |                                                           |
| .                                           | Selecciona el nodo actual                                 |
| ..                                          | Selecciona el padre del nodo actual                       |
| @                                           | Selecciona atributos                                      |

***

| Expresión       | Resultado                                                                                                                          |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------|
| libro           | Selecciona todos los hijos del elemento libro                                                                                      |
| /libro          | Selecciona el elemento raíz libro Nota: Si la expresión comienza por la barra (/) siempre representa una ruta absoluta al elemento |
| libro/capitulo  | Selecciona todos los elementos capitulo que son hijos de libro                                                                     |
| //capitulo      | Selecciona todos los elementos capitulo sin importar donde están                                                                   |
| libro//capitulo | Selecciona todos los elementos capitulo que son descendientes de libro sin importar que lugar ocupan en la jerarquía de libro      |
| //@public       | Selecciona todos los atributos denominado                                                                                          |
## Predicados

Restringe la búsqueda a los nodos que cumplan con una condición.

Ejemplo:

```bash
/libro/capitulo[@num="1"]/parrafo
```


## Axes

## Operadores

## Funciones


