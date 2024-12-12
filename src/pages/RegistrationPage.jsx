import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import InputFloating from "../components/UI/InputFloating";
import Button from "../components/UI/Button";
import CustomSelect from "../components/UI/CustomSelect";
import Input from "../components/UI/Input";


export default function RegistrationPage() {
  return (
    <>
      <Navbar>
        <NavLink to='login' className='button__outline--primary px-6 py-3 rounded-md text-lg font-semibold hover:border-white'>Login</NavLink>
      </Navbar>
      <section className="min-h-lvh bg--page p-4">
        <div className="bg-white xl:p-10 lg:p-8 md:p-6 sm:p-4 p-3 rounded">
          <h1 className="2xl:text-3xl xl:text-2xl lg:text-xl text-md mb-3 text-center">Do You want to login or register</h1>
          <div>
          <form >
       
        <div className="grid lg:grid-cols-12 lg:gap-6 gap-5 bg-white xl:p-10 lg:p-8 md:p-6 sm:p-4 p-3 rounded">
          <div className="lg:col-start-1 lg:col-end-9 lg:row-start-1 relative">
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
              >{``}</Input>
              <div className="max-w-36 h-36 overflow-hidden rounded-lg">
                <img
                  src={previewImage || defaultImage}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
            <InputFloating
              id="userName"
              onChange={handleChange}
              onBlur={handleBlur}
            >
              User Name
            </InputFloating>
          </div>
          <div className="lg:col-span-4">
            <InputFloating
              id="email"
              onChange={handleChange}
              onBlur={handleBlur}
            >
              Email
            </InputFloating>
          </div>
          <div className="lg:col-span-4">
            
          <InputFloating
              id="phoneNumber"
              onChange={handleChange}
              onBlur={handleBlur}
              value={formData.phoneNumber}
            >
              Phone Number
            </InputFloating>
          </div>
          <div className="lg:col-start-1 lg:col-end-9 lg:row-start-1">
            <InputFloating
              id="firstName"
              onChange={handleChange}
              onBlur={handleBlur}
            >
              First Name
            </InputFloating>
          </div>
          <div className="lg:col-start-1 lg:col-end-9 lg:row-start-2">
            <InputFloating
              id="middleName"
              onChange={handleChange}
              onBlur={handleBlur}
            >
              Middle Name
            </InputFloating>
          </div>
          <div className="lg:col-start-1 lg:col-end-9 lg:row-start-3">
            <InputFloating
              id="lastName"
              onChange={handleChange}
              onBlur={handleBlur}
            >
              Last Name
            </InputFloating>
          </div>
          <div className="lg:col-span-4">
            <InputFloating
              id="fatherName"
              onChange={handleChange}
              onBlur={handleBlur}
            >
              Father Name
            </InputFloating>
          </div>
          <div className="lg:col-span-4">
            <InputFloating
              id="motherName"
              onChange={handleChange}
              onBlur={handleBlur}
            >
              Mother Name
            </InputFloating>
          </div>
          <div className="lg:col-span-4">
            <InputFloating
              id="spouseName"
              onChange={handleChange}
              onBlur={handleBlur}
            >
              Spouse Name
            </InputFloating>
          </div>
          <div className="lg:col-span-4">
            <InputFloating
              id="designation"
              onChange={handleChange}
              onBlur={handleBlur}
            >
              Designation
            </InputFloating>
          </div>
          
          <div className="lg:col-span-3">
            <CustomSelect
              id="genderId"
              label="Gender"
              options={genderOptions}
              maximumHeight="60"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="lg:col-span-3">
            <InputFloating
              type="date"
              id="dob"
              onChange={handleChange}
              onBlur={handleBlur}
            >
              Date of Birth
            </InputFloating>
          </div>
          <div className="lg:col-span-3">
            <InputFloating
              type="number"
              id="nid"
              onChange={handleChange}
              onBlur={handleBlur}
            >
              NID
            </InputFloating>
          </div>
          <div className="lg:col-span-4">
            <InputFloating
              id="facebook"
              onChange={handleChange}
              onBlur={handleBlur}
            >
              Facebook
            </InputFloating>
          </div>
          <div className="lg:col-span-4">
            <InputFloating
              id="instagram"
              onChange={handleChange}
              onBlur={handleBlur}
            >
              Instagram
            </InputFloating>
          </div>
          <div className="lg:col-span-12">
            <Button
              type="submit"
              className="button-primary w-full py-2 text-white rounded"
            >
              SUBMIT
            </Button>
          </div>
        </div>
      </form>
          </div>
          
        </div>

      </section>
    </>
  )
}
