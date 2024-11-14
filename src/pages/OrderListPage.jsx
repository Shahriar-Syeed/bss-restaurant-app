import Button from "../components/UI/Button.jsx";
import defaultImage from "../assets/default-image-preview.png";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useRef, useState } from "react";
import { changeOrderStatus, getOrder, openEditModal, removeOrder, storeStatus } from "../store/order-actions.js";
import Loading from "../components/loader/Loading.jsx";
import { modalActions } from "../store/modal-slice.js";
import Modal from "../components/UI/Modal.jsx";
import CustomSelect from "../components/UI/CustomSelect.jsx";

export default function OrderListPage() {
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const dispatch = useDispatch();

  const orderInfo = useSelector((state) => state.order.orderDataTable);
  const orderId = useSelector((state) => state.order.orderId);
  const orderNumber = useSelector((state) => state.order.orderNumber);
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
    console.log(orderListId);
  }

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const fetchData = new FormData(event.target);
  //   const data = Object.fromEntries(fetchData.entries());
  //   console.log(data);
  // }
  function handelChange(e){
    dispatch(storeStatus(e.sendingValue));
    console.log('handelChange',e.sendingValue);
  }
  function confirmStatus(id, changedStatus){
    dispatch(changeOrderStatus(id, changedStatus));
    console.log('confirmStatus',id,changedStatus);
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
      console.log("node", node);
    },
    [orderLoading, hasMoreOrder]
  );
  return (
    <>
      {orderLoading && <Loading absolute={true} />}
      { <Loading />}
      {errorMessage && orderListId === "orderList" && (
        <Modal open={isOpen} onClose={closeModal}>
          <h1>Failed fetching data, on {orderListId}!</h1>
          {errorMessage ? <p>{errorMessage}</p> : <p>Something went wrong!</p>}
          <div className="modal-action p-2">
            <Button
              className="float-end button-primary px-4 py-2 rounded-lg"
              onClick={closeModal}
            >
              Close
            </Button>
          </div>
        </Modal>
      )}
      {orderListId === orderId && (
        <Modal open={isOpen} onClose={closeModal} className="overflow-visible">
            <h1 className="text-center text-xl mb-2">Change The Order Status</h1>
            <p className="mb-2"> Order No: <strong>{orderNumber}</strong></p>
            <CustomSelect
              label="Order Status"
              options={statusOption}
              name="orderStatus"
              maximumHeight='64'
              onChanged={(e)=>handelChange(e)}
            />
            <div className="modal-action pt-3 flex justify-end gap-3">
              <Button
                className=" button-primary px-4 py-2 rounded-lg"
                onClick={()=>confirmStatus(orderListId,status)}
                type="button"
              >
                CHANGE
              </Button>
              <Button
                className=" button-primary px-4 py-2 rounded-lg"
                onClick={closeModal}
                type="button"
              >
                CLOSE
              </Button>
            </div>
        </Modal>
      )}
      <div className="grid justify-between auto-cols-auto 2xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 lg:gap-5 md:gap-3.5 sm:gap-3 gap-2">
        {orderInfo?.data?.map((eachOrderItem, eachOrderItemIndex) =>
          orderInfo.data.length !== eachOrderItemIndex + 1 ? (
            <div
              key={eachOrderItem.id}
              className="rounded-lg border-2 xl:p-10 lg:p-6 md:p-5 sm:p-4 p-3 shadow-lg bg-white max-w-md"
            >
              <div className="flex justify-between mb-3">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900/90">
                    {eachOrderItem.orderNumber}
                  </h3>
                  <p className="font-bold text-stone-900/80">
                    {eachOrderItem.orderTime}
                  </p>
                </div>
                <Button onClick={() => deleteOrder(eachOrderItem.id)}>
                  <svg
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="p-1.5 border border-red-700 hover:bg-red-700 fill-red-700 hover:fill-white rounded-lg w-10 h-10"
                  >
                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"></path>
                  </svg>
                </Button>
              </div>
              <div
                className=" h-[12.5rem] border-b border-b-black mb-3 pb-1 overflow-y-auto [&::-webkit-scrollbar]:w-2
          [&::-webkit-scrollbar-track]:bg-transparent
          [&::-webkit-scrollbar-thumb]:bg-red-300 [&::-webkit-scrollbar-thumb]:rounded-md [&::-webkit-scrollbar-thumb]:bg-clip-padding"
              >
                {eachOrderItem?.orderItems?.map((item) => (
                  <div key={item.id} className="flex gap-3 items-center mb-2">
                    <div className="sm:w-12 w-10">
                      <img
                        src={
                          item.food.image === ""
                            ? defaultImage
                            : `https://restaurantapi.bssoln.com/images/food/${item.food.image}`
                        }
                        alt="food image"
                        className="w-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-md sm:text-lg font-bold mb-1">
                        {item.food.name}
                      </h4>
                      <p className="flex gap-1 flex-wrap pe-2 justify-between">
                        <span className="text-green-900 font-bold">
                          {item.totalPrice}৳
                        </span>
                        <span>
                          Qty: <strong>{item.quantity}</strong>
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
                <div className="flex flex-wrap gap-1 justify-between items-center text-md">
                  <p>
                    Total Item:{" "}
                    <strong>{eachOrderItem?.orderItems?.length}</strong>
                  </p>
                  <p className="text-end">
                    Table:
                    <strong>{eachOrderItem?.table?.tableNumber}</strong>
                  </p>
                </div>
                <div className="flex gap-2 items-center flex-wrap">
                <p className="whitespace-nowrap">
                  Total:{" "}
                  <strong className="text-green-800">
                    {eachOrderItem.amount}
                  </strong>
                </p>
                  <span className={`ms-auto me-2 font-extrabold ${eachOrderItem.orderStatus === 'Pending' ? 'text-yellow-500':
                    eachOrderItem.orderStatus === 'Confirmed' ? 'text-blue-600' :
                     eachOrderItem.orderStatus === 'Preparing' ? 'text-orange-600' :
                      eachOrderItem.orderStatus === 'PreparedToServe' ? 'text-teal-600' :
                       eachOrderItem.orderStatus === 'Served' ? 'text-green-600' : 'text-gray-600'}`}>
                    {eachOrderItem.orderStatus}
                  </span>
                  <Button
                    type="button"
                    aria-label="edit"
                    onClick={() => editStatus(eachOrderItem.id, eachOrderItem.orderNumber)}
                  >
                    <svg
                      className="p-0.5 rounded shadow-sm stroke-green-700 bg-slate-50 hover:stroke-green-900 w-7 hover:bg-slate-100"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 10h11v2H3zm0-2h11V6H3zm0 8h7v-2H3zm15.01-3.13.71-.71c.39-.39 1.02-.39 1.41 0l.71.71c.39.39.39 1.02 0 1.41l-.71.71zm-.71.71-5.3 5.3V21h2.12l5.3-5.3z"></path>
                    </svg>
                  </Button>
                </div>
              
            </div>
          ) : (
            <div
              key={eachOrderItem.id}
              className="rounded-lg border-2 xl:p-10 lg:p-6 md:p-5 sm:p-4 p-3 shadow-lg bg-white max-w-md"
              ref={lastOrderElementRef}
            >
              <div className="flex justify-between mb-3">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900/90">
                    {eachOrderItem.orderNumber}
                  </h3>
                  <p className="font-bold text-stone-900/80">
                    {eachOrderItem.orderTime}
                  </p>
                </div>
                <Button onClick={() => deleteOrder(eachOrderItem.id)}>
                  <svg
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="p-1.5 border border-red-700 hover:bg-red-700 fill-red-700 hover:fill-white rounded-lg w-10 h-10"
                  >
                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"></path>
                  </svg>
                </Button>
              </div>
              <div
                className=" h-[12.5rem] max-h-[12.5rem] border-b border-b-black mb-3 overflow-y-auto [&::-webkit-scrollbar]:w-2
          [&::-webkit-scrollbar-track]:bg-transparent
          [&::-webkit-scrollbar-thumb]:bg-red-300 [&::-webkit-scrollbar-thumb]:rounded-md [&::-webkit-scrollbar-thumb]:bg-clip-padding"
              >
                {eachOrderItem?.orderItems?.map((item) => (
                  <div key={item.id} className="flex gap-3 items-center">
                    <div className="sm:w-12 w-10">
                      <img
                        src={
                          item.food.image === ""
                            ? defaultImage
                            : `https://restaurantapi.bssoln.com/images/food/${item.food.image}`
                        }
                        alt="food image"
                        className="w-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-md sm:text-lg font-bold mb-1">
                        {item.food.name}
                      </h4>
                      <p className="pe-2">
                        <span className="text-green-900 font-bold">
                          {item.totalPrice}৳
                        </span>
                        <span className="float-end">
                          Qty: <strong>{item.quantity}</strong>
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-2 justify-between text-md sm:text-lg">
                <p>
                  Total Item:{" "}
                  <strong>{eachOrderItem?.orderItems?.length}</strong>
                </p>
                <p className="text-end">
                  Table:
                  <strong>{eachOrderItem?.table?.tableNumber}</strong>
                </p>
                <p>
                  Total:{" "}
                  <strong className="text-green-800">
                    {eachOrderItem.amount}
                  </strong>
                </p>
                <div className="flex justify-end items-center">
                  <span className={`me-2 font-extrabold ${eachOrderItem.orderStatus === 'Pending' ? 'text-yellow-500':
                    eachOrderItem.orderStatus === 'Confirmed' ? 'text-blue-600' :
                     eachOrderItem.orderStatus === 'Preparing' ? 'text-orange-600' :
                      eachOrderItem.orderStatus === 'PreparedToServe' ? 'text-tale-600' :
                       eachOrderItem.orderStatus === 'Served' ? 'text-green-600' : 'text-gray-600'}`}>
                    {eachOrderItem.orderStatus}
                  </span>
                  <Button
                    type="button"
                    aria-label="edit"
                    onClick={() => editStatus(eachOrderItem.id)}
                  >
                    <svg
                      className="p-0.5 rounded shadow-sm stroke-green-700 bg-slate-50 hover:stroke-green-900 w-7 hover:bg-slate-100"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 10h11v2H3zm0-2h11V6H3zm0 8h7v-2H3zm15.01-3.13.71-.71c.39-.39 1.02-.39 1.41 0l.71.71c.39.39.39 1.02 0 1.41l-.71.71zm-.71.71-5.3 5.3V21h2.12l5.3-5.3z"></path>
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
}
