// contactsSelectors.js
import { createSelector } from '@reduxjs/toolkit';

export const selectContact = (state) => state.contacts.contacts.items;
export const selectIsLoading = state => state.contacts.contacts.isLoading;
export const selectError = state => state.contacts.contacts.error;
export const selectFilter = state => state.contacts.filter;

export const selectFilteredContacts = createSelector(
  [selectContact, selectFilter],
    (contacts, filter) => {
      if (filter === '') return contacts;
    return contacts?.filter(contact => {
      return contact?.name.toLowerCase().includes(filter?.toLowerCase());
    });
  }
);