import React from "react";
import "./aboutUs.css";
import about1 from "../images/aboutHome.jpg";
import work from "../images/howWork.jpg";
import avatar1 from "../images/review.jpg";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <>
      <div>
        {/* ######## Start Home Section ######## */}
        <home>
          <div className="container-fluid">
            <div className="row">
              <div className="home col-12 mb-5 d-flex align-items-center justify-content-center bg-dark">
                <div className="row text-white text-center">
                  <div className="col-12 ">
                    <h1 className="abKarma">About Karma</h1>
                  </div>
                  <div className="col-12">
                    <span className="motto">
                      Karma is helping you to construct with happiness
                    </span>
                  </div>
                  <div className="col-12  mt-5">
                    <button className="learn">
                      <a
                        href="https://safetyculture.com/topics/construction-management/"
                        style={{ textDecoration: "none" }}
                      >
                        LEARN MORE
                      </a>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="row text-center">
                  <div className="col-12">
                    <h2 className="motto2 mt-5">
                      We're focused on precision and
                    </h2>
                    <h2 className="motto2">productivity</h2>
                    <div className="col-12 d-flex justify-content-between">
                      <div className="under "></div>
                    </div>
                    <div className="col-12 mt-5">
                      <span>
                        Our mission is to be the world’s most trusted field
                        management solution for construction
                      </span>
                    </div>
                    <div className="col-12 mb-5">
                      <span>teams on projects of any scale.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="bestService bg-dark row">
                  <div className="col-12 text-white text-center mt-5">
                    <h2>Karma have the</h2>
                    <h2>Best Services for you.</h2>
                  </div>
                  <div className="col-4 text-white mt-5 text-center">
                    <span>
                      <i class="dig fa-solid fa-person-digging"></i>
                    </span>
                    <h4 className="worker mt-5">Professional Workers</h4>
                    <span>
                      A professional is a member of a profession or any
                    </span>
                    <span> person who earns a living from a specified</span>
                    <span>professional activity.</span>
                  </div>
                  <div className="col-4 text-white mt-5 text-center">
                    <span>
                      <i class="down fa-solid fa-down-long"></i>
                    </span>
                    <h4 className="worker mt-5">Offer Low Price</h4>
                    <span>
                      Lowest price means the least possible amount that
                    </span>
                    <span> meets all requirements of a </span>
                    <span>purchasing agent.</span>
                  </div>
                  <div className="col-4 text-white mt-5 text-center">
                    <span>
                      <i class="fast fa-solid fa-gauge-simple-high"></i>
                    </span>
                    <h4 className="worker mt-5">Quick Quality Work</h4>
                    <span>Amount of Work Performed. The volume of work </span>
                    <span>produced in relation to the amount of work</span>
                    <span>requiring completion or attention.</span>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="seeWork row bg-dark pt-5">
                  <div className="workImg col-6">
                    <img
                      className="how_Work mt-5 mb-5 ms-5 d-flex justify-content-between"
                      src={work}
                      alt="work"
                    />
                  </div>
                  <div className="col-6">
                    <div className="row pt-5">
                      <div className="col-12 text-white">
                        <h1 className="abKarma mt-5">Let's See How</h1>
                        <h1 className="abKarma">We Work</h1>
                        <h6>
                          Karma offers project completion with authenticity,
                          creativity and
                        </h6>
                        <h6>
                          style & where possible produced as close as own.
                        </h6>
                      </div>
                      <div className="col-12">
                        <div className="row text-white">
                          <div className="col-6">
                            <h4 className="mt-5 mb-3">Planning</h4>
                            <h6>
                              Planning may be defined as deciding in advance
                            </h6>
                            <h6>
                              what to be done in future. It is the process of
                            </h6>
                            <h6>
                              thinking before doing. It involves determination
                            </h6>
                            <h6>
                              of goals as well as the activities required to be{" "}
                            </h6>
                            <h6>undertaken to achieve the goals.</h6>
                          </div>
                          <div className="col-6">
                            <h4 className="mt-5 mb-3">Interior Design</h4>
                            <h6>
                              We can offer consultation services to clients to
                              understand their requirements and expectations.
                              This will enable you to provide personalized
                              solutions and create a design that meets their
                              specific needs.
                            </h6>
                          </div>
                          <div className="col-6">
                            <h4 className="mt-5 mb-3">Project Planning</h4>
                            <h6>
                              We can offer consultation services to clients to
                              understand their requirements and expectations.
                              This will enable you to provide personalized
                              solutions and create a design that meets their
                              specific needs.
                            </h6>
                          </div>
                          <div className="col-6">
                            <h4 className="mt-5 mb-3">Tender News</h4>
                            <h6>
                              We can stay up-to-date on industry trends and
                              developments, and use this information to identify
                              new tender opportunities as they emerge.
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="row">
                  <div class="leadership-team">
                    <h2 class="section-title">Leadership Team</h2>
                    <div class="row">
                      <div class="col-md-4">
                        <div class="profile-card ms-5">
                          <img class="avatar" src={avatar1} alt="avatar1" />
                          <div class="profile-details">
                            <h3 class="name">Angelina Jolie</h3>
                            <span class="role">Founder, Karma</span>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="profile-card">
                          <img class="avatar" src={avatar1} alt="avatar2" />
                          <div class="profile-details">
                            <h3 class="name">Brad Pitt</h3>
                            <span class="role">CEO, Karma</span>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="profile-card me-5">
                          <img class="avatar" src={avatar1} alt="avatar3" />
                          <div class="profile-details">
                            <h3 class="name">George Clooney</h3>
                            <span class="role">CTO, Karma</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </home>
        {/* ######## End Home Section ######## */}
      </div>
    </>
  );
};
export default About;
