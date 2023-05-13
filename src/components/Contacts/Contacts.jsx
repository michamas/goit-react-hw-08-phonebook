import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors.js';
import css from './Contacts.module.css';
import { deleteContact } from 'redux/contactSlice.js';

const Contacts = () => {
  const dispatch = useDispatch();
  // get array of contacts from reudx state
  const contacts = useSelector(getContacts);
  // console.log('🚀 ~ contacts:', contacts);
  // get filter from redux state
  const filter = useSelector(getFilter);
  // console.log('🚀 ~ filter:', filter);
  // determine the array of contacts that need to be displayed
  const filteredContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.replace(/-|\s/g, '').includes(filter.replace(/-|\s/g, ''))
  );

  const removeContact = id => dispatch(deleteContact(id));

  return (
    <>
      <ul className={css.contacts}>
        {filteredContacts.map(({ id, name, number }) => (
          <li key={id}>
            {name}: {number}
            <button type="button" onClick={() => removeContact(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Contacts;
