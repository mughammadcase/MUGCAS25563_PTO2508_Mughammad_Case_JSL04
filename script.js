import { initialTasks } from "./initialData.js";

/**
 * Clones initialTasks data for manipulating keeping original data intact
 */
const tasks = [...initialTasks];

const todoContainer = document.querySelector("#todo-container");
const doingContainer = document.querySelector("#doing-container");
const doneContainer = document.querySelector("#done-container");

const modal = document.querySelector("#modal-container");
const titleInput = document.querySelector("#task-title");
const descInput = document.querySelector("#task-desc");
const statusSelect = document.querySelector("#task-status");
const closeBtn = document.querySelector("#close-modal-btn");

let currentTask = null; // Keeps track of which task to edit in modal

/**
 * Create DOM element for a task
 * @param {Object} task - Task object contains id, title, description, ,status
 * @return {HTMLElement} - Returns the DOM element for task
 */
function createTaskElement(task) {
  const taskDiv = document.createElement("div");

  taskDiv.textContent = task.title;
  taskDiv.classList.add("task-div");

  taskDiv.addEventListener("click", () => {
    openTaskModal(task);
  });

  return taskDiv;
}

/**
 * Opens the task modal for editing a specific task
 * @param {Object} task - The task object to edit
 */
function openTaskModal(task) {
  currentTask = task; // Set currentTask to the task being edited

  titleInput.value = task.title;
  descInput.value = task.description;
  statusSelect.value = task.status;

  modal.showModal();
}

closeBtn.addEventListener("click", () => {
  modal.close();
});

/**
 * Render tasks to respective columns based on its status
 *
 * Loops through tasks array and creates DOM element for each task using createTaskElement function,
 * then append task element to appropriate column container
 *
 * @function renderTasks
 */
function renderTasks() {
  todoContainer.innerHTML = "";
  doingContainer.innerHTML = "";
  doneContainer.innerHTML = "";

  tasks.forEach((task) => {
    const taskElement = createTaskElement(task);

    if (task.status === "todo") {
      todoContainer.appendChild(taskElement);
    } else if (task.status === "doing") {
      doingContainer.appendChild(taskElement);
    } else if (task.status === "done") {
      doneContainer.appendChild(taskElement);
    }
  });
}

renderTasks();
