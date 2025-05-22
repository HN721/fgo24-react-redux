import { createSlice } from "@reduxjs/toolkit";

const FormSlice = createSlice({
  name: "form",
  initialState: {
    form: [],
  },
  reducers: {
    formAction: (state, action) => {
      state.form = action.payload;
    },
  },
});
export const { formAction } = FormSlice.actions;
const formReducer = FormSlice.reducer;
export default formReducer;
