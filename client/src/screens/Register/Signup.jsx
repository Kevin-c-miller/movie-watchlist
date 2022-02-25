import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../services/apiConfig/users';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

export default function Signup(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [hidePassword, setHidePassword] = useState('password');
  const [showPassword, setShowPassword] = useState('text');

  const navigate = useNavigate('/movies');

  const toggleShowPassword = (e) => {
    let x = hidePassword;
    setHidePassword(showPassword);
    setShowPassword(x);
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const user = {
      username,
      password,
    };
    const res = await createUser(user);
    props.setCurrentUser(res);

    navigate('/movies');
  };

  return (
    <div className="register-page">
      <h2>Register</h2>
      <RegisterForm
        handleRegisterSubmit={handleRegisterSubmit}
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
