import { createSlice } from "@reduxjs/toolkit";

const FormSlice = createSlice({
  name: "form",
  initialState: {
    form: [],
  },
  reducers: {
    addData: (state, action) => {
      state.form.push({ id: state.form.length + 1, ...action.payload });
    },
    removeData: (state, action) => {
      state.form = state.form.filter((item) => item.id !== action.payload);
    },
  },
});
export const { addData, removeData } = FormSlice.actions;
const formReducer = FormSlice.reducer;
export default formReducer;
