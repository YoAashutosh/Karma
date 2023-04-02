import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, createTenderTable } from "../actions/TenderTableAction";
import { NEW_TENDERTABLE_RESET } from "../constans/tenderTableCons";
import { ToastContainer, toast } from "react-toastify";
import { Button } from "@material-ui/core";

const Tender = ({ history }) => {
  const dispatch = useDispatch();

  const { loading, error, success } = useSelector(
    (state) => state.createProduct
  );

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [submissionDate, setSubmissionDate] = useState("");
  const [publishDate, setPublishDate] = useState("");
  const [noticeCategory, setNoticeCategory] = useState("");
  const [industry, setIndustry] = useState("");
  const [productService, setProductService] = useState("");
  const [noOfDays, setNoOfDays] = useState("");
  const [newspaper, setNewspaper] = useState("");
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      toast.success("TenderTable Created Successfully");
      history.push("/dashboard");
      dispatch({ type: NEW_TENDERTABLE_RESET });
    }
  }, [dispatch, error, history, success]);

  const createTenderTableSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("description", description);
    myForm.set("submissionDate", submissionDate);
    myForm.set("publishedDate", publishDate);
    myForm.set("noticeCategory", noticeCategory);
    myForm.set("industry", industry);
    myForm.set("productService", productService);
    myForm.set("newspaper", newspaper);
    myForm.set("noOfDays", noOfDays);

    images.forEach((image) => {
      myForm.append("images", image);
    });
    dispatch(createTenderTable(myForm));
  };

  const createTenderTableImagesChange = (e) => {
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
        <tender>
          <div className="col-12 mt-5 d-flex justify-content-center">
            <form
              encType="multipart/form-data"
              onSubmit={createTenderTableSubmitHandler}
            >
              <div className="mb-3">
                <label for="exampleNoticePublisher" className="form-label">
                  Notice Publisher
                </label>
                <input
                  type="name"
                  className="your form-control"
                  id="exampleNoticePublisher"
                  aria-describedby="nameHelp"
                  placeholder="ABC Office"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label for="exampleDescription" className="form-label">
                  Description
                </label>
                <input
                  type="description mb-1"
                  className="your form-control"
                  id="exampleDescription"
                  placeholder="ABC project is a ...."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="row d-flex justify-content-evenly mb-3">
                <div className="col-5">
                  <label for="examplePublishedDate" className="form-label me-2">
                    Published Date
                  </label>
                  <input
                    type="date"
                    id="publishedDate"
                    name="publishedDate"
                    value={publishDate}
                    onChange={(e) => setPublishDate(e.target.value)}
                  />
                </div>
                <div className="col-5">
                  <label for="exampleLastDate" className="form-label me-2">
                    Last Date of Submission
                  </label>
                  <input
                    type="date"
                    id="LastDate"
                    name="LastDate"
                    value={submissionDate}
                    onChange={(e) => setSubmissionDate(e.target.value)}
                  />
                  />
                </div>
              </div>
              <div className="mb-3">
                <label for="exampleNoticeCategory" className="form-label">
                  Notice Category
                </label>
                <input
                  type="string mb-1"
                  className="your form-control"
                  id="exampleNoticeCategory"
                  placeholder="Tender"
                  value={noticeCategory}
                  onChange={(e) => setNoticeCategory(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label for="exampleIndustry" className="form-label">
                  Industry
                </label>
                <input
                  type="string mb-1"
                  className="your form-control"
                  id="exampleIndustry"
                  placeholder="Industry"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label for="exampleProduct" className="form-label">
                  Product/Service
                </label>
                <input
                  type="string mb-1"
                  className="your form-control"
                  id="exampleProduct"
                  placeholder="Product"
                  value={productService}
                  onChange={(e) => setProductService(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label for="exampleNewspaper" className="form-label">
                  Newspaper
                </label>
                <input
                  type="string mb-1"
                  className="your form-control"
                  id="exampleNewspaper"
                  placeholder="Newspaper"
                  value={newspaper}
                  onChange={(e) => setNewspaper(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label for="exampleDays" className="form-label">
                  No of Days Left
                </label>
                <input
                  type="number mb-1"
                  className="your form-control"
                  id="exampleDays"
                  placeholder="Days"
                  value={noOfDays}
                  onChange={(e) => setNoOfDays(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <div class="row">
                  <input
                    type="file"
                    className="your form-control mb-3 mt-3"
                    name="avatar"
                    accept="image/*"
                    onChange={createTenderTableImagesChange}
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
        </tender>
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

export default Tender;
