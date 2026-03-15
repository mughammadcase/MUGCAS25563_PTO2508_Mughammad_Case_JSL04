import { initialTasks } from "./initialData.js";

/**
 * Clones initialTasks data for manipulating keeping original data intact
 */
const tasks = [...initialTasks];

const todoContainer = document.querySelector("#todo-container");
const doingContainer = document.querySelector("#doing-container");
const doneContainer = document.querySelector("#done-container");

const todoText = document.querySelector("#toDoText");
const doingText = document.querySelector("#doingText");
const doneText = document.querySelector("#doneText");

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
 * Updates the currentTask object with new values from the modal inputs, then calls renderTasks to refresh the display
 * @function updateTask
 * @param {Event} event - input or change event from modal fields
 */
function updateTask() {
  currentTask.title = titleInput.value;
  currentTask.description = descInput.value;
  currentTask.status = statusSelect.value;

  renderTasks();
}

titleInput.addEventListener("input", updateTask);
descInput.addEventListener("input", updateTask);
statusSelect.addEventListener("change", updateTask);

/**
 * Render tasks to respective columns based on its status
 * Loops through tasks array and creates DOM element for each task, append task element to appropriate column container
 * @function renderTasks
 */
function renderTasks() {
  todoContainer.innerHTML = "";
  doingContainer.innerHTML = "";
  doneContainer.innerHTML = "";

  let todoCount = 0;
  let doingCount = 0;
  let doneCount = 0;

  tasks.forEach((task) => {
    const taskElement = createTaskElement(task);

    if (task.status === "todo") {
      todoContainer.appendChild(taskElement);
      todoCount++;
    } else if (task.status === "doing") {
      doingContainer.appendChild(taskElement);
      doingCount++;
    } else if (task.status === "done") {
      doneContainer.appendChild(taskElement);
      doneCount++;
    }
  });

  todoText.textContent = `TODO (${todoCount})`;
  doingText.textContent = `DOING (${doingCount})`;
  doneText.textContent = `DONE (${doneCount})`;
}

renderTasks();
