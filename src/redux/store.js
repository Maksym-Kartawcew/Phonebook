import { configureStore } from '@reduxjs/toolkit';

import { contactsSliceReducer } from './contactSlice';
import { filterSliceReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsSliceReducer,
    filter: filterSliceReducer,
  },
});
