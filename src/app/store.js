import { configureStore } from '@reduxjs/toolkit';

import campersReducer from '../redux/campers/campersSlice';
import filtersReducer from '../redux/filters/filtersSlice';

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    filters: filtersReducer,
  },
});
