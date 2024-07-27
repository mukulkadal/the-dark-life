import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "navbar",
  initialState: {
    isOpen: false
  },
  reducers: {

    toggleNavbar: (state) => {
        state.isOpen = !state.isOpen
    }

  },
});

export const {toggleNavbar} = navSlice.actions;
export default navSlice.reducer;
