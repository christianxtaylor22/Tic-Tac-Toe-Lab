import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function EditUser({ users, updateUser }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const userToEdit = users.find((user) => user.id === parseInt(id));

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    resetForm();
    updateUser(parseInt(id), values);
    navigate('/UserList');
  };

  return (
    <div className="container">
      <h1>Edit User</h1>
      <Formik
        initialValues={userToEdit || { name: '' }}
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
                backgroundColor: '#007bff',
                color: 'white',
                padding: '8px 12px',
                borderRadius: '4px',
              }}
            >
              Update User
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default EditUser;
