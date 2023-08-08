import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
//import emailjs from 'emailjs-com';
import { send } from 'emailjs-com';

const EmailContactForm = () => {
    const [email, setEmail] = useState({to_email: 'mpaskal2000@gmail.com', from_email: '', from_name: '', message: ''});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEmail({ ...email, [name]: value });
    }
 
   const handleSend = (e) => {
    e.preventDefault();
    send(
        'service_a730kxo',
        'template_x8gn677',
        email,
        'R65UY0wRBH2tmKunK'
        )
    .then(() => {
        alert(`Thank you for reaching out! We will get back to you as soon as possible.`);
    })
    .catch((err) => {
        alert(`We're sorry, this email could not be sent.`);
    });
};

 return (
    <div className='form-container'>
            <form onSubmit={handleSend}>  
                <div>
                    <label className='form-label'>
                        Name:
                        <br />
                        <input className='form-input' name='from_name' type='text' defaultValue={''} required onChange={handleChange} />
                    </label>
                    <br />
                    <label className='form-label'>
                        Email address:
                        <br />
                        <input className='form-input' name='from_email' type='email' defaultValue={''} required onChange={handleChange} />
                    </label>
                    <br />
                    <label className='form-label'>
                        Subject:
                        <br />
                        <input className='form-input' name='subject' defaultValue={''} required onChange={handleChange} />
                    </label>
                    <br />
                    <label className='form-label'>
                        Message:
                        <br />
                        <textarea className='form-input' name='message' defaultValue={''} onChange={handleChange} />
                    </label>
                </div>
                <div className='buttons-container'>
                    <Button type='submit' className='form-button'>Send</Button>
                </div>
            </form>
        </div>
 );
};

export default EmailContactForm;