import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  nameValue: "",
  emailValue: "",
  phoneValue: "",
};

const inputSlice = createSlice({
  initialState,
  name: "input",
  reducers: {
    changedName(state, action: PayloadAction<string>) {
      state.nameValue = action.payload;
    },
    changedEmail(state, action: PayloadAction<string>) {
      state.emailValue = action.payload;
    },
    changedPhone(state, action: PayloadAction<string>) {
      state.phoneValue = action.payload;
    },
  },
});

export const changed = inputSlice.actions;

export const selectCount = (state: RootState) => state.input;

export default inputSlice.reducer;
