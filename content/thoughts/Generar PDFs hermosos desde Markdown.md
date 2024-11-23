---
title: Generar PDFs hermosos desde Markdown
date: 2023-09-21
tags:
  - seed
---

Recientemente, en una búsqueda por mejores alternativas a las gigantescas plataformas de documentos basadas en la nube que me den mayor [[thoughts/Local-first software|control sobre mis datos y archivos]], descubrí  [*Deliverance*](https://github.com/pojntfx/deliverance): una herramienta para publicar documentos en varios formatos a partir de un archivo Markdown. Usa [*Pandoc*](https://pandoc.org/) un «conversor de documentos universal» con la plantilla [*Eisvogel*](https://github.com/Wandmalfarbe/pandoc-latex-template/) por debajo.

![[thoughts/images/Pasted image 20230921214116.png]]
_Muestra de cómo se ve un archivo generado por dicha herramienta._

> ¿A quién no le gustaría ser dueño de sus documentos y poder generar uno bonito, profesional, con soporte a bloques de código y tan solo centrarse en escribir?

Lamentablemente no conseguí que me funcionara debido a que necesitas instalar `pandoc`, que resulta sencillo hasta que empieza a dar errores por compatibilidad con funciones o fuentes que también tienes que instalar aparte.

La solución es instalar un grupo de paquetes que contienen la mayoría de extensiones/paquetes (`texlive-full`), el problema es que requiere un montón de paquetes y pesan demasiado ¿casi **3GB** para hacer bonito un PDF? 😢
![[thoughts/images/Pasted image 20230921213423.png]]

## Usando contenedores
Como yo tan solo necesitaba generar un PDF y no todas las características que incluye la herramienta así que decidí usar las herramientas por separado.
Por suerte, podemos ejecutar la herramienta [dentro de un contenedor](https://github.com/Wandmalfarbe/pandoc-latex-template/tree/master#docker-image) de una forma más sencilla porque usa una imagen que ya viene con todo lo necesario instalado.

No explicaré como instalar [Docker](https://www.docker.com/) o [Podman](https://podman.io/), así que te recomiendo que busques la mejor manera para hacerlo en tu sistema operativo.

* Con Docker:
	- `--volume` le especifica que monte el directorio actual en `/data` donde el contenedor puede acceder.
	- `--user` especifica el ID de usuario con el que ejecutar el contenedor.
	- A continuación le indicas el archivo Markdown como entrada y el archivo pdf como salida.
	- `--template` indica la plantilla.
	- `--listings` activa la generación de bloques de código.

```shell
docker run --rm \
       --volume "$(pwd):/data" \
       pandoc/extra ARCHIVO_ENTRADA.md -o ARCHIVO_SALIDA.pdf --template eisvogel --listings
```

* Con Podman:
Personalmente tuve que usar Podman en mi sistema así que también dejo por aquí como con Podman sin estar instalado como *root*.
Básicamente ejecuta el contenedor como root y le añado el sufijo `:Z` por [cómo funcionan los permisos en Podman](https://www.tutorialworks.com/podman-rootless-volumes/#podman-unshare-lets-you-run-a-command-in-the-same-user-namespace-as-your-containers).

```shell
podman run --rm -v "$(pwd):/data:Z" pandoc/extra ARCHIVO_ENTRADA.md -o ARCHIVO_SALIDA.pdf --template eisvogel --listings
```

Probablemente quieras hacerte un script que te facilite poner ese comando tan largo ;).

## Bóveda de Obsidian
Ahora que puedo generar los documentos correctamente, necesito una herramienta para poder escribir y gestionar los archivos Markdown así que usaré [Obsidian](https://obsidian.md/), además pone los enlaces correctamente al pegar imágenes por lo cual es súper cómodo.

Antes, unas configuraciones previas.

* Crea una carpeta donde se guardarán tus archivos (ej: contenido) y especifica: `Opciones > Archivos y enlaces > Carpeta en la que crear nuevas notas`.
* Desactiva `Opciones > Archivos y enlaces > Wikilinks` para que se use el formato de enlaces de imágenes por defecto.
* Crea una carpeta donde se guardarán las imágenes que pegues en archivos y especifica: `Opciones > Archivos y enlaces > Ubicación de la carpeta de adjuntos`.
* Crea la carpeta `templates` y especifica: `Opcion > Plantillas > Ubicación de la carpeta de plantillas`, aquí también puedes cambiar el formato por defecto de las fechas.

### Plantilla
Para poder hacer uso de todas las características, hay que incluir algunos metadatos al principio del archivo, así que crearé una plantilla dentro del directorio creado anteriormente para usarla en la creación de nuevos archivos. El título y la fecha se completa automáticamente.

Para usar una plantilla en Obsidian: `Ctrl + P` > `Plantillas: Insertar plantilla`.

```markdown title="templates/Note.md"
---
title: "{{title}}"
date: "{{date}}"
author:
  - TU_NOMBRE
keywords: []
subtitle: "Subtitulo"
lang: es
titlepage: true
---

Contenido
```

## Personalización
Bien, ahora la parte divertida 😄.

### Variables de personalización
La plantilla tiene una [colección de variables](https://github.com/Wandmalfarbe/pandoc-latex-template/tree/master#custom-template-variables) para personalizar el aspecto visual.
Algunas interesantes:
* `-M titlepage=true`: incluye una página de presentación con el título y el autor.
* `-M toc=true -M toc-own-page=true`: incluye una página de índice separada del resto.

### Opciones de Pandoc
Las [opciones](https://github.com/Wandmalfarbe/pandoc-latex-template/tree/master#examples) permiten cambiar las características del documento y añadir secciones numeradas, sintaxis de código o cambiar el lenguaje del documento.

## Resultado

![[thoughts/images/Pasted image 20230921232014.png]] ![[thoughts/images/Pasted image 20230921232027.png]] ![[thoughts/images/Pasted image 20230921232042.png]]
