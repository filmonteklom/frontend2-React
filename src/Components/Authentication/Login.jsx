import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Auth.css'

function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Make an API request to Django for login
    fetch('http://localhost:8000/login/', { // Change this URL to your Django backend login API endpoint
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      // On successful login, navigate to the main page
      navigate('/Main');
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <Card style={{ width: '25rem', height: '23rem', margin: '0 auto', marginTop: '10%' }}>
      <Card.Body>
        <h1>Login</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Control 
              type="email" 
              placeholder="Enter email"
              onChange={e => setEmail(e.target.value)} 
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control 
              type="password" 
              placeholder="Password"
              onChange={e => setPassword(e.target.value)} 
            />
          </Form.Group>
          
          <Button variant="primary" type="submit">
            Login
          </Button>
          <div style={{ marginTop: '3rem', marginRight: '5rem', textAlign: 'center' }}>
            New student? <a href="/register">Register here!</a>
          </div>
          <div style={{ marginTop: '1rem', marginRight: '5rem', textAlign: 'center' }}>
             <a href="/">Back to Homepage!</a>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default LoginForm;
