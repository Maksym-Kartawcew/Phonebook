import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';
import { Navigate } from 'react-router-dom';
import { loginUserThunk } from 'redux/operations';
import styles from './Pages.module.css';

const LoginPage = () => {
  const dispatch = useDispatch();
  const logedIn = useSelector(selectIsLoggedIn);

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;

    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;

    dispatch(
      loginUserThunk({
        email,
        password,
      })
    );
  };

  if (logedIn) return <Navigate to="/contacts" />;

  return (
    <div className={styles.wrapper}>
      <h1>Log into Your Account</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputBox}>
          <label>
            <p>Email:</p>
            <input name="userEmail" type="email" required />
          </label>
          <br />
          <label>
            <p>Password:</p>
            <input name="userPassword" type="password" required minLength={7} />
          </label>
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default LoginPage;
