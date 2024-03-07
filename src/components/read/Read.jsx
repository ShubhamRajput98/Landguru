import React from "react";

export const Read = () => {
  return (
    <div>
      <div
        className="container py-7"
        style={{ borderBottom: "1px solid #E5ECF4" }}
      >
        <h2
          className="text-center"
          style={{ fontSize: "50px", lineHeight: "65px" }}
        >
          Ready to learn design <br />
          with Nia Matos
        </h2>

        <div className="d-flex justify-content-center my-5">
          <button
            style={{
              color: "#EF9E48",
              padding: "0.5em",
              borderRadius: "5px",
              background: "#ef9e4836",
              border: "none",
            }}
          >
            Start Learning Today
          </button>
        </div>
      </div>
    </div>
  );
};
