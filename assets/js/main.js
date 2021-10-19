function escope(){

// 1. acessing elements:

const inputElement = document.querySelector('.input-task');
const addBtn = document.querySelector('.add');
const listElement = document.querySelector('.list-tasks');

// 2. creating functions:  
getStorage();

function createElement(stringElement, className, txtContent = ''){
    const element = document.createElement(stringElement);
    element.innerText = txtContent;
    element.classList.add(className);
    return element;
}

function createTask(task){
    const li = createElement('li', 'item');
    const button = createElement('button','delete','x');

    li.appendChild(button);
    li.innerHTML += task;

    listElement.appendChild(li);
    saveStorage();
}

function clearInput(){
    inputElement.value = '';
    inputElement.focus();
}

function saveStorage(){
    const itensElements = listElement.querySelectorAll('.item');
    const taskList = [];

    for(let task of itensElements){
        let taskTxt = task.innerText.replace('x','');
        taskList.push(taskTxt);
    }

    const JSONlist = JSON.stringify(taskList);
    localStorage.setItem('Tasks:', JSONlist);
}

function getStorage(){
    const JSONlist = localStorage.getItem('Tasks:');
    const storageList = JSON.parse(JSONlist);

    for(let task of storageList){
        createTask(task);
    }
}

}
escope();