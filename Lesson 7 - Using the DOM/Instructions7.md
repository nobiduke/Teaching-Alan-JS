# Using the DOM
What is the DOM? It stands for Document Object Model, but what does that actually mean? The DOM is how JavaScript interacts with the webpage. It is an object that refers to the the entire webpage. You can use it to modify the page at runtime and create a dynamic website. You call the DOM by refering to "document". Refer to example.html and example.js for some interesting DOM manipulation.

1. Look at span with `id="Target"`
2. Change the text value from "Cat" to "Dog" with the click of the button with `id="Button"`

Hint: The click function is already made for you. You just have to fill it in

|Command|Definition|
|---|---|
|`document.getElementById(ID_AS_STRING)`|Returns an element as an object with the id given to it|
|`document.querySelector(TRAIT_AS_STRING)`|Returns all elements with a certain trait. Such as all elements with a certain class|
|`document.createElement(TYPE_OF_ELEMENT_AS_STRING)`|Returns a created element by a given name|
|`SOME_ELEMENT.appendChild(SOME_CREATED_ELEMENT)`|Adds a created element to another element. This is usually used in conjunction with document.body which refers to the `<body></body>` element of the DOM. Ex: `document.body.appendChild(SOME_ELEMENT_MADE)` will add the element to the bottom of the page|
|`**SOME_ELEMENT**.innerHTML`|The text within an element. This can be changed by setting it equal to something.|
|`**SOME_INPUT_ELEMENT**.value`|The text within an input|
