import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/apiConfig/users';
import LoginForm from '../../components/Loginform/LoginForm';
import './Login.css';

export default function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState('password');
  const [showPassword, setShowPassword] = useState('text');

  const navigate = useNavigate('/movies');

  // show/hide password on logon/register forms
  const toggleShowPassword = (e) => {
    let x = hidePassword;
    setHidePassword(showPassword);
    setShowPassword(x);
  };

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
      <LoginForm
        handleLoginSubmit={handleLoginSubmit}
        setUsername={setUsername}
        setPassword={setPassword}
        password={password}
        username={username}
        toggleShowPassword={toggleShowPassword}
        hidePassword={hidePassword}
      />
    </div>
  );
}
