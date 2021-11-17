import { configureStore } from "@reduxjs/toolkit";
import { reducerContacts } from './contacts/contactsReducer';


const store = configureStore({
  reducer: { contacts: reducerContacts },
  // devTools: process.env.NODE_ENV !== "production", // => true || false
});

export default store;