import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import { todos } from "./todosData.js";

createRoot(document.getElementById("root")).render(<App todos={todos} />);
