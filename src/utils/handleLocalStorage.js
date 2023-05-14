export const saveContactsInLocStorage = contacts => {
  window.localStorage.setItem('contacts', JSON.stringify(contacts));
};

export const getContactsFromLocStorage = () => {
  return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
};
