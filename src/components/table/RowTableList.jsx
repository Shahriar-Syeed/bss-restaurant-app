import Button from "../UI/Button";


export default function RowTableList() {
  return (
    <>
      <tr className="odd:bg-white  even:bg-gray-50  border-b border-gray-700 ">
              <th
                scope="row"
                className="md:px-2  xl:px-4 xl:py-3 lg:px-3 lg:py-2 p-1 "
              >
                TB001
              </th>
              <td className="md:px-2  xl:px-4 xl:py-3 lg:px-3 lg:py-2 p-1 ">
                12
              </td>
              <td className="md:px-2  xl:px-4 xl:py-3 lg:px-3 lg:py-2 p-1">
                <ul>
                  <li className="">
                    <div className="inline-flex items-center whitespace-nowrap bg-gray-100 hover:bg-gray-200 rounded-2xl p-1 mb-1 ">
                      <span>robarto moulas clab</span>
                      <Button
                        textOnly={true}
                        className="rounded-50 h-6 w-6 grid place-items-center text-stone-400 hover:text-stone-500 stroke-transparent"
                        onClick={() => {
                          if (
                            window.confirm(
                              "Are you sure you want to remove this employee from this table?"
                            )
                          )
                            console.log("remove employee this table");
                        }}
                      >
                        <svg
                          className="fill-current stroke-inherit"
                          focusable="false"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          width="24px"
                        >
                          <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path>
                        </svg>
                      </Button>
                    </div>
                  </li>
                  <li className="">
                    <div className="inline-flex items-center whitespace-nowrap bg-gray-100 hover:bg-gray-200 rounded-2xl p-1 mb-1 ">
                      <span>robarto moulas clab</span>
                      <Button
                        textOnly={true}
                        className="rounded-50 h-6 w-6 grid place-items-center text-stone-400 hover:text-stone-500 stroke-transparent"
                        onClick={() => {
                          if (
                            window.confirm(
                              "Are you sure you want to remove this employee from this table?"
                            )
                          )
                            console.log("remove employee this table");
                        }}
                      >
                        <svg
                          className="fill-current stroke-inherit"
                          focusable="false"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          width="24px"
                        >
                          <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path>
                        </svg>
                      </Button>
                    </div>
                  </li>
                </ul>
                <Button className="rounded-50 h-7 w-7 grid place-items-center  text-teal-300 hover:text-teal-500 hover:bg-stone-200 p-0.5 mt-0.5">
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
                    if (
                      window.confirm(
                        "Are you sure you want to delete this table?"
                      )
                    )
                      console.log("delete");
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
