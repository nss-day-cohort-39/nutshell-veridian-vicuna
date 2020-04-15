/*
    This module is responsible for the managment of the task data.
    It will retreive it, save it, and delete it and provide a
    state change event that when heard will re-render the list of
    to show the most recent updates to the list
*/


// Set a target in our HTML file equal to eventHub
const eventHub = document.querySelector(".container")


// Provide an event that will dispatch that the task state has changed
const dispatchStateChangeEvent = () => {
    const taskStateChangedEvent = new CustomEvent("taskStateChanged")

    eventHub.dispatchEvent(taskStateChangedEvent)
}


// Make the notes equal to an empty array that can be filled by our server requests
let tasks = []


// Create a copy of our data
export const useTasks = () => tasks.slice()


// Get the data from the database
export const getTasks = () => {
    return fetch('http://localhost:8088/tasks')
        .then(response => response.json())
        .then(parsedTasks => {
            tasks = parsedTasks
        })

}

// Make it possible to save a new task from the database
export const saveTask = task => {
    return fetch('http://localhost:8088/tasks', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    })
    .then(getTasks)
    .then(dispatchStateChangeEvent)
}

// Make it possible to delete a task from the database
export const deleteTask = taskId => {
    return fetch(`http://localhost:8088/notes/${taskId}`, {
        method: "DELETE"
    })
        .then(getTasks)
        .then(dispatchStateChangeEvent)
}