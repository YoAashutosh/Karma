import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, createHire } from "../../actions/HiringAction";
import { NEW_HIRE_SUCCESS } from "../../constans/HiringConstans";
import { ToastContainer, toast } from "react-toastify";
import { Button } from "@material-ui/core";
import "./hiring.css";

const HiringForm = ({ history }) => {
  const dispatch = useDispatch();

  const { loading, error, success } = useSelector((state) => state.createHire);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profession, setProfession] = useState("");
  const [experience, setExperience] = useState("");

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      dispatch({ type: NEW_HIRE_SUCCESS });
    }
  }, [dispatch, error, history, success]);

  const createHireSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("profession", profession);
    myForm.set("experience", experience);
    toast.success("Professional added successfully");
    history.push("/");
    dispatch(createHire(myForm));
  };

  return (
    <>
      <form
        encType="multipart/form-data"
        onSubmit={createHireSubmitHandler}
        className="my-5"
      >
        <label>
          Name:
          <input
            className="ms-5"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            className="ms-5"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Profession:
          <input
            className="ms-2"
            type="text"
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
          />
        </label>
        <label>
          Experience:
          <input
            className="ms-1"
            type="text"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </label>
        <div className="d-flex justify-content-center">
          <Button
            id="createProductBtn"
            type="submit"
            className="mt-4"
            style={{ width: "100px" }}
            disabled={loading ? true : false}
          >
            Submit
          </Button>
        </div>
      </form>
      <div style={{ minHeight: "20vh" }}></div>
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

export default HiringForm;
