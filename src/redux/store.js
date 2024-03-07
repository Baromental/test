// store.js
import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contact/contactsSlice';
import { authReducer } from './auth/authSlice';
;

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: authReducer,
  },
})