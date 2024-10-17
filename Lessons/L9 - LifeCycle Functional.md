LifeCycle of Funcational Components

![Fc Life Cycle](/Gallery/FCLIfecycle.png)

Function Component: The entire function is called on each render.

useState: This hook is used to declare state variables.

useEffect with empty dependency array: This is equivalent to componentDidMount. It runs once after the initial render.

State Change: When state changes, it triggers a re-render.

Re-render: The function component is called again with the new state.

useEffect with dependencies: This runs after every render where its dependencies have changed. It's similar to componentDidUpdate.

useEffect cleanup: The cleanup function (if provided) in useEffect runs when the component unmounts or before the effect runs again. This is similar to componentWillUnmount.




Key differences between class and functional components:

Syntax: Class components use the class syntax, while functional components are just functions.

State: Class components use this.state and this.setState(), while functional components use the useState hook.

Lifecycle methods: Class components have explicit lifecycle methods, while functional components use the useEffect hook to handle side effects.

Performance: Functional components can be more performant as they avoid the overhead of class instantiation.

Reusability: Hooks make it easier to reuse stateful logic between components.