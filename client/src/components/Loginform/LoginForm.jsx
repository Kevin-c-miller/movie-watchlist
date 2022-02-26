import React from 'react';
import { Form } from 'react-bootstrap';
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

      <button className="login-btn">Login</button>
    </Form>
  );
}
