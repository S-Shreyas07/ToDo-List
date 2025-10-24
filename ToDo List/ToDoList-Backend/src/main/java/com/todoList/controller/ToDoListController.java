package com.todoList.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.todoList.model.Tasks;
import com.todoList.service.ToDoListServiceImplementation;

@RestController
@CrossOrigin(origins = "*")
public class ToDoListController {
	
	@Autowired
	public ToDoListServiceImplementation service;
	
	@GetMapping("/todo/list")
	public List<Tasks> getAllTasks(){
		return service.getAllTasks();
	}
	
	@PostMapping("/todo/add")
	public void addTasks(@RequestBody Tasks task) {
		service.addTask(task);
	}
	
	@PutMapping("/todo/update")
	public void upateTasks(@RequestBody Tasks task) {
		service.updateTask(task);
	}
	
	@DeleteMapping("/todo/delete/{id}")
	public ResponseEntity<String> deleteTasks(@PathVariable int id) {
		 Optional<Tasks> task = service.findById(id);
		    
		    if (task.isPresent()) {
		        service.deleteTask(id);
		        return ResponseEntity.ok("Task deleted successfully");
		    } else {
		        return ResponseEntity.status(HttpStatus.NOT_FOUND)
		                             .body("Task with ID " + id + " not found");
		    }
	}
}
