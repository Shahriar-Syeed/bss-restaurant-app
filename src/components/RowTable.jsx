import { Link } from "react-router-dom";
import Button from "./UI/Button";

export default function RowTable({employees=[]}) { // Accept employees as props

  return (
    <>
      {employees.map((employee) => (
        <tr
          className="odd:bg-white even:bg-gray-50 border-b border-gray-700"
          key={employee.id}
        >
          <th
            scope="row"
            className="md:px-2 xl:px-4 xl:py-3 lg:px-3 lg:py-2 p-1"
          >
            <img
              src={
                employee.user.image
                  ? `https://restaurantapi.bssoln.com/images/user/${employee.user.image}`
                  : "../assets/default-image-preview.png"
              }
              alt="Admin image"
              className="w-10 h-10 rounded-full object-cover"
            />
          </th>
          <td className="md:px-2 xl:px-4 xl:py-3 lg:px-3 lg:py-2 p-1">
            {employee.user.fullName}
          </td>
          <td className="md:px-2 xl:px-4 xl:py-3 lg:px-3 lg:py-2 p-1">
            {employee.user.email}
          </td>
          <td className="md:px-2 xl:px-4 xl:py-3 lg:px-3 lg:py-2 p-1">
            {employee.user.phoneNumber}
          </td>
          <td className="md:px-2 xl:px-4 xl:py-3 lg:px-3 lg:py-2 p-1">
            {employee.joinDate}
          </td>
          <td className="md:px-2 xl:px-4 xl:py-3 lg:px-3 lg:py-2 p-1">
            {employee.designation}
          </td>
          <td className="md:px-2 xl:px-4 xl:py-3 lg:px-3 lg:py-2 p-1">
            <Link
              to={`/bss-restaurant-app/admin/employee/${employee.id}/employee-edit`}
              className="font-medium text-green-600 hover:underline"
            >
              Edit
            </Link>
            <Button textOnly className="text-red-800">
              Del
            </Button>
            <Link to="">Det</Link>
          </td>
        </tr>
      ))}
    </>
  );
}

