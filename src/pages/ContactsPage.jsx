import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestContactsThunk } from 'redux/operations';
import { selectIsLoggedIn, selectContactsError, selectContactsIsLoading } from 'redux/selectors';

import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList'
import Filter from '../components/Filter/Filter';
import Loader from 'components/Loader/Loader';

const Contacts = () => {
  const authentificated = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!authentificated) return;

    dispatch(requestContactsThunk());
  }, [authentificated, dispatch]);



  return (
    <section>
      <Filter />
      <ContactForm />
      {isLoading && <Loader />}
      {error && <p>Oops, some error occured... {error}</p>}
     <ContactList />
    </section>
  );
};

export default Contacts;
