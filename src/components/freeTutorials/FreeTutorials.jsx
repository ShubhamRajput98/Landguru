import React from "react";
import Image1 from "../../assets/image (1).png";
import Image2 from "../../assets/imagess.png";
import Image3 from "../../assets/image (2).png";
import FiveStar from "../../assets/fivestar.png";
import { IoEye } from "react-icons/io5";

export const FreeTutorials = () => {
  return (
    <div className=" py-7">
      <div className="container free-tutorials">
        <div className="row">
          <div className="col-lg-6">
            <div className="d-flex justify-content-center justify-content-lg-end">
              <div
                style={{
                  border: "1px solid #F3F4F5",
                  borderRadius: "5px",
                  // marginRight: "20px",
                  width: "447px",
                  background: "white",
                }}
              >
                <div className="image">
                  <img
                    src={Image1}
                    style={{ width: "100%", height: "300px" }}
                    alt="image"
                  />
                </div>
                <div className="content p-3">
                  <div className="d-flex gap-2 align-items-center">
                    <img src={FiveStar} alt="stars" />
                    <span style={{ marginTop: "1px", color: "#0F2137" }}>
                      5.0 (392 reviews)
                    </span>
                  </div>
                  <div className="about py-3">
                    <h3
                      className="m-0"
                      style={{
                        color: "#0F2137",
                        fontSize: "20px",
                        lineHeight: "30px",
                      }}
                    >
                      How to work with prototype design with adobe xd featuring
                      tools
                    </h3>
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
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="thousand d-flex p-0 p-lg-5 pt-0 justify-content-center">
              <div className="w-100 w-md-0 bg-white d-flex d-lg-block justify-content-center">
                <div className="pb-5 mt-4 mt-lg-0">
                  <p
                    style={{
                      fontSize: "20px",
                      color: "#EF9E48",
                      textTransform: "uppercase",
                    }}
                    className="text-center text-lg-start"
                  >
                    Free tutorial
                  </p>
                  <h3
                    className="text-center text-lg-start"
                    style={{ fontSize: "33px" }}
                  >
                    More than thousand <br className="d-none d-lg-block" /> of
                    free tutorial upload <br className="d-none d-lg-block" />{" "}
                    every weeks
                  </h3>

                  <p
                    className="text-blue text-center text-lg-start"
                    style={{ lineHeight: "40px" }}
                  >
                    Get your tests delivered at let home collect sample{" "}
                    <br className="d-none d-lg-block" />
                    from the victory of the managments that supplies{" "}
                    <br className="d-none d-lg-block" /> best design system
                    guidelines ever. Get your tests{" "}
                    <br className="d-none d-lg-block" />
                    delivered at let home collect sample.
                  </p>

                  <div className="d-flex justify-content-center justify-content-xl-start">
                    <button
                      style={{
                        color: "#EF9E48",
                        padding: "0.5em",
                        borderRadius: "5px",
                        background: "#ef9e4836",
                        border: "none",
                      }}
                    >
                      Explore details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
