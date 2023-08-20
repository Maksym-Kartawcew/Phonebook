import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { logoutUserThunk } from 'redux/operations';
import { selectIsLoggedIn, selectUserMail } from 'redux/selectors';

import styles from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector(selectIsLoggedIn);
  const userMail = useSelector(selectUserMail);

  const handleLogout = () => {
    dispatch(logoutUserThunk());
  };

  if (!loggedIn) return <Navigate to="/login" />;

  return (
    <div className={styles.wrapper}>
      <p className={styles.usermail}>{userMail}</p>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
};

export default UserMenu;
