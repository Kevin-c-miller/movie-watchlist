import React from 'react';
import { Form } from 'react-bootstrap';
import './RegisterForm.css';

export default function RegisterForm(props) {
  const {
    handleRegisterSubmit,
    username,
    password,
    email,
    setEmail,
    setPassword,
    setUsername,
    hidePassword,
    toggleShowPassword,
  } = props;

  return (
    <div className="Register-form">
      <Form onSubmit={handleRegisterSubmit}>
        <Form.Control
          type="text"
          placeholder="username"
          value={username}
          required
          autoFocus
          onChange={(e) => setUsername(e.target.value)}
        />

        <Form.Control
          type="email"
          placeholder="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <Form.Control
          type={hidePassword}
          placeholder="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <Form.Check
          type="switch"
          label="Show Password"
          onClick={(e) => toggleShowPassword(e)}
        />
        <button className="register-btn">Register</button>
      </Form>
    </div>
  );
}
