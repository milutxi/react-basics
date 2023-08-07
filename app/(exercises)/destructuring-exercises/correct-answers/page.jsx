import Task from "@/app/components/task";
import { EXAMPLE_ARRAY, EXAMPLE_OBJECT } from "../contants";

// Destructuring operations
const { name } = EXAMPLE_OBJECT;

const {
  address: { city, state },
} = EXAMPLE_OBJECT;

const [firstActor] = EXAMPLE_ARRAY;

const [, , thirdActor] = EXAMPLE_ARRAY;

export default function Destructuring() {
  function displayActorDetails({ name, address: { city } }) {
    return `Actor: ${name}, City: ${city}`;
  }

  return (
    <div className="max-w-5xl">
      <h1 className="text-2xl mb-6">Object Destructuring</h1>

      <div className="grid gap-2 grid-cols-2">
        <pre className="relative mb-4 mt-2 max-h-[650px] overflow-x-auto rounded-lg border p-4">
          <code>{JSON.stringify(EXAMPLE_OBJECT, null, 2)}</code>
        </pre>

        <pre className="relative mb-4 mt-2 max-h-[650px] overflow-x-auto rounded-lg border p-4">
          <code>{JSON.stringify(EXAMPLE_ARRAY, null, 2)}</code>
        </pre>
      </div>

      <Task title="Task 1: Simple Object Destructuring">
        <p>Extract the name from EXAMPLE_OBJECT and display it.</p>
        <pre className="p-4 bg-gray-800 text-white rounded-md overflow-x-auto">
          <code>{`Result: ${name}`}</code>
        </pre>
      </Task>

      <Task title="Task 2: Nested Object Destructuring">
        <p>
          Extract the city and the state from the address in EXAMPLE_OBJECT and
          display it.
        </p>
        <pre className="p-4 bg-gray-800 text-white rounded-md overflow-x-auto">
          <code>{`Result: ${city}, ${state}`}</code>
        </pre>
      </Task>

      <Task title="Task 3: Array Destructuring">
        <p>Extract the first actor from EXAMPLE_ARRAY and display it.</p>
        <pre className="p-4 bg-gray-800 text-white rounded-md overflow-x-auto">
          <code>{`Result: ${firstActor}`}</code>
        </pre>
      </Task>

      <Task title="Task 4: Skipping Values in Array Destructuring">
        <p>Extract the third actor from EXAMPLE_ARRAY and display it.</p>
        <pre className="p-4 bg-gray-800 text-white rounded-md overflow-x-auto">
          <code>{`Result: ${thirdActor}`}</code>
        </pre>
      </Task>

      <Task title="Task 5: Function Parameter Destructuring">
        <p>
          Create a function that takes EXAMPLE_OBJECT as a parameter and
          displays the name and city.
        </p>
        <pre className="p-4 bg-gray-800 text-white rounded-md overflow-x-auto">
          <code>{`Result: ${displayActorDetails(EXAMPLE_OBJECT)}`}</code>
        </pre>
      </Task>
    </div>
  );
}
