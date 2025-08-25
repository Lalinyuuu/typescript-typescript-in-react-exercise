import { useState } from "react";

// TODO1: ประกาศ Type ให้ props
export interface GreetingProps {
  name: string;
  age: number;
}

// TODO2: กำหนด Type ให้ props
const Greeting: React.FC<GreetingProps> = ({ name, age }) => {
  // TODO3: กำหนด Type ให้ useState
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h1>
        Hello {name}, you are {age} years old 👋
      </h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount((c) => c + 1)}>Click Me</button>
    </div>
  );
};

export default Greeting;