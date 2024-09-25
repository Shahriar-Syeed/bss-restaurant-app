import { createSlice } from "@reduxjs/toolkit";

const initialTables = {
  tableDataTable:{},
  tableRowData: [],
  selectedTableImage: undefined,
  preview: undefined,
  loading: false,
  error: null,
};

const tableSlice = createSlice({
  name: "tables",
  initialState: initialTables,
  reducers: {
    getTableDataTable(state, action) {
      state.tableDataTable = action.payload;
    },
    getTableRow(state, action) {
      state.tableRowData = action.payload;
    },
    showPreview(state, action) {
      state.preview = action.payload;
    },
    selectedEmployeeImage(state, action) {
      state.selectedEmployeeImage = action.payload;
    },
    loading(state, action) {
      state.loading = action.payload;
    },   
    errorMessage(state, action) {
      state.error = action.payload;
    },

    removeTable(state, action) {
      state.tablesRowData = state.tablesRowData.filter(
        (table) => table.id !== action.payload
      );
    },
  },
});
export const tableActions = tableSlice.actions;
export default tableSlice.reducer;