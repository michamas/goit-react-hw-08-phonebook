import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/actions.js';
import { getContacts } from 'redux/selectors.js';
const { useState } = require('react');

export const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  //REDUX
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);

        break;
      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const newContact = {
      name: name,
      number: number,
      id: nanoid(),
    };

    let isContactAlready = false;

    contacts.forEach(contact => {
      if (contact.name.toLowerCase() === newContact.name.toLowerCase()) {
        Notify.info(`${newContact.name} is already in your phonebook.`);
        isContactAlready = true;
      }
    });

    if (!isContactAlready) {
      dispatch(addContact(newContact));
      Notify.info(
        `Done, ${name} with number ${number} was added to the phonebook.`
      );
    }

    resetState();
  };

  // reset state to initial state
  const resetState = () => {
    setName('');
    setNumber('');
  };

  // const nameID = nanoid();
  // const numberID = nanoid();

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          // id={nameID}
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          autoComplete="off"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Phone number:
        <input
          // id={numberID}
          value={number}
          onChange={handleChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};
