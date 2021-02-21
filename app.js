//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector(".filter-todo");

//event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);
document.addEventListener('DOMContentLoaded', getTodos);
//functions

function addTodo(event) {
    //prevents form from submitting
    event.preventDefault();
    //Todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //create list node
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //complete button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = "<i class='fas fa-check'></i>";
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
     //trash button
     const trashButton = document.createElement('button');
     trashButton.innerHTML = "<i class='fas fa-trash'></i>";
     trashButton.classList.add('trash-btn');
     todoDiv.appendChild(trashButton);
    
     //append to parent node list
     todoList.appendChild(todoDiv);

     //clear todo input value
     todoInput.value = '';
}

function deleteCheck(event) {
    const item = event.target;
    //delete todo
    if (item.classList[0] === "trash-btn") {
       const todo = item.parentElement;
       //animation
       todo.classList.add('fall');
       todo.addEventListener('transitionend', function(){
           todo.remove();
       })
    }

    if (item.classList[0] === "complete-btn"){
      const todo = item.parentElement;
      todo.classList.toggle("completed");
    }
}

//filter function
function filterTodo(e) {
   const todos = todoList.childNodes;
   todos.forEach(function(todo) {
       switch (e.target.value) {
           case "all":
              todo.style.display = 'flex';   
               break;
            case "completed":
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex'
                } else {
                    todo.style.display = "none";
                }
               break;
            case "uncompleted":
                if (!todo.classList.contains('completed')) {
                    todo.style.display = 'flex'
                } else {
                    todo.style.display = "none";
                }
               break;
       }
   });
}

//local storage function
