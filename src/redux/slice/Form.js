import { createSlice } from "@reduxjs/toolkit";

const FormSlice = createSlice({
  name: "form",
  initialState: {
    form: [],
  },
  reducers: {
    addData: (state, action) => {
      state.form.push(action.payload);
    },
    removeData: (state, action) => {
      state.form = state.form.filter((_, index) => index !== action.payload);
    },
  },
});
export const { addData, removeData } = FormSlice.actions;
const formReducer = FormSlice.reducer;
export default formReducer;
