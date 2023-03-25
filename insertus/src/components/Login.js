import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

function Login({ setUser }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      setUser(user);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="height-align">
      <div className="login-form-container px400">
        <h1 className="yell" style={{ margin: "20px" }}>
          LOGIN
        </h1>
        <Form onSubmit={handleSubmit}>
          {error && (
            <Alert variant="danger">EMAIL OR PASSWORD IS INCORRECT</Alert>
          )}
          <Form.Group controlId="email">
            <Form.Control
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <p>
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
