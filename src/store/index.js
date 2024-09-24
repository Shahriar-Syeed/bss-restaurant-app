import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modal-slice.js";
import loaderSlice from "./loader-slice.js";
import employeeSlice from "./employee-slice.js";

const store = configureStore({
  reducer: {
    modal: modalReducer,
    loader: loaderSlice,
    employees: employeeSlice,
     
  },
});

export default store;
