import Button from "../UI/Button";
import CustomSelect from "../UI/CustomSelect";
import Modal from "../UI/Modal";
import defaultImage from "../../assets/default-image-preview.png";
import { useRef } from "react";
import { useSelector } from "react-redux";


export default function AssignEmployeeModal({open, closeModal,tableInfoData}) {
  const isOpen = useSelector((state) => state.modal.open);
  const employeesList = useSelector((state)=>state.employeeTables.nonAssignedEmployee);

  console.log(employeesList);


  console.log(tableInfoData);
  const info = {...tableInfoData};
  console.log("info", info)


  async function handleAssignEmployee(event) {
    event.preventDefault();
    const fetchData = new FormData(event.target);
    const data = Object.fromEntries(fetchData.entries());
    console.log('employee data',data);
  }
  const employeesToAssign = employeesList.map(employee=> employee = {value: employee.employeeId, label: employee.name, sendingValue: employee }) ;

  // [
  //   {
  //     value: "d7f3a235-5c67-4c4d-ea96-08dcdbadfd4b",
  //     label: "Alif",
  //     sendingValue: {
  //       employeeId: "d7f3a235-5c67-4c4d-ea96-08dcdbadfd4b",
  //       name: "Alif",
  //     },
      
  //   },
  //   {
  //     value: "d7f3a235-5c67-4c4d-ea96-0dcjkhid2l",
  //     label: "Saat",
  //     sendingValue: {
  //       employeeId: "d7f3a235-5c67-4c4d-ea96-0dcjkhid2l",
  //       name: "Saat",
  //     },

  //   },
  //   {
  //     value: "d7f3a235-5c67-4c4d-er84-08dcdbadfd4b",
  //     label: "Safat",
  //     sendingValue: {
  //       employeeId: "d7f3a235-5c67-5dfg-ea96-08dcdbadfd4b",
  //       name: "Safat",
  //     },
  //   },
  //   {
  //     value: "o14744g-5c67-4c4d-er84-08dcdbadfd4b",
  //     label: "Bel",
  //     sendingValue: {
  //       employeeId: "o14744g-5c67-4c4d-er84-08dcdbadfd4b",
  //       name: "Bel",
  //     },
  //   },
  // ];
  return (
    <>
      
        <Modal open={isOpen} onClose={closeModal} className=" relative overflow-unset">
          <Button
            className="button-primary px-3 py-1.5 rounded-lg absolute right-3 top-3 font-extrabold"
            onClick={closeModal}
          >
            X
          </Button>

          <h1 className=" text-center text-xl font-bold mb-3">
            Assign Employee To a Table
          </h1>
          <form action="post" onSubmit={handleAssignEmployee}>
            <div className="grid grid-col-6 lg:gap-4 md:gap-3.5 sm:gap-3 gap-2.5">
              <div className="flex items-center justify-center lg:col-start-1 lg:col-end-3 col-start-1 col-end-7">
                <img
                  src={defaultImage}
                  alt=""
                  className=" min-h-36 max-w-full object-cover rounded"
                />
              </div>
              <div className="lg:col-start-4 lg:col-end-7 col-start-1 col-end-7 flex flex-col justify-center gap-3 text-center lg:text-left">
                <h2 className=" text-xl font-semibold lg:mb-3">
                  Table Number: {info.tableNumber}
                </h2>
                <h2 className=" text-xl font-semibold">
                  Seats Number: {info.numberOfSeats}
                </h2>
              </div>

              <div className="col-start-1 lg:col-end-5 col-end-6">
                <CustomSelect name="employeeId" label='Select Employee' options={employeesToAssign} selectOptionHandle initialSelectedOption={[]} />
              </div>
              <Button className="button-primary lg:px-4 lg:py-2 px-3 py-1.5 rounded-lg lg:col-start-5 col-start-6 col-end-7 self-center"
              >
                Assign
              </Button>
            </div>
          </form>
        </Modal>
    </>
  );
}
