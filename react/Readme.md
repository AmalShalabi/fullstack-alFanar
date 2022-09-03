# React

- A javascript library gor building user interface.
- Every reat application has at least one component which we refer to as the root <b>component</b>b>
- React element which is a simple plain Javascript object that maps to a DOM elements , <b> its not a real DOM    element .</b>
- Virtual DOM is cheap to create => when we change the state of component , we get a new react element ,which will then compare this element and its children with the previous one => it figures out what is changed and then will update a part of the real DOM to keep it sync with the <b>VIRTUAL DOM </b> .
- React is a view library not a frameWork .

## Components
- Describe a part of the user interface.
- They are re-usable and can be nested inside other components.
- ### Two type of components : 
    - Statless functional components.
    - Stateful Class components .      

## React Props
- Are like function arguments in Javascript and attributes in HTML.
- Are read-only ! we'll get an error if we try to change their value.
- Allow the components to be dynamic, to pass a name from app (parent) component to child component and render that in the browser.

## React Hooks 
- Allows function components to have access to states .
- we can only use these with functions,  we can't use them with class components.
- Can't nested if statment, must be called in the exact same order.
