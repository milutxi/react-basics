"use client";

import React from "react";
import { UserProvider } from "./context/user-context";
import ContextExercise from "./page/context-exercise";

function App() {
  return (
    <UserProvider>
      <ContextExercise />
    </UserProvider>
  );
}

export default App;
