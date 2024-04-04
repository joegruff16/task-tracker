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
    if (nextId === null) {
        nextId = 1;

    } else {
        nextId++
    }
    localStorage.setItem("nextId", JSON.stringify(nextId));
    return nextId;

}


// Todo: create a function to create a task card
function createTaskCard(task) {
    // Dynamic -- Creating card elements by JS
    // Create Card
    const taskCard = $('<div>').addClass('card w-75 task-card my-3').attr('data-task-id', task.id)

    // Create a Header for task title input
    const cardHeader = $('<div>').addClass('card-header h4').text(task.title)

    // Create the Body - description and the due date input
    const cardBody = $('<div>').addClass('card-body')
    const cardDescription = $('<p>').addClass('card-text').text(task.description)
    const cardDueDate = $('<p>').addClass('card-text').text(task.dueDate)
    const cardDeleteBtn = $('<button>').addClass('btn btn-danger delete').text("delete").attr('data-task-id', task.id)
    cardDeleteBtn.on('click', handleDeleteTask)
    // You need an if statement that would declare the color of the card (red, yellow, or green depending on due date)
    //     if (condition) {
    //         if () {


    //         } else {

    //         }
    //     }
    // append card elements
    cardBody.append(cardDescription, cardDueDate, cardDeleteBtn);
    taskCard.append(cardHeader, cardBody);

    return taskCard;
}
// Think about how you are going to render this task card
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
    // render the task list
    renderTaskList()

    // Add Event Listener - will involve the droppable and draggable - grab this syntax from jQuery - like the delete Btn event listener

    // Make lanes droppable

    // $(".selector").droppable({
    //     accept: ".special"
    // });

    // Make due date field a date picker
});
