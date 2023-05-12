import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer, filterReducer } from './reducers.js';

/*
STORE - contains complete app state
        - state access methods
        - action dispatch methods
*/

// Create a store extenesion to add dev tools
// const enhancer = devToolsEnhancer;
// Create store
// export const store = createStore(rootReducer, enhancer);

// REDUX TOOLKIT
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
