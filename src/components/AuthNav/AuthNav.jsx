import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <nav>
      <Button component={NavLink} to='/register' color='inherit'>
        Register
      </Button>
      <Button component={NavLink} to='/login' color='inherit'>
        Log In
      </Button>
    </nav>
  );
};

export default AuthNav;
