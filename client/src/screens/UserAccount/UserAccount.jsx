import { useState, useEffect } from 'react';
import DeleteButton from '../../components/Delete/Delete';
import { deleteUser } from '../../services/apiConfig/users';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import './UserAccount.css';

export default function UserAccount(props) {
  // const [user, setUser] = useState('');
  const { currentUser } = props;

  const navigate = useNavigate();

  // remove token from local storage
  const removeToken = () => {
    localStorage.removeItem('authToken');
  };

  const dateFormat = () => {
    const date = currentUser.created_at;
    console.log(date);
  };
  //   dateFormat();

  // delete account
  const deleteAccount = async () => {
    await deleteUser(currentUser.id);

    removeToken();
    toast.success('User Deleted');

    setTimeout(() => {
      window.location.reload();
    }, 3000);
    navigate('/');
  };

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

        <DeleteButton currentUser={currentUser} delete={deleteAccount} />
      </div>
    </div>
  );
}
