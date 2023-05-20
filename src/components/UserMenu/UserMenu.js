// for logged in user

import { useAuth } from 'components/hooks/useAuth.js';
import css from './UserMenu.module.css';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations.js';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Log out
      </button>
    </div>
  );
};
