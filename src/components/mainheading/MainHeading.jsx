import React from "react";
import Stars from "../../assets/topstars.png";
import Paypal from "../../assets/paypal.png";
import Google from "../../assets/google.png";
import Dropbox from "../../assets/Dropbox_logo_2017.png";
import Woman from "../../assets/woman.png";
import Pattern from "../../assets/pattern.png";
import { IoSearchOutline } from "react-icons/io5";

export const MainHeading = () => {
  return (
    <div className="pt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 py-7">
            {/* starts */}
            <div className="d-flex align-items-center gap-2">
              <img
                src={Stars}
                style={{ width: "86px", height: "18px" }}
                alt="stars"
              />
              <span>Trused by over 4,332 students</span>
            </div>

            {/* heading */}

            <div className="main-heading py-3">
              <h1 className="text-blue" style={{ fontSize: "85px" }}>
                Learn Design <br /> with Nia Matos
              </h1>
            </div>

            {/* paragraph */}

            <div className="paragraph">
              <p
                className="text-blue"
                style={{ fontSize: "18px", lineHeight: "50px" }}
              >
                Get your blood tests delivered at let home collect sample <br />
                from the victory of the managments that supplies best <br />
                design system guidelines ever.
              </p>
            </div>

            {/* input box */}

            <div className="input-box pt-3 position-relative">
              <input
                className="search-input"
                type="text"
                placeholder="Search Course Name"
              />

              <div className="search-icon">
                <IoSearchOutline size={20} />
              </div>
            </div>

            {/* sorted by */}
            <div className="sorted py-5">
              <div className="d-flex flex-wrap gap-4 align-items-center">
                <span>Sponsored by:</span>

                <div className="d-flex flex-wrap gap-4 justify-content-center align-items-center">
                  <img src={Paypal} alt="paypal" />
                  <img src={Google} alt="google" />
                  <img src={Dropbox} alt="dropbox" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="image pt-4 position-relative">
              <img src={Woman} className="woman-image w-100" alt="woman" />
              <img className="pattern" src={Pattern} alt="pattern" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
