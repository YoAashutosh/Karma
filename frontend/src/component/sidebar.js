import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { logout } from "../actions/userAction";
import { toast } from "react-toastify";

const Sidebar = ({ history }) => {
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated === false) {
      history.push("/");
    }
  }, [history, isAuthenticated]);

  const dispatch = useDispatch();

  function logoutUser() {
    dispatch(logout());
    toast.success("Logout Successfully");
    history.push("/");
  }
  return (
    <>
      <div>
        <sidebar>
          <div className="container-fluid">
            <div className="row">
              <div className="sidebar col-12">
                <div className="row mt-5">
                  <div className="mb-3 col-12 text-center">
                    <Link
                      to="/"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <h2>Karma</h2>
                    </Link>
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
                    to="/projectForm"
                  >
                    <i class="dashHouse ms-4 me-4 bi bi-kanban-fill"></i>
                    Project
                  </NavLink>
                  <NavLink
                    className="dash mt-4 mb-3"
                    aria-current="page"
                    to="/admin/product"
                  >
                    <i class="dashHouse ms-4 me-3 fa-solid fa-gear"></i>
                    Equipment
                  </NavLink>
                  <NavLink
                    className="dash mt-4 mb-3"
                    aria-current="page"
                    to="/tender"
                  >
                    <i class="dashHouse ms-4 me-3 fa-solid fa-table"></i>
                    Tender Table
                  </NavLink>
                  <NavLink
                    className="dash mt-4 mb-3"
                    aria-current="page"
                    to="/Allproject"
                  >
                    <i class="dashHouse ms-4 me-3 fa-solid fa-table"></i>
                    All Project
                  </NavLink>
                  <NavLink
                    onClick={logoutUser}
                    className="dash mt-3 mb-3"
                    aria-current="page"
                    to="/"
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

export default Sidebar;
