import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import type { PayloadAction } from "@reduxjs/toolkit";

interface initialStateInfo {
  data: {
    info: object;
    plan: IPlanStore;
    addons: Array<IAddonItem>;
    summary: object;
  };
}

interface IAddonItem {
  id: number;
  title: string;
  substring: string;
  price: number;
  included: boolean;
}

interface IPlanStore {
  title: string;
  price: number;
  priceInterval: string;
}

const initialState: initialStateInfo = {
  data: {
    info: {},
    plan: { priceInterval: "Monthly", title: "Arcade" } as IPlanStore,
    addons: [],
    summary: {},
  },
};

const ClientInfoSlice = createSlice({
  initialState,
  name: "client-info",
  reducers: {
    addInfo(state, action: PayloadAction<object>) {
      state.data = { ...state.data, info: action.payload };
    },
    addPlan(state, action: PayloadAction<IPlanStore>) {
      state.data = { ...state.data, plan: action.payload };
    },
    addAddons(state, action: PayloadAction<Array<IAddonItem>>) {
      state.data = { ...state.data, addons: action.payload };
    },
    confirmSummary(state, action) {
      state.data = { ...state.data, summary: action.payload };
    },
  },
});

export const clientInfoFn = ClientInfoSlice.actions;

export const clientInfo = (state: RootState) => state.clientInfo.data;

export default ClientInfoSlice.reducer;
