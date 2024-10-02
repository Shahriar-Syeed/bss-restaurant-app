import { Link, useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";

import Pagination from "../components/Pagination";
import HeadTable from "../components/HeadTable";
import RowTableList from "../components/employee-table/RowTableList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  deleteEmployeeTable,
  getEmployeeTables,
} from "../store/employee-tables-actions";
import Loading from "../components/loader/Loading";
import Modal from "../components/UI/Modal";
import { modalActions } from "../store/modal-slice";
import { employeeTablesActions } from "../store/employee-tables-slice";
import Button from "../components/UI/Button";


const HEADING = [
  { id: "tableNumber", label: "Table Number" },
  { id: "tableSeats", label: "Table Seats" },
  { id: "employees", label: "Employees" },
  { id: "bookingStatus", label: "BookingStatus" },
  { id: "action", label: "Action" },
];

export default function EmployeeTablesListPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const employeeTablesData = useSelector(
    (state) => state.employeeTables.employeeTablesDataTable
  );
  const isLoading = useSelector((state) => state.employeeTables.loading);

  const employeeTableRow = useSelector(
    (state) => state.employeeTables.employeeTableRowData
  );

  const errorMessage = useSelector((state) => state.employeeTables.error);

  const isOpen = useSelector((state) => state.modal.open);


  function closeModal() {
    dispatch(modalActions.close());
    dispatch(employeeTablesActions.setErrorMessage(undefined));
  }

  useEffect(() => {
    dispatch(getEmployeeTables());
    console.log(employeeTablesData);
    console.log("employeeTableRow", employeeTableRow);
  }, [dispatch]);

  function handleDelete(id) {
    dispatch(deleteEmployeeTable(id));
  }

  return (
    <>
      {errorMessage && (
        <Modal open={isOpen}>
          <h1>Failed!</h1>
          {errorMessage ? <p>{errorMessage}</p> : <p>Something went wrong</p>}
          <div className="modal-action p-2">
            <Button
              className="float-end button-primary px-4 py-2 rounded-lg"
              onClick={closeModal}
            >
              Close
            </Button>
          </div>
        </Modal>
      )}
      {isLoading && <Loading />}
      <PageHeader
        title="All Table List"
        buttonLabel="ADD TABLE"
        buttonOnClick={() =>
          navigate("/bss-restaurant-app/admin/tables/add-table")
        }
      />
      <div className="overflow-x-auto shadow-md sm:rounded-t-lg">
        <table className="w-full text-left rtl:text-right text-gray-900 text-xs sm:text-sm ">
          <thead className="text-xs text-primary uppercase bg-gray-50">
            <tr>
              {HEADING.map((heading) => (
                <HeadTable key={heading.id}>{heading.label}</HeadTable>
              ))}
            </tr>
          </thead>
          <tbody>
            {employeeTableRow.map((row) => (
              <RowTableList
                key={row.id}
                tableInfoData={row}
                employees={row.employees}
                handleDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
      <Pagination className="bg-white rounded-b-lg" />
    </>
  );
}
