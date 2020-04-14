/*
    This module is responsible for providing the HTML
    representation of the task form 
*/

const contentTarget = document.querySelector(".")

// The Task form HTML
export const TaskForm = () => {

    contentTarget.innerHTML = `
        <section class="taskFormContainer">
            <fieldset>
                <label for="taskText">Task:</label>
                <input type="text" id="taskText">
            </fieldset>
            <fieldset>
                <label for="timeStamp">Expected Completion:</label>
                <input type="date" id="timeStamp">
            </fieldset>

            <button id="saveTask">Save Task</button>
        </section>
    `
}

