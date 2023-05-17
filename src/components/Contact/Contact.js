import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations.js';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const removeContact = () => dispatch(deleteContact(contact.id));
  return (
    <div>
      <span>
        {contact.name}: {contact.phone}
      </span>
      <button type="button" onClick={removeContact}>
        Delete
      </button>
    </div>
  );
};
