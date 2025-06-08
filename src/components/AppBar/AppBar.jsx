import { AppBar as MuiAppBar, Box, Toolbar, Typography } from '@mui/material';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <MuiAppBar position='static' color='primary'>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box display='flex' alignItems='center' gap={2}>
          <Typography variant='h6' component='div'>
            Phonebook
          </Typography>
          <Navigation />
        </Box>
        <Box>{isLoggedIn ? <UserMenu /> : <AuthNav />}</Box>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
