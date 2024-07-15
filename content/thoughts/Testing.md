---
title: Testing
date: 2024-05-01
tags:
  - seed
---

El *testing* es el proceso de ejecutar software de maneras específicas para garantizar que se comporte según lo previsto.

## Tipos de pruebas
Los nombres que se asignan a los diferentes tipos de pruebas suelen tener temas en común en todas las bases de código, pero no tienen definiciones exactas.

- Pruebas unitarias: tienen el menor alcance, suelen usarse para probar pequeñas partes del código, o código sin estado, de manera casi matemática: si proporciono tu código con las entradas X, Y y Z, el resultado debería ser A, B y C.
- Pruebas de integración: se prueba una pequeña agrupación de componentes, módulos, subsistemas u otras partes significativas de tu código para garantizar que funcionen correctamente entre sí. Estos tipos de tests pueden incluir dependencias reales como bases de datos, para confirmar que por ejemplo al ejecutar una función se añada contenido a la base de datos.
- Pruebas de regresión: garantiza que las funciones existentes sigan funcionando o que no se vuelvan a introducir errores después de una correción.
- Pruebas de extremo a extremo: suelen estar en la part superior de la pirámide pruebas, descruben una interaccion de experiencia completa con la app o web, por ejemplo en desarrollo web se podría implementar realizando pruebas como si accediera un usuario de prueba y realizara las acciones más importantes.

## Código Sostenible
El código sostenible es aquel que se puede mantener fácilmente a lo largo del tiempo. Para ello, es necesario que su diseño sea intuitivo, que su complejidad sea la mínima imprescindible y que esté bien cubierto por pruebas automatizadas.

### Reglas del diseño simple de Kent Beck
1. Pasar los test: obviamente, para que los test puedan pasar, debe haber test. Todavía hay demasiados proyectos que no tienen test y demasiados equipos que los ven como un extra idílico, inalcanzable o prescindible.
2. Revelar la intención: el código debe estar escrito con una intención notable.
3. No contener duplicidad.
4. Tener el menor número de elementos posible

Fuentes:
- https://web.dev/learn/testing/
- Libro: Código Sostenible, Carlos Blé Jurado