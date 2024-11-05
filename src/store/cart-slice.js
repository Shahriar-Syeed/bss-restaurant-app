import { createSlice } from "@reduxjs/toolkit";

const initialCart = {
  cartItem:{},
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCart,
  reducers: {
    getCartItem(state, action) {
      state.cartItem = action.payload;
    },
    loading(state, action) {
      state.loading = action.payload;
    },   
    errorMessage(state, action) {
      state.error = action.payload;
    },

    // removeFood(state, action) {
    //   state.foodDataTable = {...state.foodDataTable, data: state.foodDataTable.data.filter(
    //     (food) => food.id !== action.payload
    //   )};
    // },
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice.reducer;