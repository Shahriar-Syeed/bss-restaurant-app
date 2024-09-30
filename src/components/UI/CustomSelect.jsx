// CustomSelect.js
import { useEffect, useRef, useState } from "react";

const CustomSelect = ({ label, options = [], onChange, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState();
  const [isFocused, setIsFocused] = useState(false);

  const showOption = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!showOption.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setIsFocused(!isFocused);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (selectedOption) setIsFocused(true);
  };

  return (
    <div className="relative" ref={showOption}>
      <input
        type="hidden"
        value={selectedOption ? selectedOption.sendingValue : 0}
        {...props}
      />
      <div
        className={`border rounded cursor-pointer w-full  p-3.5 flex items-center justify-between text-gray-900 bg-transparent border-solid appearance-none hover:border-gray-400 border-gray-200
        ${isFocused ? "border-blue-900" : "border-gray-200"}`}
        onClick={handleToggle}
        onBlur={handleBlur}
        role="combobox"
        aria-expanded={isOpen}
        tabIndex={0}
      >
        <label
          className={`absolute text-xsm sm:text-sm md:text-base transform  text-gray-500 pointer-events-none transition-all duration-300
          ${
            isFocused || selectedOption
              ? "scale-75 top-2 bg-white px-1 text-blue-500 -translate-y-4 origin-[0] z-10"
              : "top-1/2 -translate-y-1/2 rtl:translate-x-1/4 rtl:left-auto"
          }`}
        >
          {label}
        </label>

        <span
          className={`flex-1 ${
            selectedOption
              ? "text-xsm sm:text-sm md:text-base"
              : "text-gray-400"
          }`}
        >
          {selectedOption && selectedOption.label}
        </span>
        <svg
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="24"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path d="M5 7L10 12L15 7H5Z" fill="black" />
        </svg>
      </div>

      {isOpen && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded shadow-md mt-1 max-h-60 overflow-y-auto">
          {options.map((option) => (
            <li
              key={option.value}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
