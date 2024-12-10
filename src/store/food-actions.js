import axios from "axios";
import { foodActions } from "./food-slice.js";
import { modalActions } from "./modal-slice.js";
import { token } from "../routers/Router.jsx";
export const getFoods = (page, perPage) => {
  return async (dispatch) => {
    dispatch(foodActions.loading(true));
    try {
      const response = await axios.get(
        `https://restaurantapi.bssoln.com/api/Food/datatable?Page=${page}&Per_Page=${perPage}`,{
          headers:{
            Authorization: token,
          }
        }
      );
      console.log(response);
      dispatch(foodActions.getFoodsDataTable(response.data));
      dispatch(foodActions.loading(false));
    } catch (error) {
      dispatch(foodActions.loading(false));
      dispatch(foodActions.errorMessage(error.message));
      dispatch(modalActions.id("Food Getting Fail"));
      dispatch(modalActions.open());
      setTimeout(() => {
        dispatch(modalActions.close());
        dispatch(modalActions.id(null));
      }, 3000);
    }
  };
};

export const deleteFood = (foodId) => {
  return async (dispatch) => {
    dispatch(foodActions.loading(true));
    try {
      const res = await axios.delete(
        `https://restaurantapi.bssoln.com/api/Food/delete/${foodId}`,{
          headers:{
            Authorization: token,
          }
        }
      );

      if (res.status === 204) {
        dispatch(foodActions.removeFood(foodId));
      }
      dispatch(foodActions.loading(false));
    } catch (error) {
      dispatch(modalActions.id("Food Deleting Fail"));
      dispatch(foodActions.loading(false));
      dispatch(foodActions.errorMessage(error.message));
      dispatch(modalActions.open());
      console.log(error);
      setTimeout(() => {
        dispatch(modalActions.close());
        dispatch(modalActions.id(null));
      }, 3000);
    }
  };
};

export const createFood = (formData) => {
  return async (dispatch) => {
    dispatch(foodActions.loading(true));
    const updatedData = {
      ...formData,
      discount: Number(formData.discount),
      discountPrice: Number(formData.discountPrice),
      price: Number(formData.price),
      discountType: Number(formData.discountType),
    };
    try {
      const response = await axios.post(
        "https://restaurantapi.bssoln.com/api/Food/create",{
          headers:{
            Authorization: token,
          }
        },{
          headers:{
            Authorization: token,
          }
        },
        updatedData
      );
      if (response.status === 200) {
        dispatch(foodActions.loading(false));
        dispatch(foodActions.showPreview(undefined));
        dispatch(foodActions.selectedFoodImage(undefined));
      }
      return response;
    } catch (error) {
      dispatch(modalActions.id("Food Adding Fail"));
      dispatch(foodActions.loading(false));
      dispatch(foodActions.errorMessage(error.message));
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
