// Exercise1.tsx
import { useState } from "react";

// TODO1:  ประกาศ Type ด้วย type หรือ inerface

interface GreetingProp {
  name: string;
  age: number;
}

// TODO2: กำหนด Type ให้ props
const Greeting = (props: GreetingProp) => {
  // TODO3: กำหนด Type ให้ useState
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h1>
        Hello {props.name}, you are {props.age} years old 👋
      </h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
};

// TODO4 : Render ออกมาใน App.tsx
export default Greeting;
