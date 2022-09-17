let input = document.getElementById('task-maker');
const buttonAdd = document.getElementById('add');
const buttonClear = document.getElementById('clear');

let listHolder = document.getElementById('list-holder');

buttonAdd.addEventListener('click', (e)=>
{
    if(input.value == ""){
        return;
    }
    else{
        let newItem = document.createElement('li');
        newItem.innerHTML = input.value;
        newItem.style.fontFamily = "Arial";
        input.value = "";
        listHolder.appendChild(newItem);
    }
});

buttonClear.addEventListener('click', (e) => 
{
    listHolder.innerHTML = "";
});
