/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dropdown() {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          <div>
            <button
              onMouseEnter={() => setIsShowing((isShowing) => !isShowing)}
            >
              <span class="mr-4 text-xs font-normal text-gray-900 hover:underline">
                Shopping Cart
              </span>
            </button>
          </div>

          <Transition
            show={isShowing}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              onMouseLeave={() => setIsShowing((isShowing) => !isShowing)}
              className="origin-top-right absolute right-0 mt-4 w-72 z-20 shadow-lg bg-gray-50 border border-gray-900"
            >
              <div className="pt-4">
                  <span class="text-xs font-medium text-gray-900 ml-4">It appears that your cart is currently empty!</span>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-violet-600 text-gray-50 w-3/4 ml-4 my-4" : "bg-gray-900 text-gray-50 w-3/4 ml-4 my-4",
                        "block px-4 mb-5 py-2 text-normal font-bold uppercase text-center"
                      )}
                    >
                        Continue Shopping
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}
