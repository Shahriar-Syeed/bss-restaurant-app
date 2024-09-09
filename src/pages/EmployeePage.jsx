import { Link, useNavigate } from "react-router-dom";
import Button from "../components/UI/Button";
import Pagination from "../components/Pagination";
import PageHeader from "../components/PageHeader";
import HeadTable from "../components/HeadTable";
import Loading from "../components/loader/Loading";

const HEADING = [
  { id: 'image', label: 'Image', minWidth: 30 },
  { id: 'name', label: 'Name', minWidth: 230 },
  { id: 'email', label: 'Email', minWidth: 170 },
  { id: 'phone', label: 'Phone', minWidth: 100 },
  { id: 'joiningDate', label: 'Join Date', minWidth: 100 },
  { id: 'designation', label: 'Designation', minWidth: 120 },
  { id: 'action', label: 'Action', minWidth: 120 },
];

const DUMMY_EMPLOYEES =[
  {id: 'e1', name:'John Michael Doe', image:'https://restaurantapi.bssoln.com/images/user/04-07-2024-13-39-20-7936437.jpg', phone:'015478',join:'23 Jul 2024',email:'john.de@example.com', designation: 'junior'},
  {id: 'e2', name:'Atik', image:'https://restaurantapi.bssoln.com/images/user/04-07-2024-13-39-20-7936437.jpg', phone:'017578',join:'23 May 2024',email:'john.doe@example.com', designation: 'senior'},
];

export default function EmployeePage() {
  const navigate = useNavigate();
  return (
    <>
      <PageHeader title="All Employee" buttonLabel="ADD EMPLOYEE" buttonOnClick={()=>navigate('/bss-restaurant-app/admin/employee/employee-add')} />
      
      <div className=" overflow-x-auto shadow-md sm:rounded-t-lg">
        <table className="w-full text-left rtl:text-right text-gray-900 text-xs sm:text-sm ">
          <thead className="text-xs text-primary uppercase bg-gray-50">
            <tr>
              {HEADING.map(heading=>

              <HeadTable key={heading.id}>{heading.label}</HeadTable>
              )}
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white  even:bg-gray-50  border-b border-gray-700 ">
              <th
                scope="row"
                className="md:px-2  xl:px-4 xl:py-3 lg:px-3 lg:py-2 p-1 "
              >
                <img
                  src="https://restaurantapi.bssoln.com/images/user/04-07-2024-13-39-20-7936437.jpg"
                  alt="Admin image"
                  className="w-10 h-10 rounded-full object-cover"
                />
              </th>
              <td className="md:px-2  xl:px-4 xl:py-3 lg:px-3 lg:py-2 p-1 ">
                John Michael Doe
              </td>
              <td className="md:px-2  xl:px-4 xl:py-3 lg:px-3 lg:py-2 p-1">
                john.de@example.com
              </td>
              <td className="md:px-2  xl:px-4 xl:py-3 lg:px-3 lg:py-2 p-1">
                91239367890564
              </td>
              <td className="md:px-2  xl:px-4 xl:py-3 lg:px-3 lg:py-2 p-1">
                23 Jul 2024
              </td>
              <td className="md:px-2  xl:px-4 xl:py-3 lg:px-3 lg:py-2 p-1">
                Junior
              </td>
              <td className="md:px-2  xl:px-4 xl:py-3 lg:px-3 lg:py-2 p-1">
                <Link
                  to="/bss-restaurant-app/admin/employee/:employeeId/employee-edit"
                  className="font-medium text-green-600  hover:underline"
                >
                  Edit
                </Link>
                <Button textOnly className="text-red-800">
                  Del
                </Button>
                <Link to=''>det</Link>
              </td>
            </tr>  
          </tbody>
        </table>
      </div>
      <Pagination className="bg-white rounded-b-lg" />

      <Loading/>


    </>
  );
}
