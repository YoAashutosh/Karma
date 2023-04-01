import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, createTender } from "../actions/TenderActions";
import { NEW_TENDER_RESET } from "../constans/TenderConstans";
import { ToastContainer, toast } from "react-toastify";
import Sidebar from "./sidebar";
import { Button } from "@material-ui/core";

const CreateTender = ({ history }) => {
  const dispatch = useDispatch();

  const { loading, error, success } = useSelector(
    (state) => state.createTender
  );

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      toast.success("Product Created Successfully");
      history.push("/dashboard");
      dispatch({ type: NEW_TENDER_RESET });
    }
  }, [dispatch, error, history, success]);

  const createTenderSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("description", description);
    myForm.set("location", location);

    images.forEach((image) => {
      myForm.append("images", image);
    });
    dispatch(createTender(myForm));
  };

  const createTenderImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <>
      <div>
        <div className="d-flex">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="col-10 mt-5 d-flex align-items-center justify-content-center">
            <form
              encType="multipart/form-data"
              onSubmit={createTenderSubmitHandler}
            >
              <div>
                <label for="exampleInputName1" className="form-label">
                  Tender Name
                </label>
                <input
                  type="text"
                  className="your form-control my-3"
                  placeholder="Tender Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputTender1" className="form-label">
                  About Tender
                </label>
                <input
                  placeholder="Tender Description"
                  className="your form-control mb-3"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputPlace1" className="form-label">
                  Place of Tender
                </label>
                <input
                  placeholder="Location"
                  className="your form-control mb-3"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <div className="mb-3 ms-2">
                <div class="row">
                  <input
                    type="file"
                    className="your form-control mb-3 mt-3"
                    name="avatar"
                    accept="image/*"
                    onChange={createTenderImagesChange}
                    multiple
                  />
                </div>

                <div id="createProductFormImage">
                  {imagesPreview.map((image, index) => (
                    <img key={index} src={image} alt="Product Preview" />
                  ))}
                </div>
              </div>
              <Button
                id="createProductBtn"
                type="submit"
                className="mt-4"
                disabled={loading ? true : false}
              >
                Create
              </Button>
            </form>
          </div>
        </div>
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

export default CreateTender;
