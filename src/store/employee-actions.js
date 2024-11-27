import axios from "axios";
import { employeeActions } from "./employee-slice";
import { modalActions } from "./modal-slice";
export const getEmployees = (page, perPage) => {
  return async (dispatch) => {
    dispatch(employeeActions.loading(true));
    try {
      const response = await axios.get(
        `https://restaurantapi.bssoln.com/api/Employee/datatable?Page=${page}&Per_Page=${perPage}`
      );
      console.log(response);
      dispatch(employeeActions.getEmployeesDataTable(response.data));
      dispatch(employeeActions.loading(false));
    } catch (error) {
      dispatch(employeeActions.loading(false));
      console.log(error);
      dispatch(modalActions.id("employee-list-fail"));
      dispatch(employeeActions.errorMessage(error.message));
      dispatch(modalActions.open());
      console.log(error);
      setTimeout(() => {
        dispatch(modalActions.close());
      }, 3000);
    }
  };
};

export const deleteEmployee = (employeeId) => {
  return async (dispatch) => {
    dispatch(employeeActions.loading(true));
    try {
      const res = await axios.delete(
        `https://restaurantapi.bssoln.com/api/Employee/delete/${employeeId}`
      );

      if (res.status === 204) {
        dispatch(employeeActions.removeEmployee(employeeId));
      }
      dispatch(employeeActions.loading(false));
    } catch (error) {
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

export const createEmployee = (formData) => {
  return async (dispatch) => {
    dispatch(modalActions.close());
    dispatch(employeeActions.loading(true));
    const birthDateString = dateConvertToString(formData.dob);
    const dateOfJoinString = dateConvertToString(formData.joinDate);
    const updatedData = {
      ...formData,
      joinDate: dateOfJoinString,
      dob: birthDateString,
    };
    console.log("updatedData", updatedData);
    try {
      const response = await axios.post(
        "https://restaurantapi.bssoln.com/api/Employee/create",
        updatedData
      );
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
    console.log("data", data);
    try {
      const response = await axios.put(
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
      dispatch(employeeActions.errorMessage(error.message));
      dispatch(modalActions.open());
      console.log(error);
      setTimeout(() => {
        dispatch(modalActions.close());
      }, 3000);
    }
  };
};

// export const fetchImageAsBase64 = async (url) => {

//     try {
//       const response = await axios.get(url, { responseType: "blob" });;
//       const blob = await response.blob();
      

//       const base64 =  new Promise((resolve, reject) => {
//         const reader = new FileReader();
//         reader.onloadend = () => resolve(reader.result); // Resolve with Base64 string
//         reader.onerror = (error) => reject(error); // Reject on error
//         reader.readAsDataURL(blob);
//       });
//       return {base64};
//     } catch (error) {
//       console.error("Error fetching image:", error);
//       throw error; // Re-throw error so it can be caught by caller
//     }

// };

// export const urlToBase64 = (url) => {
//   const img = new Image();
//   img.crossOrigin = "Anonymous"; // Handle cross-origin issues
//   img.src = url;

//   img.onload = () => {
//     const canvas = document.createElement("canvas");
//     canvas.width = img.width;
//     canvas.height = img.height;
//     const ctx = canvas.getContext("2d");
//     ctx.drawImage(img, 0, 0);

//     const dataURL = canvas.toDataURL("image/png");
//     return dataURL; // Set the Base64 string in state
//   };
//   img.onerror = () => {
//     console.error("Error loading image.");
//   };
// }

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
