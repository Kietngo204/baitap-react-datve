import React from "react";
import data from "./data.json";
import SeatListRow from "./SeatListRow";
import Tickets from "./Tickets";
export default function MovieTicket() {
  return (
    <div
      className="bookingMovie"
      style={{
        backgroundImage: `url('./img/bgmovie.jpg')`,
        width: "100vw",
        height: "100vh",
        backgroundSize: "cover",
        position: "relative",
        color: "white",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "0",
          right: "0",
          width: "100%",
          height: "100%",
          backgroundColor: "#00000099",
        }}
      ></div>
      <div
        className="container pt-3"
        style={{
          position: "absolute",
          top: "0",
          right: "0",
          width: "100%",
          height: "100%",
        }}
      >
        <div className="row">
          <div className="col-md-7">
            <SeatListRow data={data} />
          </div>
          <div className="col-md-5">
            <Tickets />
          </div>
        </div>
      </div>
    </div>
  );
}
