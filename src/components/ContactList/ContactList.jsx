import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

function ContactList() {
  const visibleContacts = useSelector(selectFilteredContacts);
  if (!visibleContacts || visibleContacts.length === 0) {
    return null;
  }

  return (
    <ul className={styles.list}>
      {visibleContacts.map((contact) => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </ul>
  );
}

export default ContactList;