import { Link, useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Button from "../components/UI/Button";
import Pagination from "../components/Pagination";
import HeadTable from "../components/HeadTable";
import RowTableList from "../components/table/RowTableList";

const HEADING = [
  { id: "tableNumber", label: "Table Number" },
  { id: "tableSeats", label: "Table Seats" },
  { id: "employees", label: "Employees" },
  { id: "bookingStatus", label: "BookingStatus" },
  { id: "action", label: "Action" },
];

export default function TableListPage() {
  const navigate = useNavigate();
  return (
    <>
      <PageHeader
        title="All Table List"
        buttonLabel="ADD TABLE"
        buttonOnClick={() =>
          navigate("/bss-restaurant-app/admin/table/table-add")
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
            <RowTableList tableInfoData = {tableInfoData}/>
            <RowTableList/>
          </tbody>
        </table>
      </div>
      <Pagination className="bg-white rounded-b-lg" />
    </>
  );
}
