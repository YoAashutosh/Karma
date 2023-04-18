import React from "react";
import "./login.css";
import illustration from "./images/construction1.png";
import { Link } from "react-router-dom";
import { login, clearErrors } from "../actions/userAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ history, location }) => {
  const dispatch = useDispatch();

  const { error, isAuthenticated } = useSelector((state) => state.user);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      history.push("/");
    }
  }, [dispatch, error, isAuthenticated, history]);

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
                          <form onSubmit={loginSubmit}>
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
                                required
                                value={loginEmail}
                                onChange={(e) => setLoginEmail(e.target.value)}
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
                                required
                                value={loginPassword}
                                onChange={(e) =>
                                  setLoginPassword(e.target.value)
                                }
                                id="exampleInputPassword1"
                                placeholder="Password"
                              />
                            </div>
                            <Link to="/password/forgot">
                              <div
                                id="PasswordHelp"
                                className=" mb-3 form-text"
                              >
                                Forgot Password?
                              </div>
                            </Link>
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
                        <div className="col-8">
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
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Login;
