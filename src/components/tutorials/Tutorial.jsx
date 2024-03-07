import React from "react";
import Slider from "react-slick";
import Image1 from "../../assets/image (1).png";
import Image2 from "../../assets/imagess.png";
import Image3 from "../../assets/image (2).png";
import FiveStar from "../../assets/fivestar.png";
import { IoEye } from "react-icons/io5";

export const Tutorial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-5 mt-0 mt-xl-5">
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
          <h3 style={{ fontSize: "33px" }}>Tutorials that people love most</h3>
        </div>

        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <div
                style={{
                  border: "1px solid #F3F4F5",
                  borderRadius: "5px",
                  // marginRight: "20px",
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
            <div>
              <div
                style={{
                  border: "1px solid #F3F4F5",
                  borderRadius: "5px",
                  // marginRight: "20px",
                }}
              >
                <div className="image">
                  <img
                    src={Image2}
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
            <div>
              <div
                style={{
                  border: "1px solid #F3F4F5",
                  borderRadius: "5px",
                  // marginRight: "20px",
                }}
              >
                <div className="image">
                  <img
                    src={Image3}
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
          </Slider>
        </div>
      </div>
    </div>
  );
};
