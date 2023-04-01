import React, { useState } from "react";
import "./UserOption.css";
import { SpeedDial, SpeedDialAction } from "@material-ui/lab";
import Draggable from "react-draggable";
import Backdrop from "@material-ui/core/Backdrop";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import Support from "@material-ui/icons/ReportProblem";

import HomeIcon from "@material-ui/icons/Home";
import { useDispatch } from "react-redux";
import { logout } from "../actions/userAction";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const UserData = ({ user }) => {
  const [open, setOpen] = useState(false);
  const history = useHistory();
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
      document.querySelector(".speedDial").classList.add("active");
    } else {
      document.querySelector(".speedDial").classList.remove("active");
    }
  });

  const dispatch = useDispatch();

  const options = [
    { icon: <HomeIcon />, name: "Home", func: home },

    { icon: <PersonIcon />, name: "Profile", func: account },
    { icon: <Support />, name: "Report us", func: report },
    { icon: <ExitToAppIcon />, name: "Logout", func: logoutUser },
  ];

  if (user.role === "admin") {
    options.unshift({
      icon: <DashboardIcon />,
      name: "Dashboard",
      func: dashboard,
    });
  }
  if (user.role === "Creator") {
    options.unshift({
      icon: <DashboardIcon />,
      name: "Dashboard",
      func: dashboard,
    });
  }

  function dashboard() {
    history.push("/admin");
  }
  function home() {
    history.push("/");
  }

  function account() {
    history.push("/me");
  }

  function report() {
    history.push("/support");
  }

  function logoutUser() {
    dispatch(logout());
    toast.success("Logout Successfully");
  }

  return (
    <>
      <Backdrop open={open} style={{ zIndex: "10" }} />
      <Draggable bounds="parent">
        <SpeedDial
          ariaLabel="SpeedDial tooltip example"
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          direction="down"
          className="speedDial"
          icon={<PersonIcon />}
          open={open}
        >
          {options.map((item) => (
            <SpeedDialAction
              key={item.name}
              icon={item.icon}
              tooltipTitle={item.name}
              onClick={item.func}
              tooltipOpen={false}
            />
          ))}
        </SpeedDial>
      </Draggable>
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

export default UserData;
