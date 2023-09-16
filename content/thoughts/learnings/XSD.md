---
title: XSD
date: 2023-03-23
tags:
- seed
- learnings
---

El XSD es un formato para describir el esquema de un XML.

## Elemento simple

Un elemento simple es un elemento que solo puede contener texto, no contiene ningún otro elemento ni atributos.

```xml
<xs:element name="xxx" type="yyy"/>
```

### Valor por defecto
```xml
<xs:element name="color" type="xs:string" default="red"/>
```

## Tipos más comunes

```
    xs:string
    xs:decimal
    xs:integer
    xs:boolean
    xs:date
    xs:time
```

## Atributos
```xml
<lastname lang="EN">Smith</lastname>
```
```xml
<xs:attribute name="lang" type="xs:string" use="required"/>
```

## Restricciones
Las restricciones se usan para limitar los valores que aceptamos para elementos o atributos.

| Constraint     | Description                                                                                             |
|----------------|---------------------------------------------------------------------------------------------------------|
| enumeration    | Defines a list of acceptable values                                                                     |
| fractionDigits | Specifies the maximum number of decimal places allowed. Must be equal to or greater than zero           |
| length         | Specifies the exact number of characters or list items allowed. Must be equal to or greater than zero   |
| maxExclusive   | Specifies the upper bounds for numeric values (the value must be less than this value)                  |
| maxInclusive   | Specifies the upper bounds for numeric values (the value must be less than or equal to this value)      |
| maxLength      | Specifies the maximum number of characters or list items allowed. Must be equal to or greater than zero |
| minExclusive   | Specifies the lower bounds for numeric values (the value must be greater than this value)               |
| minInclusive   | Specifies the lower bounds for numeric values (the value must be greater than or equal to this value)   |
| minLength      | Specifies the minimum number of characters or list items allowed. Must be equal to or greater than zero |
| pattern        | Defines the exact sequence of characters that are acceptable                                            |
| totalDigits    | Specifies the exact number of digits allowed. Must be greater than zero                                 |
| whiteSpace     | Specifies how white space (line feeds, tabs, spaces, and carriage returns) is handled                   |


### Restringir rango valores
```xml
<xs:element name="age">
  <xs:simpleType>
    <xs:restriction base="xs:integer">
      <xs:minInclusive value="0"/>
      <xs:maxInclusive value="120"/>
    </xs:restriction>
  </xs:simpleType>
</xs:element>
```

### Restricciones enums
```xml
<xs:element name="car">
  <xs:simpleType>
    <xs:restriction base="xs:string">
      <xs:enumeration value="Audi"/>
      <xs:enumeration value="Golf"/>
      <xs:enumeration value="BMW"/>
    </xs:restriction>
  </xs:simpleType>
</xs:element>
```

### Restricciones de patrones
Podemos definir una restricción en el contenido de un string usando [Regex](https://regexr.com).

Ejemplo, restringir 3 primeras iniciales:
```xml
<xs:element name="initials">
  <xs:simpleType>
    <xs:restriction base="xs:string">
      <xs:pattern value="[A-Z][A-Z][A-Z]"/>
    </xs:restriction>
  </xs:simpleType>
</xs:element>
```

### Restricciones de longitud
```xml
<xs:element name="initials">
  <xs:simpleType>
    <xs:restriction base="xs:string">
      <xs:pattern value="[A-Z][A-Z][A-Z]"/>
    </xs:restriction>
  </xs:simpleType>
</xs:element>
```

## Tipos genéricos
Podemos reutilizar un tipo de dato en varios elementos poniéndolo antes de declararlos, al inicio del esquema.

```xml
<xs:simpleType name="carType">
  <xs:restriction base="xs:string">
    <xs:enumeration value="Audi"/>
    <xs:enumeration value="Golf"/>
    <xs:enumeration value="BMW"/>
  </xs:restriction>
</xs:simpleType>

<xs:element name="car" type="carType"/>
```

## Elementos complejos
Un elemento complejo define un elemento XML que contiene otros elementos o atributos.

```xml
<employee>
  <firstname>John</firstname>
  <lastname>Smith</lastname>
</employee>
```
```xml
<xs:element name="employee">
  <xs:complexType>
    <xs:sequence>
      <xs:element name="firstname" type="xs:string"/>
      <xs:element name="lastname" type="xs:string"/>
    </xs:sequence>
  </xs:complexType>
</xs:element>
```

### Conteniendo otros elementos

* `<xs:sequence>`: indica que los siguientes elementos deben aparecer en ese orden en el XML.
* `<xs:all>`: especifica que los elementos hijos pueden aparecer en cualquier orden y cada elemento debe aparecer __al menos 1 vez__.
* `<xs:choice>`: indica que puede haber un elemento __u__ otro.

### Limitar nº ocurrencias
Podemos limitar cuantas veces un elemento puede estar.

```xml
<xs:element name="person">
  <xs:complexType>
    <xs:sequence>
      <xs:element name="full_name" type="xs:string"/>
      <xs:element name="child_name" type="xs:string" minOccurs="0"  maxOccurs="10"/>
    </xs:sequence>
  </xs:complexType>
</xs:element>
```

### Grupos de elementos
Podemos definir unos grupos con conjuntos de elementos para referenciarlos varias veces.

```xml
<xs:group name="persongroup">
  <xs:sequence>
    <xs:element name="firstname" type="xs:string"/>
    <xs:element name="lastname" type="xs:string"/>
    <xs:element name="birthday" type="xs:date"/>
  </xs:sequence>
</xs:group>

<xs:complexType name="personinfo">
  <xs:sequence>
    <xs:group ref="persongroup"/>
    <xs:element name="country" type="xs:string"/>
  </xs:sequence>
</xs:complexType>

<xs:element name="person" type="personinfo"/>
```

### Grupos de atributos
También podemos definir conjuntos de atributos.

```xml
<xs:attributeGroup name="personattrgroup">
  <xs:attribute name="firstname" type="xs:string"/>
  <xs:attribute name="lastname" type="xs:string"/>
  <xs:attribute name="birthday" type="xs:date"/>
</xs:attributeGroup>
```

## Elemento sustitución (nombres en inglés)
Los elementos de sustitución nos permiten declarar como una copia o enlace a una etiqueta usando un nombre distinto o en otro idioma.

__Deben declararse al principio del esquema.__

```xml
<xs:element name="nombre" type="xs:string"/>
<xs:element name="name" substitutionGroup="nombre"/>
```

## Ejemplos

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">

<!-- definition of simple elements -->
<xs:element name="orderperson" type="xs:string"/>
<xs:element name="name" type="xs:string"/>
<xs:element name="address" type="xs:string"/>
<xs:element name="city" type="xs:string"/>
<xs:element name="country" type="xs:string"/>
<xs:element name="title" type="xs:string"/>
<xs:element name="note" type="xs:string"/>
<xs:element name="quantity" type="xs:positiveInteger"/>
<xs:element name="price" type="xs:decimal"/>

<!-- definition of attributes -->
<xs:attribute name="orderid" type="xs:string"/>

<!-- definition of complex elements -->
<xs:element name="shipto">
  <xs:complexType>
    <xs:sequence>
      <xs:element ref="name"/>
      <xs:element ref="address"/>
      <xs:element ref="city"/>
      <xs:element ref="country"/>
    </xs:sequence>
  </xs:complexType>
</xs:element>

<xs:element name="item">
  <xs:complexType>
    <xs:sequence>
      <xs:element ref="title"/>
      <xs:element ref="note" minOccurs="0"/>
      <xs:element ref="quantity"/>
      <xs:element ref="price"/>
    </xs:sequence>
  </xs:complexType>
</xs:element>

<xs:element name="shiporder">
  <xs:complexType>
    <xs:sequence>
      <xs:element ref="orderperson"/>
      <xs:element ref="shipto"/>
      <xs:element ref="item" maxOccurs="unbounded"/>
    </xs:sequence>
    <xs:attribute ref="orderid" use="required"/>
  </xs:complexType>
</xs:element>

</xs:schema>
```




