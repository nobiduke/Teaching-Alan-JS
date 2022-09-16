# Using the DOM
What is the DOM? It stands for Document Object Model, but what does that actually mean? The DOM is how JavaScript interacts with the webpage. It is an object that refers to the the entire webpage. You can use it to modify the page at runtime and create a dynamic website. You call the DOM by refering to "document".

1. Look at span with `id="Target"`. Change the text value from "Cat" to "Dog" with the click of the button with `id="Button"`

|Command|Definition|
|---|---|
|`document.getElementById(ID)`|Returns an element with the id given to it|
|`document.querySelector()`|Returns all elements with a certain trait. Such as all elements with a certain class|
|`**SOME_ELEMENT**.innerHTML`|The text within an element. This can be changed by setting it equal to something.|
|`**SOME_INPUT_ELEMENT**.Value`|The text within an input|
