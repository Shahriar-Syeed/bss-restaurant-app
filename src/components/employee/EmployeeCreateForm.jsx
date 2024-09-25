import { useEffect, useState } from "react";
import Input from "../UI/Input.jsx";
import defaultImage from "../../assets/default-image-preview.png";
import InputFloating from "../UI/InputFloating.jsx";
import CustomSelect from "../UI/CustomSelect.jsx";
import Button from "../UI/Button.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Modal from "../UI/Modal.jsx";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/modal-slice.js";
import Loading from "../loader/Loading.jsx";
import { loaderActions } from "../../store/loader-slice.js";
import { employeeActions } from "../../store/employee-slice.js";
import EmployeeForm from "./EmployeeForm.jsx";
import { createEmployee } from "../../store/employee-actions.js";

// import apiUrl from "../../apiUrl/ApiUrl.jsx";
// import axios from "axios";

// function dateConvertToString(date) {
//   if (!date) return "";
//   const newDate = new Date(date);
//   if (isNaN(newDate)) return "";
//   const dateString = newDate.toISOString();
//   return dateString;
// }

export default function EmployeeCreateForm() {
  // const [selectedEmployeeImage, setSelectedEmployeeImage] = useState();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedEmployeeImage = useSelector(
    (state) => state.employees.selectedEmployeeImage
  );
  const errorMessage = useSelector((state) => state.employees.error);

  function onSelectFile(event) {
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }
    // setSelectedEmployeeImage(event.target.files[0]);
    dispatch(employeeActions.selectedEmployeeImage(event.target.files[0]));
  }
  function handleDrop(event) {
    event.preventDefault();
    event.stopPropagation();

    if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
      dispatch(employeeActions.selectedEmployeeImage(event.dataTransfer.files[0]));
      event.dataTransfer.clearData();
    }
  }
  async function handleSubmit(event) {
    event.preventDefault();

    // dispatch(loaderActions.show());

    const fetchData = new FormData(event.target);
    const data = Object.fromEntries(fetchData.entries());
    console.log(data);

    // dispatch(createEmployee(data, selectedEmployeeImage));
    const result = await dispatch(createEmployee(data, selectedEmployeeImage));
    console.log("result",result)
    if (result === 200) {
      navigate("../");
    }

    
  }

  // Modal
  const isOpen = useSelector((state) => state.modal.open);
  const isLoading = useSelector((state) => state.loader.isLoading);

  function openModal() {
    dispatch(modalActions.open());
  }
  function closeModal() {
    dispatch(modalActions.close());
  }

  return (
    <div className="">
      {isLoading && <Loading />}
      <Modal open={isOpen} onClose={closeModal}>
        <h1>Failed!</h1>
        {errorMessage ? (
          <p>{errorMessage}</p>
        ) : (
          <p>Invalid Password or Username</p>
        )}
        <div className="modal-action p-2">
          <Button
            className="float-end button-primary px-4 py-2 rounded-lg"
            onClick={closeModal}
          >
            Close
          </Button>
        </div>
      </Modal>
      <EmployeeForm
        handleSubmit={handleSubmit}
        handleDrop={handleDrop}
        onSelectFile={onSelectFile}
        selectedEmployeeImage={selectedEmployeeImage}
      />
    </div>
  );
}
