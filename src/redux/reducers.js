import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContacts } from './actions.js';

const initialContacts = () => {
  return [
    { id: 'id-1', name: 'Geralt z Rivii', number: '459-12-56' },
    { id: 'id-2', name: 'Clint Eastwood', number: '443-89-12' },
    { id: 'id-3', name: 'Le Chiffre', number: '645-17-79' },
    { id: 'id-4', name: 'Buzz Lightyear ', number: '227-91-26' },
    { id: 'id-5', name: 'Merida Waleczna', number: '223-91-26' },
  ];
};

const initialFilter = '';

//REDUX TOOLKIT
export const contactsReducer = createReducer(initialContacts(), {
  [addContact]: (state, action) => {
    state.push(action.payload);
  },
  [deleteContact]: (state, action) => {
    state.filter(({ id }) => id !== action.payload);
    console.log('deleted?');
  },
});
// JUST REDUX
// export const contactsReducer = (state = initialContacts, action) => {
//   switch (action.type) {
//     case 'contacts/addContact':
//       return [...state, action.payload];
//     case 'contacts/deleteContact':
//       return state.filter(contact => contact.id !== action.payload);
//     default:
//       return state;
//   }
// };

export const filterReducer = createReducer(initialFilter, {
  [filterContacts]: (state, action) => (state = action.payload),
});

// JUST REDUX
// root reducer
// export const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });
