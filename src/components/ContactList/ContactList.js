import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors.js';
import css from './ContactList.module.css';
import { Contact } from 'components/Contact/Contact.js';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  return (
    <ul className={css.contacts}>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </ul>
  );
};
