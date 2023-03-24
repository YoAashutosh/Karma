import React from "react";
import Sidebar from "./sidebar";
import "./sidebar.css";

const admin = () => {
  return (
    <>
      <Sidebar />
      <div>
        <admin>
          <div className="container-fluid">
            <div className="row">
              <div className="sidebar col-2"></div>
            </div>
          </div>
        </admin>
      </div>
    </>
  );
};

export default admin;
