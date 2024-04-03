// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));
const toDoEl = $('#to-do');
const completedEl = $('#done');
const inProgressEl = $('#in-progress');

// For function 1 - after the add task button is clicked: a modal form will pop up with:
// title, description, and deadline date
// Work through the activities and make sure you understand this and when you learn from the activity switch over to the challenge
// This can be achieved by just imputing the Bootstrap code into HTML to add the modal and form or we can add it with a jQuery function
// We will need to utilize dayJS to get the function for the deadline date
// This is like a database with an ID so you want to generate that unique ID for that task; You want to use this ID for every task that you create
// Todo: create a function to generate a unique task id
// Use the Math.floor function with the for loop like you have done in prior projects within the for loop you can use 10 or more
function generateTaskId() {



}
// 
// Todo: create a function to create a task card
function createTaskCard(task) {

}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event) {

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
