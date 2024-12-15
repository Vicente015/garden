---
title: "{{title}}"
subtitle: "{{subtitle}}"
category:
  - "[[tags/book]]"
  - "{{category}}"
author:
  - "{ author }": 
cover:
  "{ coverUrl }": 
genre: 
length:
  "{ totalPage }": 
isbn:
  "{ isbn10 }": 
isbn13:
  "{ isbn13 }": 
rating: 
topics: 
published:
  "{ publishDate }": 
created:
  "{ DATE:YYYY-MM-DD HH:mm:ss }": 
tags:
  - unread
  - book
---

%% run start
```ts
return `**${file.properties.title}** es un libro escrito por ${new Intl.ListFormat("es").format(file.properties.author)}`
```
%%

%% run end %%