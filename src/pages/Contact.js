import React from "react";
import EmailContactForm from "../components/EmailContactForm";

const Contact = () => {
  return (
    <>   
    <div className="contacts">
      <div className="contact">
        <h1>Будь ласка, зв'яжіться з нами електронною поштою:</h1>
        <EmailContactForm />  
      </div>          
    </div>
  </>
  );
};

export default Contact;
