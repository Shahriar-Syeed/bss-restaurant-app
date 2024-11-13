import { createSlice } from "@reduxjs/toolkit";

const initialOrder = {
  orderDataTable:{},
  selectedFoodImage: undefined,
  preview: undefined,
  loading: false,
  error: null,
  lastPage: "",
};

const orderSlice = createSlice({
  name: "order",
  initialState: initialOrder,
  reducers: {
    setOrderDataTable(state, action) {
      state.orderDataTable = action.payload;
    },
    removeOrderFromOrderDataTable(state, action) {
      state.orderDataTable.data = state.orderDataTable.data.filter(item=> item.id !==action.payload);
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },   
    errorMessage(state, action) {
      state.error = action.payload;
    },
    setLastPag(state, action) {
      state.lastPage = action.payload;
    },

    removeFood(state, action) {
      state.orderRowData = state.orderRowData.filter(
        (food) => food.id !== action.payload
      );
    },
  },
});
export const orderActions = orderSlice.actions;
export default orderSlice.reducer;