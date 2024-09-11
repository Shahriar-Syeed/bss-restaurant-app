import {  useLoaderData, useNavigate } from "react-router-dom";
import Pagination from "../components/Pagination";
import PageHeader from "../components/PageHeader";
import HeadTable from "../components/HeadTable";
import RowTable from "../components/RowTable";
import { useEffect, useState } from "react";
import axios from "axios";
import useLoading from "../hooks/useLoading";
// import Button from "../components/UI/Button";

const HEADING = [
  { id: "image", label: "Image", minWidth: 30 },
  { id: "name", label: "Name", minWidth: 230 },
  { id: "email", label: "Email", minWidth: 170 },
  { id: "phone", label: "Phone", minWidth: 100 },
  { id: "joiningDate", label: "Join Date", minWidth: 100 },
  { id: "designation", label: "Designation", minWidth: 120 },
  { id: "action", label: "Action", minWidth: 120 },
];

export default function EmployeePage() {
  // const [employeesRowData, setEmployeesRowData] = useState([]);
  const employeesRowData = useLoaderData();
  // const { loader, startLoad, endLoad } = useLoading();
  const navigate = useNavigate();


//   useEffect(() => {

//     const fetchData = async () => {
//         startLoad();
//         try {
//             const response = await axios.get(`https://restaurantapi.bssoln.com/api/Employee/datatable`);
//             console.log(response.data.data);
//             setEmployeesRowData(response.data.data);

//             endLoad();
//         } catch (error) {
//           console.log(error);
//             setTimeout(() => {
//               endLoad();
//             }, 3000);
//             }
//               }
//               fetchData();

// }, []);

  return (
    <>
      <PageHeader
        title="All Employee"
        buttonLabel="ADD EMPLOYEE"
        buttonOnClick={() =>
          navigate("/bss-restaurant-app/admin/employee/employee-add")
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
            {/* {empLoad.map(v=><li>{v.designation}</li>)} */}
            <RowTable employees={employeesRowData} />
          </tbody>
        </table>
      </div>
      <Pagination  className="bg-white rounded-b-lg" />
      {/* {loader} */}
    </>
  );
}
