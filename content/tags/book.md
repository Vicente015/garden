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
- **[[books/El PRINCIPITO|El Principito]]** por Antoine de Saint-Exupéry
- **[[books/El Alquimista|El Alquimista]]** por Paulo Coelho

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
- **[[books/Una ética de la Tierra|Una ética de la Tierra]]** por Aldo Leopold

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
- **[[books/The Boy Who Could Change the World|The Boy Who Could Change the World]]** por Aaron Swartz
- **[[books/Comer para no morir|Comer para no morir]]** por Gene Stone y Michael Greger
- **[[books/Código sostenible cómo programar código fácil de mantener|Código sostenible : cómo programar código fácil de mantener]]** por Carlos Blé Jurado

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
- **[[books/Un Mundo Feliz|Un Mundo Feliz]]** por Aldous Huxley
- **[[books/El marciano|El marciano]]** por Andy Weir

### 2022
- **[[books/1984|1984]]** por George Orwell

%% run end %%
