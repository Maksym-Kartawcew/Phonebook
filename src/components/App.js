import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUserThunk } from 'redux/operations';
import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import PrivateRoute from './Private Route/PrivateRoute';
import Loader from './Loader/Loader';
import Navigation from '../components/Navigation/Navigation'; // Import the Navigation component

const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return (
    <div>
      <header>
        <Navigation /> 
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login">
                  <ContactsPage />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};
