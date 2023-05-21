import Contacts from 'components/Contacts/Contacts.jsx';
import { Filter } from 'components/Filter/Filter.jsx';
import { useSelector } from 'react-redux';
import { Form } from 'components/Form/Form.jsx';
import { selectContacts } from 'redux/selectors.js';
// import { Helmet } from 'react-helmet-async';

export default function PhonebookPage() {
  const { isLoading } = useSelector(selectContacts);

  return (
    <>
      <h1>YOUR CONTATCS</h1>
      <div className="app">
        <Form />
        <Filter />
        {isLoading && <p>Loading...</p>}
        <Contacts />
        {/* <ContactList /> */}
      </div>
    </>
  );
}
