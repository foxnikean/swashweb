import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import eventsReducer from "./eventsSlice";
export default configureStore({
  reducer: { userData: userReducer, eventsData: eventsReducer },
});
