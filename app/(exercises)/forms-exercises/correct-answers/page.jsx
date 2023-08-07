"use client";
import React, { useState } from "react";
import Task from "../../../components/task";

export default function FormExerciseSolution() {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    checkbox: false,
    radioValue: "",
    selectedOption: "",
  });

  const handleInputChange = (event) => {
    setFormValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleCheckboxChange = (event) => {
    setFormValues((prevState) => ({
      ...prevState,
      checkbox: event.target.checked,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };

  return (
    <div className="max-w-5xl p-4">
      <h1 className="text-2xl mb-6">Form Handling Exercises - Solutions</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Task
          title="Task 1: Basic Input Handling"
          description="Create a controlled input field for 'firstName' in the form. The value should be updated in state every time the user types into the field."
        >
          <input
            type="text"
            name="firstName"
            value={formValues.firstName}
            onChange={handleInputChange}
            className="py-2 px-4 border-2 border-gray-300 rounded text-black"
          />
          <button
            type="submit"
            className="py-2 px-4 bg-blue-500 text-white rounded mt-4"
          >
            Submit
          </button>
        </Task>

        <Task
          title="Task 2: Multiple Inputs Handling"
          description="Create another controlled input fields for'lastName'. Both firstName and lastName should update their corresponding values in the state."
        >
          <input
            type="text"
            name="lastName"
            value={formValues.lastName}
            onChange={handleInputChange}
            className="py-2 px-4 border-2 border-gray-300 rounded text-black"
          />
          <button
            type="submit"
            className="py-2 px-4 bg-blue-500 text-white rounded mt-4"
          >
            Submit
          </button>
        </Task>

        <Task
          title="Task 3: Checkbox Handling"
          description="Create a controlled checkbox for 'checkbox'. Its checked status should reflect the corresponding state and should update when the user clicks on it."
        >
          <input
            type="checkbox"
            name="checkbox"
            checked={formValues.checkbox}
            onChange={handleCheckboxChange}
          />
          <button
            type="submit"
            className="py-2 px-4 bg-blue-500 text-white rounded mt-4"
          >
            Submit
          </button>
        </Task>

        <Task
          title="Task 4: Radio Button Handling"
          description="Create controlled radio buttons for 'radioValue'. The selected radio button should reflect the state and update when the user selects a different option."
        >
          <input
            type="radio"
            name="radioValue"
            value="Option1"
            checked={formValues.radioValue === "Option1"}
            onChange={handleInputChange}
          />{" "}
          Option1
          <input
            type="radio"
            name="radioValue"
            value="Option2"
            checked={formValues.radioValue === "Option2"}
            onChange={handleInputChange}
          />{" "}
          Option2
          <button
            type="submit"
            className="py-2 px-4 bg-blue-500 text-white rounded mt-4"
          >
            Submit
          </button>
        </Task>

        <Task
          title="Task 5: Select Dropdown Handling"
          description="Create a controlled select dropdown for 'selectedOption'. The selected option should reflect the state and update when the user selects a different option."
        >
          <select
            name="selectedOption"
            value={formValues.selectedOption}
            onChange={handleInputChange}
            className="py-2 px-4 border-2 border-gray-300 rounded text-black"
          >
            <option value="">Select...</option>
            <option value="Option1">Option1</option>
            <option value="Option2">Option2</option>
          </select>
          <button
            type="submit"
            className="py-2 px-4 bg-blue-500 text-white rounded mt-4"
          >
            Submit
          </button>
        </Task>

        <Task
          title="Task 6: Merge handleRadioChange, handleSelectChange, and handleInputChange into one function"
          description="See handleInputChange function above. It uses the name attribute of the input field to determine which state property to update."
        />
      </form>
    </div>
  );
}
