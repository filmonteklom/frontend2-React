import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './main.css';

const Main = () => {
  return (
    <div>
      {/* Beautiful Header */}
      <Navbar style={{ backgroundColor: '#007FFF', height: '18%', }} variant='dark' expand='lg' fixed='top'>
        <Container>
          <Navbar.Brand href='#home'>My App</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav className='ms-auto' style={{ paddingLeft: '50rem', }}>
                <Nav.Link as={Link} to="/register">Register</Nav.Link>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main className='main-content'>
        {/* Background Video */}
        <video className='background-video' autoPlay loop muted>
          <source src="/Images/animation.mp4" type="video/mp4"/>
        </video>

        <div style={{ marginTop: '5rem' }}>
          <h1 className='h1'>Welcome</h1>
        </div>
      </main>
    </div>
  );
};

export default Main;
