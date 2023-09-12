import React from "react";
import { useDispatch } from "react-redux";
import { selectSeat } from "../redux/slices/movieTickerSlice";

export default function SeatItem({ seat, isSelected }) {
  const dispatch = useDispatch();
  let classes = "";
  let cursor1 = "";

  const handleSelect = () => {
    dispatch(selectSeat({ ...seat, isSelected: !isSelected }));
  };

  if (typeof seat.soGhe === "number") {
    classes = "col mb-3 text-center stt";
    cursor1 = "text";
  } else if (isSelected) {
    classes = "col text-center gheDangChon ";
  } else if (seat.daDat) {
    classes = "col text-center gheDuocChon";
  } else {
    classes = "col ghe";
    cursor1 = "pointer";
  }
  return (
    <button
      key={seat.soGhe}
      className={classes}
      style={{
        cursor: `${cursor1}`,
      }}
      onClick={() => {
        handleSelect();
      }}
    >
      {seat.soGhe}
    </button>
  );
}
