"use client";
import { useState } from "react";

export default function useToggle(initialState = false) {
  const [isToggled, setIsToggled] = useState(initialState);

  const changeToggleValue = () => {
    // TODO: Implement a function to toggle the value between true and false
  };

  return { isToggled, changeToggleValue };
}
