import { useEffect, useState } from "react";
import Input from "../UI/Input.jsx";
import defaultImage from "../../assets/default-image-preview.png";
import InputFloating from "../UI/InputFloating.jsx";
import CustomSelect from "../UI/CustomSelect.jsx";
import Button from "../UI/Button.jsx";
import axios from "axios";
import { Navigate } from "react-router-dom";
import useLoading from "../../hooks/useLoading.jsx";

// import apiUrl from "../../apiUrl/ApiUrl.jsx";
// import axios from "axios";

export default function EmployeeForm() {
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [updateData, setUpdateData]= useState({
    
      designation: "",
      joinDate: "",
      email: "",
      phoneNumber: "",
      firstName: "",
      middleName: "",
      lastName: "",
      fatherName: "",
      motherName: "",
      spouseName: "",
      dob: "",
      nid: "",
      genderId: 0,
      image: "",
      base64: ""
    
  });
  const { loader, startLoad, endLoad } = useLoading();
  
  const genderOptions = [
    { value: 'male', label: 'Male', sendingValue: 1 },
    { value: 'female', label: 'Female', sendingValue: 2 },
    { value: 'other', label: 'Other', sendingValue: 0 },
  ];

  const handleGenderChange = (selectedOption) => {
    console.log('Selected Gender:', selectedOption);
  };

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);
  function onSelectFile(event) {
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }
    setSelectedFile(event.target.files[0]);
  }
  // function handleChange(e){
  //   const {name, value} = e.target;
  //   setFormData({...formData, [name]: value});
  // };
  function handleDrop(event) {
    event.preventDefault();
    event.stopPropagation();

    if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
      setSelectedFile(event.dataTransfer.files[0]);
      event.dataTransfer.clearData();
    }
  }
  async function handleSubmit(event) {
    event.preventDefault();
    startLoad();
    

    const fetchData = new FormData(event.target);
    const data = Object.fromEntries(fetchData.entries());
    console.log(data); 
  
      const birthDate= (new Date(data.dob)).toISOString();
      
      const dateOfJoin = (new Date(data.joinDate)).toISOString();
      console.log(dateOfJoin);
      const reader = new FileReader();
      console.log(selectedFile);
      console.log(reader)
      reader.readAsDataURL(selectedFile);
      reader.onloadend = () =>{
        const base64String = reader.result;
        setUpdateData ({...data, image:data.image.name, base64: base64String, joinDate: dateOfJoin, dob: birthDate.toISOString() });
     
      }

      try{
        console.log("updateData",updateData);
       const response = await axios.post('https://restaurantapi.bssoln.com/api/Employee/create', updateData);
       if(response.status === 200){
        endLoad();
        Navigate('../');
       }

      }catch(error){
        console.log(error);
      }

      endLoad();
    
    // const logData = JSON.stringify(loginData);

    // try{
    //   console.log(formData);
    //   const response = await axios.post(`https://www.restaurantapi.bssoln.com/api/Auth/SignIn`, formData);
    //   console.log(response);

    // } catch (error){
    //   console.log(error);
    // }
  }

  return (
    <div className="">
      {loader}
      
      <form onSubmit={(event) => handleSubmit(event)}>
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
               
              >{''}</Input>
              <img src={preview ? preview : defaultImage} className="h-36" />
            </div>
          </div>
          <div className="lg:col-start-1 lg:col-end-9 lg:row-start-1">
            <InputFloating name='firstName'>First Name</InputFloating>
          </div>
          <div className="lg:col-start-1 lg:col-end-9 lg:row-start-2">
            <InputFloating name='middleName'>Middle Name</InputFloating>
          </div>
          <div className="lg:col-start-1 lg:col-end-9 lg:row-start-3">
            <InputFloating name='lastName'>Last Name</InputFloating>
          </div>
          <div className="lg:col-span-4">
            <InputFloating name='fatherName'>Father Name</InputFloating>
          </div>
          <div className="lg:col-span-4">
            <InputFloating name='motherName'>Mother Name</InputFloating>
          </div>
          <div className="lg:col-span-4">
            <InputFloating name='spouseName'>Spouse Name</InputFloating>
          </div>
          <div className="lg:col-span-4">
            <InputFloating name='designation'>Designation</InputFloating>
          </div>
          <div className="lg:col-span-4">
            <InputFloating name='email'>Email</InputFloating>
          </div>
          <div className="lg:col-span-4">
            <InputFloating name='phoneNumber'>Phone Number</InputFloating>
          </div>
          <div className="lg:col-span-3">
          <CustomSelect name='genderId' label="Gender" options={genderOptions} onChange={handleGenderChange} />
          </div>
          <div className="lg:col-span-3">
            <InputFloating type='date' name='dob'>Date of Birth</InputFloating>
          </div>
          <div className="lg:col-span-3">
            <InputFloating type='date' name='joinDate'>Date of Join</InputFloating>
          </div>
          <div className="lg:col-span-3">
            <InputFloating type='number' name='nid'>NID</InputFloating>
          </div>
          <div  className="lg:col-span-12">
            <Button type='submit' className='button-primary w-full py-2 text-white rounded '>SUBMIT</Button>
          </div>
        </div>
      </form>
    </div>
  );
}
