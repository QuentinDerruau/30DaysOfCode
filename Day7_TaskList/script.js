const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");
const filterButtons = document.querySelectorAll(".filter-btn");

let tasks = [];

function addTask(event) {
	event.preventDefault();

	if (taskInput.value.trim() === "") {
		alert("Add a task");
		return;
	}

	const task = {
		id: Date.now(),
		name: taskInput.value.trim(),
		completed: false
	};

	tasks.push(task);
	renderTasks();
	taskInput.value = "";
}

function deleteTask(id) {
	tasks = tasks.filter(task => task.id !== id);
	renderTasks();
}

function updateTask(id) {
	const taskIndex = tasks.findIndex(task => task.id === id);
	tasks[taskIndex].completed = !tasks[taskIndex].completed;
	renderTasks();
}

function renderTasks() {
	taskList.innerHTML = "";

	const filter = document.querySelector(".filter-btn.active").dataset.filter;

	const filteredTasks = filter === "completed"
		? tasks.filter(task => task.completed)
		: filter === "uncompleted"
			? tasks.filter(task => !task.completed)
			: tasks;

	filteredTasks.forEach(task => {
		const li = document.createElement("li");
		li.classList.add("task");
		li.innerHTML = `
			<span>${task.name}</span>
			<button class="delete-btn">Supprimer</button>
			<button class="update-btn">${task.completed ? "Uncompleted" : "Completed"}</button>
		`;
		const deleteButton = li.querySelector(".delete-btn");
		deleteButton.addEventListener("click", () => deleteTask(task.id));
		const updateButton = li.querySelector(".update-btn");
		updateButton.addEventListener("click", () => updateTask(task.id));
		if (task.completed) {
			li.classList.add("completed");
		}
		taskList.appendChild(li);
	});
}

function filterTasks(event) {
	const filter = event.target.dataset.filter;
	filterButtons.forEach(button => button.classList.remove("active"));
	event.target.classList.add("active");
	renderTasks();
}

taskForm.addEventListener("submit", addTask);
filterButtons.forEach(button => button.addEventListener("click", filterTasks));

renderTasks();