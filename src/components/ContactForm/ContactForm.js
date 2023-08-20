import { useDispatch, useSelector } from 'react-redux';
import { selectUserContacts } from 'redux/selectors';
import { addContactThunk } from 'redux/operations';
import styles from './ContactForm.module.css';

const ContactForm = () => {

  const dispatch = useDispatch();
  const contacts = useSelector(selectUserContacts);


  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;

    const name = form.elements.contactName.value;
    const number = form.elements.contactNumber.value;

    if (contacts.some(contact => contact.name === name))
      return alert(`Contact with name ${name} already exists!`);

    dispatch(addContactThunk({ name, number }));
  };

  return (
    <div className={styles.sectionBox}>
         <form onSubmit={handleSubmit}>
        <label>
          <p>Name:</p>
          <input name="contactName" type="text" required />
        </label>
        <br />
        <label>
          <p>Number:</p>
          <input name="contactNumber" type="text" required />
        </label>
        <br />
        <button type="submit">Add contact</button>
            </form>
    </div>
  );
};

export default ContactForm;
