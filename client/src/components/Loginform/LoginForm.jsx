import React from 'react';
import './LoginForm.css';

export default function LoginForm(props) {
  return (
    <form className="login-form" onSubmit={props.handleLoginSubmit}>
      <input
        type="text"
        placeholder="username"
        value={props.username}
        autoFocus
        required
        onChange={(e) => props.setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={props.password}
        required
        onChange={(e) => props.setPassword(e.target.value)}
      />
      {/* show password button toggle */}
      <button className="login-btn">Login</button>
    </form>
  );
}
