import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeSeat } from "../redux/slices/movieTickerSlice";

export default function Tickets() {
  const { selectedSeats, totalPrice } = useSelector((state) => {
    return state.movieTicket;
  });

  const dispatch = useDispatch();

  const handleRemove = (soGhe) => {
    dispatch(removeSeat(soGhe));
  };
  return (
    <div className="d-flex justify-content-center flex-column text-center ps-5">
      <h3 style={{ color: "white", marginBottom: "40px" }}>
        Danh sách ghế bạn chọn
      </h3>
      <div className="d-flex align-items-center mb-1">
        <div className="gheDuocChon"></div>
        <div style={{ fontSize: "20px", marginLeft: "10px" }}>Ghế đã đặt</div>
      </div>
      <div className="d-flex align-items-center mb-1">
        <div className="gheDangChon"></div>
        <div style={{ fontSize: "20px", marginLeft: "10px" }}>
          Ghế đang chọn
        </div>
      </div>
      <div className="d-flex align-items-center mb-1">
        <div className="ghe" style={{ backgroundColor: "white" }}></div>
        <div
          style={{
            fontSize: "20px",
            marginLeft: "10px",
          }}
        >
          Ghế chưa đặt
        </div>
      </div>
      <table
        className="text-start me-3"
        style={{ backgroundColor: "transparent" }}
      >
        <thead>
          <tr>
            <th style={{ width: "20%" }}>Số ghế</th>
            <th style={{ width: "60%" }}>Giá</th>
            <th>Huỷ</th>
          </tr>
        </thead>
        <tbody>
          {selectedSeats.map((item) => {
            return (
              <tr
                key={item.soGhe}
                style={{ color: "orange", fontWeight: "bold" }}
              >
                <td>{item.soGhe}</td>
                <td>{item.gia}</td>
                <td>
                  <button
                    className="btn btn-outline-danger my-2"
                    onClick={() => {
                      handleRemove(item.soGhe);
                    }}
                  >
                    X
                  </button>
                </td>
              </tr>
            );
          })}

          <tr>
            <td>Tổng tiền</td>
            <td style={{ color: "orange", fontWeight: "bold" }}>
              {totalPrice}
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
