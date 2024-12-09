import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './ContactForm.css';

function ContactForm() {

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid Email Format').required('Email is required'),
    message: Yup.string().optional('Message is optional'),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log({values});
    resetForm();

  };

  return (
    <div className="contact-container">
      <h1>Contact Form</h1>
      <Formik
        initialValues={{ name: '', email: '', message: ''}}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div className='form-field'>
              <Field
                type="text"
                name="name"
                placeholder="Enter your Name"
                style={{
                  padding: '8px',
                  width: '25%',
                  marginBottom: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                }}
              />
              <ErrorMessage name="name" component="p" style={{ color: 'red' }} />
            </div>
            <div className='form-field'>
              <Field
                type="text"
                name="email"
                placeholder="Enter your Email"
                style={{
                  padding: '8px',
                  width: '25%',
                  marginBottom: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                }}
              />
              <ErrorMessage name="email" component="p" style={{ color: 'red' }} />
            </div>
            <div className='form-field'>
              <Field
                type="text"
                name="message"
                placeholder="Enter a Message"
                style={{
                  padding: '8px',
                  width: '25%',
                  marginBottom: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                }}
              />
              <ErrorMessage name="message" component="p" style={{ color: 'red' }} />
            </div>
            <button
              type="submit"
              style={{
                backgroundColor: '#007bff',
                color: 'white',
                padding: '8px 12px',
                borderRadius: '4px',
              }}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ContactForm;
