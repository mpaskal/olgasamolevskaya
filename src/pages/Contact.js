import React from "react";
import EmailContactForm from "../components/EmailContactForm";

const Contact = () => {
  return (
    <div className="contacts">
      <h1 className="header">Contacts</h1>
      <div>
        <EmailContactForm />
      </div>
    </div>
  );
};

export default Contact;
