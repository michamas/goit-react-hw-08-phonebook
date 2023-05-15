export const getContacts = state => {
  if (state.filter) {
    return state.contacts.items.filter(contact =>
      contact.name.toLowerCase().includes(state.filter.toLowerCase())
    );
  } else {
    return state.contacts.items;
  }
};

export const getIsLoading = state => state.contacts.isLoading;

export const getError = state => state.contacts.error;

export const getFilter = state => state.filter;
