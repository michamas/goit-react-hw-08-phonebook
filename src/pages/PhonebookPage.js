import Contacts from 'components/Contacts/Contacts.jsx';
import { Filter } from 'components/Filter/Filter.jsx';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'components/Form/Form.jsx';
import { fetchContacts } from 'redux/operations.js';
import { selectContacts } from 'redux/selectors.js';

export const PhonebookPage = () => {
  const { isLoading } = useSelector(selectContacts);

  return (
    <div className="app">
      <Form />
      <Filter />
      {isLoading && <p>Loading...</p>}
      <Contacts />
      {/* <ContactList /> */}
    </div>
  );
};
