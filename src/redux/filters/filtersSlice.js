import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: '',
  form: '',
  engine: '',
  transmission: '',
  equipment: [],
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    applyFilters(state, action) {
      state.location = action.payload.location;
      state.form = action.payload.form;
      state.engine = action.payload.engine;
      state.transmission = action.payload.transmission;
      state.equipment = action.payload.equipment;
    },

    resetFilters() {
      return initialState;
    },
  },
});

export const { applyFilters, resetFilters } = filtersSlice.actions;

export default filtersSlice.reducer;
