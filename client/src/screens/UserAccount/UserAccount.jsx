import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import DeleteButton from '../../components/Delete/Delete';
import { Button } from 'react-bootstrap';
import './UserAccount.css';

export default function UserAccount(props) {
  // const [user, setUser] = useState('');
  const { currentUser, deleteAccount } = props;

  const dateFormat = () => {
    const date = currentUser.created_at;
    console.log(date);
  };
  //   dateFormat();
  console.log(currentUser);

  return (
    <div className="user-account">
      <div className="account-container">
        <h2>{currentUser?.username}'s Account Information</h2>
        <div className="user-acct-info">
          <h3>
            <b>Username:</b> {currentUser?.username}
          </h3>
          <h3>
            <b>Member Since:</b> {currentUser?.created_at}
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
