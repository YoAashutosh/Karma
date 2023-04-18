import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, createHire } from "../actions/HiringAction";
import { NEW_HIRE_SUCCESS } from "../constans/HiringConstans";
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
      toast.success("Hire Successfull");
      history.push("/hiringForm");
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
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Profession:
          <input
            type="text"
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
          />
        </label>
        <label>
          Experience:
          <input
            type="number"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </label>
        <Button type="submit" disabled={loading ? true : false}>
          Submit
        </Button>
      </form>
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
