import { createAction } from '@reduxjs/toolkit';

// export const addContact = ({ newContact }) => {
//   return {
//     type: 'contact/addContact',
//     payload: {
//       id: nanoid(),
//       name: newContact.name,
//       number: newContact.number,
//     },
//   };
// };

// export const deleteContact = id => {
//   return {
//     type: 'contact/deleteContact',
//     payload: id,
//   };
// };

// export const filterContacts = value => {
//   return {
//     type: 'filter/filterContacts',
//     payload: value,
//   };
// };

// REDUX TOOLKIT
const addContact = createAction('contact/addContact');
const deleteContact = createAction('contact/deleteContact');
const filterContacts = createAction('contact/filterContacts');

export { addContact, deleteContact, filterContacts };
