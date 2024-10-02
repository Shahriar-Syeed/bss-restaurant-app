// import { useDispatch, useSelector } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import Button from "../UI/Button";
import EmployeesInTable from "./EmployeesInTable";
import { modalActions } from "../../store/modal-slice";
import Modal from "../UI/Modal";
import Loading from "../loader/Loading";
import defaultImage from "../../assets/default-image-preview.png";
import CustomSelect from "../UI/CustomSelect";
import Input from "../UI/Input";
import { useState } from "react";

export default function RowEmployeeTableList({
  tableInfoData = {},
  employees = [],
  handleDelete = () => {},
}) {
  const dispatch = useDispatch();
  const newEmployee = [...employees];
  const errorMessage = useSelector((state) => state.employeeTables.error);

  const employeesToAssign = [
    {
      value: "d7f3a235-5c67-4c4d-ea96-08dcdbadfd4b",
      label: "Alif",
      sendingValue: {
        employeeId: "d7f3a235-5c67-4c4d-ea96-08dcdbadfd4b",
        name: "Alif",
      },
      
    },
    {
      value: "d7f3a235-5c67-4c4d-ea96-0dcjkhid2l",
      label: "Saat",
      sendingValue: {
        employeeId: "d7f3a235-5c67-4c4d-ea96-0dcjkhid2l",
        name: "Saat",
      },

    },
    {
      value: "d7f3a235-5c67-4c4d-er84-08dcdbadfd4b",
      label: "Safat",
      sendingValue: {
        employeeId: "d7f3a235-5c67-5dfg-ea96-08dcdbadfd4b",
        name: "Safat",
      },
    },
    {
      value: "o14744g-5c67-4c4d-er84-08dcdbadfd4b",
      label: "Bel",
      sendingValue: {
        employeeId: "o14744g-5c67-4c4d-er84-08dcdbadfd4b",
        name: "Bel",
      },
    },
  ];

  // Modal
  const isLoading = useSelector((state) => state.employeeTables.loading);
  const isOpen = useSelector((state) => state.modal.open);

  function openModal() {
    dispatch(modalActions.open());
  }
  function closeModal() {
    dispatch(modalActions.close());
  }
  function closeErrorModal() {
    dispatch(modalActions.close());
  }

  async function handleAssignEmployee(event) {
    event.preventDefault();
    const fetchData = new FormData(event.target);
    const data = Object.fromEntries(fetchData.entries());
    console.log('employee data',data);
  }

  return (
    <>
      {isLoading && <Loading />}
      {errorMessage && (
        <Modal open={isOpen}>
          <h1>Failed!</h1>
          {errorMessage ? <p>{errorMessage}</p> : <p>Something went wrong</p>}
          <div className="modal-action p-2">
            <Button
              className="float-end button-primary px-4 py-2 rounded-lg"
              onClick={closeErrorModal}
            >
              Close
            </Button>
          </div>
        </Modal>
      )}
      {!errorMessage && (
        <Modal open={isOpen} onClose={closeModal} className=" relative overflow-unset">
          <Button
            className="button-primary px-3 py-1.5 rounded-lg absolute right-3 top-3"
            onClick={closeModal}
          >
            Close
          </Button>

          <h1 className=" text-center text-xl font-bold mb-3">
            Assign Employee To a Table
          </h1>
          <form action="post">
            <div className="grid lg:grid-col-6 lg:gap-4 md:gap-3.5 sm:gap-3 gap-2.5">
              <div className="flex items-center justify-center lg:col-start-1 lg:col-end-3">
                <img
                  src={defaultImage}
                  alt=""
                  className=" min-h-36 max-w-full object-cover rounded"
                />
              </div>
              <div className="lg:col-start-4 lg:col-end-7 flex flex-col justify-center gap-3">
                <h2 className=" text-xl font-semibold mb-3">
                  Table Number: {tableInfoData.tableNumber}
                </h2>
                <h2 className=" text-xl font-semibold">
                  Seats Number: {tableInfoData.numberOfSeats}
                </h2>
              </div>

              <div className="col-start-1 col-end-5">
                <CustomSelect name="employeeId" label='Select Employee' options={employeesToAssign} selectOptionHandle initialSelectedOption={[]} />
              </div>
              <Button className="button-primary px-4 py-2 rounded-lg col-start-5 col-end-7 self-center">
                Assign
              </Button>
            </div>
          </form>
        </Modal>
      )}
      <tr className="odd:bg-white  even:bg-gray-50  border-b border-gray-700 ">
        <th
          scope="row"
          className="md:px-2  xl:px-4 xl:py-3 lg:px-3 lg:py-2 p-1 "
        >
          {tableInfoData.tableNumber}
        </th>
        <td className="md:px-2  xl:px-4 xl:py-3 lg:px-3 lg:py-2 p-1 ">
          {tableInfoData.numberOfSeats}
        </td>
        <td className="md:px-2  xl:px-4 xl:py-3 lg:px-3 lg:py-2 p-1">
          <ul>
            {newEmployee.map((emp) => (
              <EmployeesInTable key={emp.employeeId} employees={emp} />
            ))}
          </ul>
          <Button
            className="rounded-50 h-7 w-7 grid place-items-center  text-teal-300 hover:text-teal-500 hover:bg-stone-200 p-0.5 mt-0.5"
            onClick={openModal}
          >
            <svg
              className="fill-current"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"></path>
            </svg>
          </Button>
        </td>
        <td className="md:px-2  xl:px-4 xl:py-3 lg:px-3 lg:py-2 p-1">
          Available
        </td>
        <td className="md:px-2  xl:px-4 xl:py-3 lg:px-3 lg:py-2 p-1">
          <Button
            textOnly
            className="rounded-50 h-8 w-8 grid place-items-center hover:bg-stone-100 fill-red-700 hover:fill-red-600"
            onClick={() => {
              if (window.confirm("Are you sure you want to delete this table?"))
                console.log("delete");
              handleDelete(tableInfoData.id);
            }}
          >
            <svg
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="fill-inherit"
              width="20px"
            >
              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"></path>
            </svg>
          </Button>
        </td>
      </tr>
    </>
  );
}
