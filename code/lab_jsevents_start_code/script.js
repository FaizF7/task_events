const enterButton = document.querySelector("#enter")
const textInput = document.querySelector("#new-todo")
const list = document.querySelector("#list")
const dateButton = document.querySelector('#date')
const dateText = document.querySelector("#date-content")

let text = ""

textInput.addEventListener( "input", (event)=>{
    text = event.target.value
})

enterButton.addEventListener("click", (event)=>{
    event.preventDefault();
    let newListItem = document.createElement("li")
    newListItem.innerText = text
    let button = document.createElement("button")
    button.textContent = "delete"
    button.addEventListener("click", (event)=>
{
    console.log("delete")
    button.parentNode.parentNode.removeChild(button.parentNode)
})


    newListItem.appendChild(button)
    list.appendChild(newListItem)
   
})

dateButton.addEventListener("click", () =>
{
    dateText.innerText = Date()
})


// console.log(list)
