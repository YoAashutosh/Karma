import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import MetaData from "../../more/Metadata";
import Loading from "../../more/Loader";
import "./Profile.css";
import { logout } from "../../actions/userAction";
import { toast } from "react-toastify";

const Profile = ({ history }) => {
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated === false) {
      history.push("/login");
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
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className=" row justify-content-evenly">
            <div className="col-5 cardProfile my-5">
              <div className="row">
                <MetaData title={`${user.name}'s profile`} />
                <div className="profileContainer">
                  <div
                    className=""
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <h1
                      style={{
                        fontFamily: "Poppins,sans-serif",
                        opacity: "1",
                        fontSize: "2vmax",
                      }}
                    >
                      My Profile
                    </h1>
                    <img
                      className="profile__img"
                      src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
                      alt=""
                    />
                    <Link
                      to="/info"
                      className="edit__profile"
                      style={{ margin: "0 0 0 -70px", color: "teal" }}
                    >
                      Edit Profile
                    </Link>
                  </div>
                </div>
                <div className="information">
                  <div className="middle">
                    <div className="info">
                      <h4
                        style={{
                          padding: "0px 5px",
                        }}
                      >
                        Full Name:
                      </h4>
                      <p>{user.name}</p>
                    </div>
                    <div className="info">
                      <h4
                        style={{
                          padding: "0px 5px",
                        }}
                      >
                        Email:
                      </h4>
                      <p>{user.email}</p>
                    </div>
                    <div className="info">
                      <h4
                        style={{
                          padding: "0px 5px",
                        }}
                      >
                        Contact:
                      </h4>
                      <p>{user.mobile}</p>
                    </div>
                    <div className="info">
                      <h4
                        style={{
                          padding: "0px 5px",
                        }}
                      >
                        Joined On:
                      </h4>
                      <p>{String(user.createdAt).substr(0, 10)}</p>
                    </div>

                    <div className="change__info">
                      <div className="d-flex justify-content-center">
                        <Link to="/orders" className="settings me-3">
                          My Orders
                        </Link>
                        <Link to="/updatepwd" className="settings">
                          Change Password
                        </Link>
                      </div>
                      <div className="d-flex justify-content-center">
                        <button
                          onClick={logoutUser}
                          className="buttonlg d-flex justify-content-center align-items-center"
                        >
                          LOG OUT
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Profile;
