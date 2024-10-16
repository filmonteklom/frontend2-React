import React, { useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Auth.css';



const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); // Reset error message

    fetch('http://localhost:8000/auth/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => {
      if (!response.ok) {
        if(response.headers.get("content-type").includes("text/html")){
          throw new Error("Server returned an HTML response. Possibly an error page.")
        }
        return response.json().then(data => {
          throw new Error(data[Object.keys(data)[0]]); // Display the first error message
        });
      }
      return response.json();
    })
    .then(() => {
      navigate('/login'); // Navigate to login on successful registration
    })
    .catch((error) => {
      setError(error.message);
    });
  };

  return (
    <Card style={{ width: '25rem', height: 'auto', margin: '0 auto', marginTop: '10%' }}>
      <Card.Body>
        <h1>Register</h1>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Control
              type="text"
              name="first_name"
              required
              placeholder="firstname"
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="email"
              name="email"
              required
              placeholder="Email"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="password"
              name="password"
              required
              placeholder="Password"
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </Form.Group>

          <Button type="submit">Register</Button>

          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            Already have an account? <a href="/login">Login here!</a>
          </div>
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <a href="/">Back to Homepage!</a>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Register;
