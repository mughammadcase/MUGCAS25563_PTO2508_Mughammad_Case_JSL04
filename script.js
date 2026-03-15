import { initialTasks } from "./initialData.js";

/**
 * Clones initialTasks data keeping original data intact
 */
const tasks = [...initialTasks];

const todoContainer = document.querySelector("#todo-container");
const doingContainer = document.querySelector("#doing-container");
const doneContainer = document.querySelector("#done-container");

console.log(todoContainer, doingContainer, doneContainer); // Tests in browser console
