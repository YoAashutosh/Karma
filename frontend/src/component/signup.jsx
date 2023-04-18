import React from "react";
import "./login.css";
import illustration1 from "./images/build_02.png";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register, clearErrors } from "../actions/userAction";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { error, isAuthenticated } = useSelector((state) => state.user);

  const [user, setUser] = useState({
    name: "",

    email: "",

    password: "",
  });

  const { email, name, password } = user;

  const registerSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    dispatch(register(myForm));
  };

  const registerDataChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
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
        <signup>
          <div className="container-fluid">
            <div className="login row">
              <div className="col-12">
                <div className="row justify-content-evenly mt-5">
                  <div className="myLogin mb-5 mt-5">
                    <div className="row">
                      <div className="col-6">
                        <div className="col-8">
                          <div className="row mt-5">
                            <div className="col-12 d-flex justify-content-start ms-5">
                              <h4 className="karma1 mt-5 ms-4">Karma</h4>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12 d-flex justify-content-end">
                              <h1>Create an account</h1>
                            </div>
                          </div>
                        </div>
                        <div className="col-10 d-flex justify-content-center">
                          <form
                            className="signUpForm"
                            style={{ borderRadius: "30px" }}
                            encType="multipart/form-data"
                            onSubmit={registerSubmit}
                          >
                            <div className="mb-3">
                              <label
                                for="exampleInputEmail1"
                                className="form-label"
                              >
                                UserName
                              </label>
                              <input
                                type="text"
                                className=" mb-4 yourL form-control"
                                id="exampleInputEmail1"
                                aria-describedby="nameHelp"
                                required
                                name="name"
                                value={name}
                                placeholder="username"
                                onChange={registerDataChange}
                              />
                            </div>

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
                                required
                                name="email"
                                value={email}
                                placeholder="username@gmail.com"
                                onChange={registerDataChange}
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
                                type="text"
                                className="yourL form-control"
                                id="exampleInputPassword1"
                                name="password"
                                placeholder="Password"
                                value={password}
                                onChange={registerDataChange}
                              />
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
                                  I agree all terms & conditions of the company.
                                </label>
                              </div>
                              <button
                                type="submit"
                                value="Register"
                                className="sign mt-3 mb-3"
                              >
                                Create account
                              </button>
                            </div>
                          </form>
                        </div>
                        <div className="col-7 ms-5 d-flex justify-content-end">
                          <span className=" continue ms-3 mt-3">
                            Already Have An Account?
                          </span>
                          <Link className="register mt-2 ms-2" to="/login">
                            <p>Log In</p>
                          </Link>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="col-8">
                          <img
                            className="illus mt-5 d-flex justify-content-between"
                            src={illustration1}
                            alt="illustration1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </signup>
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

export default Signup;
