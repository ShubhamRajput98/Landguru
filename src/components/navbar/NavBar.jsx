import React, { useState } from "react";
import Logo from "../../assets/Combined shape 16724.png";
import Try from "../../assets/tryforfree.png";
import { GiHamburgerMenu } from "react-icons/gi";

export const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="nav py-3">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="logo d-flex gap-2 justify-content-center align-items-center">
            <img src={Logo} alt="logo" />{" "}
            <span className="text-blue fw-bold" style={{ fontSize: "20px" }}>
              Landguru
            </span>
          </div>
          <div className="links">
            <ul
              className={`nav-list d-flex p-3 p-md-0 m-0 ${toggle && "active"}`}
            >
              <li className="px-4 py-2 py-md-0 cursor-pointer">Home</li>
              <li className="px-4 py-2 py-md-0 cursor-pointer">Adversite</li>
              <li className="px-4 py-2 py-md-0 cursor-pointer">Supports</li>
              <li className="px-4 py-2 py-md-0 cursor-pointer">Contact</li>
            </ul>
          </div>
          <div className="tag">
            <img src={Try} alt="try for free" />
          </div>

          <div
            onClick={() => setToggle(!toggle)}
            className="hamburgur d-block d-md-none"
          >
            <GiHamburgerMenu size={30} />
          </div>
        </div>
      </div>
    </nav>
  );
};
