import React from "react";
import SeatItem from "./SeatItem";
import { useSelector } from "react-redux";
export default function SeatListColumn({ seatList }) {
  const { selectedSeats } = useSelector((state) => {
    return state.movieTicket;
  });
  return (
    <div className="row">
      {seatList.map((seat) => {
        const isSelected = selectedSeats.find(
          (item) => item.soGhe === seat.soGhe
        );
        return (
          <SeatItem seat={seat} isSelected={!!isSelected} key={seat.soGhe} />
        );
      })}
    </div>
  );
}
