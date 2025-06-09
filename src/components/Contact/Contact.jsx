import styles from './Contact.module.css';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { useState } from 'react';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleConfirmDelete = () => {
    dispatch(deleteContact(id));
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <li className={styles.item}>
        <div className={styles.info}>
          <p className={styles.text}>
            <FaUser className={styles.icon} /> {name}
          </p>
          <p className={styles.text}>
            <FaPhoneAlt className={styles.icon} /> {number}
          </p>
        </div>
        <Button
          variant='outlined'
          color='error'
          onClick={() => setOpen(true)}
          className={styles.button}
        >
          Delete
        </Button>
      </li>

      <Dialog
        open={open}
        onClose={handleCancel}
        aria-labelledby='confirm-dialog-title'
        aria-describedby='confirm-dialog-description'
      >
        <DialogTitle id='confirm-dialog-title'>Delete Contact</DialogTitle>
        <DialogContent>
          <DialogContentText id='confirm-dialog-description'>
            Are you sure you want to delete contact "{name}"?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color='primary'>
            Cancel
          </Button>
          <Button onClick={handleConfirmDelete} color='error' autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
