# Kanban Task Management

A responsive Kanban board for organising and tracking tasks across three workflow stages: **TODO**, **DOING**, and **DONE**.

---

## Description

Kanban Task Management is a browser-based productivity tool that lets you visualise your work in progress at a glance. Tasks are displayed as cards in their respective status columns, and can be edited in real time through a clean modal interface. The app is built with vanilla HTML, CSS, and JavaScript — no frameworks or build tools required.

---

## Technologies Used

- **HTML5** — Semantic markup and `<dialog>` element for the modal
- **CSS3** — Flexbox, CSS Grid and responsive media queries
- **JavaScript (ES6+)** — Modules, array methods, DOM manipulation, and event handling
- **Google Fonts** — [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)

---

## Features

- **Three-column Kanban board** — Tasks are grouped into TODO, DOING, and DONE columns with live task counts
- **Task cards** — Each task displays its title as a clickable card
- **Edit modal** — Click any task card to open a modal and edit the title, description, and status
- **Dynamic Task Rendering** — Tasks are dynamically rendered based on their status. When a task’s status changes, it automatically moves to the appropriate column.

---

## Setup Instructions

1. Clone the repository:
   `git clone https://github.com/mughammadcase/MUGCAS25563_PTO2508_Mughammad_Case_JSL04.git`

2. Navigate into the project folder.

3. Open the project in your code editor.

4. Start the project using Live Server:
   - Right-click on the `index.html` file.
   - Select **Open with Live Server**

5. Open with Live Server

---

### Viewing Tasks

Tasks are loaded automatically when the page opens. Each column header displays the current task count, e.g. **TODO (3)**.

### Editing a Task

1. Click on any task card on the board.
2. The **Task modal** opens with the task's current title, description, and status.
3. Edit the fields:
   - **Title** — Type directly into the text input and the card title updates live.
   - **Description** — Type into the textarea to update the task's description.
   - **Status** — Use the dropdown to move the task to the **todo**, **doing**, or **done** column.
4. Close the modal by clicking the **×** button in the top-right corner.

---
