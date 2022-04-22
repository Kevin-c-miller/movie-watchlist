import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, FloatingLabel } from 'react-bootstrap';
import './LoginForm.css';

export default function LoginForm(props) {
  const [showGuest, setShowGuest] = useState(false);
  const {
    handleLoginSubmit,
    setUsername,
    setPassword,
    username,
    password,
    toggleShowPassword,
    hidePassword,
  } = props;

  //  show guest login
  const showGuestLogin = () => {
    setShowGuest((prevShowGuest) => !prevShowGuest);
  };

  return (
    <div className="form">
      <h2>Login</h2>
      <Form className="login-form" onSubmit={handleLoginSubmit}>
        <FloatingLabel
          controlId="floatingInput"
          label="Username"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="username"
            value={username}
            autoFocus
            required
            onChange={(e) => setUsername(e.target.value)}
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="Password"
          className="mb-3"
        >
          <Form.Control
            type={hidePassword}
            value={password}
            placeholder="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </FloatingLabel>

        <Form.Check
          type="switch"
          label="Show Password"
          onClick={(e) => toggleShowPassword(e)}
        />

        <button className="login-btn">Login</button>

        <div className="register-link">
          <h6>
            Already have an account? Register <Link to="/register">Here</Link>
          </h6>
        </div>

        <button className="guestLoginBtn" onClick={showGuestLogin}>
          Continue As Guest
        </button>
        {showGuest && (
          <div className="guest-div">
            <ul>
              <li>
                <strong>Username:</strong> GuestUser
              </li>
              <li>
                <strong>Password:</strong> 123456
              </li>
            </ul>
          </div>
        )}
      </Form>
    </div>
  );
}
