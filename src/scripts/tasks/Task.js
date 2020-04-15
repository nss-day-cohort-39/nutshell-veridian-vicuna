/*
    This module is responsible for providing and exporting 
    the HTML representation of a single task.
*/

// HTML of a task
export const Task = (taskObject) => {
    return `
        <section>
            <header>
                <h4>${taskObject.task}</h4>
            </header>
            <p>Expected Completion: ${taskObject.expectDone}</p>
            <p>Completed: ${taskObject.complete}</p>
            <p>
                <button id="deleteTask--${taskObject.id}">❌</button>
            </p>
        </section>
    `
}