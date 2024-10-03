import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modal-slice.js";
import loaderSlice from "./loader-slice.js";
import employeeSlice from "./employee-slice.js";
import employeeTablesSlice from "./employee-tables-slice.js";
import customSelectSlice from "./custom-select-slice.js";

const store = configureStore({
  reducer: {
    modal: modalReducer,
    loader: loaderSlice,
    employees: employeeSlice,
    employeeTables: employeeTablesSlice,
    customSelect: customSelectSlice,     
  },
});

export default store;
