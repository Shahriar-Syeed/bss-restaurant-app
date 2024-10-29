import { useState } from "react";
import Button from "../UI/Button.jsx";
import defaultImage from "../../assets/default-image-preview.png";

export default function CartWithDrawer() {
  const [showCartDrawer, setShowCartDrawer] = useState(false);

  function toggle() {
    setShowCartDrawer((prev) => !prev);
  }
  return (
    <>
      <Button
        className="relative rounded-md hover:bg-red-800 px-4 py-2"
        onClick={toggle}
      >
        <svg
          className="h-6 fill-white"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
        >
          <path d="m17.21 9-4.38-6.56c-.19-.28-.51-.42-.83-.42-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1zM9 9l3-4.4L15 9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2"></path>
        </svg>
        <span className="absolute right-3 top-0">0</span>
      </Button>
      <div
        className={`fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-80 ${
          showCartDrawer ? "transform-none" : "translate-x-full"
        }`}
        aria-labelledby="drawer-right-label"
      >
        <h5 className=" items-center mb-5 border-b-2 border-primary text-xl text-primary font-bold">
          Cart
        </h5>
        <Button
          type="button"
          aria-controls="drawer-right-cart"
          className="text-gray-400 bg-primary hover:bg-opacity-35  rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center z-50"
          onClick={toggle}
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </Button>
        <div className="grid">
          <div>
            <img src={defaultImage} alt="" />
          </div>
        </div>
      </div>
      <div
        className={
          showCartDrawer &&
          `bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-30`
        }
        onClick={toggle}
      ></div>
    </>
  );
}
