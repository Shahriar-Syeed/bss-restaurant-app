import { useNavigate, useParams } from "react-router-dom";
import PageHeader from "../PageHeader.jsx";
import { useDispatch, useSelector } from "react-redux";
import defaultImage from "../../assets/default-image-preview.png";
import Input from "../UI/Input";
import Button from "../UI/Button.jsx";
import { useMemo } from "react";
import { editEmployeeDesignation } from "../../store/employee-actions.js";
import Loading from "../loader/Loading.jsx";

export default function EmployeeEditPage() {
  const param = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const employeeData = useSelector(
    (state) => state.employees.employeeDataTable
  );
  const isLoading= useSelector(
    (state) => state.employees.loading
  );


    const employeeInfo = useMemo(()=>{

      return employeeData.data.find(
        (employee) => employee.id === param.employeeId
      );
    },[])

  async function handleEdit(e) {
    e.preventDefault();
    if(window.confirm("Do you really want to change designation?")){

      try{
        const res = await dispatch(editEmployeeDesignation(param.employeeId,e.target[0].value));
        console.log(typeof e.target[0].value);
        console.log(res);
  
      res === 'success' && navigate('../employee-list');
      }catch(error){
        console.error("Failed to update designation:", error);
      }
    }
  }
  return (
    <>
      {isLoading && <Loading fullHeightWidth />}
      <PageHeader
        title="Edit Employee"
        buttonLabel="BACK"
        buttonOnClick={() => navigate("../employee-list")}
      />
      <section className="bg-white p-3 sm:p-4 md:p-6 lg-p-8 xl:p-10 2xl:p-12 rounded-lg grid sm:grid-cols-2 gap-3">
        <h2 className="col-start-1 -col-end-1"><strong>Id :</strong> {employeeInfo.id}</h2>
        <div className="col-start-1 -col-end-1">
          <img
            src={
              employeeInfo.user.image
              ? `https://restaurantapi.bssoln.com/images/user/${employeeInfo.user.image}`
                : defaultImage
            }
            alt={employeeInfo.user.fullName}
            className="max-w-44 object-cover rounded-lg"
          />
        </div>
        <p> <strong>Name:</strong> {employeeInfo.user.fullName}</p>
        <p><strong>Phone:</strong> {employeeInfo.user.phoneNumber}</p>
        <p><strong>Email:</strong> {employeeInfo.user.email}</p>
        <p><strong>NID:</strong> {employeeInfo.user.nid}</p>
        <p><strong>Address:</strong> {employeeInfo.user.address}</p>
        <form onSubmit={handleEdit} className="flex gap-3 col-start-1 -col-end-1">
          <Input placeholder={employeeInfo.designation} className="placeholder:text-stone-950 border border-solid border-stone-500 rounded p-0.5" labelClass='font-bold'>Designation:</Input>
          <Button type="submit" title="Change designation">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              
              height="24px"
              width="24px"
              version="1.1"
              id="Layer_1"
              viewBox="0 0 512 512"
              className="fill-primary hover:fill-red-800"
            >
              <g>
                <g>
                  <path d="M483.927,212.664L66.967,25.834C30.95,9.695-7.905,42.023,1.398,80.368l21.593,89.001    c3.063,12.622,11.283,23.562,22.554,30.014l83.685,47.915c6.723,3.85,6.738,13.546,0,17.405l-83.684,47.915    c-11.271,6.452-19.491,17.393-22.554,30.015l-21.594,89c-9.283,38.257,29.506,70.691,65.569,54.534l416.961-186.83    C521.383,282.554,521.333,229.424,483.927,212.664z M359.268,273.093l-147.519,66.1c-9.44,4.228-20.521,0.009-24.752-9.435    c-4.231-9.44-0.006-20.523,9.434-24.752l109.37-49.006l-109.37-49.006c-9.44-4.231-13.665-15.313-9.434-24.752    c4.229-9.44,15.309-13.666,24.752-9.435l147.519,66.101C373.996,245.505,374.007,266.49,359.268,273.093z" />
                </g>
              </g>
            </svg>
          </Button>
        </form>
      </section>
    </>
  );
}
