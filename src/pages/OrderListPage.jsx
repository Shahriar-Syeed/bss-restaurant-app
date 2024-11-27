import Button from "../components/UI/Button.jsx";
// import defaultImage from "../assets/default-image-preview.png";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  changeOrderStatus,
  getOrder,
  openEditModal,
  removeOrder,
  storeStatus,
} from "../store/order-actions.js";
import Loading from "../components/loader/Loading.jsx";
import { modalActions } from "../store/modal-slice.js";
import Modal from "../components/UI/Modal.jsx";
import CustomSelect from "../components/UI/CustomSelect.jsx";
import OrderCard from "../components/order/OrderCard.jsx";

export default function OrderListPage() {
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const dispatch = useDispatch();

  const orderInfo = useSelector((state) => state.order.orderDataTable);
  const orderId = useSelector((state) => state.order.orderId);
  const status = useSelector((state) => state.order.status);
  const orderLoading = useSelector((state) => state.order.loading);
  const errorMessage = useSelector((state) => state.order.error);

  const hasMoreOrder = orderInfo.totalRecords - itemsPerPage;

  const statusOption = [
    { value: 0, label: "Pending", sendingValue: 0 },
    { value: 1, label: "Confirmed", sendingValue: 1 },
    { value: 2, label: "Preparing", sendingValue: 2 },
    { value: 3, label: "Prepared To Serve", sendingValue: 3 },
    { value: 4, label: "Served", sendingValue: 4 },
    { value: 5, label: "Paid", sendingValue: 5 },
  ];
  // Modal

  const isOpen = useSelector((state) => state.modal.open);
  const orderListId = useSelector((state) => state.modal.id);
  function closeModal() {
    dispatch(modalActions.close());
  }

  useEffect(() => {
    dispatch(getOrder(itemsPerPage));
  }, [itemsPerPage, dispatch]);

  function deleteOrder(id) {
    dispatch(removeOrder(id));
  }

  function editStatus(id, orderNum) {
    console.log(id);
    dispatch(openEditModal(id, orderNum));

  }

  function handelChange(e) {
    dispatch(storeStatus(e.sendingValue));
    console.log("handelChange", e.sendingValue);
  }
  function confirmStatus(id, changedStatus) {
    dispatch(changeOrderStatus(id.id, changedStatus));
    console.log("confirmStatus", id, changedStatus);
  }

  const orderObserver = useRef();
  const lastOrderElementRef = useCallback(
    (node) => {
      if (orderLoading) return;
      if (orderObserver.current) orderObserver.current.disconnect();
      orderObserver.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMoreOrder > 0) {
          if (itemsPerPage + 3 < orderInfo.totalRecords) {
            setItemsPerPage((prevTableCount) => prevTableCount + 3);
          } else {
            setItemsPerPage(orderInfo.totalRecords);
          }
        }
      });
      if (node) orderObserver.current.observe(node);
    },
    [orderLoading, hasMoreOrder]
  );
  return (
    <>
      {orderLoading && <Loading fullHeightWidth />}
      {errorMessage && orderListId === "orderList" && (
        <Modal open={isOpen} onClose={closeModal}>
          <h1>Failed fetching data, on {orderListId}!</h1>
          {errorMessage ? <p>{errorMessage}</p> : <p>Something went wrong!</p>}
          <div className="modal-action p-2">
            <Button
              className="float-end button-primary px-4 py-2 rounded-lg"
              type="button"
              onClick={closeModal}
            >
              Close
            </Button>
          </div>
        </Modal>
      )}
      {orderListId?.id === orderId && (
        <Modal open={isOpen} onClose={closeModal} className="overflow-visible">
          <h1 className="text-center text-xl mb-2">Change The Order Status</h1>
          <p className="mb-2">
            {" "}
            Order No: <strong>{orderListId?.orderNumber}</strong>
          </p>
          <CustomSelect
            label="Order Status"
            options={statusOption}
            name="orderStatus"
            maximumHeight="64"
            onChanged={(e) => handelChange(e)}
          />
          <div className="pt-3 flex flex-wrap justify-end gap-3">
            <Button
              className=" button__outline--primary px-4 py-2 rounded-lg"
              onClick={closeModal}
              type="button"
            >
              CANCEL
            </Button>
            <Button
              className=" button-primary px-4 py-2 rounded-lg"
              onClick={() => confirmStatus(orderListId, status)}
              type="button"
            >
              CHANGE
            </Button>
          </div>
        </Modal>
      )}
      <div className="grid sm:justify-between justify-center auto-cols-auto 2xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 lg:gap-5 md:gap-3.5 sm:gap-3 gap-2">
        {orderInfo?.data?.map((eachOrderItem, eachOrderItemIndex) =>
          orderInfo.data.length !== eachOrderItemIndex + 1 ? (
            <OrderCard eachOrderItem={eachOrderItem} key={eachOrderItem.id} deleteOrder={deleteOrder} editStatus={editStatus} />
          ) : (
            <OrderCard eachOrderItem={eachOrderItem} key={eachOrderItem.id} deleteOrder={deleteOrder} editStatus={editStatus} ref={lastOrderElementRef}/>
          )
        )}
      </div>
    </>
  );
}
