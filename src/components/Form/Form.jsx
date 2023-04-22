import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import PropTypes from 'prop-types';
const { useState } = require('react');

export const Form = ({ addContact, contacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

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
    // const { name, number } = this.state;
    // const { addContact, contacts } = this.props;

    //log whats been set by handleChange
    console.log(`Name: ${name}, number: ${number}`);

    const newContact = {
      name: name,
      number: number,
      id: nanoid(),
    };

    let isContactAlready = false;

    contacts.forEach(contact => {
      if (contact.name.toLowerCase() === newContact.name.toLowerCase()) {
        Notify.info(`${newContact.name} is already in your phonebook.`);
        // return;
        isContactAlready = true;
      }
      // } else {
      //   console.log('esle');
      //   addContact(newContact);
      // }
    });

    if (!isContactAlready) {
      addContact(newContact);
    } else {
      Notify.info('This contact already exists.');
    }

    resetState();
  };

  // reset state to initial state
  const resetState = () => {
    setName('');
    setNumber('');
  };

  const nameID = nanoid();
  const numberID = nanoid();

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={nameID}>
        Name:
        <input
          id={nameID}
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label htmlFor={numberID}>
        Phone number:
        <input
          id={numberID}
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

Form.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  addContact: PropTypes.func,
};
