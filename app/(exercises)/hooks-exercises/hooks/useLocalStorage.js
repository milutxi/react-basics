"use client";
import { useState } from "react";

function useLocalStorage({ key }) {
  const [value, setValue] = useState(null);

  const setStoredValue = (newValue) => {};

  const removeStoredValue = () => {};

  return { value, setStoredValue, removeStoredValue };
}

export default useLocalStorage;
