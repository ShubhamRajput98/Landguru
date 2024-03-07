import React from "react";

export const Jackpots = () => {
  return (
    <div className="py-10">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="d-flex flex-wrap gap-5 justify-content-center justify-content-xl-end">
              <div>
                <div
                  className="jackpot-card d-flex flex-column justify-content-center align-items-center"
                  style={{
                    width: "220px",
                    height: "250px",
                    background: "white",
                    boxShadow: "0 0 10px #0c09681c",
                    textAlign: "center",
                    borderRadius: "5px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "72px",
                      color: "#EF9E48",
                    }}
                  >
                    80K+
                  </h3>
                  <p style={{ fontSize: "18px", color: "#0F2137" }}>
                    We have more than <br /> students
                  </p>
                </div>

                <div
                  className="jackpot-card mt-5 d-flex flex-column justify-content-center align-items-center"
                  style={{
                    width: "220px",
                    height: "250px",
                    background: "white",
                    boxShadow: "0 0 10px #0c09681c",
                    textAlign: "center",
                    borderRadius: "5px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "72px",
                      color: "#FA578E",
                    }}
                  >
                    90K+
                  </h3>
                  <p style={{ fontSize: "18px", color: "#0F2137" }}>
                    Daily updated blog <br />
                    post maintain
                  </p>
                </div>
              </div>

              <div>
                <div
                  className="jackpot-card position-relative top d-flex flex-column justify-content-center align-items-center"
                  style={{
                    width: "220px",
                    height: "250px",
                    background: "white",
                    boxShadow: "0 0 10px #0c09681c",
                    textAlign: "center",
                    borderRadius: "5px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "72px",
                      color: "#FF753A",
                    }}
                  >
                    150+
                  </h3>
                  <p style={{ fontSize: "18px", color: "#0F2137" }}>
                    Free online tutorials <br />
                    videos avaialble
                  </p>
                </div>

                <div
                  className="jackpot-card position-relative top mt-5 d-flex flex-column justify-content-center align-items-center"
                  style={{
                    width: "220px",
                    height: "250px",
                    background: "white",
                    boxShadow: "0 0 10px #0c09681c",
                    textAlign: "center",
                    borderRadius: "5px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "72px",
                      color: "#E682FF",
                    }}
                  >
                    & 3M
                  </h3>
                  <p style={{ fontSize: "18px", color: "#0F2137" }}>
                    Job posted everydays <br /> with qualification
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6">
            <p
              className="text-center text-xl-start pt-5 pt-xl-0"
              style={{
                color: "#EF9E48",
                fontSize: "14px",
                textTransform: "uppercase",
              }}
            >
              Core features
            </p>

            <h3
              className="text-blue text-center text-xl-start"
              style={{ fontSize: "48px" }}
            >
              Smart Jackpots  <br className="d-none d-xl-block" />
              that you may love this anytime & anywhere
            </h3>

            <p
              className="py-3 text-center text-xl-start"
              style={{ color: "#02073E", fontSize: "14px", lineHeight: "38px" }}
            >
              Get your tests delivered at let home collect sample{" "}
              <br className="d-none d-xl-block" /> from the victory of the
              managments that supplies <br className="d-none d-xl-block" /> best
              design system guidelines ever. Get your tests{" "}
              <br className="d-none d-xl-block" /> delivered at let home collect
              sample.
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
  );
};
