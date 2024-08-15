---
title: Kata
date: 2023-10-09
tags:
  - seed
---

## Kata
Una kata es un ejercicio práctico realizado para practicar y resolver un problema.

Pueden estar enfocados en realizar buenas prácticas, refactorizar, etc.

Una de las plataformas más conocidas para realizar este tipo de prácticas es [codewars](https://codewars.com).

### Recursos
* [Repositorios con templates en distintos lenguajes](https://github.com/lean-mind/coding-dojo-templates).

## TDD
El [«Test-driven Development»](https://es.wikipedia.org/wiki/Desarrollo_guiado_por_pruebas) una metodología de desarrollo de software que involucra dos prácticas:

1. Escribar las [pruebas](https://es.wikipedia.org/wiki/Prueba_unitaria).
2. [Refactorización](https://es.wikipedia.org/wiki/Refactorizaci%C3%B3n).

Los pasos son los siguientes:

1. **Elegir un requisito:** Se elige de una lista el requisito que se cree que nos dará mayor conocimiento del problema y que a la vez sea fácilmente implementable.
2. **Escribir una prueba:** Se comienza escribiendo una prueba para el requisito.
3. **Verificar que la prueba falla:** Si la prueba no falla es porque el requisito ya estaba implementado o porque la prueba es errónea.
4. **Escribir la implementación:** Escribir el código más sencillo que haga que la prueba funcione. Se usa la expresión "Déjelo simple" ("Keep It Simple, Stupid!"), conocida como [principio KISS](https://es.wikipedia.org/wiki/Principio_KISS "Principio KISS").
5. **Ejecutar las pruebas automatizadas:** Verificar si todo el conjunto de pruebas funciona correctamente.
6. **Eliminación de duplicación:** El paso final es la [refactorización](https://es.wikipedia.org/wiki/Refactorizaci%C3%B3n "Refactorización"), que se utilizará principalmente para eliminar [código duplicado](https://es.wikipedia.org/wiki/C%C3%B3digo_duplicado "Código duplicado"). Se hace un pequeño cambio cada vez y luego se corren las pruebas hasta que funcionen.
7. **Actualización de la lista de requisitos:** Se actualiza la lista de requisitos tachando el requisito implementado. Asimismo se agregan requisitos que se hayan visto como necesarios durante este ciclo.

## Pair programming
El [«Pair programming»](https://es.wikipedia.org/wiki/Programaci%C3%B3n_en_pareja) es una técnica en la que dos programadores trabajan en un equipo. Mientras que uno el *conductor* escribe el código, el *observador* deberá revisar lo que se programa. Las dos personas cambian de rol frecuentemente.
