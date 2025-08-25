import { useState } from "react";

const TodoApp = () => {
  // TODO1: กำหนด Type ให้ state
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  // TODO2: ใส่ type ให้ event
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  // TODO3: ใส่ type ให้ event
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodos([...todos, input]);
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
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

// TODO4: Render ออกมาใน App.tsx
export default TodoApp;
