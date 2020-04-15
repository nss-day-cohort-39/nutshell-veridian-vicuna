/*
    This modle is responsible for pulling 
    together the necessary componets to 
    manage and render the list of tasks 
*/

// Imports
import { deleteTask, getTasks, useTasks } from "./TaskProvider.js"
import { Task } from "./Task.js"


// Assign Variable names to DOM targets
const contentTarget = document.querySelector(".tasks")
const eventHub = document.querySelector(".container")


/* 
    Listen for the delete button to be clicked and delete 
    relay that to our deleteTask fetch in our provider
*/
contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteTask--")) {
        const [prefix, taskId] = clickEvent.target.id.split("--")
        deleteTask(taskId)
    }
})


// Get all the data and info necessary and render the task list to the DOM
const renderTasks = () => {
    getTasks().then(() => {
        const allTheTasks = useTasks()
        // Convert the tasks from an aray of objects to an array of strings
        contentTarget.innerHTML = allTheTasks.map(
            (currentTaskObject) => {
                return(
                    currentTaskObject
                )
            }
        )

        Task(currentTaskObject)
    })
}

export const TaskList = () => {
    renderTasks()
}