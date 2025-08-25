import { useState } from "react";

const TodoApp: React.FC = () => {
  // TODO1: กำหนด Type ให้ state
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  // TODO2: ใส่ Type ให้ event ของ handleChange
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  // TODO3: ใส่ Type ให้ event ของ handleSubmit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTodos((prev) => [...prev, input.trim()]);
    setInput("");
  };

  return (
    <div>
      <h1>Todo App ✅</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleChange} />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;