
  // Selecting necessary DOM Elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");
const removeCompletedButton = document.getElementById("removeCompletedButton");

/* Step 2: Add New Tasks
 Listener for a click event on the "Add Task" button.
*/
addTaskButton.addEventListener("click", () => {
const taskText = taskInput.value.trim();

if (taskText !== "") {
  // Create a new list item
  const newTask = document.createElement("li");
  newTask.textContent = taskText;

  // Add task to the list
  taskList.appendChild(newTask);

  // Clear the input field
  taskInput.value = "";
} else {
  alert("Please enter a task!");
}
});

// Step 3: Mark Tasks as Completed
taskList.addEventListener("click", (event) => {
if (event.target.tagName === "LI") {
  event.target.classList.toggle("completed");
}
});

// Step 4: Remove Completed Tasks
removeCompletedButton.addEventListener("click", () => {
const tasks = document.querySelectorAll("#taskList li");

tasks.forEach((task) => {
  if (task.classList.contains("completed")) {
    task.remove();
  }
});
});
