"use client";
import React, { useState } from "react";
import Task from "../../../components/task";

export default function UseStateExercise() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const addItemToList = () => {
    if (text !== "") {
      setList((prevState) => [...prevState, text]);
      setText("");
    }
  };

  return (
    <div className="max-w-5xl p-4">
      <h1 className="text-2xl mb-6">useState Exercises</h1>

      <Task title="Task 1: Increase Count and Reset">
        <div className="flex space-x-4">
          <button
            onClick={increaseCount}
            className="py-2 px-4 bg-blue-500 text-white rounded"
          >
            Increase Count
          </button>
          <button
            onClick={resetCount}
            className="py-2 px-4 bg-blue-500 text-white rounded"
          >
            Reset Count
          </button>
        </div>
        <p className="mt-4 font-medium text-lg">Count: {count}</p>
      </Task>

      <Task title="Task 2: Toggle Visibility">
        <button
          onClick={toggleVisibility}
          className="py-2 px-4 bg-blue-500 text-white rounded"
        >
          Toggle Visibility
        </button>
        {isVisible && <p className="mt-4 font-medium text-lg">I am visible</p>}
      </Task>

      <Task title="Task 3: Control a text input field">
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          className="py-2 px-4 border-2 border-gray-300 rounded text-black"
        />
        <p className="mt-4 font-medium text-lg">You are typing: {text}</p>
      </Task>

      <Task title="Task 4: Create a dynamic list">
        <div className="flex space-x-4">
          <input
            type="text"
            value={text}
            onChange={handleTextChange}
            className="py-2 px-4 border-2 border-gray-300 rounded flex-grow text-black"
          />
          <button
            onClick={addItemToList}
            className="py-2 px-4 bg-blue-500 text-white rounded"
          >
            Add to list
          </button>
        </div>
        <ul className="mt-4 space-y-2">
          {list.map((item, index) => (
            <li
              key={index}
              className="py-2 px-4 bg-white text-black rounded shadow"
            >
              {item}
            </li>
          ))}
        </ul>
      </Task>
    </div>
  );
}
