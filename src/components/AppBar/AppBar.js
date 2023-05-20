import { useAuth } from 'components/hooks/useAuth.js';
import css from './AppBar.module.css';
import { Navigation } from 'components/Navigation/Navigation.js';
import { UserMenu } from 'components/UserMenu/UserMenu.js';
import { AuthNav } from 'components/AuthNav/AuthNav.js';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
