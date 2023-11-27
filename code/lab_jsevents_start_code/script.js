// const enterButton = document.querySelector("#enter")
const form = document.querySelector("#todo-form")
const textInput = document.querySelector("#new-todo")
const list = document.querySelector("#list")
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
        list.appendChild(newListItem)
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
