import { initialTasks } from "./initialData.js";

/**
 * Clones initialTasks data for manipulating keeping original data intact
 */
const tasks = [...initialTasks];

const todoContainer = document.querySelector("#todo-container");
const doingContainer = document.querySelector("#doing-container");
const doneContainer = document.querySelector("#done-container");

/**
 * Create DOM element for a task
 * @param {Object} task - Task object contains id, title, description, ,status
 * @return {HTMLElement} - Returns DOM element respresenting the task
 */
function createTaskElement(task) {
  const taskDiv = document.createElement("div");

  taskDiv.textContent = task.title;
  taskDiv.classList.add("task-div");

  return taskDiv;
}

// Testing if title of first task is correctly rendered in the DOM
const firstTaskElement = createTaskElement(tasks[0]);
const secondTaskElement = createTaskElement(tasks[1]);
todoContainer.appendChild(firstTaskElement);
todoContainer.appendChild(secondTaskElement);
