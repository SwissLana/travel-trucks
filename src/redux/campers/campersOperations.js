import { createAsyncThunk } from '@reduxjs/toolkit';

import { getCamperById, getCampers } from '../../api/campersApi';

export const fetchCampers = createAsyncThunk(
  'campers/fetchAll',
  async (params = {}, thunkAPI) => {
    try {
      return await getCampers(params);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message ?? error.message,
      );
    }
  },
);

export const fetchCamperById = createAsyncThunk(
  'campers/fetchById',
  async (camperId, thunkAPI) => {
    try {
      return await getCamperById(camperId);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message ?? error.message,
      );
    }
  },
);
