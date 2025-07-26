import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const testSlice = createSlice({
  name: "testSlice",
  initialState,
  reducers: {
    testFunc: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { testFunc } = testSlice.actions;

export default testSlice.reducer;
