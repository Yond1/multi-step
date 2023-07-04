import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

const initialState = {
  currentPage: 1,
};

const PageNumberSlice = createSlice({
  initialState,
  name: "step",
  reducers: {
    increment(state) {
      state.currentPage += 1;
    },
    decrement(state) {
      state.currentPage -= 1;
    },
    changedForPlan(state) {
      state.currentPage = 2;
    },
  },
});

export const stepFn = PageNumberSlice.actions;

export const selectCount = (state: RootState) => state.pageNumber;

export default PageNumberSlice.reducer;
