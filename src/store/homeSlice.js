import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenPopup: false,
};

export const homeSlice = createSlice({
  name: "homeSlice",
  initialState,
  reducers: {
    setOpenPopup: (state, action) => {
      state.isOpenPopup = action.payload;
    },
  },
});

export const { setOpenPopup } = homeSlice.actions;

export default homeSlice.reducer;
