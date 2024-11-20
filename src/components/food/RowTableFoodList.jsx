import { Link } from "react-router-dom";
import Button from "../UI/Button";

export default function RowTableFoodList({ food, deleteFood }) {
  return (
    <>
        <tr
          className="block sm:table-row odd:bg-white even:bg-gray-50 sm:border-b border-b-0 border-gray-700 p-1 shadow-md rounded-lg mb-2 sm:p-0 sm:rounded-none sm:shadow-none"
          
        >
          <th
            scope="row"
            className="flex sm:table-cell justify-center md:px-2 xl:px-4 xl:py-3 lg:px-3 lg:py-2 p-1"
          >
            <img
              src={
                food.image
                  ? `https://restaurantapi.bssoln.com/images/food/${food.image}`
                  : "../assets/default-image-preview.png"
                }
                alt={food.name}
                className="sm:w-10 sm:h-10 w-16 h-16 rounded-lg object-cover"
                title={food.name}

            />
          </th>
          <td className="block sm:table-cell md:px-2 xl:px-4 xl:py-3 lg:px-3 lg:py-2 p-1 break-words md:break-normal"
          data-th='NAME: '>
            {food.name}
          </td>
          <td className="block sm:table-cell md:px-2 xl:px-4 xl:py-3 lg:px-3 lg:py-2 p-1 break-words md:break-normal"
          data-th='PRICE: '>
            {food.price}
          </td>
          <td className="block sm:table-cell md:px-2 xl:px-4 xl:py-3 lg:px-3 lg:py-2 p-1 break-words md:break-normal"
          data-th='DISCOUNT TYPE: '>
            {food.discountType}
          </td>
          <td className="block sm:table-cell md:px-2 xl:px-4 xl:py-3 lg:px-3 lg:py-2 p-1 break-words md:break-normal"
          data-th='DISCOUNT: '>
            {food.discount}
          </td>
          <td className="block sm:table-cell md:px-2 xl:px-4 xl:py-3 lg:px-3 lg:py-2 p-1 break-words md:break-normal"
          data-th='DISCOUNT PRICE: '>
            {food.discountPrice}
          </td>
          <td className="md:px-2 xl:px-4 xl:py-3 lg:px-3 lg:py-2 p-1 flex justify-evenly sm:justify-start gap-1">
            <Link
              to={`/bss-restaurant-app/admin/food/${food.id}/employee-edit`}
              className="rounded-50 h-8 w-8 grid place-items-center hover:bg-stone-100 fill-green-700 hover:fill-green-600"
            >
              <svg
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                width="20px"
              >
                <path d="M3 10h11v2H3zm0-2h11V6H3zm0 8h7v-2H3zm15.01-3.13.71-.71c.39-.39 1.02-.39 1.41 0l.71.71c.39.39.39 1.02 0 1.41l-.71.71zm-.71.71-5.3 5.3V21h2.12l5.3-5.3z"></path>
              </svg>
            </Link>
            <Button
              textOnly
              className="rounded-50 h-8 w-8 grid place-items-center hover:bg-stone-100 fill-red-700 hover:fill-red-600"
              type="button"
              onClick={() => {
                if (
                  window.confirm(
                    "Are you sure you want to delete this employee?"
                  )
                )
                  deleteFood(food.id);
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
