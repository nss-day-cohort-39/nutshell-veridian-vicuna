/*
    This modle is responsible for pulling 
    together the necessary componets to 
    manage and render the list of tasks 
*/

// Imports
import { deleteTask, useTasks } from "./TaskProvider.js";
import { Task } from "./Task.js";

// Assign Variable names to DOM targets
const contentTarget = document.querySelector(".tasks");
const eventHub = document.querySelector(".container");

/* 
    Listen for the delete button to be clicked and send 
    that info to our deleteTask fetch in our provider
*/
contentTarget.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id.startsWith("deleteTask--")) {
    const [prefix, taskId] = clickEvent.target.id.split("--");
    deleteTask(taskId);
  }
});

// Get all the data and info necessary and collect only the tasks related to the current user
const renderTasks = () => {
      const currentUserId = document.querySelector("#currentUserId").value
      const allTheTasks = useTasks();

      // Convert the tasks from an aray of objects to an array of strings
      const filteredUserTasks = allTheTasks.filter(userTask => userTask.userId === parseInt(currentUserId));
      return filteredUserTasks.map(task => Task(task)).join("")
}

export const TaskList = () => {
  contentTarget.innerHTML = renderTasks();
};