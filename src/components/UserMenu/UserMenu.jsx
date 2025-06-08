import { Button, Typography, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);

  return (
    <Box display='flex' alignItems='center' gap={2}>
      <Typography variant='subtitle1'>Welcome, {name}</Typography>
      <Button
        variant='outlined'
        color='inherit'
        onClick={() => dispatch(logout())}
      >
        Log Out
      </Button>
    </Box>
  );
};

export default UserMenu;
