import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors.js';
import css from './Contacts.module.css';
import { deleteContact } from 'redux/operations.js';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  return (
    <>
      <ul className={css.contacts}>
        {contacts.map(contact => {
          const removeContact = () => {
            dispatch(deleteContact(contact.id));
          };
          return (
            <li key={contact.id}>
              {contact.name}: {contact.phone}
              <button type="button" onClick={removeContact}>
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
