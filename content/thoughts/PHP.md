---
name: "PHP"
date: 2023-09-10
tags:
 - seed
---

Es un lenguaje de programación interpretado del lado del servidor y de uso general que se adapta especialmente al desarrollo web.

Para denominar código de PHP se deben de indicar las **etiquetas de apertura y cierre**.

```php
<?php
echo "Hola mundo";
?>
```

## Mezcla con [HTML](thoughts/HTML.md)
Podemos mezclar etiquetas de [[thoughts/HTML|HTML]] con etiquetas de PHP y con ello hacer [[thoughts/HTML|HTML]] condicional.

```php
<?php if ($expresión == true): ?>
  <p>Esto se mostrará si la expresión es verdadera.</p>
<?php else: ?>
  <p>En caso contrario se mostrará esto.</p>
<?php endif; ?>
```

## [Variables](https://www.php.net/manual/es/language.variables.basics.php)
Las variables se representan con un signo de dólar `$` seguido por el nombre de la variable.

Las variables por defecto se asignan por valor pero también se pueden asignar por referencia usando el operador `&`.

```php
<?php
$foo = 'Bob';                // Asigna el valor 'Bob' a $foo
$bar = &$foo;                // Referenciar $foo vía $bar.
$bar = "Mi nombre es $bar";  // Modifica $bar...
echo $bar;
echo $foo;                   // $foo también se modifica.
?>
```

### [Ámbito de las variables](https://www.php.net/manual/es/language.variables.scope.php)
El ámbito de la variable depende del contexto dentro del que la variable está definida.

Cuando definimos una variable en el interior del script el ámbito será local y se podrá usar en todo el script, cuando sea definida dentro de una función solo se podrá acceder en el ámbito local de la función.

#### Ámbito global
Podemos defininar el ámbito de una variable como global usando la palabra clave `global`.

```php
<?php
$a = 1;
$b = 2;

function Suma()
{
    global $a, $b;

    $b = $a + $b;
}

Suma();
echo $b; # Devuelve 3
?>
```

#### [Superglobales](https://www.php.net/manual/es/language.variables.superglobals.php)
Las superglobales son variables internas que están disponibles en todos los ámbitos.

## [Constantes](https://www.php.net/manual/es/language.constants.syntax.php)

* Definición de constantes con `define`.
```php
<?php
define("CONSTANTE", "Hola mundo.");
echo CONSTANTE; // muestra "Hola mundo."
?>
```

* Definición de constantes usando `consts`.
```php
<?php
const CONSTANTE = 'Hola Mundo';

echo CONSTANTE;
?>
```

## Operadores
* [Operadores aritméticos](https://www.php.net/manual/es/language.operators.arithmetic.php)
* [Operadores de comparación](https://www.php.net/manual/es/language.operators.comparison.php)
* [Operadores de incremento/decremento](https://www.php.net/manual/es/language.operators.increment.php)

## [Estructuras de datos](https://www.php.net/manual/es/language.types.php)

## Estructuras de control
Además de las estructuras de control básicas y típicas cabe recalcar las siguientes:

### [`include`](https://www.php.net/manual/es/function.include.php)
Incluye y evalúa el archivo especificado.

También se puede juntar con los operadores condicionales para incluir un trozo de código de forma condicional.

```php
vars.php
<?php
$color = 'verde';
$fruta = 'manzana';
?>

test.php
<?php
echo "Una $fruta $color"; // Una

include 'vars.php';

echo "Una $fruta $color"; // Una manzana verde
?>
```

### [`require`](https://www.php.net/manual/es/function.require.php)
Es idéntico a [include](#include) excepto que en caso de fallo producirá un error fatal y dentendrá la ejecución del script.

## Funciones

### Funciones internas

### Funciones definidas por el usuario
```php
<?php
<?php
function foo($arg_1, $arg_2, /* ..., */ $arg_n)
{
    echo "Función de ejemplo.\n";
    return $valor_devuelto;
}
?>
?>
```
