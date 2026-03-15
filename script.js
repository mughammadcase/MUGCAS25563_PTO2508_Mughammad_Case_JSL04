import { initialTasks } from "./initialData.js";

/**
 * Clones initialTasks data for manipulating keeping original data intact
 */
const tasks = [...initialTasks];

const todoContainer = document.querySelector("#todo-container");
const doingContainer = document.querySelector("#doing-container");
const doneContainer = document.querySelector("#done-container");

// Modal elements
const modal = document.querySelector("#modal-container");
const closeBtn = document.querySelector("#close-modal-btn");

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

function openTaskModal(task) {
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
 * @returns {void} - No return value
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
