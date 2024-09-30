import axios from "axios";
import { employeeTablesActions } from "./employee-tables-slice.js";
import { modalActions } from "./modal-slice.js";
import { convertBase64 } from "./employee-actions.js";
export const getEmployeeTables = () => {
  return async (dispatch) => {
    dispatch(employeeTablesActions.setLoading(true));
    try {
      const response = await axios.get(
        `https://restaurantapi.bssoln.com/api/Table/datatable`
      );
      console.log(response);
      dispatch(employeeTablesActions.getEmployeeTablesDataTable(response.data));
      dispatch(employeeTablesActions.getEmployeeTablesRow(response.data.data));
      dispatch(employeeTablesActions.setLoading(false));
    } catch (error) {
      dispatch(employeeTablesActions.setLoading(false));
      console.log(error);
      dispatch(employeeTablesActions.setErrorMessage(error.message));
      dispatch(modalActions.open());
      console.log(error);
      setTimeout(() => {
        dispatch(modalActions.close());
        dispatch(employeeTablesActions.setErrorMessage(undefined));
      }, 3000);
    }
  };
};

export const deleteEmployeeTable = (employeeTableId) => {
  return async (dispatch) => {
    dispatch(employeeTablesActions.setLoading(true));
    try {
      const res = await axios.delete(
        `https://restaurantapi.bssoln.com/api/Table/delete/${employeeTableId}`
      );
      console.log("delete res", res);
      if (res.status === 204) {
        dispatch(employeeTablesActions.removeEmployeeTable(employeeTableId));
      }
      dispatch(employeeTablesActions.setLoading(false));
    } catch (error) {
      dispatch(employeeTablesActions.setLoading(false));
      dispatch(employeeTablesActions.setErrorMessage(error.message));
      dispatch(modalActions.open());
      console.log(error);
      setTimeout(() => {
        dispatch(modalActions.close());
        dispatch(employeeTablesActions.setErrorMessage(undefined));
      }, 3000);
    }
  };
};

export const createTable = (formData, imageFile) => {
  return async (dispatch) => {
    dispatch(employeeTablesActions.setLoading(true));
    console.log(formData);

    const updatedData = {
      ...formData,
      numberOfSeats: Number(formData.numberOfSeats),
    };
    try {
      let base64String = "";
      if (imageFile) {
        base64String = await convertBase64(imageFile);
        console.log(base64String);
      }
      const finalData = {
        ...updatedData,
        image: imageFile?.name || "",
        base64: base64String ? base64String : "",
      };
      console.log("finalData", finalData);
      const response = await axios.post(
        "https://restaurantapi.bssoln.com/api/Table/create",
        finalData
      );
      if (response.status === 200) {
        dispatch(employeeTablesActions.setLoading(false));
        dispatch(employeeTablesActions.showPreview(undefined));
        dispatch(employeeTablesActions.setSelectedTableImage(undefined));
        return 200;
      }
    } catch (error) {
      dispatch(employeeTablesActions.setLoading(false));
      dispatch(employeeTablesActions.setErrorMessage(error.message));
      dispatch(modalActions.open());
      console.log(error);
      setTimeout(() => {
        dispatch(modalActions.close());
      }, 3000);
    }
  };
};

// export const convertBase64 = (file) => {
//   return new Promise((resolve, reject) => {
//     const fileReader = new FileReader();
//     fileReader.readAsDataURL(file);

//     fileReader.onload = () => {
//       resolve(fileReader.result);
//     };
//     fileReader.onerror = (error) => {
//       reject(error);
//     };
//   });
// };
