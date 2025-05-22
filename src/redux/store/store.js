import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../slice/surveyResult";
export const store = configureStore({
  reducer: {
    form: formReducer,
  },
});
