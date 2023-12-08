import React, { useState } from "react";
import correct from "../assets/correct.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function RequestCallBack() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone }),
      });

      if (response.ok) {
        setSuccess(true);
        // alert("Email sent successfully!");
      } else {
        alert("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <button
        className="request-call-back-btn my=4"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Request a Call Back
      </button>
      {!success ? (
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <form onSubmit={handleSubmit}>
            <div
              className="modal-dialog modal-dialog-centered"
              style={{ marginTop: "200px", height: "80%" }}
            >
              <div className="modal-content bg-dark-color text-white">
                <div className="modal-header border-0">
                  <h5 className="modal-title mx-1">Request a callback</h5>
                  <button
                    type="button"
                    className="btn-close btn-close-white "
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <div className="xx">
                    <input
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      className="form-control custom-input"
                      placeholder="Enter Name"
                      aria-label="Username"
                    />
                    <br />
                    <input
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      type="number"
                      className="form-control custom-input"
                      placeholder="Enter Number"
                      aria-label="Server"
                    />
                  </div>
                </div>
                <div className="modal-footer border-0">
                  <button
                    type="submit"
                    className="btn btn-primary rounded-pill m-auto bg-white text-black"
                  >
                    Request a callback
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-md mt-6">
            <div className="modal-content bg-dark text-white">
              <div className="modal-body text-center m-">
                <img src={correct} alt="logo" className="mb-4" />
                <h4 className="mb-2">Request a callback</h4>
                <h6 style={{ color: "#808080" }} className="mb-4">
                  Our Team will call you shortly in <br />
                  12-24 hrs
                </h6>
                <h6 style={{ color: "#808080" }}>Can’t you wait for a call?</h6>
              </div>
              <div className="modal-footer d-flex justify-content-center border-0">
                <button
                  type="button"
                  onClick={handleClick}
                  className="btn btn-primary rounded-pill btn-wide"
                >
                  Check another video 👉
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RequestCallBack;
