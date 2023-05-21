import Contacts from 'components/Contacts/Contacts.jsx';
import { Filter } from 'components/Filter/Filter.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'components/Form/Form.jsx';
import { selectContacts } from 'redux/selectors.js';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations.js';
// import { Helmet } from 'react-helmet-async';

export default function PhonebookPage() {
  const { isLoading } = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <Helmet>
        <title>YOUR CONTATCS</title>
      </Helmet>
      <div className="app">
        <Form />
        <Filter />
        {isLoading && <p>Loading...</p>}
        <Contacts />
        {/* <ContactList /> */}
      </div>
    </>
  );
}
