let inputValue = document.getElementById('new-task') 
let formInput = document.getElementById('create-task')
let toDoContainer = document.getElementById('created-todo-container')

let collectedValues = []
formInput.addEventListener("submit", function(event){
    event.preventDefault()

    const addTaskText = inputValue.value
    collectedValues.push(addTaskText)
    localStorage.setItem("itemCollected", JSON.stringify(collectedValues))
    formInput.reset()
    printItemsOnUI()
})

function fetchItems(){
    if(localStorage.getItem("itemCollected")){
        collectedValues = JSON.parse(localStorage.getItem("itemCollected"))
    }
    printItemsOnUI()
}  

  function printItemsOnUI(){
    toDoContainer.innerHTML = ' '
    collectedValues.forEach(function(items){

        let toDoDiv = document.createElement("div");
            toDoDiv.classList.add("created-todo");

        let createdTodoButton = document.createElement("div")
        createdTodoButton.classList.add("button-container")
        let toDoButton = document.createElement("button")
        toDoButton.classList.add("created-to-do-button")

        let textAndDeleteDiv = document.createElement("div")
        textAndDeleteDiv.classList.add("text-and-delete-icon")

        let createdTodoTextDiv = document.createElement("div")
        createdTodoTextDiv .classList.add("created-todo-text")
        let toDoText = document.createElement("p")
        toDoText.textContent = items

        let editAndDeleteIconDiv = document.createElement("div")
        editAndDeleteIconDiv .classList.add("delete-and-edit")

        let editIcon = document.createElement("i")
        editIcon.classList.add("fa-regular", "fa-pen-to-square")
        editIcon.setAttribute(`onclick`, `editItem('${items}')`)

        let deleteIcon = document.createElement("i")
        deleteIcon.classList.add("fa-regular", "fa-trash-can")
        deleteIcon.setAttribute(`onclick`, `deleteItem('${items}')`)

        // Append
        toDoContainer.append(toDoDiv)
        toDoDiv.append(createdTodoButton, textAndDeleteDiv)
        createdTodoButton.append(toDoButton)
        textAndDeleteDiv.append(createdTodoTextDiv, editAndDeleteIconDiv)
        createdTodoTextDiv.append(toDoText)
        editAndDeleteIconDiv.append(editIcon, deleteIcon)   

    })
} fetchItems()


function deleteItem(dataToBeDeleted) {
    collectedValues = collectedValues.filter(function(item) {
        return item !== dataToBeDeleted;
    });

    localStorage.setItem("itemCollected", JSON.stringify(collectedValues));
    fetchItems();
}

