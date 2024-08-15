---
title: "{{title}}"
subtitle: "{{subtitle}}"
category:
  - "[[templates/Book]]"
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
year:
  "{ publishDate }": 
rating: 
topics: 
created:
  "{ DATE:YYYY-MM-DD HH:mm:ss }": 
tags:
  - books
  - unread
---
%% run start
```ts
return `**${file.properties.title}** es un libro escrito por ${new Intl.ListFormat("es").format(file.properties.author)}`
``` 
%%