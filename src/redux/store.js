import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactSlice.js';
import { filterContacts } from './filterSlice.js';

//=============== REDUX TOOLKIT ========================
export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterContacts,
  },
});

//=============== JUST REDUX ========================
// Create a store extenesion to add dev tools
// const enhancer = devToolsEnhancer;
// Create store
// export const store = createStore(rootReducer, enhancer);
