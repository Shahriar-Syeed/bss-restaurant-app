import { useEffect, useRef } from "react";
import Input from "../UI/Input.jsx";
import defaultImage from "../../assets/default-image-preview.png";
import InputFloating from "../UI/InputFloating.jsx";
import CustomSelect from "../UI/CustomSelect.jsx";
import Button from "../UI/Button.jsx";
import { useDispatch, useSelector } from "react-redux";
import { employeeActions } from "../../store/employee-slice.js";
import Modal from "../UI/Modal.jsx";
import { modalActions } from "../../store/modal-slice.js";
import { useNavigate } from "react-router-dom";
import { convertBase64, createEmployee, createEmployee2, nullStatus } from "../../store/employee-actions.js";
import Loading from "../loader/Loading.jsx";

export default function EmployeeForm({   selectedEmployeeImage }) {

  const forwardRef = useRef();

  const imageCaptureRef = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const genderOptions = [
    { value: "male", label: "Male", sendingValue: 1 },
    { value: "female", label: "Female", sendingValue: 2 },
    { value: "other", label: "Other", sendingValue: 0 },
  ];
  const loading = useSelector((state) => state.employees.loading);
  const previewImage = useSelector((state) => state.employees.preview);
  const creationStatus = useSelector((state) => state.employees.status);
  // Modal
  const modalId = useSelector((state) => state.modal.id);
  const isOpen = useSelector((state) => state.modal.open);

  function openModal() {
    dispatch(modalActions.id('employee-create-confirmation'))
    dispatch(modalActions.open());
  }

  function closeModal() {
    dispatch(modalActions.close());
    dispatch(modalActions.id(null));
  }

  useEffect(()=>{
    dispatch(nullStatus());
    return ()=> dispatch(nullStatus());
  },[dispatch]);

  function onSelectFile(event) {
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }
    const file = event.target.files[0];
    imageCaptureRef.current = file;
    dispatch(employeeActions.showPreview(URL.createObjectURL(file)));
  }
  function handleDrop(event) {
    event.preventDefault();
    event.stopPropagation();

    if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
      // dispatch(employeeActions.setSelectedEmployeeImage(event.dataTransfer.files[0]));
      const file = event.dataTransfer.files[0];
      imageCaptureRef.current = file;
      dispatch(employeeActions.showPreview(URL.createObjectURL(file)));
      event.dataTransfer.clearData();
    }
  }
  async function handleSubmit(event) {
    event?.preventDefault();

    const fetchData = new FormData(forwardRef.current);
    const data = Object.fromEntries(fetchData.entries());
    console.log(data);
    let updatedData= {...data};
    if(imageCaptureRef.current){
      
      const base64 = await convertBase64(imageCaptureRef.current);

      updatedData = {...data, image :imageCaptureRef.current.name, base64:base64};
      console.log(updatedData);
    } else{
      console.log(updatedData);
      updatedData = {...data, image :'', base64:''};
      
    }
    // dispatch(createEmployee2(updatedData));
    const response = await dispatch(createEmployee2(updatedData));

    if (response?.status === 200) {
      imageCaptureRef.current = null;
      navigate("../employee-list");
    }
   

  

    
    // const result = await dispatch(createEmployee(data, selectedEmployeeImage));
    
  }

  useEffect(() => {
    if (!imageCaptureRef.current) {

      dispatch(employeeActions.showPreview(undefined));
      return;
    }
    console.log(imageCaptureRef.current);
    const objectUrl = URL.createObjectURL(imageCaptureRef.current);

    dispatch(employeeActions.showPreview(objectUrl));

    return () => URL.revokeObjectURL(objectUrl);
  }, [imageCaptureRef, dispatch]);

  return (<>
    <form ref={forwardRef}>
    {modalId === 'employee-create-confirmation' && <Modal open={isOpen} onClose={closeModal}>
       
          <h3 className="md:text-xl mb-3">Are you sure you want to create this employee?</h3>
       
        <div className="modal-action p-2 flex justify-end gap-2 flex-wrap">
          <Button
            className="button__outline--primary px-4 py-2 rounded-lg"
            onClick={closeModal}
            type='button'
          >
            Cancel
          </Button>
          <Button
            className="button-primary px-4 py-2 rounded-lg"
            type='button'
            onClick={handleSubmit}

          >
            Confirm
          </Button>
        </div>
      </Modal>}
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
              // ref={imageCaptureRef}
            ></Input>
            <img src={ previewImage || defaultImage} className="h-36 object-cover" />
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
            maximumHeight='60'
            // onChange={handleGenderChange}
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
            type="button"
            className="button-primary w-full py-2 text-white rounded"
            onClick={ openModal}
          >
            SUBMIT
          </Button>
        </div>
      </div>
    </form>
    {loading && <Loading fullHeightWidth/>}
  </>
  );
}
