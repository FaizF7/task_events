const enterButton = document.querySelector("#enter")
const textInput = document.querySelector("#new-todo")
const list = document.querySelector("#list")

let text = ""

textInput.addEventListener( "input", (event)=>{
    text = event.target.value
    console.log(text)
})

enterButton.addEventListener("click", (event)=>{
    event.preventDefault();
    let newListItem = document.createElement("li")
    newListItem.innerText = text
    let button = document.createElement("button")
    button.textContent = "delete"
    list.appendChild(newListItem,button)

})

// console.log(list)
