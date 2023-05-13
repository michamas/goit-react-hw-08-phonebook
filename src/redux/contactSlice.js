const { createSlice } = require('@reduxjs/toolkit');

//=============== REDUX TOOLKIT - SLICE ========================

const initialContacts = () => {
  return [
    { id: 'id-1', name: 'Geralt z Rivii', number: '459-12-56' },
    { id: 'id-2', name: 'Clint Eastwood', number: '443-89-12' },
    { id: 'id-3', name: 'Le Chiffre', number: '645-17-79' },
    { id: 'id-4', name: 'Buzz Lightyear ', number: '227-91-26' },
    { id: 'id-5', name: 'Merida Waleczna', number: '223-91-26' },
  ];
};

const contactSlice = createSlice({
  // Slice name
  name: 'contacts',
  // Initial state of the slice reducer
  initialState: initialContacts(),
  // Reducer object
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(id) {
        return {
          payload: {
            type: 'contact/deleteContact',
            payload: id,
          },
        };
      },
    },
  },
  deleteContact(state, action) {
    const index = state.findIndex(contact => contact.id === action.payload);
    state.splice(index, 1);
  },
});

// Exporting Action Generators and Reducer
// Action generatos
export const { addContact, deleteContact } = contactSlice.actions;
// Slice generator
export const contactReducer = contactSlice.reducer;
