import React from "react";

import Form from "../components/Contact/Form/Form";
import Heading from "../components/Contact/Heading/Heading";

const Contact = () => {

  return (
    <div>
      <div className="navbar-margin">
      </div>

      <div className="top-margin">
        <Heading />
        <Form />
      </div>

    </div>
  );
};

export default Contact;
