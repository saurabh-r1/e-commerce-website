
import React, { useRef, useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();


  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const toggle = () => {
    setIsLogin(!isLogin); // Toggle the state to show/hide sign-up form
  };

  const history = useNavigate();
  
  const submitHandler = (event) => {
    event.preventDefault();
  
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
  
    // Add validation
  
    setIsLoading(true);
  
    let url;
    if (isLogin) {
      // Firebase login URL
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCPnLr0etqfApG2qj47inls6jThdRCKIN4`;
    } else {
      // Firebase signup URL
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCPnLr0etqfApG2qj47inls6jThdRCKIN4`;
    }
  
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          // Signup or login successful
          return res.json();
        } else {
          // Handle signup or login error
          return res.json().then((data) => {
            let errorMessage = 'Authentication failed!';
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        history('/products');
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  

   
  return (
    <Container className="container1">
      <div className="login-container">
        <h2 className="login-header">{isLogin ? 'Login' : 'Sign Up'}</h2>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="email">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              required
              ref={emailInputRef}
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              required
              ref={passwordInputRef}
            />
          </Form.Group>

          <div>
          {!isLoading && <Button type="submit">{isLogin ? 'LOGIN': 'CREATE ACCOUNT'}</Button>}
          {isLoading && <p className='loading'>Sending request....</p>}
          </div>
        </Form>
        <div className="button2">
        <Button className='bg-white' onClick={toggle}>
          { isLogin? 'Create New Account':'Login with Existing Account'}
        </Button>
        </div>
      </div>
    </Container>
  );
};

export default Login;
