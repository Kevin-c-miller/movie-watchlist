import { NavLink } from 'react-router-dom';

export default function Nav(props) {
  const logOutUser = () => {
    localStorage.removeItem('authToken');
    props.setCurrentUser(null);
  };

  return (
    <div>
      <nav style={{ borderBottom: '1px solid black', margin: '5px' }}>
        <NavLink to="/" style={{ padding: '3px', margin: '0 5px' }}>
          Movieapp
        </NavLink>
        <NavLink to="/movies" style={{ padding: '3px', margin: '0 5px' }}>
          Movies
        </NavLink>
        <NavLink to="/login" style={{ padding: '3px', margin: '0 5px' }}>
          Login
        </NavLink>
        <NavLink to="/Register" style={{ padding: '3px', margin: '0 5px' }}>
          Register
        </NavLink>
        <button onClick={logOutUser}>Logout</button>
      </nav>
    </div>
  );
}
