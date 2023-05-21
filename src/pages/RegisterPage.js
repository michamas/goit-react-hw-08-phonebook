import { RegisterForm } from 'components/RegisterForm/RegisterForm.js';
import { Helmet } from 'react-helmet-async';
// import { Helmet } from 'react-helmet-async';

export default function RegisterPage() {
  return (
    <div>
      <Helmet>
        <title>REGISTRATION</title>
      </Helmet>

      <RegisterForm />
    </div>
  );
}
