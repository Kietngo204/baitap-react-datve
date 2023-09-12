import { configureStore } from "@reduxjs/toolkit";
import movieTicketReducer from "./redux/slices/movieTickerSlice";

const store = configureStore({
  reducer: {
    movieTicket: movieTicketReducer,
  },
});

export default store;

console.log("Store:", store.getState());
