# ToDo-List
A simple ToDo List web application built with Spring Boot for the backend and vanilla JavaScript, HTML, and CSS for the frontend. Users can add, delete, and view tasks with basic form validation and styled alerts.

# Features
•	Display all tasks in a readable table format.

•	Add new tasks with ID, name, date, and completion status.

•	Delete tasks by ID.

•	Real-time updates without reloading the page.

•	Alerts for success, errors, and invalid input.

•	Form validation: numeric ID, non-empty name, valid date.

•	Styled and disappearing alert messages.

# Technologies Used
•	Backend: Java, Spring Boot, JPA (Hibernate), MySQL

•	Frontend: HTML, CSS, JavaScript (vanilla)

•	Communication: REST API using JSON

# Backend Setup
1.	Clone the repository and open it in your IDE (e.g., Eclipse, IntelliJ).	
2.	Configure your database (H2 for development or MySQL for production).	
3.	Build the project and run the Spring Boot application:	
4.	mvn spring-boot:run	
5.	Available endpoints:
	
        o	GET /todo/list – Get all tasks
  	
        o	POST /todo/add – Add a new task (expects JSON)

  	    o	POST /todo/update – Updates an existing task (expects JSON)
  	
        o	DELETE /todo/delete/{id} – Delete a task by ID
# Frontend Setup
1.	Open index.html in your browser.
2.	Make sure the backend is running at http://localhost:8080.
3.	Interact with the app:  
        o	Add Task → fills the form and click "Add Task".  
        o	Delete Task → enter task ID and click "Delete Task".  
5.	Alerts will show messages for success or errors and disappear automatically.

# File Structure  
├── backend/  
│   ├── src/main/java/com/todoList/  
│   │   ├── model/Tasks.java  
│   │   ├── repository/TaskRepository.java  
│   │   └── controller/TaskController.java  
│   └── application.properties  
├── frontend/  
│   ├── index.html  
│   ├── script.js  
│   └── style.css  
└── README.md  

# Screenshots  
<img width="1919" height="796" alt="image" src="https://github.com/user-attachments/assets/55b96151-d128-4186-90a9-f19e9120be03" />  
<img width="1905" height="583" alt="image" src="https://github.com/user-attachments/assets/4c1aedbb-cb90-4576-861b-297948ca53ea" />  
<img width="1920" height="630" alt="image" src="https://github.com/user-attachments/assets/aa8dcff6-f944-4156-94ea-50981fc7d062" />  
<img width="1918" height="674" alt="image" src="https://github.com/user-attachments/assets/22174c21-0f8e-4002-b637-c444da16932f" />






  	



