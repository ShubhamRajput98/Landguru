import React, { useState } from "react";
import Right from "../../assets/Combined shape 16072.png";
import Close from "../../assets/close (1).png";

export const Prising = () => {
  const [toggle, setToggle] = useState("Monthly");

  return (
    <div>
      <div className="container">
        <div className="text-center pb-5">
          <p
            style={{
              fontSize: "20px",
              color: "#EF9E48",
              textTransform: "uppercase",
            }}
          >
            Pricing Plan
          </p>
          <h3 style={{ fontSize: "33px" }}>Choose your pricing policy</h3>
        </div>

        <div className="d-flex justify-content-center align-items-center">
          <div
            style={{ background: "#F7F8FB" }}
            className="plans-switch d-flex justify-content-center align-items-center p-2"
          >
            <button
              style={{
                background: `${toggle === "Monthly" ? "white" : "transparent"}`,
              }}
              className="border-0 p-2"
              onClick={() => setToggle("Monthly")}
            >
              Monthly Plan
            </button>

            <button
              style={{
                background: `${toggle === "Annual" ? "white" : "transparent"}`,
              }}
              className="border-0 p-2"
              onClick={() => setToggle("Annual")}
            >
              Annual Plan
            </button>
          </div>
        </div>

        <div className="prising-cards py-5">
          <div className="d-flex flex-wrap gap-4 justify-content-center align-items-center">
            <Cards
              recommended={false}
              heading={"Free Plan"}
              subheading={"For Small teams or office"}
              prising={false}
              allTrue={false}
            />
            <Cards
              recommended={true}
              heading={"Premium"}
              subheading={"For startup enterprise"}
              prising={true}
              allTrue={true}
              borderColor={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Cards = ({
  recommended,
  heading,
  subheading,
  prising,
  allTrue,
  borderColor,
}) => {
  return (
    <div
      style={{
        border: `${borderColor ? "2.5px solid #3FDBB1" : "1px solid #F3F4F5"}`,
        borderRadius: "10px",
        width: "480px",
      }}
      className="card-one p-4 pb-0"
    >
      <p style={{ height: "20px" }}>
        {recommended && (
          <span
            style={{
              background: "#EF9E48",
              color: "white",
              borderRadius: "5px",
              padding: "0.5em",
            }}
          >
            Recommended
          </span>
        )}
      </p>

      <div className="d-flex justify-content-between">
        <div>
          <h3
            className="text-blue"
            style={{ fontSize: "22px", lineHeight: "28.64px" }}
          >
            {heading}
          </h3>

          <p style={{ color: "#343D48" }}>{subheading}</p>
        </div>

        {prising && (
          <div>
            <p className="m-0 text-end" style={{ color: "#343D48" }}>
              Starting from
            </p>
            <h3 style={{ fontSize: "28px", color: "#25CB9E" }}>
              49.99/<span style={{ fontSize: "22px" }}>mo</span>
            </h3>
          </div>
        )}
      </div>

      <div className="content py-5">
        <div className="d-flex gap-2 my-2">
          <img
            style={{ height: "20px", width: "20px", marginTop: "8px" }}
            src={Right}
            alt="right"
          />
          <p>
            Ultimate access to all course, exercises <br /> and assessments
          </p>
        </div>

        <div className="d-flex gap-2 my-2">
          <img
            style={{ height: "20px", width: "20px", marginTop: "8px" }}
            src={Right}
            alt="right"
          />
          <p>
            Free acess for all kind of exercise <br /> corrections with
            downloads.
          </p>
        </div>

        <div className="d-flex gap-2 my-2">
          <img
            style={{ height: "20px", width: "20px", marginTop: "8px" }}
            src={Right}
            alt="right"
          />
          <p>
            Total assessment corrections with free <br /> download access system
          </p>
        </div>

        <div className="d-flex gap-2 my-2">
          <img
            style={{ height: "20px", width: "20px", marginTop: "8px" }}
            src={allTrue ? Right : Close}
            alt="right"
          />
          <p>
            Unlimited download of courses on the <br /> mobile app contents
          </p>
        </div>

        <div className="d-flex gap-2 my-2">
          <img
            style={{ height: "20px", width: "20px", marginTop: "8px" }}
            src={allTrue ? Right : Close}
            alt="right"
          />
          <p>
            Download and print courses and <br /> exercises in PDF
          </p>
        </div>

        <div className="d-flex justify-content-center mt-5">
          <button
            style={{
              color: "#EF9E48",
              padding: "0.5em 2em",
              borderRadius: "5px",
              background: "#ef9e4836",
              border: "none",
            }}
          >
            Start free trail
          </button>
        </div>
      </div>
    </div>
  );
};
