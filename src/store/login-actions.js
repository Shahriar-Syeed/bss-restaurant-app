import axios from "axios";
import { modalActions } from "./modal-slice.js";
import { loginActions } from "./login-slice.js";
import { useNavigate } from "react-router-dom";

export const setLoginData = (data) => {
  return async (dispatch) => {
    try{

      const res = await dispatch(loginActions.setFormData(data));
    }catch(error){
      console.log(error);
    }

  };
};



export const submitLogin = (formData) => {
  return async (dispatch) => {
 
    dispatch(loginActions.loading(true));
    try {
      console.log(formData);
      const response = await axios.post(
        `https://restaurantapi.bssoln.com/api/Auth/SignIn`,
        formData
      );
      console.log(response);
      if (response.status === 200) {
        dispatch(loginActions.loading(false));
        const token = "Bearer " + response.data.token;
        const user = response.data.user;
        const refreshToken = response.data.refreshToken;
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("refreshToken", refreshToken);
        sessionStorage.setItem("user", JSON.stringify(user));
        return Promise.resolve(`/bss-restaurant-app/${user.fullName}`);
      }
    } catch (error) {
     
      dispatch(modalActions.id("Failed To Login"));
      dispatch(loginActions.loading(false));
      dispatch(loginActions.errorMessage(error.message));
      dispatch(modalActions.open());
      console.log(error);
      setTimeout(() => {
        dispatch(modalActions.id(null));
        dispatch(modalActions.close());
      }, 3000);
    }
  };
};

export const getSingleFoodItem = (id) => {
  return async (dispatch) => {
    dispatch(foodActions.loading(true));
    try {
      const response = await axios.get(
        `https://restaurantapi.bssoln.com/api/Food/get/${id}`,{
          headers:{
            Authorization: token,
          }
        }
      );
      console.log(response);
      dispatch(foodActions.setFoodItem(response.data));
      dispatch(foodActions.loading(false));
    } catch (error) {
      dispatch(modalActions.id("Single Food Getting Fail"));
      dispatch(foodActions.loading(false));
      dispatch(foodActions.errorMessage(error.message));
      dispatch(modalActions.open());
      setTimeout(() => {
        dispatch(modalActions.close());
        dispatch(modalActions.id(null));
      }, 3000);
    }
  };
};

export const setSingleFoodNull = () => {
  return  (dispatch) => {
    dispatch(foodActions.setFoodItem(null));
  };
};

export const updateSingleFoodItem = (id, data) => {
  return async (dispatch) => {
    dispatch(foodActions.loading(true));
    console.log(id,data);
    try {
      const response = await axios.put(
        `https://restaurantapi.bssoln.com/api/Food/update/${id}`,{
          headers:{
            Authorization: token,
          }
        }, data
      );
      console.log(response);
      if (response.status === 200 || response.status === 204) {
        dispatch(foodActions.updateFood({id,data}))
        dispatch(foodActions.loading(false));
        dispatch(foodActions.showPreview(undefined));
        dispatch(foodActions.selectedFoodImage(undefined));
        return Promise.resolve("success");
      }
      dispatch(foodActions.loading(false));
    } catch (error) {
      dispatch(modalActions.id("Food Update Fail"));
      dispatch(foodActions.loading(false));
      dispatch(foodActions.errorMessage(error.message));
      dispatch(modalActions.open());
      setTimeout(() => {
        dispatch(modalActions.close());
        dispatch(modalActions.id(null));
      }, 3000);
    }    
  };
};
