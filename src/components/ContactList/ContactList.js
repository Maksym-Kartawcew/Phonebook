import { useDispatch, useSelector } from 'react-redux';
import { selectUserContacts, selectFilter } from 'redux/selectors';
import { deleteContactThunk } from 'redux/operations';
import styles from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectUserContacts);
  const filter = useSelector(selectFilter);

  const handleDeleteContact = contactId => {
    dispatch(deleteContactThunk(contactId));
  };

  const showContacts = Array.isArray(contacts) && contacts.length > 0;

  const filteredContacts = () => {
    if (filter.length > 0) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    } else {
      return contacts;
    }
  };

  return (
    <div className={styles.contactsBox}>
      <ul>
        {showContacts &&
          filteredContacts().map(contact => {
            return (
              <li key={contact.id}>
                <h3>Name: {contact.name}</h3>
                <p>Number: {contact.number}</p>
                <button
                  onClick={() => handleDeleteContact(contact.id)}
                  type="button"
                  aria-label="Delete contact"
                >
                  &times;
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ContactList;
