export const selectContacts = state => {
  if (state.filter) {
    return state.contacts.items.filter(contact =>
      contact.name.toLowerCase().includes(state.filter.toLowerCase())
    );
  } else {
    return state.contacts.items;
  }
};

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter;
