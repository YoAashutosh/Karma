import React from "react";
import "./services.css";
import { NavLink } from "react-router-dom";

const Service = () => {
  return (
    <>
      <div>
        <home>
          <div className="container-fluid p-0">
            <div className="service1 row">
              <div className="col-12 mb-5">
                <div className="row">
                  <div className="col-12  text-center">
                    <h4 className="ourService mt-5">Our Services</h4>
                    <h1 className="serviceWe mt-5">Services We Offer</h1>
                  </div>
                </div>
                <div className="row justify-content-center mt-5">
                  <div className="col-6">
                    <span className="text22 ">
                      A construction company typically provides a range of
                      services related to the design, planning, and construction
                      of buildings, infrastructure, and other types of
                      structures. Pre-construction services such as site
                      assessment, feasibility studies, budgeting, and
                      planning.Design and engineering services including
                      architectural design, structural engineering, and
                      mechanical and electrical engineering.
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-5">
                    <div className="row justify-content-end">
                      <div className="col-4">
                        <button className="talk mt-5">
                          Let's Talk
                          <span>
                            <i class="chat ms-3 fa-regular fa-comment"></i>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-1"></div>
                  <div className="col-6">
                    <div className="row justify-content-start">
                      <div className="col-4 d-flex">
                        <NavLink
                          className="check nav-link text-dark mt-5"
                          to="/project"
                        >
                          Check our Projects
                        </NavLink>
                        <NavLink className="mt-1" to="/project">
                          <span className="mt-5">
                            <i class="right fa-solid fa-arrow-right mt-5 ms-3"></i>
                          </span>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="row mt-5">
                  <div className="col-1"></div>
                  <div className="col-2 ms-3">
                    <h4 className="ourService mt-5">Our Process</h4>
                  </div>
                </div>
                <div className="row">
                  <div className="col-1"></div>
                  <div className="col-4 ms-3">
                    <h1 className="serviceWe mt-5">
                      Our Working Process help you to get the best from our team
                      skill
                    </h1>
                  </div>
                  <div className="col-1"></div>
                  <div className="col-5 ps-3 my-5">
                    <span className="text22 mt-5">
                      At the outset, our team will consult with the client to
                      determine their needs, goals, and budget for the project.
                      our team will then create a detailed plan and design that
                      takes into account the client's requirements and goals.
                      This includes architectural and engineering design, as
                      well as material selection and cost estimation.
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12 mb-5">
                <div className="row mt-5">
                  <div className="col-2"></div>
                  <div className="ps-5 col-4 d-flex align-items-center">
                    <div className="row mt-4 ">
                      <div className="col-12 text-center">
                        <span>
                          <i class="drip fa-solid fa-fill-drip"></i>
                        </span>
                        <h5 className="mt-3">The best Color</h5>
                        <span>We choose the right color</span>
                        <span> for your project</span>
                      </div>
                    </div>
                  </div>
                  <div className="ps-5 col-6 d-flex align-items-center">
                    <div className="row mt-4 ">
                      <div className="col-12 text-center">
                        <span>
                          <i class="drip1 bi bi-stickies-fill"></i>
                        </span>
                        <h5 className="mt-2">The best Note taker</h5>
                        <span>We are the very best for note</span>
                        <span> taking about expenses</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-2"></div>
                  <div className="ps-5 col-4 mt-5 ms-5 d-flex align-items-center">
                    <div className="row mt-4 ">
                      <div className="col-12 text-center">
                        <span>
                          <i class="drip fa-solid fa-link"></i>
                        </span>
                        <h5 className="mt-3">The best Link</h5>
                        <span>We have the very best</span>
                        <span> links</span>
                      </div>
                    </div>
                  </div>
                  <div className="ps-5 col-4 mt-5 d-flex align-items-center">
                    <div className="row mt-4 ">
                      <div className="col-12 text-center">
                        <span>
                          <i class="drip1 bi bi-shield-lock-fill"></i>
                        </span>
                        <h5 className="mt-2">The safest Project</h5>
                        <span>We have the safest ideas &</span>
                        <span> safe completion</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 mt-5 mb-5">
                <div className="row mt-5">
                  <div className="col-1"></div>
                  <div className="col-4 ms-3">
                    <h4 className="ourService mt-5">Our Services</h4>
                    <h2 className="money mt-4 mb-5">
                      Saving money, Saving time
                    </h2>
                    <span className="text22 mt-5">
                      Throughout the project, our team will monitor progress and
                      provide regular reports to the client to ensure that they
                      are informed about the project's status.
                    </span>
                  </div>
                  <div className="col-6 d-flex justify-content-center ms-5">
                    <div className="ms-5 hand"></div>
                  </div>
                  <div className="col-6"></div>
                  <div className="col-3 mt-4 text-end">
                    <span>
                      <i class="arrow fa-solid fa-circle-left"></i>
                    </span>
                  </div>
                  <div className="col-3 mt-4">
                    <span>
                      <i class="arrow fa-solid fa-circle-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </home>
      </div>
    </>
  );
};
export default Service;
