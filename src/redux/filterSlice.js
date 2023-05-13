const { createSlice } = require('@reduxjs/toolkit');

const initialFilter = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilter,
  reducers: {
    setFilter(state, action) {
      return (state = action.payload);
    },
  },
});

// Exporting Action Generators and Reducer
export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
