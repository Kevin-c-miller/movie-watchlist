import { Link } from 'react-router-dom';
import DeleteButton from '../../../components/Delete/Delete';
import { Button } from 'react-bootstrap';
import './UserAccount.css';

export default function UserAccount(props) {
  // const [user, setUser] = useState('');
  const { currentUser, deleteAccount } = props;

<<<<<<< HEAD:client/src/screens/UserAccount/UserAccount.jsx
  // converting date format from what is provided from backend
=======
>>>>>>> kevin-dev:client/src/screens/User/UserAccount/UserAccount.jsx
  const dateFormat = currentUser?.created_at.slice(0, 10);

  return (
    <div className="user-account">
      <div className="account-container">
        <h2>{currentUser?.username}'s Account Information</h2>
        <div className="user-acct-info">
          <h3>
            <b>Username:</b> {currentUser?.username}
          </h3>
          <h3>
            <b>Member Since:</b> {dateFormat}
          </h3>
          <h4>
            <b>email:</b> {currentUser?.email}
          </h4>
        </div>
        <div className="account-btn">
          <Link to={`/users/${currentUser?.id}/edit`}>
            <Button variant="secondary">Update User Info.</Button>
          </Link>
          <DeleteButton delete={deleteAccount} />
        </div>
      </div>
    </div>
  );
}
