import { createSlice } from "@reduxjs/toolkit";

const initialFoods = {
  foodDataTable:{},
  foodsRowData: [],
  selectedFoodImage: undefined,
  preview: undefined,
  loading: false,
  error: null,
};

const foodSlice = createSlice({
  name: "foods",
  initialState: initialFoods,
  reducers: {
    getFoodsDataTable(state, action) {
      state.foodDataTable = action.payload;
    },
    getFoodsRow(state, action) {
      state.foodsRowData = action.payload;
    },
    showPreview(state, action) {
      state.preview = action.payload;
    },
    selectedFoodImage(state, action) {
      state.selectedFoodImage = action.payload;
    },
    loading(state, action) {
      state.loading = action.payload;
    },   
    errorMessage(state, action) {
      state.error = action.payload;
    },

    removeFood(state, action) {
      state.foodsRowData = state.foodsRowData.filter(
        (food) => food.id !== action.payload
      );
    },
  },
});
export const foodActions = foodSlice.actions;
export default foodSlice.reducer;