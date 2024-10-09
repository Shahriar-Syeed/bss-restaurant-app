import Button from "../UI/Button";
import CustomSelect from "../UI/CustomSelect";
import Modal from "../UI/Modal";
import defaultImage from "../../assets/default-image-preview.png";
import { useDispatch, useSelector } from "react-redux";
import { postAssignEmployeesTable } from "../../store/employee-tables-actions";
import Loading from "../loader/Loading";

export default function AssignEmployeeModal({
  open,
  closeModal,
  tableInfoData,
}) {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.employeeTables.loading);
  const selectedEmployees = useSelector(
    (state) => state.customSelect.selectedOption
  );

  const isOpen = useSelector((state) => state.modal.open);
  const employeesList = useSelector(
    (state) => state.employeeTables.nonAssignedEmployee
  );

  const error = useSelector((state) => state.employeeTables.error);

  console.log(tableInfoData);
  const info = { ...tableInfoData };
  console.log("info", info);

  const employeesToAssign = employeesList.map(
    (employee) =>
      (employee = {
        value: employee.employeeId,
        label: employee.name,
        sendingValue: employee,
      })
  );

  function handleAssignEmployee(id) {
    const updatedSelected = selectedEmployees.map(
      (employee) =>
        (employee = { employeeId: employee.employeeId, tableId: id })
    );
    dispatch(postAssignEmployeesTable(updatedSelected));
    closeModal();
  }

  return (
    <>
      {loading && <Loading />}
      {error && <p>{error.message}</p>}
      <Modal
        open={isOpen}
        onClose={closeModal}
        className=" relative overflow-unset"
      >
        <Button
          className="button-primary px-3 py-1.5 rounded-lg absolute right-3 top-3 font-extrabold"
          onClick={closeModal}
        >
          X
        </Button>

        <h1 className=" text-center text-xl font-bold mb-3">
          Assign Employee To a Table
        </h1>

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
            <CustomSelect
              name="employeeId"
              label="Select Employee"
              options={employeesToAssign}
              selectOptionHandle
              initialSelectedOption={[]}
            />
          </div>
          <Button
            className="button-primary lg:px-4 lg:py-2 px-3 py-1.5 rounded-lg lg:col-start-5 col-start-6 col-end-7 self-center"
            onClick={() => handleAssignEmployee(info.id)}
          >
            Assign
          </Button>
        </div>
      </Modal>
    </>
  );
}
