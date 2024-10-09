import { useEffect, useState } from 'react'
import Button from '../UI/Button.jsx';
import { useDispatch } from 'react-redux';
import { getAssignEmployeeAndTableDetails } from '../../store/employee-tables-actions.js';

export default function EmployeesInATable({idOfTable}) {
  const [updatedEmpTabDetails, setUpdatedEmpTabDetails] = useState([]);
  const dispatch =useDispatch();


  
  useEffect(() => {
    async function gettingData() {
      const res = await dispatch(getAssignEmployeeAndTableDetails(idOfTable));
    
      if(res.length >0){
        setUpdatedEmpTabDetails(res);
      }
    }
    gettingData();
  }, [dispatch, idOfTable]);


  return (
    <>
    {updatedEmpTabDetails?.map(empAndTabDetail=><li key={empAndTabDetail['employeeTableId']}>
      <div className="inline-flex items-center whitespace-nowrap bg-gray-100 hover:bg-gray-200 rounded-2xl p-1 mb-1 ">
        <span className="sm:me-1">{empAndTabDetail.employee.name}</span>
        <Button
          textOnly={true}
          className="rounded-50 h-6 w-6 grid place-items-center text-stone-400 hover:text-stone-500 stroke-transparent"
          onClick={() => {
            if (
              window.confirm(
                "Are you sure you want to remove this employee from this table?"
              )
            )
              console.log("remove employee this table");
          }}
        >
          <svg
            className="fill-current stroke-inherit"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            width="24px"
          >
            <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path>
          </svg>
        </Button>
      </div>
    </li>)}
   
    </>    
  );
}