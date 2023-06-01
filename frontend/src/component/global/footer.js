import React from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const location = useLocation();
  if (
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/admin" ||
    location.pathname === "/form" ||
    location.pathname === "/admin/product" ||
    location.pathname === "/calendar" ||
    location.pathname === "/tenderForm" ||
    location.pathname === "/notes" ||
    location.pathname === "/projectForm" ||
    location.pathname === "/tender"
  ) {
    return null;
  }

  return (
    <>
      <div>
        <footer
          style={{
            bottom: 0,
            position: "bottom",
          }}
        >
          <div className="container-fluid">
            <div className="row mt-5">
              <div className="col-2 d-flex justify-content-center">
                <NavLink className="proj1" aria-current="page" to="/project">
                  PROJECT
                </NavLink>
              </div>
              <div className="col-2 d-flex justify-content-center">
                <NavLink className="proj1" aria-current="page" to="/about">
                  ABOUT US
                </NavLink>
              </div>
              <div className="col-4 d-flex justify-content-center">
                <NavLink className="karma" aria-current="page" to="/">
                  KARMA
                </NavLink>
              </div>
              <div className="col-2 d-flex justify-content-center">
                <NavLink className="proj1" aria-current="page" to="/news">
                  NEWS
                </NavLink>
              </div>
              <div className="col-2 d-flex justify-content-center">
                <NavLink className="proj1" aria-current="page" to="/service">
                  SERVICES
                </NavLink>
              </div>
              <div className="copy col-6 mt-5 text-end">
                <span>Copyright Act 2023 &copy;</span>
              </div>
              <div className="copy col-6 mt-5 text-start">
                <span>Karma Constructions</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
