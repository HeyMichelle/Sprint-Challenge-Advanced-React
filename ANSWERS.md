- [x] Why would you use class component over function components (removing hooks from the question)?

    A functional component is a function taking (props) and returning JSX. A class component extends from React.Component to create a render function which returns a react element. Class components are more complex and require constructors. While functional components are easier to read and debug, class components take the advantage as being more dynamic and using lifecycle methods to change state.

- [x] Name three lifecycle methods and their purposes.

    1) The constructor function: creates components with state data for the initial render, and also binds all event handlers.
    2) The render method: tells React to return some piece of DOM, which the virtual DOM mounts.
    3) componentsDidMount function: sets a component's state post render

- [x] What is the purpose of a custom hook?

    A custom hook allows one to customize a hook yourself and apply it to non-visual behavior and stateful logic (state change functions, event listeners, key changes, etc.). 

- [x] Why is it important to test our apps?

    Testing the app will provide feedback as to whether or not the app can be successfully downloded and interacted with. This will make the code more trustworthy and surfaces bugs faster.