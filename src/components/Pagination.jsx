import { useState } from "react";
import Select from "./UI/Select";
import Button from "./UI/Button";

const DUMMY_PAGE_OPTION = [
  { value: 10, label: "10" },
  { value: 20, label: "20" },
  { value: 30, label: "30" },
];
export default function Pagination({className}) {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  function selectHandle(event) {
    setItemsPerPage(event.target.value);
  }
  function test(){
    console.log("test");
  }

  let cssClass = "flex justify-end items-center gap-3 " + className;
  console.log(itemsPerPage);
  return (
    <div className={cssClass}>
      <Select
        label="Items Per Page"
        options={DUMMY_PAGE_OPTION}
        value={itemsPerPage}
        onChange={selectHandle}
        className="gap-2"
      />

      <p>1-2 of 2</p>
      <div>
        <Button textOnly className="inline-flex place-items-center p-2" disabled>
          <svg
            className="flex-shrink-0 w-6 h-6 text-primary transition duration-75"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
          >
            <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"></path>
          </svg>
        </Button>
        <Button textOnly className="inline-flex place-items-center p-2" disabled onClick={test}>
          <svg
            className="flex-shrink-0 w-6 h-6 text-primary transition duration-75"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
          >
            <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path>
          </svg>
        </Button>
      </div>
    </div>
  );
}
