import { useDispatch, useSelector } from "react-redux";
import Button from "../UI/Button";
import { modalActions } from "../../store/modal-slice";
import Modal from "../UI/Modal";
import Loading from "../loader/Loading";
import AssignEmployeeModal from "./AssignEmployeeModal";
import { getNonAssignEmployees } from "../../store/employee-tables-actions";
import { customSelectActions } from "../../store/custom-select-slice";
import EmployeesInATable from "./EmployeesInATable";

export default function RowEmployeeTableList({
  tableInfoData = {},
  employees = [],
  handleDelete = () => {},
}) {
  const dispatch = useDispatch();
  console.log("tableInfoData", tableInfoData);
  const errorMessage = useSelector((state) => state.employeeTables.error);

  // Modal
  const isLoading = useSelector((state) => state.employeeTables.loading);
  const isOpen = useSelector((state) => state.modal.open);
  const modalTableId = useSelector((state) => state.modal.tableId);

  function openModal(tableId) {
    dispatch(modalActions.open());
    dispatch(modalActions.setTableId(tableId));
    dispatch(getNonAssignEmployees(tableId));
    console.log(tableId);
  }
  function closeModal() {
    dispatch(customSelectActions.setSelectedOption(null));
    dispatch(modalActions.close());
  }
  function closeErrorModal() {
    dispatch(modalActions.close());
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

      {!errorMessage && modalTableId === tableInfoData.id && (
        <AssignEmployeeModal
          open={isOpen}
          closeModal={closeModal}
          tableInfoData={{ ...tableInfoData }}
        />
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
            {/* {newEmployee.map((emp) => (
              <EmployeesInTable key={emp.employeeId} employees={emp} />
            ))} */}
            <EmployeesInATable idOfTable={tableInfoData["id"]} key={isOpen} />
          </ul>
          <Button
            className="rounded-50 h-7 w-7 grid place-items-center  text-teal-300 hover:text-teal-500 hover:bg-stone-200 p-0.5 mt-0.5"
            onClick={() => openModal(tableInfoData.id)}
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
