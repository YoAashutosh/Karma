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
              <div className="sidebar col-2">
                <div className="row mt-5">
                  <div className=" ms-5 mb-3 col-12">
                    <h2 className="ms-2">Karma</h2>
                  </div>

                  <NavLink
                    className="dash mt-5 mb-4 active"
                    aria-current="page"
                    to="/dashboard"
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
              <div className="content col-10">
                <div className="row">
                  <div className="col-5">
                    <div className="row justify-content-evenly">
                      <div className="mt-5 col-10">
                        <input
                          class="search ps-5 py-3 form-control me-2"
                          type="text"
                          placeholder="Search..."
                          aria-label="Search"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-6 mt-5 d-flex justify-content-end align-items-center">
                    <div className="row">
                      <div className="col-4 ">
                        <i class="icon fa-solid fa-comment me-2"></i>
                      </div>
                      <div className="col-4">
                        <i class="icon fa-solid fa-bell me-2"></i>
                      </div>
                      <div className="col-4">
                        <i class="icon fa-solid fa-user-tie me-2"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <div className="row justify-content-evenly">
                      <div className="col-5">
                        <div class="card mt-5">
                          <div class="card-body">
                            <div className="row">
                              <i class="user mt-3 mb-4 fa-solid fa-users"></i>
                            </div>
                            <h5 class="card-title mb-3">Employees</h5>
                            <p class="card-text">Attendance Percentage: 80%</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-5">
                        <div class="card mt-5">
                          <div class="card-body">
                            <div className="row">
                              <i class="user mt-3 mb-4 fa-solid fa-sack-dollar"></i>
                            </div>
                            <h5 class="card-title mb-3">Earnings</h5>
                            <p class="card-text">Through Bonus: 65%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row justify-content-evenly">
                      <div className="col-11">
                        <div class="card mt-5">
                          <div class="card-body">
                            <h5 class="card-title mt-4 mb-3">
                              Visitor Insights
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row justify-content-evenly">
                      <div className="col-11">
                        <div class="card mt-5">
                          <div class="card-body">
                            <h5 class="card-title mt-4 mb-3">
                              Recent Activity
                            </h5>
                            <div className="col-11 mb-5">
                              <table>
                                <thead>
                                  <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Order Number</th>
                                    <th>Amount</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>1</td>
                                    <td>John</td>
                                    <td>12</td>
                                    <td>$100</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="row justify-content-evenly ">
                      <div className="col-12">
                        <div class="myCard card mt-5">
                          <div class="card-body">
                            <h5 class="card-title mb-3">Employee Record</h5>
                            <div className="row justify-content-center">
                              <div className="col-11 mb-5">
                                <table>
                                  <thead>
                                    <tr>
                                      <th>#</th>
                                      <th>Name</th>
                                      <th>Salary</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>01</td>
                                      <td>Minato</td>
                                      <td>Paid</td>
                                    </tr>
                                    <tr>
                                      <td>02</td>
                                      <td>Naruto</td>
                                      <td>Paid</td>
                                    </tr>
                                    <tr>
                                      <td>03</td>
                                      <td>Madara</td>
                                      <td>Paid</td>
                                    </tr>
                                    <tr>
                                      <td>04</td>
                                      <td>Jiraiya</td>
                                      <td>Paid</td>
                                    </tr>
                                    <tr>
                                      <td>05</td>
                                      <td>Kurama</td>
                                      <td>Paid</td>
                                    </tr>
                                    <tr>
                                      <td>06</td>
                                      <td>Ronaldo</td>
                                      <td>Paid</td>
                                    </tr>
                                    <tr>
                                      <td>07</td>
                                      <td>Mbappe</td>
                                      <td>Paid</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div class="myCard card mt-5">
                          <div class="card-body">
                            <h5 class="card-title mb-3">Employee Progress</h5>
                            <div className="row justify-content-center">
                              <div className="col-11 mb-5">
                                <div className="row">
                                  <div className="col-6">
                                    <span>Last Month</span>
                                    <p className="my-2">$4.087</p>
                                  </div>
                                  <div className="col-6">
                                    <span>Last Month</span>
                                    <p className="my-2">$4.087</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-8 bg-dark"></div>
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
