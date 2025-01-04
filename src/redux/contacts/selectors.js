import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items; // Gets all contacts
export const selectIsLoading = (state) => state.contacts.isLoading; // Loading state
export const selectError = (state) => state.contacts.error; // Error state

export const selectFilter = (state) => state.contacts.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    if (!filter) return contacts;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
