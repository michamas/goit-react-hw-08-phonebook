import { fetchContacts, addContact, deleteContact } from './operations.js';
const { createSlice } = require('@reduxjs/toolkit');

//=============== REDUX TOOLKIT - SLICE ========================

// const initialContacts = getContactsFromLocStorage();

const initialContacts = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
  console.log('pending');
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactSlice = createSlice({
  // Slice name
  name: 'contacts',
  // Initial state of the slice reducer
  initialState: initialContacts,
  // Reducer object
  // declaring external action types
  extraReducers: {
    [fetchContacts.pending](state, action) {
      state.isLoading = true;
      console.log('fetch - pending');
    },
    [addContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,

    [fetchContacts.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,

    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
      // console.log('🚀 ~ action.payload:', action.payload);
      // console.log('🚀 ~ state.items:', state.items);
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
  },
});

export const contactReducer = contactSlice.reducer;
// reducers: {
//   // Executed when the HTTP request starts
//   fetchingInProgress(state) {
//     state.isLoading = true;
//   },
//   // Will be executed if the HTTP request was successful
//   fetchingSuccess(state, action) {
//     state.isLoading = false;
//     state.error = null;
//     state.items = action.payload;
//   },
//   // Execute if HTTP request fails
//   fetchingError(state, action) {
//     state.isLoading = false;
//     state.error = action.payload;
//   },
//   // addContact(state, action) {
//   //   state.push(action.payload);
//   // },
//   // deleteContact(state, action) {
//   //   const index = state.findIndex(contact => contact.id === action.payload);
//   //   state.splice(index, 1);
//   // },
// },

// Exporting Action Generators and Reducer
// Action generatos
// export const { fetchingInProgress, fetchingSuccess, fetchingError } =
//   contactSlice.actions;
// export const { addContact, Contact } = contactSlice.actions;
// Slice generator
