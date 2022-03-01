import { Link } from 'react-router-dom';
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

        <button className="login-btn">Login</button>

        <div className="register-link">
          <h6>
            Already have an account? Login <Link to="/login">Here</Link>
          </h6>
        </div>
      </Form>
    </div>
  );
}
