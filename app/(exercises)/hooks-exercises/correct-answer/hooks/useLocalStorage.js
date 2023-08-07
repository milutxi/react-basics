"use client";

import { useState } from "react";

function useLocalStorage({ key }) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? JSON.parse(storedValue) : null;
  });

  const setStoredValue = (newValue) => {
    // Set the new value in local storage
    localStorage.setItem(key, JSON.stringify(newValue));
    // Update the state
    setValue(newValue);
  };

  const removeStoredValue = () => {
    // Remove the value from the local storage
    localStorage.removeItem(key);
    // Update the state
    setValue(null);
  };

  return { value, setStoredValue, removeStoredValue };
}

export default useLocalStorage;
