import { createSlice } from "@reduxjs/toolkit";

const initialEmployeeTables = {
  employeeTablesDataTable: {},
  employeeTableRowData: [],
  preview: undefined,
  loading: false,
  error: null,
  selectedTableImage:undefined,
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
    setEmployeeInTable(state, action) {
      state.employeesOnTable = action.payload;
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
    }
  },
});
export const employeeTablesActions = employeeTablesSlice.actions;
export default employeeTablesSlice.reducer;
