import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    users: [],
    orders: [],
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload; // 👈 replaces all users
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    addOrder: (state, action) => {
      state.orders.push(action.payload);
    },
  },
});

export const { setUsers, addUser, addOrder } = dataSlice.actions;
export default dataSlice.reducer;
