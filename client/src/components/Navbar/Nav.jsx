import { NavLink, useParams } from 'react-router-dom';

export default function Nav(props) {
  const logOutUser = () => {
    localStorage.removeItem('authToken');
    props.setCurrentUser(null);
  };

  const { id } = useParams();

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

        {props.currentUser && (
          <>
            <NavLink
              to={`users/${props.currentUser?.id}/my-account`}
              style={{ padding: '3px', margin: '0 5px' }}
            >
              My Account
            </NavLink>
            <NavLink
              to={`/movies/users/${props.currentUser?.username}/movielist`}
            >
              My Watch List
            </NavLink>

            <button onClick={logOutUser}>Logout</button>
          </>
        )}
      </nav>
    </div>
  );
}
