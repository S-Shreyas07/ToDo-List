package com.todoList.service;

import java.util.List;
import java.util.Optional;

import com.todoList.model.Tasks;

public interface ToDoListService {
	
	public void addTask(Tasks task);
	
	public Optional<Tasks> findById(int id);
	
	public List<Tasks> getAllTasks();
	
	public void updateTask(Tasks task);
	
	public void deleteTask(int id);

}
