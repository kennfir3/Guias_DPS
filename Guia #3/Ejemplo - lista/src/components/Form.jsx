"use client";
import React, { useState } from 'react';
import Todo from './Todo';
import styles from "../app/page.module.css";

const Form = () => {
  const [todo, setTodo] = useState({});
  const [todos, setTodos] = useState([
    { todo: "todo 1" },
    { todo: "todo 2" },
    { todo: "todo 3" },
  ]);

  const handleChange = e => setTodo({ [e.target.name]: e.target.value });

  const handleClick = e => {
    if (Object.keys(todo).length === 0 || todo.todo.trim() === "") {
      alert('El campo no puede estar vacío');
      return;
    }

    setTodos([...todos, todo]);
  };

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <form onSubmit={e => e.preventDefault()}>
      <label>Agregar Tarea</label><br />
      <input
        className={styles.form_input}
        type="text"
        name="todo"
        onChange={handleChange}
      />
      <button
        className={styles.form_button}
        onClick={handleClick}
      >
        Agregar
      </button>
      {todos.map((value, index) => (
        <Todo
          todo={value.todo}
          key={index}
          index={index}
          deleteTodo={deleteTodo}
        />
      ))}
    </form>
  );
};

export default Form;
