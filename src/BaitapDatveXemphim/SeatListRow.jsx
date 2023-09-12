import React from "react";

import SeatListColumn from "./SeatListColumn";

export default function SeatList({ data }) {
  return (
    <div className="d-flex justify-content-center flex-column text-center">
      <h3 style={{ color: "#fcc008" }}>ĐẶT VÉ XEM PHIM CYBERLEARN.VN</h3>
      <h5>Màn hình</h5>
      <div className="screen"></div>
      <div className="me-3">
        {data.map((seats) => {
          return (
            <div key={seats.hang} className="row">
              <div className="col-1 p-0" style={{ color: "#ffc26a" }}>
                {seats.hang}
              </div>
              <div className="col-11 pe-3">
                <SeatListColumn seatList={seats.danhSachGhe} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
