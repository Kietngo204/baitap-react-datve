import { createSlice } from "@reduxjs/toolkit";

const movieTicketSlice = createSlice({
  name: "movieTicket",
  initialState: {
    selectedSeats: [],
    totalPrice: 0,
  },
  reducers: {
    selectSeat: (state, action) => {
      const { isSelected, ...seat } = action.payload;
      if (isSelected) {
        const selectedSeats = [...state.selectedSeats, seat];
        const totalPrice = state.totalPrice + seat.gia;
        return { ...state, selectedSeats, totalPrice };
      }
      const selectedSeats = state.selectedSeats.filter(
        (item) => item.soGhe !== seat.soGhe
      );
      const totalPrice = state.totalPrice - seat.gia;
      return { ...state, selectedSeats, totalPrice };
    },
    removeSeat: (state, action) => {
      const soGhe = action.payload;
      const selectedSeats = state.selectedSeats.filter(
        (item) => item.soGhe !== soGhe
      );
      const totalPrice = selectedSeats.reduce((result, item) => {
        return result + item.gia;
      }, 0);
      return { ...state, selectedSeats, totalPrice };
    },
  },
});

export const { selectSeat, removeSeat } = movieTicketSlice.actions;

export default movieTicketSlice.reducer;
