import { useEffect, useState } from 'react';
import './App.css';
import Contacts from './Contacts/Contacts.jsx';
import { Filter } from './Filter/Filter.jsx';
import { Form } from './Form/Form.jsx';

export const App = () => {
  const [contacts, setContacts] = useState([]);

  //[] -> componentDidMount
  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(savedContacts);
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
    // console.log('mounting phase');
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
    // console.log('contacts changed');
  }, [contacts]);

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
