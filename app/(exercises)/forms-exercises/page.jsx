"use client";
import { useState } from "react";
import Task from "../../components/task";

export default function FormExercise() {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    checkbox: false,
    radioValue: "",
    selectedOption: "",
  });

  const handleInputChange = (event) => {};

  const handleCheckboxChange = (event) => {};

  const handleRadioChange = (event) => {};

  const handleSelectChange = (event) => {};

  const handleSubmit = (event) => {};

  return (
    <div className="max-w-5xl p-4">
      <h1 className="text-2xl mb-6">Form Handling Exercises</h1>
      <p className="text-lg mb-4">
        Handling user input in forms is a common task in web development. React
        provides ways to work with form inputs that makes it easier to handle
        their changes and collect their values. In these exercises, we will
        explore how to handle the state of different types of form inputs such
        as text, checkboxes, radio buttons and select dropdowns using React
        Hooks.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Task
          title="Task 1: Basic Input Handling"
          description="Create a controlled input field for 'firstName' in the form. The value should be updated in state every time the user types into the field."
        >
          {/* ...task content... */}
        </Task>

        <Task
          title="Task 2: Multiple Inputs Handling"
          description="Create another controlled input fields for'lastName'. Both firstName and lastName should update their corresponding values in the state."
        >
          {/* ...task content... */}
        </Task>

        <Task
          title="Task 3: Checkbox Handling"
          description="Create a controlled checkbox for 'checkbox'. Its checked status should reflect the corresponding state and should update when the user clicks on it."
        >
          {/* ...task content... */}
        </Task>

        <Task
          title="Task 4: Radio Button Handling"
          description="Create controlled radio buttons for 'radioValue'. The selected radio button should reflect the state and update when the user selects a different option."
        >
          {/* ...task content... */}
        </Task>

        <Task
          title="Task 5: Select Dropdown Handling"
          description="Create a controlled select dropdown for 'selectedOption'. The selected option should reflect the state and update when the user selects a different option."
        >
          {/* ...task content... */}
        </Task>

        <Task
          title="Task 6: Merge handleRadioChange, handleSelectChange, and handleInputChange into one function"
          description="Create a single function that handles all input changes."
        />
      </form>
    </div>
  );
}
