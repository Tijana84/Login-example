import React, { useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";

export const Login = () => {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      return setValidated(true);
    }

    axios.post("https://cdl-hint-be-prod.herokuapp.com/api/auth/login",{
      email, password
    })
    .then(response => {
      console.log(response);
      navigation("/");
    })
    .catch(error => {
      console.log(error);
    })
  };

  return (
    <Container className="login-container">
      <Form validated={validated}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="Enter email"
            required
          />
         <Form.Control.Feedback type="invalid">
             Invalid email.
            </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="Password"
            required
          />
           <Form.Control.Feedback type="invalid">
             Invalid password.
            </Form.Control.Feedback>
        </Form.Group>
        <Button onClick={handleLogin} variant="primary">
          Login
        </Button>
      </Form>
    </Container>
  );
};
   
