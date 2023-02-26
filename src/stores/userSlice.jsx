import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../utils/firebase';

export const getUserAsync = createAsyncThunk(
  'user/getUserAsync',
  async () => {
  try {
    const querySnapshot = await getDoc(doc(db, "users", auth.currentUser.uid));
    const res = querySnapshot.data()
    return res;
  } catch (error) {
    console.log(error);
  }
});

export const userSlice = createSlice({
  name: "userData",
  initialState: {
    data: {},
    error: "",
  },
  reducers: {},
  extraReducers: {
    [getUserAsync.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
    [getUserAsync.rejected]: (state, action) => {
      state.error = action.error.message;
    },
  },
});

// Action creators are generated for each case reducer function

export default userSlice.reducer;
