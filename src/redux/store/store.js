import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../slice/Form";
export const store = configureStore({
  reducer: {
    form: formReducer,
  },
});
