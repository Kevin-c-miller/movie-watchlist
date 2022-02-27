import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './LoginForm.css';

export default function LoginForm(props) {
  const {
    handleLoginSubmit,
    setUsername,
    setPassword,
    username,
    password,
    toggleShowPassword,
    hidePassword,
  } = props;

  return (
    <div className="form">
      <h2>Login</h2>
      <Form className="login-form" onSubmit={handleLoginSubmit}>
        <Form.Control
          type="text"
          placeholder="username"
          value={username}
          autoFocus
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <Form.Control
          type={hidePassword}
          value={password}
          placeholder="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <Form.Check
          type="switch"
          label="Show Password"
          onClick={(e) => toggleShowPassword(e)}
        />

        <Button variant="primary" className="login-btn">
          Login
        </Button>
      </Form>
    </div>
  );
}
