const { createSlice } = require("@reduxjs/toolkit");
const { cakeActions } = require("../cake/cakeSlice");

const initialState = {
  numOfIcecream: 10,
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
    builder.addCase(cakeActions.ordered, (state) => {
      state.numOfIcecream--;
    });
  },
});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions; // Corrected export for cakeActions
