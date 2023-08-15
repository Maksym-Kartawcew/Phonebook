import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selector';
import { fetchContacts, deleteContact } from 'redux/operations';

import styles from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contactItems = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const removeContact = id => {
    dispatch(deleteContact(id));
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  
  const filteredContacts = () => {
    if (filter.length > 0) {
      return contactItems.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    } else {
      return contactItems;
    }
  };

  const filteredContactsArray = filteredContacts();

  
  return (
    <ul className={styles.contactsBox}>
      {filteredContactsArray.map(contact => (
        <li key={contact.id}>
          <p className={styles.listItem}>{contact.name}:</p>{' '}
          <p className={styles.listItem}>{contact.number}</p>
          <button onClick={() => removeContact(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
