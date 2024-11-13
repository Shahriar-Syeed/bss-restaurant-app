import axios from "axios";
import { modalActions } from "./modal-slice.js";
import { orderActions } from "./order-slice.js";
export const getOrder = ( perPage) => {
  return async (dispatch) => {
    dispatch(orderActions.setLoading(true));
    try {
      const response = await axios.get(
        `https://restaurantapi.bssoln.com/api/Order/datatable?Page=1&Per_Page=${perPage}`
      );
      console.log(response);
      dispatch(orderActions.setOrderDataTable(response.data));
      dispatch(orderActions.setLoading(false));
    } catch (error) {
      dispatch(orderActions.setLoading(false));
      console.log(error);
      dispatch(orderActions.errorMessage(error.message));
      dispatch(modalActions.id('orderList'))
      dispatch(modalActions.open());
      console.log(error);
      setTimeout(() => {
        dispatch(modalActions.close());
      }, 3000);
    }
  };
};

export const removeOrder = (id) => {
  return async (dispatch) => {
    dispatch(orderActions.setLoading(true));
    try {
      const response = await axios.delete(
        `https://restaurantapi.bssoln.com/api/Order/delete/${id}`
      );
      console.log(response);
      if(response.status === 204){
        dispatch(orderActions.removeOrderFromOrderDataTable(id));
      }
      dispatch(orderActions.setLoading(false));
    } catch (error) {
      dispatch(orderActions.setLoading(false));
      console.log(error);
      dispatch(orderActions.errorMessage(error.message));
      dispatch(modalActions.open());
      console.log(error);
      setTimeout(() => {
        dispatch(modalActions.close());
      }, 3000);
    }
  };
};
