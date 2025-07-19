import { TodoForm } from "./components/TodoForm/TodoForm";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoFooter } from "./components/TodoFooter/TodoFooter";
import { useState } from "react";

import style from "./assets/global.module.css";

export function App(props) {
  const [todos, setTodos] = useState([...props.todos]);
  const onAdd = (title) => {
    setTodos([
      {
        id: Date.now(),
        title: title,
        completed: false,
      },
      ...todos,
    ]);
  };

  const clearCompleted = () =>
    setTodos(todos.filter((todo) => !todo.completed));

  const checketFunc = (e) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === e.id) {
          return e;
        }
        return todo;
      })
    );
  };

  return (
    <div className={style.container}>
      <div className={style.containerBlock}>
        <h1>MY TODOLIST</h1>
        <TodoForm onAdd={onAdd} />
        <TodoList
          todos={todos}
          onChange={checketFunc}
          onDelete={(todo) => {
            setTodos(todos.filter((el) => el.id !== todo.id));
          }}
        />
        <TodoFooter todos={todos} clearCompleted={clearCompleted} />
      </div>
    </div>
  );
}
