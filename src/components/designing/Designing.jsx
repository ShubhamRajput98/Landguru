import React, { useState } from "react";
import Play from "../../assets/play-button.png";
import FiveStar from "../../assets/fivestar.png";
import ArrowDown from "../../assets/arrow-down.png";
import Check from "../../assets/check-mark.png";
import { IoEye } from "react-icons/io5";

export const Designing = () => {
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
            Quality features
          </p>
          <h3 style={{ fontSize: "33px" }}>Popular Designing Course</h3>
        </div>

        <DesigningCard
          heading={
            "Professional graphic design tutorial full course with exercise file"
          }
        />

        <DesigningCard
          heading={"Become ultimate photoshop expert within 30 days"}
        />

        <DesigningCard
          heading={"After effects animation tutorial with photoshop documents"}
        />

        <DesigningCard heading={"Adobe illustrator vector art design mockup"} />
      </div>
    </div>
  );
};

const DesigningCard = ({ heading }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="designing-cards mt-2">
      <div
        className="course-card d-flex  gap-4  px-5 py-4"
        style={{ border: "1px solid #f5f4f4", borderRadius: "10px" }}
      >
        <div
          className="plya d-flex align-items-center justify-content-center"
          style={{
            height: "90px",
            width: "90px",
            borderRadius: "50%",
            background: "#ffa50017",
          }}
        >
          <img src={Play} alt="play" />
        </div>

        {/* content */}

        <div className="content  w-100">
          <div className="content-box d-flex gap-2 gap-lg-5 justify-content-between align-items-center">
            <div>
              <div className="d-flex flex-wrap gap-2 align-items-center">
                <div className="d-flex gap-2 align-items-center">
                  <img src={FiveStar} alt="stars" />
                  <span style={{ marginTop: "1px", color: "#0F2137" }}>
                    5.0 (392 reviews)
                  </span>
                </div>

                <div className="eye">
                  <div className="d-flex gap-2 align-items-center">
                    <IoEye color="#B5C3CB" />
                    <span style={{ color: "#B5C3CB" }}>
                      2,538 students watched
                    </span>
                  </div>
                </div>
              </div>

              <h3
                className="py-3"
                style={{ fontSize: "22px", color: "#0F2137" }}
              >
                {heading}
              </h3>

              <p style={{ color: "#5D646D" }}>
                Get your tutorials delivered at let home collect sample from the
                victory of the managments.
              </p>
            </div>

            <div
              className="d-flex gap-2 align-items-center mb-3 mb-lg-0"
              onClick={() => setToggle(!toggle)}
            >
              <button
                style={{
                  border: "none",
                  borderRadius: "10px",
                  background: "#3FDBB1",
                  color: "white",
                  padding: "0.8em",
                  width: "195px",
                }}
                className="d-flex flex-nowrap gap-2 align-items-center"
              >
                <span>7 Video Classes</span>
                <span>|</span>
                <span>4 hrs</span>
              </button>

              <img
                src={ArrowDown}
                style={{
                  width: "10px",
                  height: "7px",
                }}
                alt="arrow"
              />
            </div>
          </div>

          {toggle && (
            <div className="w-100">
              <div className="row">
                <div className="col-md-6">
                  <div className="d-flex align-items-center gap-2">
                    <img
                      style={{ width: "20px", height: "20px" }}
                      src={Check}
                      alt="check"
                    />
                    <p className="text-blue m-0">
                      How to reduce file pixel dimentions without loosing
                      quality
                    </p>
                  </div>
                  <div className="d-flex align-items-center mt-3 gap-2">
                    <img
                      style={{ width: "20px", height: "20px" }}
                      src={Check}
                      alt="check"
                    />
                    <p className="text-blue m-0">
                      Create vector file from restarize layer styles
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center gap-2">
                    <img
                      style={{ width: "20px", height: "20px" }}
                      src={Check}
                      alt="check"
                    />
                    <p className="text-blue m-0">
                      How to make logo pixel perfects with different extension
                    </p>
                  </div>
                  <div className="d-flex align-items-center mt-3 gap-2">
                    <img
                      style={{ width: "20px", height: "20px" }}
                      src={Check}
                      alt="check"
                    />
                    <p className="text-blue m-0">
                      Make color gradient with photoshop build-in tools
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
