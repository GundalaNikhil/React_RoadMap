What is JSX?: JSX stands for JavaScript XML. Sounds fancy, right? But don't worry, it's not as complicated as it seems!
* Think of JSX as a special syntax that lets you write HTML-like code directly in your JavaScript files. It's like mixing your favorite chocolate with peanut butter - two great things coming together!
* JSX is a syntax extension for JavaScript
* JSX is used to write HTML in JavaScript

Why Use JSX?

* JSX is not mandatory to use react but it provides more intuitive and readable code.
* It gives you a visual structure of what your UI will look like, right there in your JavaScript code.

How Does JSX Work?

* JSX is converted to JavaScript by the Babel compiler
* When you write JSX, it gets transformed into regular JavaScript behind the scenes.
    This transformation is done by a tool called Babel. Think of Babel as your personal translator, converting JSX into something the browser can understand.
* JSX is not a separate language, it is a syntax extension for JavaScript
* JSX is used to write HTML in JavaScript, but it is not a replacement for HTML

JSX Syntax:

import React from 'react';

const name = "Nick The Tech";
const welcome_message = <h1>Hello, {name}!</h1>

In this snippet:

    We're creating a constant name with a string value.
    Then, we're using JSX to create an <h1> element.
    The curly braces {} allow us to embed JavaScript expressions right in our JSX.

Key Points to Remember

    JSX is not a separate language - it's just a syntax extension for JavaScript.
    While JSX looks like HTML, it comes with the full power of JavaScript.
    JSX makes your React code more readable and maintainable.
    You can use JavaScript expressions inside JSX using curly braces {}.

Bonus Tip:

    Even though JSX looks like HTML, there are some differences. For example, you'll use className instead of class for CSS classes in JSX. Keep an eye out for these little quirks!