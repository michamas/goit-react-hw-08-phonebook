import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { useAuth } from 'components/hooks/useAuth.js';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/phonebook">
          Phonebook
        </NavLink>
      )}
    </nav>
  );
};
