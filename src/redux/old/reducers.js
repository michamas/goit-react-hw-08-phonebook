// import { createReducer } from '@reduxjs/toolkit';
// import { filterContacts } from './actions.js';

// const initialFilter = '';

//=============== REDUX TOOLKIT ========================
// export const filterReducer = createReducer(initialFilter, {
//   [filterContacts]: (state, action) => (state = action.payload),
// REPLACED BY IMMER
//    state.status = action.payload;
// });
// export const contactsReducer = createReducer(initialContacts(), {
//   [addContact]: (state, action) => {
//     state.push(action.payload);
//   },
//   [deleteContact]: (state, action) => {
//     return state.filter(contact => contact.id !== action.payload);
//     // REPLACED BY IMMER
//     // const index = state.findIndex(task => task.id === action.payload);
//     // state.splice(index, 1);
//   },
// });

//=============== JUST REDUX ========================
// export const contactsReducer = (state = initialContacts, action) => {
//   switch (action.type) {
//     //one way
//     case addContact.type:
//       return [...state, action.payload];
//     //second way
//     case 'contacts/deleteContact':
//       return state.filter(contact => contact.id !== action.payload);
//     default:
//       return state;
//   }
// };
// ...

// ROOT REDUCER
// export const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });
