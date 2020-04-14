/*
    This module is responsible for providing and exporting 
    the HTML representation of a single task.
*/

export const Task = taskObject => {
    return `
        <section>
            <h4>${taskObject.task}</h4>
            <p>Expected Completion: ${taskObject.expectDone}</p>
            <p>Completed: ${taskObject.complete}</p>
        </section>
    `
}