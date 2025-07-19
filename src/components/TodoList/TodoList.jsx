import { TodoItem } from "./TodoItem/TodoItem";

import style from "./TodoList.module.css";

export function TodoList({ todos, onChange, onDelete }) {
  return (
    <div className={style.todoList}>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} 
        todo={todo} 
        onChange={onChange}
        onDelete={onDelete}
        />;
      })}
    </div>
  );
}
