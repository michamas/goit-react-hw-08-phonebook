import { useEffect } from 'react';
import './App.css';
import Contacts from './Contacts/Contacts.jsx';
import { Filter } from './Filter/Filter.jsx';
import { Form } from './Form/Form.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors.js';
import { fetchContacts } from 'redux/operations.js';
// import { ContactList } from './ContactList/ContactList.js';

export const App = () => {
  const dispatch = useDispatch();
  // Get state parts
  const { isLoading } = useSelector(selectContacts);

  // Call the operation
  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  return (
    <div className="app">
      <h2>Phonebook</h2>
      {isLoading && <p>Loading...</p>}
      {/* {error && <p>{error}</p>}
      <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p> */}{' '}
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <Contacts />
      {/* <ContactList /> */}
    </div>
  );
};
