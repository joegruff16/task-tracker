// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

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
    const cardBody = $('<div>').addClass('card-body');
    const cardDescription = $('<p>').addClass('card-text').text(task.description);
    const cardDueDate = $('<p>').addClass('card-text').text(task.dueDate);
    const cardDeleteBtn = $('<button>').addClass('btn btn-danger delete').text("delete").attr('data-task-id', task.id);
    cardDeleteBtn.on('click', handleDeleteTask);
    // You need an if statement that would declare the color of the card (red, yellow, or green depending on due date)
    // if (condition) {
    //     if () {


    //     } else {

    //     }
    // }
    // append card elements
    cardBody.append(cardDescription, cardDueDate, cardDeleteBtn);
    taskCard.append(cardHeader, cardBody);

    return taskCard;
}
// Think about how you are going to render this task card
// We need to retrieve the data from the taskcard
// This again is a dynamic rendering from JS to the webpage - what needs to be rendered from the JS code tasklist to the webpage
// Todo: create a function to render the task list and make cards draggable
function renderTaskList(event) {


    // // Create Task List
    // const taskList;

    // // Create tasklane - to do, in progress, and done

    // const taskLane;

    // // Create a lane for to do
    // const toDoLane;

    // // Create a lane for in progress
    // const inProgressLane;

    // // Create a lane for done
    // const doneLane;

    // localStorage.getItem("tasks", JSON.parse(taskCard));
    // renderTaskCard()


}
// Need to define what a task is
// We are taking in the input to push through this event
// Todo: create a function to handle adding a new task
function handleAddTask(event) {
    event.preventDefault();

    const task = {
        id: generateTaskId(),
        title: $('#title').val(),
        description: $('#description').val(),
        dueDate: $('#taskDueDate').val(),
        status: 'to-do',
    }
    taskList.push(task)
    console.log(taskList)
    localStorage.setItem("task", JSON.stringify(taskList));
    renderTaskList()
    $('#title').val('');
    $('#description').val('');
    $('#taskDueDate').val('');
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {
    const btnDeleteItem = $(event.target);
    btnDeleteItem.parent('div').remove();
    // utilize the delete button that was already created above with click event

    // create a click event for the deleteTask button


}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    // render the task list
    renderTaskList()

    // Add Event Listener - will involve the droppable and draggable - grab this syntax from jQuery - like the delete Btn event listener
    // // What precisely is being made draggable? If it's coded dynamically through JS, how do we select the card after they are entered to become draggable?
    $('#taskForm').on('submit', handleAddTask)
    // $(function () {
    //     $("#d1").draggable();
    //     // Make lanes droppable

    // $( ".selector" ).droppable({
    //     classes: {
    //       "ui-droppable": "highlight"
    //     }
    //   });

    //     // $(".selector").droppable({
    //     //     accept: ".special"
    //     // });

    //     // Make due date field a date picker
});
