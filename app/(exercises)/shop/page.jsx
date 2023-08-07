"use client";

import { useState } from "react";
import ChartModal from "./components/cart-modal";
import { ShoppingCart } from "lucide-react";
import { PRODUCTS } from "./contants";

// 1. Create a product list item component that takes a product information as props and displays the product name, price and an "Add to cart" button same as in the example.

// 2. Create a cart context that holds the cart items and a function to update the cart items.
// The cart items should be added to the local storage when the cart items are updated. If you reload the page, the cart items should still be there.

// 3. Create a context for the cart modal state and a function that handles the opening and closing of the modal.

// 4. Create a "Add product" button that contains a form with an input field and a submit button. When the form is submitted, the product should be added to the cart.

// 5. EXTRA! When the modal is open, add an event listener to the window to listen for the escape key, if the escape key is pressed, close the modal.

export default function ShopExamplePage() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <div className="bg-white h-screen">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="flex justify-between">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              This is some kind of webshop
            </h2>
            <button className="text-black" onClick={() => setCartOpen(true)}>
              <ShoppingCart />
            </button>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {PRODUCTS.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">{product.name}</h3>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.price} kr
                  </p>
                </div>
                <button
                  onClick={() => {
                    setCartItems((items) => [...items, product]);
                  }}
                  className="mt-4 rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Add to cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ChartModal
        setCartItems={setCartItems}
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
      />
    </>
  );
}
