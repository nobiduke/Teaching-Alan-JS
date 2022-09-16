# CSS Introduction
Did you see how the webpage that we created from the previous lesson looked very bad? That is because we were missing CSS. CSS stands for Cascading Style Sheet and it is how you style a website.

CSS is how you create a website that looks pleasant and easy on the eyes which is ironic because CSS is very difficult to master.

I am not good at CSS, but I can at least show the basics. Any specific questions, you will have to look up, but there are many resources which is nice.

---

1. CSS is a collection of objects defined by curly brackets with names

    Example:
    `.className{color: #FF0000;}`

    In this example we are creating a CSS class called `className`. In this class we are changing the color to a hexidecimal value of **<span style="color: #FF0000;">#FF0000</span>**.

2. Classes can then be accessed by your html when you link your CSS. There is an absolute ton that CSS can do so its really better for you to just look up what you want to do as you go. I will give a few examples in index.html. Don't worry too much about how the elements are being attached to which classes. I will go over that in the next lesson.

3. Your assignment is to change the text color of any element to **<span style="color:##00FF00;">GREEN</span>** 🟩

**DON'T FORGET TO LINK YOUR CSS IN THE HEAD**

My Daily Use CSS List
---
|Keyword|Definition|
|---|---|
|`color:`|Used to change the color of what is within an element|
|`background-color:`|Used to change the background of what is within the element|
|`font-family:`|The text font. You can implement some basic ones or use a external one by importing it.|
|`font-size:`|Size of the font|
|`font-weight:`|Weight of the font|
|`border:`|Used to create a border. Defined as follows `: size type color;`. Can be side specific. All side specific traits are oriented as follows `border-top:`, `border-left:`, `border-right:`, `border-bottom:`. If `border-left:` or `border-top:` is specified and its opposite is not, then it assumes the same measurement|
|`border-radius`|Used to create circles and rounded corners on elements|
|`margin:`|The spacing a round an element. Can be side specific.|
|`padding:`|The spacing within an element. Can be side specific.|
|`width:`|The width of the content.|
|`height:`|The height of the content.|
|`display:`|The display types. This is good for centering content. The most common uses are `flex;`and `grid;`|
|`justify-content:`|Used with `flex;` and `grid;` to center content|
|`align-items:`|Used with `flex;` and `grid;` to center content|
|`transition:`|The amount of time an element will take to transition between different classes when it switches classes. Used for animation|
|`opacity:`|Opacity of the element|
|`position:`|Usually either `relative;` or `absolute;`. Used to determine if the element sits in relation to other elements. Used to stack elements on top of each other|
|`cursor:`|The mouse icon when hovering this element|
|`box-shadow:`|Used to create a shadow behind the object. Can be any color and the dimensions and position need to be declared|
|`z-index:`|Determines where an element sits in 3D space. Only matters if elements are stacked on top of each other|
|`overflow:`|Determines how the element reacts to content that doesn't fit in its space. Can use `overflow-x:` or `overflow-y:` for specific directions|
|`text-decoration:`|This determines if the text has an underline or other decorations. Needed to get ride of the gross underline on hyperlinks.|

Spacing Reference
---
![alt text](https://github.com/nobiduke/Teaching-Alan-JS/blob/master/Reference/cssboxmodel.png?raw=true)
