import style from "./TodoFooter.module.css";

export function TodoFooter({ todos, clearCompleted }) {
  const completedCount = todos.filter((todo) => todo.completed).length;
  return (
    <div className={style.todoFooter}>
      <span>
        ( {completedCount} / {todos.length} completed )
      </span>
      <button onClick={clearCompleted}>Clear completed</button>
    </div>
  );
}
