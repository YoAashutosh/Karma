import React from "react";
import "./gym.css";

const gym = () => {
  return (
    <>
      <gym>
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-6">
              <div className="img mt-2"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-5"></div>
                <div className="myCol col-7 bg-light">
                  <div className="row">
                    <div className="col-5 my-5 ms-5">
                      <h3>H O L Y B O X</h3>
                    </div>
                    <div className="col-6 mt-5 d-flex justify-content-end">
                      <div className="loginBtn d-flex align-items-center">
                        <i class="fa-solid fa-user ms-3 me-3"></i>
                        <a>Log in</a>
                        <span className="dash text-white ms-2 me-2 ">|</span>
                        <span>Start today</span>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-evenly">
                    <div className="col-10">
                      <span
                        className="d-flex mb-3 "
                        style={{ lineHeight: "30px" }}
                      >
                        At Saints & Stars you define your line and we give you
                        everything we've got to help you cross it. Discover the
                        next level fitness experience that refuses to cut
                        corners when it comes to quality, atmosphere and vibe.
                        Welcome to our tribe, we’re very happy you’re here.
                      </span>
                      <span
                        className="d-flex mb-3 "
                        style={{ lineHeight: "30px" }}
                      >
                        Good to know: boxing gloves are mandatory (get your own
                        Saints & Stars gloves for $45 at the club).
                      </span>
                      <div className="row">
                        <div className="col-12 mb-3">
                          <span>
                            <strong>
                              <i class="me-2 fa-regular fa-plus"></i>
                            </strong>
                            BEFORE WORKOUT
                          </span>
                        </div>
                        <div className="col-12 mb-3">
                          <span>
                            <strong>
                              <i class="me-2 fa-regular fa-plus"></i>
                            </strong>
                            DURING WORKOUT
                          </span>
                        </div>
                        <div className="col-12 mb-3">
                          <span>
                            <strong>
                              <i class="me-2 fa-regular fa-plus"></i>
                            </strong>
                            DURING WORKOUT
                          </span>
                        </div>
                        <div className="col-12 mb-3">
                          <span>
                            <strong>
                              <i class="me-2 fa-regular fa-plus"></i>
                            </strong>
                            DURING WORKOUT
                          </span>
                        </div>
                        <div className="col-12 mb-3">
                          <span>
                            <strong>
                              <i class="me-2 fa-regular fa-plus"></i>
                            </strong>
                            DURING WORKOUT
                          </span>
                        </div>
                        <div className="col-5">
                          <button className="book">BOOK A WORKOUT</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </gym>
    </>
  );
};

export default gym;
