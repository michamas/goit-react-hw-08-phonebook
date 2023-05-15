import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://646131cc185dd9877e3909b2.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  // We use the underscore character as the name of the first parameter,
  // because we don't need it in this operation
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      // If the request is successful, we return a promise with data
      return response.data;
    } catch (e) {
      // If the request fails, return the promise
      // which will be rejected with an error text
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
