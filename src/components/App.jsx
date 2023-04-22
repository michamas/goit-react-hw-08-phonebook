import { useEffect, useState } from 'react';
import './App.css';
import Contacts from './Contacts/Contacts.jsx';
import { Filter } from './Filter/Filter.jsx';
import { Form } from './Form/Form.jsx';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  //[] -> componentDidMount
  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(savedContacts);
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
    console.log('mounting phase');
  }, []);

  //[value] -> componentDidUpdate
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
    console.log('contacts changed');
  }, [contacts]);

  const addContact = newContact => {
    setContacts([...contacts, newContact]);
  };

  const deleteContact = idToDelete => {
    const deletedContact = contacts.find(({ id }) => id === idToDelete);
    const contactsWithoutDeleted = contacts.filter(
      contact => contact.id !== idToDelete
    );

    setContacts([...contactsWithoutDeleted]);
    console.log(`${deletedContact} was deleted.`);
  };

  const handleFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = filterContacts();

  return (
    <div className="app">
      <h2>Phonebook</h2>
      <Form contacts={contacts} addContact={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilter} />
      <Contacts contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
};
