import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
    <div className="form">
      <h2>Register</h2>

      <Form className="register-form" onSubmit={handleRegisterSubmit}>
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

        <div className="login-link">
          <h6>
            Already have an account? Login <Link to="/login">Here</Link>
          </h6>
        </div>
      </Form>
    </div>
  );
}
