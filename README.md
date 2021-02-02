# Thinking in React

https://reactjs.org/docs/thinking-in-react.html

Step 1: Break The UI Into A Component Hierarchy
Step 2: Build A Static Version in React
Step 3: Identify The Minimal (but complete) Representation Of UI State
Step 4: Identify Where Your State Should Live
Step 5: Add Inverse Data Flow //Build your app


Imperative Programming
Explicitly tell your program every step it needs to execute
In vanilla JS, find the relevant DOM elements
Programmatically create, update, or remove DOM elements
Declarative Programming
Tells the program 'what' the webpage should be/should look like
The 'how' is abstracted
Virtual DOM
When does the DOM get re-rendered?
Every time there is a change in state and props
State
State is similar to props, but it is private and fully managed by the class component (can't be functional)

Thinking about how your webpage is going to change over time

it should be complete but minimal

Set up the state object using this.state in the constructor

or outside the constructor
Don't modify state directly, use this.setState({})

many syntax to use it
works asynchronously
Conditional Rendering
Controlled Forms and Event Callback handlers
On Your Own
practice working with other input types (textarea, select, checkbox, radio button)
https://reactjs.org/docs/forms.html
