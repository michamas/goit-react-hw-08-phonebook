import Contacts from 'components/Contacts/Contacts.jsx';
import { Filter } from 'components/Filter/Filter.jsx';
import { Form } from 'components/Form/Form.jsx';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations.js';
import { selectContacts } from 'redux/selectors.js';

export const HomePage = () => {
  const dispatch = useDispatch();
  // Get state parts
  const { isLoading } = useSelector(selectContacts);

  // Call the operation
  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  return <div>HOME PAGE</div>;
};
