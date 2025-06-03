import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import styles from './App.module.css';
import { selectContacts as selectAllContacts } from './redux/contactsSlice';
import { selectNameFilter as selectCurrentNameFilter } from './redux/filtersSlice';
import { fetchContacts } from './redux/contactsOps';

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts);
  const filter = useSelector(selectCurrentNameFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getVisibleContactsCount = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    ).length;
  };

  const visibleContactsCount = getVisibleContactsCount();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {contacts.length > 0 ? (
        <ContactList />
      ) : (
        <p className={styles.message}>
          You don't have any contacts yet. Add your first one!
        </p>
      )}
      {contacts.length > 0 && visibleContactsCount === 0 && filter && (
        <p className={styles.message}>
          No contacts found matching your search.
        </p>
      )}
    </div>
  );
}

export default App;
