What is Event Handling in React?

Let's keep in mind that Event and Error Handling both are different

Event Handling is a way to respond to user actions like clicking a button, typing in a text box, or moving the mouse. When a user interacts with a website, they often do things like pressing a button or filling out a form. React can "listen" to these actions and then do something when they happen. This is called handling events.

How Event Handling Works
    Event: An event is something that happens because the user interacts with the website (e.g., clicking, typing, or hovering).
    Handler: The function that gets called when the event happens. It decides what should happen when the event occurs.


Think of it like when you press a button on your TV remote. The TV sees that you pressed a button (the event) and does something, like changing the channel (the handling). Similarly, React can see when you click on a button and make something happen in the app.

Basic Concept: 
    In React, events are named using camelCase (e.g., onClick, onChange) rather than lowercase (onclick, onchange) as in HTML. They are passed as functions rather than strings.

Syntax: The basic syntax for handling events in React is:

    <element eventName={handleEvent} />

    Where eventName is the camelCase event name, 
    and handleEvent is the function to be called when the event occurs.

Event Handler Functions:
    These are typically defined as methods on the component class or as functions within functional components.

