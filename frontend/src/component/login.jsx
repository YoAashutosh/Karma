import React from "react";
import "./login.css";
import illustration from "./images/construction1.png";
import { Link } from "react-router-dom";

const login = () => {
  return (
    <>
      <div>
        <login>
          <div className="container-fluid">
            <div className="login row">
              <div className="col-12">
                <div className="row justify-content-evenly mt-5">
                  <div className="myLogin mt-5">
                    <div className="row">
                      <div className="col-6">
                        <div className="col-3">
                          <div className="row mt-5">
                            <div className="col-12 d-flex justify-content-end">
                              <h4 className="karma1 mt-5 ms-5">Karma</h4>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12 ms-4 d-flex justify-content-end">
                              <h1>Login</h1>
                            </div>
                          </div>
                        </div>
                        <div className="col-10 mt-5 d-flex justify-content-center">
                          <form>
                            <div className="mb-3">
                              <label
                                for="exampleInputEmail1"
                                className="form-label"
                              >
                                Email
                              </label>
                              <input
                                type="email"
                                className=" mb-4 yourL form-control"
                                id="exampleInputEmail1"
                                aria-describedby="nameHelp"
                                placeholder="username@gmail.com"
                              />
                            </div>
                            <div className="mb-3">
                              <label
                                for="exampleInputPassword1"
                                className="form-label"
                              >
                                Password
                              </label>
                              <input
                                type="password"
                                className="yourL form-control"
                                id="exampleInputPassword1"
                                placeholder="Password"
                              />
                            </div>
                            <div id="PasswordHelp" className=" mb-3 form-text">
                              Forgot Password?
                            </div>
                            <div className="text-start">
                              <div className="mb-3 form-check">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="exampleCheck1"
                                />
                                <label
                                  className="form-check-label"
                                  for="exampleCheck1"
                                >
                                  Remember me
                                </label>
                              </div>
                              <button type="submit" className="sign mt-3 mb-3">
                                Sign in
                              </button>
                            </div>
                          </form>
                        </div>
                        <div className="col-5 ms-5 d-flex justify-content-end">
                          <span className=" continue ms-5">
                            or continue with
                          </span>
                        </div>
                        <div className="col-12">
                          <div className="row d-flex ms-5 mt-2">
                            <div className="col-3">
                              <div className="google d-flex justify-content-center align-items-center">
                                <i class="gog fa-brands fa-google"></i>
                              </div>
                            </div>
                            <div className="col-3">
                              <div className="google d-flex justify-content-center align-items-center">
                                <i class="git fa-brands fa-github"></i>
                              </div>
                            </div>
                            <div className="col-3">
                              <div className="google d-flex justify-content-center align-items-center">
                                <i class="fb fa-brands fa-facebook"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-7 ms-5 d-flex justify-content-end">
                          <span className=" continue ms-3 mt-3">
                            Don't Have an account yet?
                          </span>
                          <Link className="register ms-2" to="/signup">
                            <p className="register">Register</p>
                          </Link>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="col-6">
                          <img
                            className="illus mt-4 d-flex justify-content-between"
                            src={illustration}
                            alt="illustration"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </login>
      </div>
    </>
  );
};

export default login;
