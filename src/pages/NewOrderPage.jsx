import { useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Modal from "../components/UI/Modal";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/UI/Button";
import { modalActions } from "../store/modal-slice";
import { useState } from "react";

export default function NewOrderPage() {
  
  const [isSelected, setIsSelected]= useState(false);



  const navigate = useNavigate();
  const dispatch = useDispatch();

   // Modal

   const isOpen = useSelector((state) => state.modal.open);
   function closeModal() {
     dispatch(modalActions.close());
   }
  return (
    <>
     
      <Modal open={isOpen} onClose={closeModal}>
        <h1>Failed fetching data!</h1>
        {/* {errorMess ? <p>{errorMess}</p> : <p>Invalid Password or Username</p>} */}
        <div className="modal-action p-2">
          <Button
            className="float-end button-primary px-4 py-2 rounded-lg"
            onClick={closeModal}
          >
            Close
          </Button>
        </div>
      </Modal>
    <PageHeader
        title="Order Food"        
      />
    </>
  );
}
