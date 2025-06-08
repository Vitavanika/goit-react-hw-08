import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { Button } from '@mui/material';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <Button component={NavLink} to='/' color='inherit'>
        Home
      </Button>
      {isLoggedIn && (
        <Button component={NavLink} to='/contacts' color='inherit'>
          Contacts
        </Button>
      )}
    </nav>
  );
};

export default Navigation;
