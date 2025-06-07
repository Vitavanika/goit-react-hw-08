import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <nav style={{ display: 'inline-block' }}>
      <NavLink to='/register' style={{ marginRight: 10 }}>
        Register
      </NavLink>
      <NavLink to='/login'>Log In</NavLink>
    </nav>
  );
};

export default AuthNav;
