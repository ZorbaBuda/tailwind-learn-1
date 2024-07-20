"use client";
import { SetStateAction, useState } from "react";

export default function UseState() {
  return (
    <div className="flex-col gap-y-10">
      <Counter />
      <MyInput />
    </div>
  );
}

function MyInput() {
  const [text, setText] = useState("hello");

  function handleChange(e: { target: { value: SetStateAction<string>; }; }) {
    setText(e.target.value);
  }

  return (
    <>
      <input value={text} onChange={handleChange} />
      <p>You typed: {text}</p>
      <button onClick={() => setText("hello")}>Reset</button>
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick} className="btnGrayToBlue">
      You pressed me {count} times
    </button>
  );
}
