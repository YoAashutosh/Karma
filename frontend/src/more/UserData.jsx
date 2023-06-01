import React, { useState } from "react";
import "./UserOption.css";
import { SpeedDial, SpeedDialAction } from "@material-ui/lab";
import Draggable from "react-draggable";
import Backdrop from "@material-ui/core/Backdrop";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import NotesIcon from "@mui/icons-material/Notes";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
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
    { icon: <CalendarMonthIcon />, name: "Calendar", func: calendar },
    { icon: <NotesIcon />, name: "Notes", func: report },
    { icon: <AddShoppingCartIcon />, name: "Cart", func: cart },
    { icon: <AddCircleIcon />, name: "Professional", func: addprof },
    { icon: <ExitToAppIcon />, name: "Logout", func: logoutUser },
  ];

  if (user.role === "admin") {
    options.unshift({
      icon: <NewspaperIcon />,
      name: "Newspaper",
      func: news,
    });
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
    options.unshift({
      icon: <NewspaperIcon />,
      name: "Newspaper",
      func: news,
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
  function calendar() {
    history.push("/calendar");
  }
  function report() {
    history.push("/NotesList");
  }

  function news() {
    history.push("/tender");
  }

  function cart() {
    history.push("/cart");
  }

  function addprof() {
    history.push("/hiringForm");
  }

  function logoutUser() {
    dispatch(logout());
    toast.success("Logout Successfully.");
    history.push("/login");
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
          // icon={<PersonIcon />}
          icon={
            <img
              className="speedDialIcon"
              src={user.avatar.url ? user.avatar.url : "/profile.png"}
              alt="Profile"
              style={{
                position: "relative",
              }}
            />
          }
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
