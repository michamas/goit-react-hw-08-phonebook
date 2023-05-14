import { useEffect, useRef } from 'react';
import './App.css';
import Contacts from './Contacts/Contacts.jsx';
import { Filter } from './Filter/Filter.jsx';
import { Form } from './Form/Form.jsx';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors.js';
import { saveContactsInLocStorage } from 'utils/handleLocalStorage.js';

export const App = () => {
  const contacts = useSelector(getContacts);

  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      saveContactsInLocStorage(contacts);
    }
  }, [contacts]);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <div className="app">
      <h2>Phonebook</h2>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <Contacts />
    </div>
  );
};
