import React from "react";

import Navbar from "../components/Navbar";
import Form from "../components/Contact/Form";
import Footer from "../components/Footer";
import Headings from "../components/Contact/Headings";

const Contact = () => {

  return (
    <div>
      <div className="navbar-margin">
        <Navbar />
      </div>
      <Headings />
      <Form />

      <Footer />

    </div>
  );
};

export default Contact;
