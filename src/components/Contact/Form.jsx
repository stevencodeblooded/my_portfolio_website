import React from "react";

import { useState } from "react";

const Form = () => {

    //Form State
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setFormData((prevDataState) => {
          return {
            ...prevDataState,
            [name]: value,
          }
        })
    };
    
    const handleSubmit = (event) => {
        event.preventDefault()
    
        console.log('Form Data Successfully submitted!', formData);
        alert('Successfully Submitted Message')
    }

   return (

    <form onSubmit={handleSubmit} className="contact-form">

      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="subject">Subject:</label>
      <input
        type="text"
        id="subject"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        required
      />

      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>

      <button type="submit">Send Message</button>
      
    </form>
  );
};

export default Form;
