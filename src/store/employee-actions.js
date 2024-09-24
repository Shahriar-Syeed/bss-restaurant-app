import axios from "axios";
import { employeeActions } from "./employee-slice";
import { modalActions } from "./modal-slice";

export const getEmployees = () =>{
  return(
    async (dispatch)=>{
      dispatch(employeeActions.loading(true));
      try{
        const response = await axios.get(
          `https://restaurantapi.bssoln.com/api/Employee/datatable`
        );
        console.log(response);
        dispatch(employeeActions.getEmployeesDataTable(response.data))
        dispatch(employeeActions.getEmployeesRow(response.data.data))
        dispatch(employeeActions.loading(false));
      }catch(error){
        dispatch(employeeActions.loading(false));
        console.log(error)
        dispatch(employeeActions.errorMessage(error.message));
        dispatch(modalActions.open());
        console.log(error);
        setTimeout(()=> {
          dispatch(modalActions.close());
        },3000);
      }      
    }
  );
};

export const deleteEmployee =(employeeId) =>{
  return (
    async (dispatch) =>{
      dispatch(employeeActions.loading(true));
      try {
        const res = await axios.delete(
          `https://restaurantapi.bssoln.com/api/Employee/delete/${employeeId}`
        );

        if (res.status === 204) {
          dispatch(employeeActions.removeEmployee(employeeId)) 
        }
        dispatch(employeeActions.loading(false));
      } catch (error) {
        dispatch(employeeActions.loading(false));
        dispatch(employeeActions.errorMessage(error.message));
        dispatch(modalActions.open());
        console.log(error);
        setTimeout(()=> {
          dispatch(modalActions.close());
        },3000);
      }
  
    }
  );
}