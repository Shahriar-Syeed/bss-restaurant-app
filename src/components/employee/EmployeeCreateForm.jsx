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

// import apiUrl from "../../apiUrl/ApiUrl.jsx";
// import axios from "axios";

function dateConvertToString(date) {
  if (!date) return "";
  const newDate = new Date(date);
  if (isNaN(newDate)) return "";
  const dateString = newDate.toISOString();
  return dateString;
}

export default function EmployeeCreateForm() {
  const [selectedEmployeeImage, setSelectedEmployeeImage] = useState();
  // const [preview, setPreview] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedEmployeeImage_ = useSelector((state)=>state.employees.selectedEmployeeImage);


  // const genderOptions = [
  //   { value: "male", label: "Male", sendingValue: 1 },
  //   { value: "female", label: "Female", sendingValue: 2 },
  //   { value: "other", label: "Other", sendingValue: 0 },
  // ];


  // useEffect(() => {
  //   if (!selectedEmployeeImage) {
  //     setPreview(undefined);
  //     dispatch(employeeActions.showPreview(undefined));
  //     return;
  //   }
  //   const objectUrl = URL.createObjectURL(selectedEmployeeImage);
  //   setPreview(objectUrl);
  //   dispatch(employeeActions.showPreview(objectUrl));

  //   return () => URL.revokeObjectURL(objectUrl);
  // }, [selectedEmployeeImage]);

  function onSelectFile(event) {
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }
    // setSelectedEmployeeImage(event.target.files[0]);
    dispatch(employeeActions.selectedEmployeeImage(event.target.files[0]))
  }
  function handleDrop(event) {
    event.preventDefault();
    event.stopPropagation();

    if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
      // setSelectedEmployeeImage(event.dataTransfer.files[0]);
      dispatch(employeeActions.selectedEmployeeImage(event.target.files[0]))
      event.dataTransfer.clearData();
    }
  }
  async function handleSubmit(event) {
    event.preventDefault();

    dispatch(loaderActions.show());

    const fetchData = new FormData(event.target);
    const data = Object.fromEntries(fetchData.entries());
    console.log(data);

    const birthDateString = dateConvertToString(data.dob);
    const dateOfJoinString = dateConvertToString(data.joinDate);
    const updatedData = {
      ...data,
      joinDate: dateOfJoinString,
      dob: birthDateString,
    };
    console.log("updateData with date", updatedData);
    if (selectedEmployeeImage_) {
      console.log("dateUpdate", updatedData);
      const reader = new FileReader();
      console.log(selectedEmployeeImage_);
      console.log(reader);
      reader.readAsDataURL(selectedEmployeeImage_);
      reader.onloadend = async () => {
        const base64String = reader.result;
        const finalData = {
          ...updatedData,
          image: selectedEmployeeImage_.name,
          base64: base64String,
        };
        try {
          console.log("updateData", finalData);
          const response = await axios.post(
            "https://restaurantapi.bssoln.com/api/Employee/create",
            finalData
          );
          if (response.status === 200) {
            dispatch(loaderActions.hide());
            navigate("../");
          }
        } catch (error) {
          console.log(error);
          dispatch(loaderActions.hide());
          openModal();
        }
      };
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
        <h1>Failed sen</h1>
        <p>Invalid Password or Username</p>
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
        selectedEmployeeImage={selectedEmployeeImage_}
      
      />
      {/* <form onSubmit={(event) => handleSubmit(event)}>
        <div className="grid lg:grid-cols-12 lg:gap-4 md:gap-3.5 sm:gap-3 gap-2.5 bg-white xl:p-10 lg:p-8 md:p-6 sm:p-4 p-3 rounded">
          <div
            className="lg:col-start-9 lg:col-end-13 lg:row-span-3 border-dashed border border-gray-200 hover:border-gray-400 relative min-h-36 rounded"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
          >
            <div className="h-full flex items-center justify-center">
              <Input
                type="file"
                hidden
                required
                id="image"
                name="image"
                labelClass="absolute top-0 bottom-0 left-0 right-0 opacity-0 z-40 cursor-pointer"
                onChange={onSelectFile}
              >
                {""}
              </Input>
              <img src={preview ? preview : defaultImage} className="h-36" />
            </div>
          </div>
          <div className="lg:col-start-1 lg:col-end-9 lg:row-start-1">
            <InputFloating name="firstName">First Name</InputFloating>
          </div>
          <div className="lg:col-start-1 lg:col-end-9 lg:row-start-2">
            <InputFloating name="middleName">Middle Name</InputFloating>
          </div>
          <div className="lg:col-start-1 lg:col-end-9 lg:row-start-3">
            <InputFloating name="lastName">Last Name</InputFloating>
          </div>
          <div className="lg:col-span-4">
            <InputFloating name="fatherName">Father Name</InputFloating>
          </div>
          <div className="lg:col-span-4">
            <InputFloating name="motherName">Mother Name</InputFloating>
          </div>
          <div className="lg:col-span-4">
            <InputFloating name="spouseName">Spouse Name</InputFloating>
          </div>
          <div className="lg:col-span-4">
            <InputFloating name="designation">Designation</InputFloating>
          </div>
          <div className="lg:col-span-4">
            <InputFloating name="email">Email</InputFloating>
          </div>
          <div className="lg:col-span-4">
            <InputFloating name="phoneNumber">Phone Number</InputFloating>
          </div>
          <div className="lg:col-span-3">
            <CustomSelect
              name="genderId"
              label="Gender"
              options={genderOptions}
              onChange={handleGenderChange}
            />
          </div>
          <div className="lg:col-span-3">
            <InputFloating type="date" name="dob">
              Date of Birth
            </InputFloating>
          </div>
          <div className="lg:col-span-3">
            <InputFloating type="date" name="joinDate">
              Date of Join
            </InputFloating>
          </div>
          <div className="lg:col-span-3">
            <InputFloating type="number" name="nid">
              NID
            </InputFloating>
          </div>
          <div className="lg:col-span-12">
            <Button
              type="submit"
              className="button-primary w-full py-2 text-white rounded "
            >
              SUBMIT
            </Button>
          </div>
        </div>
      </form> */}
    </div>
  );
}
