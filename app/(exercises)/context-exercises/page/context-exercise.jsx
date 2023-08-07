"use client";
import React, { useContext } from "react";
import UserDetail from "../components/user-details";
import { UserContext } from "../context/user-context";
import Task from "../../../components/task";

function ContextExercise() {
  const { setUser } = useContext(UserContext);

  const handleUserChange = () => {
    setUser({
      name: "John Doe",
      email: "john@example.com",
    });
  };

  return (
    <div className="max-w-5xl p-4">
      <h1 className="text-2xl mb-6">React Context Exercises</h1>
      <p className="text-lg mb-4">
        {`React's "context" is a mechanism to share values between components without having to pass props at every level of the tree. This is particularly useful when you need to share data that is considered "global" for a group of React components, like the currently authenticated user, the selected theme, or the preferred language. Using context can significantly reduce the need for "prop drilling", where props have to be passed through multiple layers of components. This makes your code cleaner and easier to maintain, as you can avoid manually passing props down at each level. Furthermore, context allows sharing state and other data between components that aren't directly linked, increasing the flexibility and modularity of your component architecture. Thus, by leveraging context effectively, your React code can become more maintainable, readable, and efficient in managing state.`}
      </p>

      <Task
        title="Task 1: Extend UserContext functionality"
        description="Your task is to extend the UserContext to include a 'role' field. Adjust the setUser function to set a default role when setting the user, and display the user's role in the UserDetail component."
      >
        <button
          onClick={handleUserChange}
          className="py-2 px-4 bg-blue-500 text-white rounded"
        >
          Set User
        </button>
        <UserDetail />
      </Task>

      <Task
        title="Task 2: Create another context"
        description="Your task is to create another context called 'ThemeContext' to store the current theme (light or dark). Include 'theme' and 'setTheme' in the context provider, then use it in a new component to display the current theme and a button to toggle between light and dark themes."
      >
        {/* Here, students will need to create and use a new context for theme */}
      </Task>
    </div>
  );
}

export default ContextExercise;
