import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import '../RegisterForm/RegisterForm';
import '../../screens/UserAccount/UserAccount.css';

export default function UpdateUserForm(props) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState('password');
  const [showPassword, setShowPassword] = useState('text');

  const toggleShowPassword = (e) => {
    let x = hidePassword;
    setHidePassword(showPassword);
    setShowPassword(x);
  };

  const { id } = useParams();

  useEffect(() => {
    // checking for token in localstorage
    if (props.currentUser) {
      setUsername(props.currentUser.username);
      setEmail(props.currentUser.email);
      setPassword(props.currentUser.password);
    }
  }, [props.currentUser]);

  return (
    <div className="edit-user-info">
      <div className="form">
        <h2>Update User Information</h2>

        <Form
          className="update-form"
          onSubmit={(e) => {
            e.preventDefault();
            const updatedUser = {
              username,
              email,
              password,
            };
            props.editUser(props.currentUser.id, updatedUser);
          }}
        >
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

          <button className="register-btn">Update</button>
        </Form>
      </div>
    </div>
  );
}
