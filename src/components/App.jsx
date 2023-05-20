import { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors.js';
import { fetchContacts } from 'redux/operations.js';
import { Form, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout.js';
import { HomePage } from 'pages/HomePage.js';
import { LoginPage } from 'pages/LoginPage.js';
import { RegisterPage } from 'pages/RegisterPage.js';
import { PhonebookPage } from 'pages/PhonebookPage.js';
import Contacts from './Contacts/Contacts.jsx';
import { Filter } from './Filter/Filter.jsx';
// import { ContactList } from './ContactList/ContactList.js';

export const App = () => {
  // const dispatch = useDispatch();
  // // Call the operation
  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="phonebook" element={<PhonebookPage />} />
      </Route>
    </Routes>
  );
};
