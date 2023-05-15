import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors.js';
import css from './Contacts.module.css';
import { deleteContact } from 'redux/operations.js';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const removeContact = id => {
    return dispatch(deleteContact(id));
  };

  return (
    <>
      <ul className={css.contacts}>
        {contacts.map(contact => {
          return (
            <li key={contact.id}>
              {contact.name}: {contact.phone}
              <button
                type="button"
                onClick={() => {
                  console.log(contact.id, contact.name);
                  removeContact(contact.id);
                }}
              >
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
