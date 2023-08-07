"use client";

export default function Task({ title, description, children }) {
  return (
    <div className="task shadow-md rounded-lg p-6 my-4 border">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      {children}
    </div>
  );
}
