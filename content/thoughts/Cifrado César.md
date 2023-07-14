---
title: "Cifrado César"
date: 2023-07-05
tags:
- seed
- CS50
---

El cifrado césar es una de las técnicas de [[thoughts/Encriptación|encriptación]] más simples y usadas.

Consiste en un cifrado por sustitución en el que una letra en el texto original es reemplazada por otra letra que se encuentra un número fijo de posiciones más adelante en el [alfabeto](https://es.m.wikipedia.org/wiki/Alfabeto "Alfabeto").

![[thoughts/images/Pasted image 20230705131452.png]]

Ejemplo de cifrado César usando desplazamiento de seis caracteres hacia la derecha:
```
Texto original: ABCDEFGHIJKLMNÑOPQRSTUVWXYZ  
Texto codificado: GHIJKLMNÑOPQRSTUVWXYZABCDEF
```