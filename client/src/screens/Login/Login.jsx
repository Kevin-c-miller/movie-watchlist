import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/apiConfig/users';
import LoginForm from '../../components/Loginform/LoginForm';
import './Login.css';

export default function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate('/movies');

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const user = {
      username,
      password,
    };
    const res = await loginUser(user);
    props.setCurrentUser(res);

    navigate('/movies');
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <LoginForm
        handleLoginsubmit={handleLoginSubmit}
        setUsername={setUsername}
        setPassword={setPassword}
        password={password}
        username={username}
      />
    </div>
  );
}
