import { createSlice } from "@reduxjs/toolkit";
import { ordered as cakeOrderd } from "../cake/cakeSlice";

const initialState = {
  numOfIcecream: 20,
};

const iceCreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIcecream--;
    },
    restocked: (state, action) => {
      state.numOfIcecream += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cakeOrderd, (state) => {
      state.numOfIcecream--;
    });
  },
});

export default iceCreamSlice.reducer;
export const { ordered, restocked } = iceCreamSlice.actions; // Corrected export for cakeActions
