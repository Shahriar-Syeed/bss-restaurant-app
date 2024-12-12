// import axios from "axios";
import { employeeActions } from "./employee-slice";
import { modalActions } from "./modal-slice";
// import { token, apiClient, refreshToken } from "../routers/Router";
import { api } from "./axiosInstance";



// export const getEmployees = (page, perPage) => {
//   return async (dispatch) => {
//     dispatch(employeeActions.loading(true));
//     try {
//       const response = await apiClient.get(
//         `Employee/datatable?Page=${page}&Per_Page=${perPage}`
//       ); 
//       console.log(response);
//       if (response.status === 200) {
//         dispatch(employeeActions.getEmployeesDataTable(response.data)); 
//         dispatch(employeeActions.loading(false)); 
//       }
//     } catch (error) {
     
//       if (error.response?.status === 401) {
       
//         console.log("Unauthorized: Attempting token refresh");
//         try {
    
//           const newToken = await handleTokenRefresh();
//           console.log(newToken);

         
//             const retryResponse = await axios.get(
//               `https://restaurantapi.bssoln.com/api/Employee/datatable?Page=${page}&Per_Page=${perPage}`,
//               {
//                 headers: {
//                   Authorization: newToken,
//                 },
//               }
//             );
//             console.log("retryResponse", retryResponse);
//             if (retryResponse.status === 200) {
//               dispatch(
//                 employeeActions.getEmployeesDataTable(retryResponse.data)
//               );
//               dispatch(employeeActions.loading(false)); 
//               return; // Exit after successful retry
//             }
          
//           } catch (refreshError) {
//           dispatch(employeeActions.loading(false)); 
//           dispatch(modalActions.id("Token refresh failed")); 
//           dispatch(employeeActions.errorMessage(refreshError.message));
//           console.log(refreshError);
//           setTimeout(() => {
//             dispatch(modalActions.id(null));
//             dispatch(modalActions.close());
//           }, 3000);
//           throw refreshError;
//         }
//       }
//       dispatch(employeeActions.loading(false)); 
//       dispatch(modalActions.id("Employees list get fail"));
//       dispatch(employeeActions.errorMessage(error.message)); 
//       dispatch(modalActions.open());
//       console.log(error);
//       setTimeout(() => {
//         dispatch(modalActions.id(null)); 
//         dispatch(modalActions.close()); // Close the modal
//       }, 3000);
//     }
//   };
// };

export const getEmployees = (page, perPage) => {
  return async (dispatch) => {
    dispatch(employeeActions.loading(true)); // Set loading state to true
    try {
      const response = await api.get(
        `Employee/datatable?Page=${page}&Per_Page=${perPage}`
      ); // Make the API call
      console.log(response);

      if (response.status === 200) {
        dispatch(employeeActions.getEmployeesDataTable(response.data)); // Dispatch data to Redux store
        dispatch(employeeActions.loading(false)); // Set loading state to false
      }
    } catch (error) {
      dispatch(employeeActions.loading(false)); // Set loading state to false
      dispatch(modalActions.id("Employees list get fail")); // Show error modal
      dispatch(employeeActions.errorMessage(error.message)); // Set error message
      dispatch(modalActions.open()); // Open the modal
      console.error(error);

      setTimeout(() => {
        dispatch(modalActions.id(null)); // Reset modal ID after timeout
        dispatch(modalActions.close()); // Close the modal
      }, 3000);
    }
  };
};

export const deleteEmployee = (employeeId) => {
  return async (dispatch) => {
    dispatch(employeeActions.loading(true));
    try {
      const res = await api.delete(`Employee/delete/${employeeId}`);

      if (res.status === 204) {
        dispatch(employeeActions.removeEmployee(employeeId));
      }
      dispatch(employeeActions.loading(false));
    } catch (error) {
      dispatch(modalActions.id("Delete Employee Fail."));
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
    console.log("data", data);
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

// export async function handleTokenRefresh(dispatch) {
//   try {
//     const refreshResponse = await axios.post(
//       "https://restaurantapi.bssoln.com/api/Auth/refreshToken",
//       {
//         refreshToken: sessionStorage.getItem("refreshToken"), // Get refresh token from session storage
//       }
//     );

//     if (refreshResponse.status === 200) {
//       const newToken = "Bearer " + refreshResponse.data.accessToken;
//       const newRefreshToken = refreshResponse.data.refreshToken;
//       const newRefreshTokenExpiryTime =
//         refreshResponse.data.refreshTokenExpiryTime;

//       // Update session storage with new tokens
//       sessionStorage.setItem("token", newToken);
//       sessionStorage.setItem("refreshToken", newRefreshToken);
//       sessionStorage.setItem(
//         "refreshTokenExpiryTime",
//         newRefreshTokenExpiryTime
//       );

//       return Promise.resolve(newToken); // Return the new access token for retrying the API call
//     }
//   } catch (refreshError) {
//     console.error("Token refresh failed", refreshError);
//     dispatch(modalActions.id("Token refresh failed"));
//     throw refreshError; // Rethrow error if token refresh fails
//   }
// }
