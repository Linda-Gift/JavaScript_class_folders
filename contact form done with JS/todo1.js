document.addEventListener('DOMContentLoaded', (event) => {
    let inputValue = document.getElementById('new-task');
    let formInput = document.getElementById('create-task');
    let toDoContainer = document.getElementById('created-todo-container');

    let collectedValues = [];

    formInput.addEventListener("submit", function(event){
        event.preventDefault();
        const addTaskText = inputValue.value;
        if (addTaskText.trim() !== "") {
            collectedValues.push(addTaskText);
            localStorage.setItem("itemCollected", JSON.stringify(collectedValues));
            formInput.reset();
            printItemsOnUI();
        }
    });

    function fetchItems(){
        if(localStorage.getItem("itemCollected")){
            collectedValues = JSON.parse(localStorage.getItem("itemCollected"));
        }
        printItemsOnUI();
    }

    function printItemsOnUI(){
        toDoContainer.innerHTML = '';
        collectedValues.forEach(function(item){
            let toDoDiv = document.createElement("div");
            toDoDiv.classList.add("created-todo");

            let buttonContainerDiv = document.createElement("div");
            buttonContainerDiv.classList.add("button-container");
            let toDoButton = document.createElement("button");
            toDoButton.classList.add("created-to-do-button");

            let textAndDeleteDiv = document.createElement("div");
            textAndDeleteDiv.classList.add("text-and-delete-icon");

            let createdTodoTextDiv = document.createElement("div");
            createdTodoTextDiv.classList.add("created-todo-text");
            let toDoText = document.createElement("p");
            toDoText.textContent = item;

            let editAndDeleteIconDiv = document.createElement("div");
            editAndDeleteIconDiv.classList.add("delete-and-edit");

            let editIcon = document.createElement("i");
            editIcon.classList.add("fa-regular", "fa-pen-to-square");

            let deleteIcon = document.createElement("i");
            deleteIcon.classList.add("fa-regular", "fa-trash-can");
            deleteIcon.setAttribute(`onclick`, `deleteItem('${item}')`);

            // Append elements
            toDoDiv.append(buttonContainerDiv, textAndDeleteDiv);
            buttonContainerDiv.append(toDoButton);
            textAndDeleteDiv.append(createdTodoTextDiv, editAndDeleteIconDiv);
            createdTodoTextDiv.append(toDoText);
            editAndDeleteIconDiv.append(editIcon, deleteIcon);

            toDoContainer.append(toDoDiv);
        });
    }

    fetchItems();
});




// script.js  

let tasks = []; // Array to hold tasks  

document.getElementById('addButton').addEventListener('click', addTask);  

function addTask() {  
    const taskInput = document.getElementById('taskInput');  
    const taskText = taskInput.value.trim();  
    
    if (taskText !== "") {  
        const task = { id: Date.now(), text: taskText, completed: false }; // Creating a task object  
        tasks.push(task); // Add to tasks array  
        taskInput.value = ""; // Clear input  
        renderTasks(); // Update the task list  
    }  
}  

function renderTasks() {  
    const taskList = document.getElementById('taskList');  
    taskList.innerHTML = ""; // Clear the list before rendering  

    tasks.forEach(task => {  
        const li = document.createElement('li');  
        li.textContent = task.text;  
        li.className = task.completed ? 'completed' : '';  

        // Create edit button  
        const editButton = document.createElement('button');  
        editButton.textContent = 'Edit';  
        editButton.addEventListener('click', () => editTask(task.id));  

        // Create delete button  
        const deleteButton = document.createElement('button');  
        deleteButton.textContent = 'Delete';  
        deleteButton.addEventListener('click', () => deleteTask(task.id));  

        // Create mark as complete button  
        const completeButton = document.createElement('button');  
        completeButton.textContent = task.completed ? 'Undo' : 'Complete';  
        completeButton.addEventListener('click', () => toggleComplete(task.id));  

        li.appendChild(editButton);  
        li.appendChild(deleteButton);  
        li.appendChild(completeButton);  
        taskList.appendChild(li);  
    });  
}  

function editTask(taskId) {  
    const taskIndex = tasks.findIndex(task => task.id === taskId);  
    const newTaskText = prompt("Edit Task", tasks[taskIndex].text);  

    if (newTaskText !== null) {  
        tasks[taskIndex].text = newTaskText.trim();  
        renderTasks(); // Update the task list  
    }  
}  

function deleteTask(taskId) {  
    tasks = tasks.filter(task => task.id !== taskId); // Remove task by filtering  
    renderTasks(); // Update the task list  
}  

function toggleComplete(taskId) {  
    const taskIndex = tasks.findIndex(task => task.id === taskId);  
    tasks[taskIndex].completed = !tasks[taskIndex].completed; // Toggle completed status  
    renderTasks(); // Update the task list  
}