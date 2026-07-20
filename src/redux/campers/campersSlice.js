import { createSlice } from '@reduxjs/toolkit';

import { fetchCamperById, fetchCampers } from './campersOperations';

const initialState = {
  items: [],
  total: 0,
  page: 0,
  selectedCamper: null,
  isLoading: false,
  error: null,
  isDetailsLoading: false,
  detailsError: null,
};

const campersSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    clearSelectedCamper(state) {
      state.selectedCamper = null;
      state.detailsError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state, action) => {
        const requestedPage = action.meta.arg?.page ?? 1;

        state.isLoading = true;
        state.error = null;

        if (requestedPage === 1) {
          state.items = [];
          state.total = 0;
          state.page = 0;
        }
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        const requestedPage = action.meta.arg?.page ?? 1;

        state.isLoading = false;
        state.total = action.payload.total;
        state.page = requestedPage;

        if (requestedPage === 1) {
          state.items = action.payload.items;
        } else {
          state.items.push(...action.payload.items);
        }
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Failed to load campers.';
      })

      .addCase(fetchCamperById.pending, (state) => {
        state.isDetailsLoading = true;
        state.detailsError = null;
        state.selectedCamper = null;
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.isDetailsLoading = false;
        state.selectedCamper = action.payload;
      })
      .addCase(fetchCamperById.rejected, (state, action) => {
        state.isDetailsLoading = false;
        state.detailsError = action.payload || 'Failed to load camper.';
      });
  },
});

export const { clearSelectedCamper } = campersSlice.actions;

export default campersSlice.reducer;
