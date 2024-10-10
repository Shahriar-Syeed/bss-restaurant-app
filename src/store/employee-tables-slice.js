import { createSlice } from "@reduxjs/toolkit";

const initialEmployeeTables = {
  employeeTablesDataTable: {},
  employeeTableRowData: [],
  assignEmployeeAndTableDetails:[],
  testDetails:{},
  preview: undefined,
  loading: false,
  error: null,
  selectedTableImage:undefined,
  nonAssignedEmployee: [],
};

const employeeTablesSlice = createSlice({
  name: "employeeTables",
  initialState: initialEmployeeTables,
  reducers: {
    getEmployeeTablesDataTable(state, action) {
      state.employeeTablesDataTable = action.payload;
    },
    getEmployeeTablesRow(state, action) {
      state.employeeTableRowData = action.payload;
    },
    showPreview(state, action) {
      state.preview = action.payload;
    },    

    setAssignEmployeeAndTableDetails(state, action) {
      state.assignEmployeeAndTableDetails = action.payload;
    },
    
    removeEmployeeFromTable(state, action) {
      console.log('before state',JSON.stringify(state.assignEmployeeAndTableDetails));
      state.assignEmployeeAndTableDetails = state.assignEmployeeAndTableDetails.filter(
        (employeeTableDetail) => employeeTableDetail.employeeTableId !== action.payload
      );
    },

    setLoading(state, action) {
      state.loading = action.payload;
    },
    setErrorMessage(state, action) {
      state.error = action.payload;
    },

    removeEmployeeTable(state, action) {
      state.employeeTableRowData = state.employeeTableRowData.filter(
        (employeeTable) => employeeTable.id !== action.payload
      );
      state.employeeTablesDataTable = {
        ...state.employeeTablesDataTable,
        data: state.employeeTablesDataTable.data.filter(
          (employeeTable) => employeeTable.id !== action.payload
        ),
      };
    },
    setSelectedTableImage(state, action){
      state.selectedTableImage = action.payload;
    },
    setNonAssignEmployee(state,action){
      state.nonAssignedEmployee = action.payload;
    },
  },
});
export const employeeTablesActions = employeeTablesSlice.actions;
export default employeeTablesSlice.reducer;
