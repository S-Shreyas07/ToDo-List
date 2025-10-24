package com.todoList.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.todoList.Repository.ToDoListRepository;
import com.todoList.model.Tasks;

@Service
public class ToDoListServiceImplementation implements ToDoListService{
	
	@Autowired
	ToDoListRepository repository;
	
	public Optional<Tasks> findById(int id) {
		return repository.findById(id);
	}
	
	public void addTask(Tasks task) {
		repository.save(task);
	}
	
	public List<Tasks> getAllTasks(){
		return repository.findAll();
	}
	
	public void updateTask(Tasks task) {
		repository.save(task);
	}
	
	public void deleteTask(int id) {
		repository.deleteById(id);
	}
}
