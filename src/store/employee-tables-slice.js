import { createSlice } from "@reduxjs/toolkit";

const initialEmployeeTables = {
  employeeTablesDataTable: {},
  employeeTableRowData: [],
  employeesOnTable: [],
  preview: undefined,
  loading: false,
  error: null,
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
    setEmployeeInTable(state, action){
      state.employeesOnTable = action.payload;
    },

    setLoading(state, action) {
      state.loading = action.payload;
    },
    errorMessage(state, action) {
      state.error = action.payload;
    },

    setEmployeeTableRowData(state, action) {
      state.employeeTableRowData = state.employeeTablesDataTable.filter(
        (employeeTable) => employeeTable.id !== action.payload
      );
    },
    removeEmployeeTable(state, action) {
      state.employeeTableRowData = state.employeeTableRowData.filter(
        (employeeTable) => employeeTable.id !== action.payload
      );
    },
  },
});
export const employeeTablesActions = employeeTablesSlice.actions;
export default employeeTablesSlice.reducer;
