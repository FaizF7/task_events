# Lab - JS Events To Do list

In this lab you are tasked with creating a page that manages a To-Do list. There is some start code, with the bare bones of an HTML file containing a small form and somewhere to start a todo list.

Open `lab_jsevents_start_code` folder in VSCode. Open `index.html` in your browser so you can see the page and test the code you are about to write. You will notice that a `script.js` has already been created for you and that this file is loaded into your `index.html` via an existing `<script>` tag.

## MVP
- Write some Javascript that will allow your form to take an input and add it to the to-do list below. Some things you might need to do:
    - grab the `Enter` button in your `<form>` and add an event listener to it
    - when the event occurs (`'click'`), the listener should fire a method that grabs the input, creates an `<li>` element and attaches it to the existing `<ul>`
    - note that every `<li>` elements needs an accompanying `delete` button
    
- Write some Javascript that allows a user to delete an item from the list (i.e. make the `Delete` button work as it should).

- Create a `Show Date` button that displays today's date when you click it. This button can be added directly to `index.html`. (hint: `Date()` returns today's date and time) 

## Extensions
- Vanilla JS tends to be pretty messy. Go back and refactor your code. You should be able to encapsulate some code in sub-functions, which could be re-used or called elsewhere. Try to make your code as readable and tidy as possible.
- Allow a user to mark an item as complete. 
- Grey-out completed items and move them to a 'completed' list on your page.
- if you're feeling desperate, have a go at adding some CSS to your page!
