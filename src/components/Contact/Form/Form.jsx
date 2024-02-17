import React, { useState } from "react";
import { useForm, ValidationError } from '@formspree/react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Form.css'

const Form = () => {
    const [state, handleSubmit] = useForm("myyrwnnq");
    //Form State
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    
    const handleChange = (e) => {
        const {name, value} = e.target

        setFormData((prevDataState) => {
          return {
            ...prevDataState,
            [name]: value,
          }
        })
    };

      const handleFormSubmit = async (e) => {
        e.preventDefault()
        await handleSubmit(e)
        toast.success('Message sent Successfully')
        setFormData({name: '', email: '', message: ''})

      };

   return (

    <form onSubmit={(e) => handleFormSubmit(e)} className="contact-form" data-aos='zoom-in' data-aos-duration='3000'>
      <input
        type="text"
        name="name"
        value={formData.name}
        placeholder='Name'
        required
        onChange={handleChange}
        />
        <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />

      <input
        type="email"
        name="email"
        value={formData.email}
        placeholder='Email'
        required
        onChange={handleChange}
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />

      <textarea
        id="message"
        name="message"
        value={formData.message}
        rows={5}
        placeholder="Message"
        required
        onChange={handleChange}
      ></textarea>
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />

      <button type="submit" disabled={state.submitting} className={state.submitting ? 'btn-submitting' : 'contact-form-btn'}>{state.submitting ? 'Sending Message...' : 'Send Message'}</button>
      
    </form>
  );
};

export default Form;
