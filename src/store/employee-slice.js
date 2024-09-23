import { createSlice } from "@reduxjs/toolkit";


const initialEmployee ={
  employeesRowData : [],
  selectedEmployeeImage: undefined,
  preview: undefined,
};

const employeeSlice = createSlice({
  name: 'employee',
  initialState: initialEmployee,
  reducers:{
    deleteEmployeeList(state,action){
      state.employeesRowData =
    } 
  }
});