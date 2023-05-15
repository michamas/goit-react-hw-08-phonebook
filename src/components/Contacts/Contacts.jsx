import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors.js';
import css from './Contacts.module.css';
import { deleteContact } from 'redux/operations.js';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const removeContact = id => dispatch(deleteContact(id));

  return (
    <>
      <ul className={css.contacts}>
        {contacts.map(contact => {
          return (
            <li key={contact.id}>
              {contact.name}: {contact.phone}
              <button type="button" onClick={() => removeContact(contact.id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Contacts;
