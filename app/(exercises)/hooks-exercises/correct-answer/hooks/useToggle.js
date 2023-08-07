"use client";
import { useState } from "react";

export default function useToggle(initialState = false) {
  const [isToggled, setIsToggled] = useState(initialState);

  const changeToggleValue = () => {
    setIsToggled((prevState) => !prevState);
  };

  return { isToggled, changeToggleValue };
}
