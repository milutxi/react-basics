import Task from "../../components/task";
import { EXAMPLE_ARRAY, EXAMPLE_OBJECT } from "./contants";

export default function Destructuring() {
  return (
    <div className="max-w-5xl">
      <h1 className="text-2xl mb-6">Object Destructuring</h1>
      <p className="text-lg mb-4">
        {`Destructuring is a JavaScript feature that allows us to extract multiple
        pieces of data from arrays or objects and assign them to their own
        variables in a single line. This is a powerful tool that makes your code
        more readable and less cluttered. It's especially handy when you're
        working with objects and arrays as function parameters, or when you need
        to manipulate data returned by an API call. In these exercises, we will
        practice both object and array destructuring, as well as how to use
        destructuring in function parameters.`}
      </p>

      <div className="grid gap-2 grid-cols-2  mt-4">
        <div>
          <h2 className="text-lg font-medium">EXAMPLE_OBJECT</h2>
          <pre className="relative mb-4 mt-2 max-h-[650px] overflow-x-auto rounded-lg border p-4">
            <code>{JSON.stringify(EXAMPLE_OBJECT, null, 2)}</code>
          </pre>
        </div>

        <div>
          <h2 className="text-lg font-medium">EXAMPLE_ARRAY</h2>
          <pre className="relative mb-4 mt-2 max-h-[650px] overflow-x-auto rounded-lg border p-4">
            <code>{JSON.stringify(EXAMPLE_ARRAY, null, 2)}</code>
          </pre>
        </div>
      </div>

      <Task title="Task 1: Simple Object Destructuring">
        <p>Extract the name from EXAMPLE_OBJECT and display it.</p>
        <pre className="p-4 bg-gray-800 text-white rounded-md overflow-x-auto">
          <code>{`Answer here`}</code>
        </pre>
      </Task>

      <Task title="Task 2: Nested Object Destructuring">
        <p>
          Extract the city and the state from the address in EXAMPLE_OBJECT and
          display it.
        </p>
        <pre className="p-4 bg-gray-800 text-white rounded-md overflow-x-auto">
          <code>{`Answer here`}</code>
        </pre>
      </Task>

      <Task title="Task 3: Array Destructuring">
        <p>Extract the first actor from EXAMPLE_ARRAY and display it.</p>
        <pre className="p-4 bg-gray-800 text-white rounded-md overflow-x-auto">
          <code>{`Answer here`}</code>
        </pre>
      </Task>

      <Task title="Task 4: Skipping Values in Array Destructuring">
        <p>Extract the third actor from EXAMPLE_ARRAY and display it.</p>
        <pre className="p-4 bg-gray-800 text-white rounded-md overflow-x-auto">
          <code>{`Answer here`}</code>
        </pre>
      </Task>

      <Task title="Task 5: Function Parameter Destructuring">
        <p>
          Create a function that takes EXAMPLE_OBJECT as a parameter and
          displays the name and city.
        </p>
        <pre className="p-4 bg-gray-800 text-white rounded-md overflow-x-auto">
          <code>{`Answer here`}</code>
        </pre>
      </Task>
    </div>
  );
}
