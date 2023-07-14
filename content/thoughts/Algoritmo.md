---
title: "Algoritmos"
date: 2023-07-09
tags:
- seed
- CS50
---

Un algoritmo es un conjunto de instrucciones que se deben de seguir para resolver un problema.

## [Big O notation](https://en.wikipedia.org/wiki/Big_O_notation)
La Notación O grande se refiere a una función matemática que describe el límite del comportamiento de una función que tiende a infinito.

En informática se usa para representar los tiempos de ejecución o la complejidad que puede tener un algoritmo.

## Algoritmos de búsqueda
La búsqueda es la forma en la resolvemos el problema de encontrar un valor particular en un [[thoughts/Array|conjunto de datos]].

### Lineal search (`O(n)`)
Comprueba valor por valor sin saltar.
La complejidad depende de la cantidad de valores, siendo `n` la cantidad de valores.

### Binary search (`O(log n)`)
Busca en una lista ordenada un valor comprobando la posición actual con el esperado.

Ejemplo: buscamos `C` en `[A,B,C,D]`

1. Compara `list[0]` con `C`, es pequeño -> seguir buscando.
2. Compara `list[3]` con `C`, es mayor -> retrocede.
3. Compara `list[2]` con `C`, ¡encontrado!

### Selection sort (`O(n²)`)
Se trata de ordenar un [[thoughts/Array|array]] buscando el valor más pequeño y colocando dicho valor en el primer puesto, una vez esté el primero, el segundo...

### Bubble sort (`O(n²)`)
Comprueba los valores de izquierda a derecha de dos en dos comparando dichos números, si es menor lo moverá a la izquierda de lo contrario seguirá, se acabarán quedando los grandes a la derecha y los pequeños a la izquierda.

### Merge sort (`O(n log n)`)
Divide el array en dos mitades, de pequeño a más grande comparando con la otra mitad.

## Recursividad
La recursividad es la capacidad de una función de llamarse a si misma.


