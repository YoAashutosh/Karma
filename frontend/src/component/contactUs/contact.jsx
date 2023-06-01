import React from "react";
import "./contact.css";
//import sendMail from "../../../backend/utils/sendMail";

const Contact = () => {
  return (
    <div>
      <contact>
        <div className="container-fluid">
          <div className="row contact">
            <div className="col-12">
              <div className="row">
                <div className="col-12 d-flex justify-content-center">
                  <h4 className="ourService mt-5">Let's Have a Chat</h4>
                </div>
                <div className="col-12 d-flex justify-content-center">
                  <h1 className="serviceWe mt-5">An expert at your services</h1>
                </div>
                <div className="col-12 mt-5">
                  <form
                    className="contactForm"
                    action="https://formsubmit.co/9a915925aabce4d8eedce2bb0a90bf58"
                    method="POST"
                  >
                    <div className="mb-3">
                      <label for="exampleInputName1" className="form-label">
                        Your Name
                      </label>
                      <input
                        type={"name"}
                        name="name"
                        className="your form-control"
                        id="exampleInputName1"
                        aria-describedby="nameHelp"
                        placeholder="Your Full Name"
                      />
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">
                        Your Email
                      </label>
                      <input
                        type={"email mb-1"}
                        name="email"
                        className="your form-control"
                        id="exampleInputEmail1"
                        placeholder="Your Email"
                      />
                    </div>
                    <div id="emailHelp" className=" mb-3 form-text">
                      We'll never share your email with anyone else.
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputNumber1" className="form-label">
                        Your Phone Number
                      </label>
                      <input
                        type={"number"}
                        name="number"
                        className="your form-control"
                        id="exampleInputNumber1"
                        placeholder="Your Phone Number"
                      />
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputMessages1" className="form-label">
                        Messages
                      </label>
                      <input
                        type={"message"}
                        name="message"
                        className="your1 form-control "
                        id="exampleInputMessage1"
                        placeholder="About What do you wanna Talk?"
                      />
                    </div>
                    <div className="text-center">
                      <div className="mb-3 form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="exampleCheck1"
                        />
                        <label className="form-check-label" for="exampleCheck1">
                          I agree all terms & conditions of the company.
                        </label>
                      </div>
                      <button
                        type="submit"
                        className="submit btn btn-primary mb-5"
                      >
                        Send the Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </contact>
    </div>
  );
};

export default Contact;
