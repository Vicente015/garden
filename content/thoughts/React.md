---
title: React
date: 2023-09-14
tags:
- seed
- learnings
---

React es una de las bibliotecas más importantes para construir en la web, se usa principalmente para construir interfaces de usuario.
React __no es un framework__, se catalogaría mejor como una librería. React además puede ser usado en más escenarios aparte de la web.

El objetivo principal de React es minimizar los errores que ocurren cuando los desarrolladores construyen interfaces de usuario. Esto lo hace mediante el uso de componentes, piezas de código lógicas y auto-contenidas que describen una parte de la UI. Estos componentes se pueden juntar para crear una interfaz de usuario completa, y React abstrae la mayor parte del trabajo.

## Abstracción
La abstracción es un método que pretender simplificar un concepto para no tener que entender cómo funcionan los sistemas complejos por debajo.

## Contenidos
- Resumen sobre React, entendiendo conceptos.
- Introducción a JSX
- Componentes, props, estados, eventos
- Hooks básicos
- Hooks avanzados
- Muchos ejemplos prácticos
- Estructuras de carpetas, enrutado
- Enrutador desde cero
- Contexto, estados globales
- [[thoughts/Typescript|Typescript]], buenas prácticas, Docker
- [[thoughts/Testing|Testing]], testing end-to-end tdd, lazy loading, import dinámicos
- React Query, custom hooks

### Recursos
- Documentación en beta, https://beta.es.reactjs.org/
- Wiki con preguntas frecuentes, https://reactjs.wiki
- Developer tools, https://beta.reactjs.org/learn/react-developer-tools

## Qué es
[React](https://beta.es.reactjs.org/) es una biblioteca de JavaScript para construir interfaces de usuario independientemente de la plataforma, se puede usar para construir aplicaciones web, móviles o de terminal.

* Declarativo, nos permite crear estas interfaces de una manera muy sencilla.
* Basado en componentes, los componentes son piezas de la interfaz que podemos reutilizar, si cambiamos algo en un componente se cambiará en todas las partes donde se use.
* Universal, se puede ejecutar tanto desde el lado del cliente como desde le servidor.

React es una biblioteca de código abierto creada por Meta/Facebook, se creó en 2011 como una forma de simplificar las interfaces de usuario, se creó porque era muy difícil trabajar con formularios.

## Código imperativo
Es una forma de escribir código declarando implícitamente cómo lo tiene que hacer.

Ejemplo de código usando librerías de React en HTML puro:
```js
const button = React.createElement('button', { 'data-id': 123 }, 'Button 1')
root.render(button)
```

## Código declarativo
Es una forma de escribir código describiendo lo que queremos que haga.

Ejemplo de código usando JSX:
```js
<React.Fragment>
	<button data-id="123">Button 1</button>
</React.Fragment>
```

## Conceptos React

### Reactivo
Refleja los cambios en la interfaz volviendo a renderizar.

En React hay dos razones por las que un componente se puede volver a renderizar:
* Ha cambiado de estado.
* Se ha cambiado al padre y por lo tanto se propaga y se vuelven a renderizar en forma de árbol hacía abajo.

### Virtual DOM
En lugar de volver a redenrizar toda la página lo único actualiza es aquello que cambia.

## [JSX](https://facebook.github.io/jsx/)
Es una extensión de ECMAScript que está basada en XML y nos permite programar de una forma mucho más declarativa y menos verbosa.

Es una extensión de JavaScript, escribes una especie de XHTML donde describes la interfaz que quieres crear.

### Expresiones
Usando llaves permite evaluar expresiones. Permite usar variables, ejecutar una función, etc.

```js
const name = 'Miguel'
<h1>Hola, {name}</h1>
<strong>Numero aleatorio {Math.random()}</strong>
```

Recordatorio: no serviría poner un `if` u otra estructura porque no es una expresión, es una declaración.

## Transpilador
Un transpilador convierte JavaScript y lo transforma.
Cuando usamos JSX tiene que pasar por un proceso de traspilación usando dichas herramientas para poder convertirlo a [[thoughts/HTML|HTML]]/JS entendible por el navegador, cuando escribimos JSX no estamos escribiendo HTML directamente, estamos escribiendo JavaScript.

Transpiladores conocidos:
- Babel
- SWC

## Código inicial
Para poder trabajar con React en un proyecto debemos tener la siguiente estructura y declarar lo siguiente:

En el `index.html` debe crear un div principal __llamado root o main__ y cargar el jsx principal con la etiqueta script.

```html
<!DOCTYPE html>
<html lang="en">
  <head>...</head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

A continuación nuestro módulo principal que puede ser un archivo `.js`/`.jsx` debe crear un root y renderizarlo.

El siguiente código lo que hace es crear un root seleccionado el div root que creamos anteriormente y renderizar a partir de este incorporando nuestro componente principal `<App />`.

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

```

## Componentes
En React todo es un component, un componente es una función que devuelve un elemento.
* Se escriben en **PascalCase** para que React diferencie y no  genere conflicto con elementos HTML, se declaran de forma imperativa, su nombre no indica lo que hace `createButton` sino más bien lo que mostrar `Button`.

```jsx
const Button = ({ text }) => {
  return (
    <button>{text}</button>
  )
}

ReactDOM.createRoot(root).render(
  <React.Fragment>
    <Button text='Texto1' />
    <Button text='Texto2' />
  </React.Fragment>
)
```

### Keys en los componentes
Cuando renderizamos componentes de una lista (ej: usuarios obtenidos de la base de datos) debemos asignarle una clave única al componente pasado como [prop](#props).

```jsx
const users = [
  { name: 'Vicente', userName: 'vicente015' },
  { name: 'Manolo', userName: 'manolo12' }
]

export function App () {
  return (
    <section className='tw-follows'>
      {
        users.map(({ isFollowing, name, userName }) => (
          <TwitterFollowCard
            key={userName}
            // La key debe ser un identificador único de dichos datos, no debe ser arbitrario (ej Math.random)
            // id db > username > index
            userName={userName}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}
```

## Estilos en React
* Estilos en línea
```jsx
<div style={{ color: red }}></div>
```
* Declarar aparte e importar
```jsx
import './App.css'
```

### Renderizado condicional
Se renderiza una cosa u otra dependiendo de una condición.

```jsx
const text = isFollowing ? 'Siguiendo' : 'Seguir'
<span>
	{text}
</span>
```

## Componente vs elemento
Podríamos decir que un componente es una factoría de elementos, un componente sería una función que al ejecutarla te devuelve elementos. React renderiza elementos.

## Props
Las 'props' son argumentos o estados que se le pasan a los componentes, puede ser cualquier tipo de dato, incluso un elemento, deben ser inmutables, es decir que no se pueden modificar después.

* **Los props deben tratarse como inmutables**, no deben ser modificados directamente, cuando tengan que ser actualizados debe hacerse una copia.

### Prop `children`
La prop children es todo en lo que envueltas el elemento.

```jsx
<Componente>Esto sería el children</Componente>
// Desde el componente se obtedría así:
function Componente ({ children }) {}
```

## Estados
Un estado es una propiedad que altera la interfaz, responde a los cambios del usuario.

* **Los estados deben tratarse como inmutables**, no deben ser modificados directamente, cuando tengan que ser actualizados debe hacerse una copia.
* La actualización del estado es **asíncrono**.

```jsx
const [state, setState] = useState(null)

const newState = true
setState(newState)
console.log(state) // null
// Devuelve aún el estado anterior porque la ejecución del cambio de estado es asíncrono por lo que no interrumpe la ejecución y la siguiente línea se ejecuta
```

## Hooks
Los hooks permiten funcionalidades a los componentes o poder ejecutar código arbitrario cuando ocurran ciertas cosas en componentes.

- **Los hooks no pueden estar dentro de una condición, siempre en el cuerpo del componente.**

### `useState`
Permite interactuar con un estado, cada vez que cambia dicho estado React re-renderiza el componente para hacer notar los cambios.

### `useEffect`
Nos permite ejecutar código arbitrario cuando __se monta el componente__ en el DOM y cada vez que cambien las dependencias que nosotros le indiquemos. **Cuando usas un useEffect deberías considerar hacer un custom hook.**

Ejemplo: para enviar datos nuevos a una DB, suscribirse a un evento

```jsx
import { useState, useEffect } from 'react'
const Componente = () => {
useEffect(codeToExecute, listOfDependencies)

useEffect(() => {
  // Cada vez que se renderize nuestro componente
  console.debug('Código a ejecutar')
}, [dependencies]) // La lista de dependencias es opcional

useEffect(() => {
  // Como minimo se ejecuta una vez, cuando se renderiza por primera vez
  console.log('useEffect')
}, [])
```

#### Cleanup
Cuando dentro del `useEffect` devolvemos un callback este se interpreta como un __cleanup__, una función que se ejecuta para limpiar el efecto (dejar de escuchar eventos, etc) cada vez que se desmonte o se actualicen dependencias.

Segundo argumento:
- `[]` => solo se ejecuta una vez cuando se monta
- `[enabled]` => se ejecuta cuando cambia enabled y se monta
- `undefined` => se ejecuta cada vez que se renderiza

```jsx
useEffect(() => {
    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    // Limpieza del efecto
    // Se ejecuta solo cuando se desmonte el componente o actualice dependencias
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])
```

### `useRef`
Te permite crear una referencia mutable que persiste durante todo el ciclo de vida del componente, muy útil para guardar un elemento que pueda mutar (contador, identificador, elemento del DOM) y cada vez que cambie no se vuelve a renderizar.

```jsx
const inputRef = useRef()

const handleClick = () => {
	const value = inputRef.current.value
}

<input onClick={handleClick} ref={inputRef} />
```

### `useMemo`
Hace que un cálculo solo se haga cuando se cambien las dependencias indicadas evitando que se haga constantemente cuando se re-renderiza un componente.

**❗ OJO:** Dentro del cuerpo de un customHook todo se vuelve a ejecutar cuando se re-renderiza.

```jsx
// Solo se ejecuta si sort (booleano) o movies cambia
const sortedMovies = useMemo(() => {
	return sort
		? [...movies].sort((a, b) => a.title.localeCompare(b.title))
		: movies
}, [sort, movies])

// Se ejecuta solo la primera vez
const getMovies = useMemo(() => {
	return async () => {
		let results = await getResults()
		return results
	}
}, [])
```

### `useCallback`
Una forma más sencilla, similar al `useMemo` pero solo para las funciones, por debajo usa el `useMemo`. Se debe usar en vez del `useMemo` si queremos optimizar una función.

```jsx
const getMovies = useCallback(async () => {
	let results = await getResults()
	return results
}, [])
```

### `useId`
Se usa para generar un identificador único muy útil cuando usamos `<label for={filterId}>` y `<input id={filterId}>`.

### `useContext`
[Artículo en la documentación de React](https://react.dev/learn/passing-data-deeply-with-context/)

Un contexto le permite a un componente padre pasar datos a todo el árbol de componentes debajo de él. Esto nos permite separar toda la lógica y que cualquier componente pueda leer directamente del contexto sin necesidad de pasárselo, evitando hacer *prop drilling*.

[![Screenshot-from-2023-11-09-20-58-36.png](https://i.postimg.cc/Zngd9ghz/Screenshot-from-2023-11-09-20-58-36.png)](https://postimg.cc/64r3gM3M)

Los contextos se pueden emplear para mucho más que hacer un estado global, se puede usar para inyectar dependencias, traducciones, configuraciones, etc.

`useContext` como estado global está pensado para estados muy pequeños, que cambien con poca frecuencia. Como alternativa para proyectos más grandes tenemos Zustand, Redux, etc.

```jsx title="context/filters.jsx"
import { createContext, useState } from 'react'

// 1. Crear el contexto
export const FiltersContext = createContext()

// 2. Crear el Provider, para proveer el contexto
export const FiltersProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters
    }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
```

```jsx title="main.jsx"
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { FiltersProvider } from './context/filters.jsx'

// Metemos nuestra App dentro del Provider de Filters
// esto permite que podamos usar el contexto de Filters
// dentro de todo el árbol de componentes a partir de App
ReactDOM.createRoot(document.querySelector('#root')).render(
  <FiltersProvider>
    <App />
  </FiltersProvider>
)
```

```js title="hooks/useFilters.js"
import { useContext } from 'react'
import { FiltersContext } from '../context/filters.jsx'

// Custom hook que accede el contexto
// y provee funciones para manejarlo
export function useFilters () {
  const { filters, setFilters } = useContext(FiltersContext)

  const filterProducts = (products) => {
    return products.filter(product => (
      product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category)
    ))
  }

  return { filterProducts, filters, setFilters }
}
```

```jsx title="components/Filters.jsx"
import { useFilters } from '../hooks/useFilters'

export function Filters () {
  const { filters, setFilters } = useFilters()

  const handleChangeMinPrice = (event) => {
    setFilters(previousState => ({
      ...previousState,
      minPrice: event.target.value
    }))
  }
...
```

### `useReducer`
Nos permite manejar el estado de una manera escalable y abstraer la lógica porque se basa en en una función que recibe el estado actual y la acción que tiene que hacer.

Ventajas:
- Fácil de testear.
- Lógica separada.
- Framework agnostic.



## Custom Hooks
Un «hook personalizado» es una función que empieza por `use` y que puede utilizar otros hooks. Son ideales para reutilizar lógica en diferentes componentes.

```jsx
// ./hooks/useCounter.js
export function useCounter() {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  return { count, increment, decrement }
}

// App.jsx
import { useCounter } from './hooks/useCounter.js'

function Counter() {
  const { count, increment, decrement } = useCounter()

  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </>
  )
}
```

## Montado doble al iniciar usando `<React.StrictMode>`
Al usar el componente `React.StrictMode` para envolver nuestra app en entorno de desarrollo este monta, desmonta y vuelve a montar los componentes para asegurarse de que no tienen fallos, es simplemente para depurar, no ocurre en producción.

```jsx
<React.StrictMode>
  <App />
</React.StrictMode>
```

## Formularios
Hay dos formas de gestionar formularios con React:

* Descontrolada 🤪 / no controlado por React, obtenemos y validamos los valores al enviar, __útil para evitar usar muchos [useRef](#useRef)__, __suele ser la forma más rápida__.
```jsx
export default function MyForm() {
  function handleSubmit(event) {
	 // Prevenir que el navegador recargue la página al enviar
    event.preventDefault()

    // Leer los datos del formulario
    const form = event.target
    const formData = new FormData(form)
    // Obtiene solo el valor de **un** input
	 const inputValue = formData.get('myInput') // 'someValue'

    // ? Se le puede pasar a una api como body tmb
    // fetch('/some-api', { method: form.method, body: formData })

    // Transformar todos los campos a JSON
    const formJson = Object.fromEntries(formData.entries())
    console.log(formJson) // { myInput: 'someValue' }
  }

  return (
    <form method="post" onSubmit={handleSubmit}>
      <label>
        Text input: <input name="myInput" defaultValue="Some initial value" />
      </label>
    </form>
  );
}
```

* Controlada, es más útil para simplificar la validación de formularios, más lento porque cada vez que se actualice el input se vuelve a renderizar el elemento.
```jsx
const [query, setQuery] = useState('')
const [error, setError] = useState(null)

const handleSubmit = (event) => {
  event.preventDefault()
  console.log(query)
}

// También podemos validar aquí ;)
const handleChange = () => {
  const newQuery = event.target.value

  // Una de las ventajas de la forma controlada
  // es que permite pre-validaciones, de esta forma no se
  // renderiza la query sin empieza por espacio
  if (newQuery.startsWith(' ')) return
  setQuery(newQuery)
}

// Validar cada vez que cambie query
useEffect(() => {
  if (query.length < 3) {
    setError('La búsqueda debe tener al menos 3 caracteres.')
    return
  }
  setError(null)
}, [query])

<form onSubmit={handleSubmit} >
  <input onChange={handleChange} value={query} name='query' />
  <button type='submit'>Enviar</button>
</form>
```

## Búsqueda con debounce
Si queremos hacer una búsqueda automática a medida que el usuario escribe lo más óptimo sería implementar un **debounce**.

### Debounce
Un patrón de rebote o «debounce» pospone la ejecución de una función hasta que transcurra un determinado tiempo de espera.

Nuevos intentos de ejecutar la función cancelarán la ejecución pendiente y reiniciarán el tiempo de espera.

```ts
const debounce = (callback, tiempoDeEspera) => {
  let timeout
  return (...args) => {
	clearTimeout(timeout)
	timeout = setTimeout(()=> callback(...args), tiempoDeEspera)
  }
}

const debounce = (fn: Function, waitTime = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (this: any, ...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), waitTime);
  };
};
```

![img](https://coffeebytes.dev/debounce-y-throttle-en-javascript/images/DebounceORebote.png)


---

## Lazy Load en React

React incluye una utilidad para realizar *lazy loading* o carga condicional, lo que nos permite que solo se cargue contenido cuando este sea estrictamente necesario, es decir que por ejemplos carguemos las imágenes al cargar directamente la página y no al entrar a la página principal.

```jsx
import AboutPage from './pages/About.jsx' // Import estático
import('./pages/About.jsx') // Import dinámico
```

Cuando queremos cargar un componente de forma dinámica utilizamos el `lazy` con el `import` correspondiente dentro, al utilizar el lazy en nuestro código debemos de asegurarnos que los sitios donde se usa ese componente estén envueltos con un componente `Suspense` que indica que lo está dentro puede no estar disponible y por lo tanto nos permite poner una pantalla de carga en la transición de carga con el atributo de `fallback`.

```jsx
import { lazy, Suspense } from 'react'

// Este componente no se va a cargar hasta que no se vaya a renderizar
const AboutPage = lazy(() => import('./pages/About.jsx')

function App () {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path='/about' Component={AboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
```



---

## Prueba tećnica
Una de las pruebas más comunes es fetching de datos.

- Dos estados, uno que depende del otro.
- Saber utilizar el punto de entrada en vez de create-x-app/vite template.
- Un `useEffect` por responsabilidad.
- Gestión de errores al final para no perder tiempo al principio.
- Saber básico de flex.
- 1 efecto por responsabilidad, no poner varias tareas dentro del mismo.
- Si preguntan por que hacer después, tests.


TODO:
1. Explicar lógica de Children con null y acceder a Childrens del parent?, utilidad Children de React.
