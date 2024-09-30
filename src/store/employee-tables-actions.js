import axios from "axios";
import { employeeTablesActions } from "./employee-tables-slice";
import { modalActions } from "./modal-slice";
import { loaderActions } from "./loader-slice";
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
      dispatch(employeeTablesActions.errorMessage(error.message));
      dispatch(modalActions.open());
      console.log(error);
      setTimeout(() => {
        dispatch(modalActions.close());
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

      if (res.status === 200) {
        dispatch(employeeTablesActions.removeEmployee(employeeTableId));
        dispatch(employeeTablesActions.getEmployeeTablesDataTable(res.data));
      }
      dispatch(employeeTablesActions.setLoading(false));
    } catch (error) {
      dispatch(employeeTablesActions.setLoading(false));
      dispatch(employeeTablesActions.errorMessage(error.message));
      dispatch(modalActions.open());
      console.log(error);
      setTimeout(() => {
        dispatch(modalActions.close());
      }, 3000);
    }
  };
};

// export const createEmployeeTable = (formData, imageFile) => {
//   return async (dispatch) => {
//     dispatch(loaderActions.show());
//     const birthDateString = dateConvertToString(formData.dob);
//     const dateOfJoinString = dateConvertToString(formData.joinDate);
//     const updatedData = {
//       ...formData,
//       joinDate: dateOfJoinString,
//       dob: birthDateString,
//     };
//     try {
//       if (imageFile) {
//         const base64String = await convertBase64(imageFile);
//         console.log(base64String);
//         const finalData = {
//           ...updatedData,
//           image: imageFile?.name || "",
//           base64: base64String ? base64String : "",
//         };
//         const response = await axios.post(
//           "https://restaurantapi.bssoln.com/api/Table/create",
//           finalData
//         );
//         if (response.status === 200) {
//           dispatch(loaderActions.hide());
//           dispatch(employeeTablesActions.showPreview(undefined));
//           dispatch(employeeTablesActions.selectedEmployeeImage(undefined));
//           return 200;
//         }
//       }
//     } catch (error) {
//       dispatch(loaderActions.hide());
//       dispatch(employeeTablesActions.errorMessage(error.message));
//       dispatch(modalActions.open());
//       console.log(error);
//       setTimeout(() => {
//         dispatch(modalActions.close());
//       }, 3000);
//     }
//   };
// };

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

// export function dateConvertToString(date) {
//   if (!date) return "";
//   const newDate = new Date(date);
//   if (isNaN(newDate)) return "";
//   const dateString = newDate.toISOString();
//   return dateString;
// }
