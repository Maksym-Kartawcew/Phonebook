import { createSlice } from '@reduxjs/toolkit';
import {
  requestContactsThunk,
  addContactThunk,
  deleteContactThunk,
} from '../operations';

const initialState = {
  contacts: null,
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(requestContactsThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(requestContactsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
      })
      .addCase(requestContactsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // ------- ADD NEW CONTACT -------
      .addCase(addContactThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts.push(action.payload);
      })
      .addCase(addContactThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // ------- DELETE CONTACT -------
      .addCase(deleteContactThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        const indexDeletedContact = state.contacts.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contacts.splice(indexDeletedContact, 1);
      })
      .addCase(deleteContactThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});



export const contactsReducer = contactsSlice.reducer;
