import { createSlice } from "@reduxjs/toolkit";

export const user = createSlice({
  name: "userName",
  initialState: "",
  reducers: {
    setGlobalUser: (state, action) => action.payload,
  },
});

export const { setGlobalUser } = user.actions;

export default user.reducer;
