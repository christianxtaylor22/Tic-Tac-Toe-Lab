import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function AddUser({ addUser }) {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    resetForm();
    addUser(values);
    navigate('/UserList');
  };

  return (
    <div className="container">
      <h1>Add a User</h1>
      <Formik
        initialValues={{ name: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div>
              <Field
                type="text"
                name="name"
                placeholder="Enter your Name"
                style={{
                  padding: '8px',
                  width: '100%',
                  marginBottom: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                }}
              />
              <ErrorMessage name="name" component="p" style={{ color: 'red' }} />
            </div>
            <button
              type="submit"
              style={{
                backgroundColor: '#28a745',
                color: 'white',
                padding: '8px 12px',
                borderRadius: '4px',
              }}
            >
              Add User
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddUser;
