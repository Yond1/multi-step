import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

const initialState = {
  PersonalInfo: false,
  SelectPlan: false,
  Addons: false,
};

const StepDoneSlice = createSlice({
  initialState,
  name: "step",
  reducers: {
    donePersonalInfo(state, action) {
      state.PersonalInfo = action.payload;
    },
    doneSelectPlan(state, action) {
      state.SelectPlan = action.payload;
    },
    doneAddons(state, action) {
      state.Addons = action.payload;
    },
  },
});

export const stepDone = StepDoneSlice.actions;

export const selectCount = (state: RootState) => state.stepDone;

export default StepDoneSlice.reducer;
