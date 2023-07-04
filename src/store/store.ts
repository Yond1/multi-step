import { configureStore } from "@reduxjs/toolkit";
import inputReducer from "./reduxSlices/InputSlice/inputSlice";
import PageNumberReducer from "./reduxSlices/PageNumberSlice/PageNumberSlice";
import StepDoneReducer from "./reduxSlices/StepDoneSlice/StepDoneSlice";
import ClientInfoReducer from "./reduxSlices/ClientInfoSlice/ClientInfoSlice";

export const store = configureStore({
  reducer: {
    input: inputReducer,
    pageNumber: PageNumberReducer,
    stepDone: StepDoneReducer,
    clientInfo: ClientInfoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
