import React from "react";

import Form from "../components/Contact/Form/Form";
import Heading from "../components/Contact/Heading/Heading";
import contactMe from '../assets/Contact-Me.png'
import { ToastContainer } from "react-toastify";

const Contact = () => {

  return (
    <div>
      <div className="navbar-margin">
      </div>

      <div className="top-margin">
        <ToastContainer theme="colored" />
        <div className="contact-steve">
          <div className="contact-me-container">
            <img src={contactMe} alt="contact-me" className="contact-me" />
          </div>
          <div className="">
            <Heading />
            <Form />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Contact;
