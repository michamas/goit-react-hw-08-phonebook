import { getContactsFromLocStorage } from 'utils/handleLocalStorage.js';

const { createSlice } = require('@reduxjs/toolkit');

//=============== REDUX TOOLKIT - SLICE ========================

const initialContacts = getContactsFromLocStorage();

const contactSlice = createSlice({
  // Slice name
  name: 'contacts',
  // Initial state of the slice reducer
  initialState: initialContacts,
  // Reducer object
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

// Exporting Action Generators and Reducer
// Action generatos
export const { addContact, deleteContact } = contactSlice.actions;
// Slice generator
export const contactReducer = contactSlice.reducer;
