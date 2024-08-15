---
title: "Mi biblioteca 📚"
---

## Por leer

### Ficción

%% run start
```ts
const formatBook = (book) => `**[[${book.file.path}|${book.title}]]** por ${new Intl.ListFormat("es").format(book.author)}`

return dv.markdownList(
	dv.pages('#book')
		.where(p => p.tags?.includes("unread") && p.genre?.includes("fiction"))
		.map(formatBook)
)
``` 
%%
- **[[thoughts/books/El PRINCIPITO.md|El Principito]]** por Antoine de Saint-Exupéry
- **[[thoughts/books/El Alquimista.md|El Alquimista]]** por Paulo Coelho

%% run end %%

### No ficción

%% run start
```ts
const formatBook = (book) => `**[[${book.file.path}|${book.title}]]** por ${new Intl.ListFormat("es").format(book.author)}`

return dv.markdownList(
	dv.pages('#book')
		.where(p => p.tags?.includes("unread") && p.genre?.includes("non-fiction"))
		.map(formatBook)
)
``` 
%%
- **[[thoughts/books/Una ética de la Tierra.md|Una ética de la Tierra]]** por Aldo Leopold

%% run end %%

## Leyendo

%% run start
```ts
const formatBook = (book) => `**[[${book.file.path}|${book.title}]]** por ${new Intl.ListFormat("es").format(book.author)}`

return dv.markdownList(
	dv.pages('#book')
		.where(p => p.tags.includes("reading"))
		.map(formatBook)
)
``` 
%%
- **[[thoughts/books/The Boy Who Could Change the World.md|The Boy Who Could Change the World]]** por Aaron Swartz
- **[[thoughts/books/Comer para no morir.md|Comer para no morir]]** por Gene Stone y Michael Greger
- **[[thoughts/books/Código sostenible cómo programar código fácil de mantener.md|Código sostenible : cómo programar código fácil de mantener]]** por Carlos Blé Jurado

%% run end %%

## Leídos

%% run start
```ts
const formatBook = (book) => `**[[${book.file.path}|${book.title}]]** por ${new Intl.ListFormat("es").format(book.author)}`

return dv.pages("#book")
.where(p => p.tags.includes("read"))
.groupBy(p => dv.date(p.last).year)
.sort(g => g.key, "desc")
.map((group) =>
	`### ${group.key}\n` +
	dv.markdownList(group.rows.map(formatBook))
)
.join("\n")
``` 
%%
### 2024
- **[[thoughts/books/Un Mundo Feliz.md|Un Mundo Feliz]]** por Aldous Huxley
- **[[thoughts/books/El marciano.md|El marciano]]** por Andy Weir

### 2022
- **[[thoughts/books/1984.md|1984]]** por George Orwell

%% run end %%
