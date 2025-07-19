import style from "./TodoItem.module.css";

export function TodoItem({ todo, onChange, onDelete }) {
  return (
    <>
      <label className={style.label}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => {
            onChange({
              ...todo,
              completed: e.target.checked,
            });
          }}
        />
        {todo.title}
        <button
          onClick={() => {
            onDelete(todo);
          }}
        >
          X
        </button>
      </label>
    </>
  );
}
