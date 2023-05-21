import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store.js';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
// import { HelmetProvider } from 'react-helmet-async';

/* 
PROVIDER - binds components, 
so that they can access the store and its methods
*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          {/* <HelmetProvider> */}
          <App />
          {/* </HelmetProvider> */}
        </Provider>
      </PersistGate>
    </BrowserRouter>
  </React.StrictMode>
);
