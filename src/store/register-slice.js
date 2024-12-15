import { createSlice } from "@reduxjs/toolkit";

const initialRegister = {
  registerData: {},
  selectedUserImage: undefined,
  preview: undefined,
  status: null,
  loading: false,
  error: null,
};

const registerSlice = createSlice({
  name: "register",
  initialState: initialRegister,
  reducers: {
    getRegisterData(state, action) {
      state.employeeDataTable = action.payload;
    },
    showPreview(state, action) {
      state.preview = action.payload;
    },
    setSelectedEmployeeImage(state, action) {
      state.selectedEmployeeImage = action.payload;
    },
    loading(state, action) {
      state.loading = action.payload;
    },
    errorMessage(state, action) {
      state.error = action.payload;
    },
    removeEmployee(state, action) {
      state.employeeDataTable = {
        ...state.employeeDataTable,
        data: state.employeeDataTable.data.filter(
          (employee) => employee.id !== action.payload
        ),
      };
    },
    changeEmployeeDesignation(state, action) {
      state.employeeDataTable.data = state.employeeDataTable.data.map((item) =>
        item.id === action.payload.id
          ? { ...item, designation: action.payload.designation }
          : item
      );
    },
  },
});
export const registerActions = registerSlice.actions;
export default registerSlice.reducer;
