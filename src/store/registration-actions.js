import { employeeActions } from "./employee-slice";
import { modalActions } from "./modal-slice";
import { api } from "./axiosInstance";
import { registerActions } from "./register-slice";



export const createUser= (formData) => {
  return async (dispatch) => {
    dispatch(modalActions.close());
    dispatch(registerActions.loading(true));
    const birthDateString = dateConvertToString(formData.dob);
    const updatedData = {
      ...formData,
      dob: birthDateString,
    };
    console.log("updatedData", updatedData);
    try {
      const response = await api.post("Employee/create", updatedData);
      dispatch(employeeActions.setStatus(response.status));
      console.log("createResult", response);
      if (response.status === 200) {
        dispatch(modalActions.close());
        dispatch(employeeActions.showPreview(undefined));
        dispatch(employeeActions.loading(false));
      }
      return response;
    } catch (error) {
      dispatch(modalActions.id("employee-create-error"));
      dispatch(employeeActions.loading(false));
      dispatch(employeeActions.errorMessage(error.message));
      dispatch(modalActions.open());
      console.log(error);
      setTimeout(() => {
        dispatch(modalActions.close());
        dispatch(modalActions.id(null));
      }, 3000);
    }
  };
};

export const editEmployeeDesignation = (id, data) => {
  return async (dispatch) => {
    dispatch(employeeActions.loading(true));
    try {
      const response = await api.put(
        `https://restaurantapi.bssoln.com/api/Employee/update/${id}`,
        { designation: data }
      );
      console.log(response);
      if (response.status === 200 || response.status === 204) {
        dispatch(
          employeeActions.changeEmployeeDesignation({
            id: id,
            designation: data,
          })
        );
        dispatch(employeeActions.loading(false));
        return Promise.resolve("success");
      }
    } catch (error) {
      dispatch(modalActions.id("Edit Employee Fail"));
      dispatch(employeeActions.errorMessage(error.message));
      dispatch(modalActions.open());
      console.log(error);
      setTimeout(() => {
        dispatch(modalActions.close());
        dispatch(modalActions.id(null));
      }, 3000);
    }
  };
};

export const nullStatus = () => {
  return async (dispatch) => {
    dispatch(employeeActions.setStatus(null));
  };
};

export const convertBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => resolve(fileReader.result);
    fileReader.onerror = (error) => reject(error);
  });
};

export function dateConvertToString(date) {
  if (!date) return "";
  const newDate = new Date(date);
  if (isNaN(newDate)) return "";
  const dateString = newDate.toISOString();
  return dateString;
}
