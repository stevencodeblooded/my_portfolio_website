import React from "react";

import Navbar from '../components/Navbar/Navbar'
import Form from "../components/Contact/Form/Form";
import Footer from "../container/Footer";
import Heading from "../components/Contact/Heading/Heading";

const Contact = () => {

  return (
    <div>
      <div className="navbar-margin">
        <Navbar />
      </div>
      <div className="top-margin">
        <Heading />
        <Form />
      </div>

      <Footer />

    </div>
  );
};

export default Contact;
