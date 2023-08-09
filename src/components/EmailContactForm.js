import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';

const SERVICE_ID = "service_a730kxo";
const TEMPLATE_ID = "template_x8gn677";
const USER_ID = "R65UY0wRBH2tmKunK";

const EmailContactForm  = () => {
    const handleSend = (e) => {
      e.preventDefault();
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
        .then((result) => {
          console.log(result.text);
          Swal.fire({
            icon: 'success',
            title: 'Message Sent Successfully'
          })
        }, (error) => {
          console.log(error.text);
          Swal.fire({
            icon: 'error',
            title: 'Ooops, something went wrong',
            text: error.text,
          })
        });
      e.target.reset()
    };

 return (
    <div className='contact_form'>
        <Form onSubmit={handleSend}>  
        <Form.Field
          id='form-input-control-last-name'
          control={Input}
          label='Name'
          name='from_name'
          placeholder='Name…'
          required
          icon='user circle'
          iconPosition='left'
        />
        <Form.Field
          id='form-input-control-email'
          control={Input}
          label='Email'
          name='from_email'
          placeholder='Email…'
          required
          icon='mail'
          iconPosition='left'
        />
        <Form.Field
          id='form-input-control-subject'
          control={Input}
          label='Subject'
          name='subject'
          placeholder='Subject…'
          required
        />
        <Form.Field
          id='form-textarea-control-opinion'
          control={TextArea}
          label='Message'
          name='message'
          placeholder='Message…'
          required
        />
        <Button type='submit' color='#a33201'>Submit</Button>
      </Form>
    </div>
 );
};

export default EmailContactForm;