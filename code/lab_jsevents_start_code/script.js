// const enterButton = document.querySelector("#enter")
const form = document.querySelector("#todo-form")
const textInput = document.querySelector("#new-todo")
const todoList = document.querySelector("#todo-list")
const doneList = document.querySelector("#done-list")
const dateButton = document.querySelector('#date')
const dateText = document.querySelector("#date-content")

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    if (event.target[0].value){
        let newListItem = document.createElement("li")

        let listLabel = document.createElement("label")
        listLabel.innerText = event.target[0].value
        form.reset()

        let checkbox = document.createElement("input")
        checkbox.type="checkbox"
        newListItem.appendChild(checkbox)
        newListItem.appendChild(listLabel)


        
        let button = document.createElement("button")
        button.textContent = "delete"
        button.addEventListener("click", (event)=>{
            button.parentNode.parentNode.removeChild(button.parentNode)
        })

        newListItem.appendChild(button)
        todoList.appendChild(newListItem)

        checkbox.addEventListener("click", ()=>{
            console.log("checked")
            if (checkbox.checked){
                checkbox.parentElement.classList.remove("not-completed")
                checkbox.parentElement.classList.add("completed")
                todoList.removeChild(checkbox.parentNode)
                doneList.appendChild(checkbox.parentNode)
            }
            else{
                checkbox.parentElement.classList.add("not-completed")
                checkbox.parentElement.classList.remove("completed")
                doneList.removeChild(checkbox.parentNode)
                todoList.appendChild(checkbox.parentNode)
            }
        })
    }
})

let dateOff = true
dateButton.addEventListener("click", () =>{
    if (dateOff){
        dateText.innerText = Date()
        dateButton.textContent = "Hide Date"
        dateOff = !dateOff
    }
    else{
    dateText.innerText = ""
    dateButton.textContent = "Show Date"
    dateOff = !dateOff
    }
})


// console.log(list)
