// contacts
export const selectUserContacts = state => state.contacts.contacts;
export const selectContactsIsLoading = state => state.contacts.isLoading;
export const selectContactsError = state => state.contacts.error;
export const selectFilter = state => state.filter;
// user
export const selectUserData = state => state.auth.userData;
export const selectToken = state => state.auth.token;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectAuthIsLoading = state => state.auth.isLoading;
export const selectAuthError = state => state.auth.error;
export const selectUserMail = state => state.auth.userData.email;