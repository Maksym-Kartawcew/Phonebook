import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';
import UserMenu from '../UserMenu/UserMenu';

import styles from './Navigation.module.css';

const Navigation = () => {
  const loggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={styles.navBox}>
      <NavLink to="/" className={styles.navLink}>
        Home
      </NavLink>
      {loggedIn ? (
        <>
          <NavLink to="/contacts" className={styles.navLink}>
            Contacts
          </NavLink>
          <UserMenu className={styles.userMenu}></UserMenu>
        </>
      ) : (
        <div>
          <NavLink to="/register" className={styles.navLink}>
            Sign up
          </NavLink>
          <NavLink to="/login" className={styles.navLink}>
            Log in
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
