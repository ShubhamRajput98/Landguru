import React from "react";
import UpArrow from "../../assets/arrow.png";
import DownArrow from "../../assets/arrow (1).png";
export const Works = () => {
  return (
    <div
      style={{ background: "linear-gradient(180deg,#EBF9FF,#F6F6FF)" }}
      className="works"
    >
      <div className="container">
        <div className="text-center pb-5">
          <p
            style={{
              fontSize: "20px",
              color: "#EF9E48",
              textTransform: "uppercase",
            }}
          >
            Whats the function
          </p>
          <h3 style={{ fontSize: "33px" }}>Let’s see how it works</h3>
        </div>

        <div className="row">
          <Cards
            count={"01"}
            UpArrow={UpArrow}
            heading={"Set disbursement Instructions"}
            subheading={
              "Get your blood tests delivered at home collect a sample from the your blood tests."
            }
          />
          <Cards
            count={"02"}
            DownArrow={DownArrow}
            heading={"Assembly retrieves funds from your account"}
            subheading={
              "Get your blood tests delivered at home collect a sample from the your blood tests."
            }
          />
          <Cards
            count={"03"}
            UpArrow={UpArrow}
            heading={"Assembly initiates disbursement"}
            subheading={
              "Get your blood tests delivered at home collect a sample from the your blood tests."
            }
          />
          <Cards
            count={"04"}
            heading={"Customer receives funds payment"}
            subheading={
              "Get your blood tests delivered at home collect a sample from the your blood tests."
            }
          />
        </div>
      </div>
    </div>
  );
};

const Cards = ({ count, UpArrow, DownArrow, heading, subheading }) => {
  return (
    <div className="col-lg-3">
      <div className="d-flex gap-3 align-items-center">
        <div
          style={{
            width: "72px",
            height: "72px",
            borderRadius: "50%",
            fontSize: "32px",
          }}
          className="number d-flex justify-content-center align-items-center bg-white"
        >
          {count}
        </div>
        {count != 4 && (
          <img
            style={{ height: "45px", top: `${UpArrow ? "-10px" : "10px"}` }}
            className="arrow-image position-relative"
            src={UpArrow ? UpArrow : DownArrow}
            alt="uparrow"
          />
        )}
      </div>

      <h3
        style={{ fontSize: "20px", lineHeight: "35px", width: "250px" }}
        className="my-4"
      >
        {heading}
      </h3>

      <p style={{ lineHeight: "26px" }} className="pe-5">
        {subheading}
      </p>
    </div>
  );
};
