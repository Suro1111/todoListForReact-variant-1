import { useState } from "react";

export function TodoForm({ onAdd }) {
  const [text, setText] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();
    if (text !== "" && text !== " ") {
      onAdd(text.trim());
      setText("");
    }
  };

  const changeInput = (e) => setText(e.target.value);

  return (
    <form onSubmit={formSubmit}>
      <input
        type="text"
        placeholder="Add todo ..."
        value={text}
        onChange={changeInput}
      />
      <button>Add</button>
    </form>
  );
}
