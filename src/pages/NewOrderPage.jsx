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
      <div className="grid lg:grid-cols-4 lg:gap-4 md:gap-3.5 sm:gap-3 gap-2.5">
        <section className="lg:col-end-2 p-3 bg-white rounded-lg ">
          <header>
            <h2 className="font-semibold text-lg text-center">SELECT A TABLE` ${10}`</h2>
          </header>
          <div className="flex flex-col gap-3">
            
          </div>
        </section>
        <div className="lg:col-start-2 lg:col-end-5 p-3 bg-white rounded-lg">
          <p>xfgdfvdfsgdfgdfgdfgdfbdfghdfhfthfghfghdftujfhfg dfh t tsr trtr rt fhfh fdfd hf f fdh fgh fhfd df fd fdh fhfhf fgh fh fg ff f f f fd fg fh hfyhu fyhf hfgh f </p>
        </div>

      </div>
    </>
  );
}
