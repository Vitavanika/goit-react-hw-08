import styles from './Contact.module.css';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={styles.item}>
      <div className={styles.info}>
        <p className={styles.text}>
          <FaUser className={styles.icon} /> {name}
        </p>
        <p className={styles.text}>
          <FaPhoneAlt className={styles.icon} /> {number}
        </p>
      </div>
      <button onClick={handleDelete} className={styles.button}>
        Delete
      </button>
    </li>
  );
}
