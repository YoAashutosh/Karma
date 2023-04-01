import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";

const sidebar = () => {
  return (
    <>
      <div>
        <sidebar>
          <div className="container-fluid">
            <div className="row">
              <div className="sidebar col-12">
                <div className="row mt-5">
                  <div className="mb-3 col-12 text-center">
                    <h2>Karma</h2>
                  </div>

                  <NavLink
                    className="dash mt-5 mb-4 active"
                    aria-current="page"
                    to="/admin"
                  >
                    <i class="dashHouse ms-4 me-3 fa-solid fa-house"></i>
                    Dashboard
                  </NavLink>
                  <NavLink
                    className="dash mt-4 mb-4"
                    aria-current="page"
                    to="/calendar"
                  >
                    <i class="dashHouse ms-4 me-3 fa-solid fa-calendar"></i>
                    Calendar
                  </NavLink>
                  <NavLink
                    className="dash mt-4 mb-4"
                    aria-current="page"
                    to="/project"
                  >
                    <i class="dashHouse ms-4 me-4 bi bi-kanban-fill"></i>
                    Project
                  </NavLink>
                  <NavLink
                    className="dash mt-4 mb-3"
                    aria-current="page"
                    to="/equipment"
                  >
                    <i class="dashHouse ms-4 me-3 fa-solid fa-gear"></i>
                    Equipments
                  </NavLink>
                  <NavLink
                    className="dash mt-4 mb-3"
                    aria-current="page"
                    to="/logout"
                  >
                    <i class="dashHouse mt-4 ms-4 me-3 fa-solid fa-arrow-right-from-bracket"></i>
                    Logout
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </sidebar>
      </div>
    </>
  );
};

export default sidebar;
