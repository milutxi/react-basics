"use client";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";

const CartModal = ({ isOpen, onClose, cartItems, setCartItems }) => {
  const el = document.createElement("div");

  useEffect(() => {
    // Append the created element to the modal root on mount
    const modalRoot = document.getElementById("modal-root");
    modalRoot.appendChild(el);

    // Clean up function to remove the element on unmount
    return () => {
      modalRoot.removeChild(el);
    };
  }, [el]);

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-start h-screen justify-end bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-md space-y-4 h-full w-96">
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold text-black">Cart</h2>
          <button className="text-black" onClick={onClose}>
            Close
          </button>
        </div>

        <div className="flex flex-col-reverse divide-y divide-y-reverse">
          {cartItems.map((item) => (
            <div className="p-4" key={item.id}>
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-md"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">${item.price}</p>
                </div>
              </div>
              <button
                onClick={() => {
                  setCartItems((prevState) =>
                    prevState.filter((cartItem) => cartItem.id !== item.id)
                  );
                }}
                className="mt-2 rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Remove from chart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>,
    el
  );
};

export default CartModal;
