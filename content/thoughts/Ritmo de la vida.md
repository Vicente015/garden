---
title: Midiendo el ritmo de la vida
date: 2022-07-25
lastmod: 2022-09-28
tags:
- seed
---

A veces la vida se siente como si tuviera un ritmo, como si de olas se tratase, estados de ánimos que suben y bajan.

Alto's Odyssey es un juego muy lineal en el cual el jugador simplemente tiene que recorrer un desierto infinito deslizándose sobre las dunas con su tabla, es increíblemente relajante porque tan solo tienes que centrarte en cuando dar el salto correcto y en ver como toda la estética se une.

Cuando lo jugué una aburrida tarde de verano jamás pensé que me fuera a sentir tan representado con ese simple personaje cuya única función es dejarse llevar por la corriente y tratar de no caerse en algunos abismos que hay por el camino.

![[thoughts/images/altosgame.png]]

El otro día, dando un paseo mientras observaba el mar me quedé un rato mirando las olas y después de un tiempo me fijé en como parecían representar picos y ritmos en línea.

![[thoughts/images/waves-visualization.jpg]]

Todo aquello me llevó a pensar, ¿y si pudiéramos representar el ritmo de la vida? ¿y si pudiéramos visualizar ese ritmo en una aplicación de salud mental?

![[thoughts/images/visualizacion-felicidad.png]]

## Parametrizando

Entonces me puse a pensar en formas de parametrizarlo, para [medir una frecuencia](https://es.wikipedia.org/wiki/Frecuencia_card%C3%ADaca) existe la siguiente fórmula:

$$
f = \frac{n \ veces}{T}
$$

Por ejemplo, todos conocemos la frecuencia cardíaca:

$$
f = \frac{n \ latidos}{minuto}
$$

Pero ¿qué contamos y qué tiempo tendríamos en cuenta?

Creo que la mejor forma sería contar el número de veces que te sientes feliz y el tiempo podría ser como queramos visualizarlo, en días, meses o años.

$$
f = \frac{felicidad}{dia}
$$

## ¿Cómo medimos la felicidad?

Imagina que te sientes [*sin problemas, hidratado, feliz, en tu línea, centrado y floreciente*](https://knowyourmeme.com/memes/unbothered-moisturized-happy-in-my-lane-focused-flourishing) y quieres registrar ese momento de felicidad para que sea representado.

![[thoughts/images/Pasted image 20231129120703.png|600]]

¿Cómo calificamos nuestra felicidad? ¿qué valor le damos? ¿de qué forma la medimos?
Esto se vuelve complicado porque puedes no sentirte ni triste ni feliz, algo neutro, o no saber identificar bien qué es lo que sientes.

No hay un método preciso para medir la felicidad científicamente, lo mejor que podemos hacer son reportes propios, preguntarnos a nosotros mismo.[^1]

La felicidad tiene un significado distinto para cada persona, es subjetiva y depende de las experiencias, bienestar general y muchísimos más factores.

## Felicidad momentánea y felicidad general

Podemos dividir la felicidad en dos tipos: la felicidad momentánea que considera nuestra estado actual y emociones y la felicidad general que considera nuestras experiencias, el bienestar y nuestra percepción general sobre nosotros.[^1]

Por ejemplo podemos estar feliz momentaneamente por pasar un buen momento con nuestros amigos o familia pero no estar tan feliz generalmente porque estamos teniendo dificultades en otros aspectos de la vida como laboral, amoroso, etc.

La forma en la nos percibimos, como interpretamos nuestras experiencias y en los que nos centramos y pensamos tiene un gran impacto en la forma en la que sentimos y por lo tanto medimos nuestra felicidad.

> “Happiness, more than anything, is a state of mind, a way of perceiving and approaching ourselves and the world in which we reside.”
>
> \- Sonja Lyubomirsky, The How of Happiness: A Scientific Approach to Getting the Life You Want

## Retos

Uno de los retos principales del proyecto es pensar en la manera correcta de introducir tu estado en la app.

Algunas de las opciones son:

* Botón de feliz (suma) y botón de triste (resta).
* Escala/rango del 1-10.
* Emoticonos (por ejemplo 5) con caritas que representen los distintos estados.
* Memes, la mejor forma para la generación z, identificarse con el meme de un gato, aunque esta me parece una idea genial el principal problema sería el copyright de las imágenes.

## Diario

### `06/08/22`
Primeros diseños y prototipo.

![[thoughts/images/life-rhythm.png]] ![[thoughts/images/Pasted image 20220806233955.png]] ![[thoughts/images/Pasted image 20220806234022.png]]

## Pendiente:
* Relacionar diseño y desarrollo de la app.
* Relacionar con perduración de datos? registro de los recuerdos?
* Actualizar diario
* Lanzar versión 1.0 de la app

[^1]: Fuente: [Estudio](https://positivepsychology.com/measure-happiness-tests-surveys)
[^2]: Fuente: [YouTube](https://youtu.be/_7EqdyU_nGw)
