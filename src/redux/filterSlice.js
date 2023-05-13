const { createSlice } = require('@reduxjs/toolkit');

const initialFilter = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilter,
  reducers: {
    filterReducer(state, action) {
      state = action.payload;
    },
  },
});

export const { filterReducer } = filterSlice.reducer;
export const filterContacts = filterSlice.reducer;
