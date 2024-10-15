import axios from "axios";
import { foodActions } from "./food-slice.js";
import { modalActions } from "./modal-slice.js";
import { loaderActions } from "./loader-slice.js";
import { convertBase64 } from "./employee-actions.js";
export const getFoods = () => {
  return async (dispatch) => {
    dispatch(foodActions.loading(true));
    try {
      const response = await axios.get(
        `https://restaurantapi.bssoln.com/api/Food/datatable`
      );
      console.log(response);
      dispatch(foodActions.getFoodsDataTable(response.data));
      dispatch(foodActions.getFoodsRow(response.data.data));
      dispatch(foodActions.loading(false));
    } catch (error) {
      dispatch(foodActions.loading(false));
      console.log(error);
      dispatch(foodActions.errorMessage(error.message));
      dispatch(modalActions.open());
      console.log(error);
      setTimeout(() => {
        dispatch(modalActions.close());
      }, 3000);
    }
  };
};

export const deleteFood = (foodId) => {
  return async (dispatch) => {
    dispatch(foodActions.loading(true));
    try {
      const res = await axios.delete(
        `https://restaurantapi.bssoln.com/api/Food/delete/${foodId}`
      );

      if (res.status === 204) {
        dispatch(foodActions.removeFood(foodId));
      }
      dispatch(foodActions.loading(false));
    } catch (error) {
      dispatch(foodActions.loading(false));
      dispatch(foodActions.errorMessage(error.message));
      dispatch(modalActions.open());
      console.log(error);
      setTimeout(() => {
        dispatch(modalActions.close());
      }, 3000);
    }
  };
};

export const createFood = (formData, imageFile) => {
  return async (dispatch) => {
    dispatch(loaderActions.show());
   
    const updatedData = {
      ...formData,

    };
    try {
  
      if (imageFile) {
        const base64String = await convertBase64(imageFile);
        console.log(base64String);
        const finalData = {
          ...updatedData,
          image: imageFile?.name || "",
          base64: base64String ? base64String : "",
        };
        const response = await axios.post(
          "https://restaurantapi.bssoln.com/api/Food/create",
          finalData
        );
        if (response.status === 200) {
          dispatch(loaderActions.hide());
          dispatch(foodActions.showPreview(undefined));
          dispatch(foodActions.selectedFoodImage(undefined));
          return 200;
        }
      }
    } catch (error) {
      dispatch(loaderActions.hide());
      dispatch(foodActions.errorMessage(error.message));
      dispatch(modalActions.open());
      console.log(error);
      setTimeout(() => {
        dispatch(modalActions.close());
      }, 3000);
    }
  };
};


