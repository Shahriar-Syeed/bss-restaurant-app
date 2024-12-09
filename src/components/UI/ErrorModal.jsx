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
  const statisticsErrorMessage = useSelector(
    (state) => state.adminStatistics.error
  );
  const cartSuccess = useSelector((state) => state.cart.success);
  const orderErrorMessage = useSelector((state) => state.order.error);
  const cartErrorMessage = useSelector((state) => state.cart.error);

  // Close modal function
  const closeModal = () => {
    dispatch(modalActions.close());
    dispatch(modalActions.id(null));
  };

  // Determine the title and message dynamically
  const title = foodErrorMessage
    ? "Food Error"
    : tableErrorMessage
    ? "Table Error"
    : cartErrorMessage
    ? "Cart Error"
    : employeeErrorMessage
    ? "Employee Error"
    : orderErrorMessage
    ? "Order Error"
    : statisticsErrorMessage
    ? "Statistics Error"
    : cartSuccess
    ? "Order Success"
    : "Error";
  const message =
    foodErrorMessage ??
    employeeErrorMessage ??
    tableErrorMessage ??
    orderErrorMessage ??
    cartErrorMessage ??
    statisticsErrorMessage ??
    cartSuccess ??
    null;
  console.log(errorModalId);

  const returnModal = message ? (
    <Modal open={isOpen} onClose={closeModal}>
      <div className="p-4">
        {cartSuccess && (
          <h1 className="text-xl font-bold mb-2 text-green-900">
            Order Successful!
          </h1>
        )}
        {!cartSuccess && (
          <>
            <h1 className="text-xl font-semibold mb-2 text-red-900">{title}</h1>
            <p className="text-md text-gray-700 mb-1">
              Something went wrong! {errorModalId}
            </p>
            <p className="text-xs text-gray-700 mb-4">{message}</p>
          </>
        )}

        <div className="">
          <Button
            className="button-primary px-4 py-2 rounded-lg float-end"
            type="button"
            onClick={closeModal}
          >
            Close
          </Button>
        </div>
      </div>
    </Modal>
  ) : null;
  console.log(returnModal);

  return returnModal;
};

export default ErrorModal;
