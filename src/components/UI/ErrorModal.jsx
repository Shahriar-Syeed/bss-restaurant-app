
import { useSelector, useDispatch } from "react-redux";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import { modalActions } from "../../store/modal-slice";

const ErrorModal = () => {
  const dispatch = useDispatch();

  // State selectors
  const isOpen = useSelector((state) => state.modal.open);
  const errorModalId = useSelector((state) => state.modal.id);
  const foodErrorMessage = useSelector((state) => state.foods.error);
  const employeeErrorMessage = useSelector((state) => state.employees.error);
  const tableErrorMessage = useSelector((state) => state.employeeTables.error);
  const cartErrorMessage = useSelector((state) => state.cart.error);

  // Close modal function
  const closeModal = () => {
    dispatch(modalActions.close());
  };

  // Determine the title and message dynamically
  const title = foodErrorMessage
    ? "Food Error"
    : tableErrorMessage
    ? "Table Error"
    : cartErrorMessage
    ? "Cart Error"
    : employeeErrorMessage
    ? "Cart Error"
    : "Error";

  const message =
    foodErrorMessage ||
    tableErrorMessage ||
    cartErrorMessage ||
    `Something went wrong! (ID: ${errorModalId})`;

  // Render the modal only when there's an error
  if (!isOpen || (!foodErrorMessage && !tableErrorMessage && !cartErrorMessage)) {
    return null;
  }

  return (
    <Modal open={isOpen} onClose={closeModal}>
      <div className="p-4">
        <h1 className="text-xl font-semibold mb-2">{title}</h1>
        <p className="text-md text-gray-700 mb-4">{message}</p>
        <div className="modal-action">
          <Button
            className="button-primary px-4 py-2 rounded-lg"
            type="button"
            onClick={closeModal}
          >
            Close
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ErrorModal;