import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebase";

export const getEventsAsync = createAsyncThunk(
  'events/getEventsAsync',
  async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "events"));
    const res = querySnapshot.docs.map((doc) => (doc.data()));
    return res;
  } catch (error) {
    console.log(error);
  }
});

export const eventsSlice = createSlice({
  name: "eventsData",
  initialState: {
    data: [],
    error: "",
  },
  reducers: {},
  extraReducers: {
    [getEventsAsync.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
    [getEventsAsync.rejected]: (state, action) => {
      state.error = action.error.message;
    },
  },
});

// Action creators are generated for each case reducer function

export default eventsSlice.reducer;
