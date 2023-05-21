import { LoginForm } from 'components/LoginForm/LoginForm.js';
import { Helmet } from 'react-helmet-async';
// import { Helmet } from 'react-helmet-async';

export default function LoginPage() {
  return (
    <div>
      <Helmet>
        <title>LOGIN</title>
      </Helmet>
      <LoginForm />
    </div>
  );
}
