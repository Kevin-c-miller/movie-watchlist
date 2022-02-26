import React from 'react';
import './UserAccount.css';

export default function UserAccount(props) {
  const { currentUser } = props;
  console.log(currentUser);

  const dateFormat = () => {
    const date = currentUser.created_at;
    console.log(date);
  };

  //   dateFormat();
  return (
    <div className="user-account">
      <h2>{currentUser?.username}'s Account Information</h2>
      <div className="user-acct-info">
        <h3>Username: {currentUser?.username}</h3>
        <h3>Member Since: {currentUser?.created_at}</h3>
        <h4>email: {currentUser?.email}</h4>
      </div>
    </div>
  );
}
