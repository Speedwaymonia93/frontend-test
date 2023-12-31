import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
});

export default appSlice.reducer;
