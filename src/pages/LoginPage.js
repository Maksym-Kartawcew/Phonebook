import React from 'react';
import { useDispatch } from 'react-redux';
// import { selectIsLoggedIn } from 'redux/selectors';
// import { Navigate } from 'react-router-dom';
import { loginUserThunk } from 'redux/operations';

const LoginPage = () => {
  const dispatch = useDispatch();
  // const loggedIn = useSelector(selectIsLoggedIn);

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;

    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;

    // const finalUserData = { name, email, password };

    // console.log(finalUserData);

    dispatch(
      loginUserThunk({
        email,
        password,
      })
    );
  };

  // if (loggedIn) return <Navigate to="/contacts" />;

  return (
    <div>
      <h1>Log into Your Account</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email:</p>
          <input name="userEmail" type="email" required />
        </label>
        <br />
        <label>
          <p>Password:</p>
          <input name="userPassword" type="password" required minLength={7} />
        </label>
        <br />
        <button type="submit">Sign In</button>
      </form>
      {/* <div>
        Already have an account? <a href="/login">Log in here.</a>{' '}
      </div> */}
    </div>
  );
};

export default LoginPage;
