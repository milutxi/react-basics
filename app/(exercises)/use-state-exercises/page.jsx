"use client";
import React, { useState } from "react";
import Task from "../../components/task";

export default function UseStateExercise() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const increaseCount = () => {};

  const resetCount = () => {};

  const toggleVisibility = () => {};

  const handleTextChange = (event) => {};

  const addItemToList = () => {};

  return (
    <div className="max-w-5xl p-">
      <h1 className="text-2xl mb-6">Local state management</h1>
      <p className="text-lg mb-4">
        The useState hook is a built-in function in React that allows you to add
        state to your functional components. It accepts an initial state as its
        argument and returns an array of two elements: the current state and a
        function to update that state.
      </p>
      <Task
        title="Task 1: Increase Count and Reset"
        description="In this task, you're expected to add logic to the 'increaseCount' and 'resetCount' functions. 'increaseCount' should increment the 'count' state by 1 each time the 'Increase Count' button is clicked. 'resetCount' should reset the 'count' state back to 0 each time the 'Reset Count' button is clicked."
      >
        {/* ... */}
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

      <Task
        title="Task 2: Toggle Visibility"
        description="This task requires you to add functionality to the 'toggleVisibility' function. Whenever the 'Toggle Visibility' button is clicked, it should switch the 'isVisible' state between true and false. This will result in the text 'I am visible' being hidden or displayed."
      >
        <button
          onClick={toggleVisibility}
          className="py-2 px-4 bg-blue-500 text-white rounded"
        >
          Toggle Visibility
        </button>
        {isVisible && <p className="mt-4 font-medium text-lg">I am visible</p>}
      </Task>

      <Task
        title="Task 3: Control a text input field"
        description="In this task, the goal is to control a text input field using the 'handleTextChange' function. The function should be able to change the 'text' state as you type in the input field. The updated 'text' state should be displayed below the input field."
      >
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          className="py-2 px-4 border-2 border-gray-300 rounded text-black"
        />
        <p className="mt-4 font-medium text-lg">You are typing: {text}</p>
      </Task>

      <Task
        title="Task 4: Create a dynamic list"
        description="In this task, you need to implement a dynamic list. Add a function 'addItemToList' that adds a new item to the 'list' state when you click the 'Add to list' button. The item should be whatever is currently in the 'text' state. After adding an item, clear the 'text' state and input field. The dynamic list below should update accordingly with each added item."
      >
        {/* ... */}
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
