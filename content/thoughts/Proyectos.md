---
title: Proyectos
date: 2023-11-03
tags:
  - evergreen
---

Esta es una lista de proyectos que he acabado o que estoy manteniendo.

## D-Safe — Un bot de moderación para comunidades de Discord
[Web](https://discordsafe.com/), [Directorio de apps](https://discord.com/application-directory/461171501715161108)

D-Safe es el proyecto más grande y ambicioso que he logrado, un bot de Discord para moderar comunidades que llegó a formar parte de más de 40 mil servidores. Enfocado en facilitar las tareas más complicadas de la moderación *online*, proporcionando herramientas de Auto Moderación que tomaba acciones preventivas contra usuarios maliciosos, Filtros para evitar mensajes *spam* y enlaces a sitios inseguros, Verificación con distintos modos incluyendo el captcha, y muchas otras características.

- Desarrollé una pasarela de pago y un sistema de suscripciones utilizando la plataforma de Stripe.
- Tomé la iniciativa para realizar migraciones a otra base de datos.
- Redacté documentación tanto técnica e interna como pública para usuarios donde se exponían las diversas funcionalidades del bot.
- Formé y organicé un equipo de desarrolladores voluntarios en distintas zonas horarias.
- Adapté el código a la [[thoughts/i18n|i18n]] haciendo disponible el bot en Español, Inglés y Portugués gracias a traducciones voluntarias.
- Enfrenté retos de escalabilidad donde tuve que enfrentarme a hacer el código escalable a grandes cantidades de eventos por segundo.

**Construido con:** Node.js, Prisma, PostgreSQL, SQLite, Redis, Express, Stripe.

**El proyecto fue cerrado en 2022, [leer más](https://discordsafe.com/blog/eol).**

## Instatus.ts — Una librería de Node.js
[GitHub](https://github.com/Vicente015/instatus.ts), [Web](https://projects.vicente015.dev/projects/Instatusts), [Documentación](https://instatus.vicente015.dev/)

Instatus.ts es una biblioteca para interactuar con la API de Instatus, una plataforma que permite monitorizar el estado de sitios web y sus componentes.

**Construido con:** TypeScript.

## Life Rhythm — Una app para medir tu felicidad
[GitHub](https://github.com/Vicente015/life-rhythm-app), [[Ritmo de la vida|Diario]]

"Life Rhythm" *(nombre no definitivo)* es una aplicación cuyo objetivo es medir y representar el ritmo de la vida y la felicidad de una persona. La aplicación se centra en parametrizar la felicidad y mostrarte un gráfico que puedes personalizar para centrarte en ver tu estado en 1 mes, 3 meses o un año.

**Construido con:** React Native, Expo.

## AnnounceIt — Envía anuncios en varios idiomas en Discord

[GitHub](https://github.com/Vicente015/AnnounceIt), [Web](https://projects.vicente015.dev/projects/AnnounceIt), [Directorio de apps](https://discord.com/application-directory/725373172391739402)

Creado para potenciar la comunicación efectiva en servidores de Discord con una comunidad multicultural. Facilita la lectura de anuncios a través de botones y la creación de anuncios de forma intuitiva con diálogos integrados directamente en la interfaz de Discord.

**Construido con:** TypeScript, MongoDB.

## Lovely — Genera cartas encantadoras
[GitHub](https://github.com/vicente015/lovely)

Crea cartas o webs encantadoras y customizables a partir de un archivo [*Markdown*](https://es.wikipedia.org/wiki/Markdown) para enviarlas a tus seres queridos.

**Construido con:** Lume, Deno, TypeScript.

## Buscador de libros — Busca libros en el Proyecto Gutenberg
[GitHub](https://github.com/Vicente015/CursoReactMidu/tree/main), [Web](https://curso-react-01-buscador-libros.vercel.app/)

Este proyecto lo realicé como práctica de React, es un buscador de libros interactivo para el [«Proyecto Gutenberg»](https://es.wikipedia.org/wiki/Proyecto_Gutenberg) usando la API de [«Gutendex»](https://gutendex.com/), enfocado en la usabilidad y la [[thoughts/T3chFest/Soy mayor, no idiota. La brecha digital y las claves del diseño inclusivo|accesibilidad]].

**Construido con:** React, Ariakit, TailwindCSS, Vite.
