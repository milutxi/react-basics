"use client";

import { useState } from "react";

import useLocalStorage from "./hooks/useLocalStorage";
import useToggle from "./hooks/useToggle";
import Task from "../../components/task";

export default function CustomHookExercise() {
  const [inputValue, setInputValue] = useState("");
  const { value, setStoredValue, removeStoredValue } = useLocalStorage({
    key: "alex-test-key",
  });

  const { isToggled, changeToggleValue } = useToggle();

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStoredValue(inputValue);
  };

  const handleRemove = () => {
    removeStoredValue();
  };

  const handleToggleValue = () => {
    changeToggleValue();
  };

  return (
    <div className="max-w-5xl p-4">
      <h1 className="text-2xl mb-6">Custom Hook Exercise: useLocalStorage</h1>
      <p className="text-lg mb-4">
        Hooks are a feature in React that allow you to leverage state and other
        React functionalities inside your functional components. Rather than
        working with larger structures, Hooks provide a way to break down your
        application logic into smaller, reusable pieces. The goal of using Hooks
        is to make your code cleaner, more readable, and more maintainable.
      </p>

      <Task
        title="Task 1: Implement useToggle Hook"
        description="Use the provided custom hook, useToggle, to manage the state of a button. The state should toggle between true and false when the button is clicked."
      >
        <button
          type="button"
          onClick={handleToggleValue}
          className="py-2 px-4 bg-blue-500 text-white rounded"
        >
          Toggle
        </button>
        <p className="mt-4">
          {isToggled ? "The state is true" : "The state is false"}
        </p>
      </Task>

      <Task
        title="Task 2: Storing value in Local Storage"
        description="Implement a form that saves the user's input in local storage using the custom hook, useLocalStorage. The value should persist even after the page is refreshed."
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            className="py-2 px-4 border-2 border-gray-300 rounded text-black"
          />
          <div className="flex gap-2 items-baseline">
            <button
              type="submit"
              className="py-2 px-4 bg-blue-500 text-white rounded"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleRemove}
              className="py-2 px-4 bg-red-500 text-white rounded mt-4"
            >
              Remove value
            </button>
          </div>
        </form>
        {value && <p className="mt-4">Stored value: {value}</p>}
      </Task>
    </div>
  );
}
