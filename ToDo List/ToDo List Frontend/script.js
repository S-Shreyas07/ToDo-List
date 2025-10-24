document.addEventListener("DOMContentLoaded", function() {
    getTasks();
});

async function getTasks(){
    let data = await fetch("http://localhost:8080/todo/list",{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }        
    });

    let tasks = await data.json();

    displayTasks(tasks);

}

function displayTasks(tasks) {
  const container = document.getElementById("taskContainer");
  container.innerHTML = ""; // clear previous content

  // Create a table for readability
  const table = document.createElement("table");
  table.border = "1";

  // Create header row
  const header = document.createElement("tr");
  header.innerHTML = "<th>ID</th><th>Name</th><th>Date</th><th>Complete</th>";
  table.appendChild(header);

  // Add each task as a row
  tasks.forEach(task => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${task.id}</td>
      <td>${task.name}</td>
      <td>${task.date}</td>
      <td>${task.complete ? "Completed" : "Incomplete"}</td>
    `;
    table.appendChild(row);
  });

  container.appendChild(table);
}

function showForm(){
    let taskInput = document.getElementById("taskInput");
    
    let form = `<label>Id</label>
                <input type="text" id="id">
                <label>Name</label>
                <input type="text" id="name">
                <label>Date</label>
                <input type="date" id="date">
                <label>Is Complete</label>
                <input type="checkbox" id="isComplete">
                <button type="button" onClick="saveTask()">Add Task</button>
    `;

    taskInput.innerHTML= form;    
}

async function saveTask() {
    const id = document.getElementById("id").value.trim();
    const name = document.getElementById("name").value.trim();
    const date = document.getElementById("date").value;
    const isComplete = document.getElementById("isComplete").checked;

    if(!id || isNaN(id)) {
        showMessage("Please enter a valid numeric ID.","warning");
        return;
    }

    if(!name) {
        showMessage("Name cannot be empty.","warning");
        return;
    }

    if(!date) {
        showMessage("Please select a valid date.","warning");
        return;
    }

    const task = {
        id: parseInt(id),
        name: name,
        date: date,
        isComplete: isComplete
    };

    try {
        let response = await fetch("http://localhost:8080/todo/add", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(task)
        });

        if(response.ok){
            showMessage("Task added successfully!","success");
        } else {
            showMessage("Error adding task.","error");
        }
    } catch (err) {
        showMessage("Failed to send request: " ,"error");
    }

    // Refresh tasks
    getTasks();
    taskInput.innerHTML = "";
}

function askId(){
    let taskInput = document.getElementById("taskInput");
    
    let form = `<label>Id</label>
                <input type="text" id="id">
                <button type="button" onClick="deleteTask()">Delete Task</button>
    `;

    taskInput.innerHTML= form;    
}

async function deleteTask() {
  let id = document.getElementById("id").value;
  const taskInput = document.getElementById("taskInput");

  try {
    const response = await fetch(`http://localhost:8080/todo/delete/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      showMessage("Task deleted successfully!","success");
      getTasks();
      taskInput.innerHTML = "";
    } else if (response.status === 404) {
      showMessage("Task not found! Please check the ID and try again.","warning");
    } else {
      const errorText = await response.text();
      showMessage("Error deleting task: Please enter a valid Id","warning");
    }
  } catch (error) {
    showMessage("Could not connect to the server. Please try again later.","error");
    console.error("Delete error:", error);
  }
}

function showMessage(msg, type, duration=3000) {
    const container = document.getElementById("messageContainer");

    const message = document.createElement("div");
    message.id= "message";
    message.textContent = msg;
    
    if(type === "success") {
        message.style.backgroundColor = "#4CAF50"; 
    } else if(type === "error") {
        message.style.backgroundColor = "#f44336"; 
    } else if(type === "warning") {
        message.style.backgroundColor = "#ff9800"; 
    }

    container.appendChild(message);

    setTimeout(() => {
        message.style.opacity = "0";
        setTimeout(() => {
            container.removeChild(message);
        }, 500);
    }, duration);
}





