import React from 'react';
import { useDispatch } from 'react-redux';
// import { selectIsLoggedIn } from 'redux/selectors';
// import { Navigate } from 'react-router-dom';
import { registerUserThunk } from 'redux/operations';

const RegisterPage = () => {
  const dispatch = useDispatch();
  // const loggedIn = useSelector(selectIsLoggedIn);

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    const name = form.elements.userName.value;
    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;

    // const finalUserData = { name, email, password };

    // console.log(finalUserData);

    dispatch(
      registerUserThunk({
        name,
        email,
        password,
      })
    );
  };

  // if (loggedIn) return <Navigate to="/contacts" />;

  return (
    <div>
      <h1>Register Your Account</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Name:</p>
          <input name="userName" type="text" required minLength={3} />
        </label>
        <br />
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
        <button type="submit">Create account</button>
      </form>
      {/* <div>
        Already have an account? <a href="/login">Log in here.</a>{' '}
      </div> */}
    </div>
  );
};

export default RegisterPage;
