package com.todoList.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.todoList.model.Tasks;

public interface ToDoListRepository extends JpaRepository<Tasks, Integer>{

}
