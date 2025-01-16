import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contactsSlice";
import filterReducer from "./filtersSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"],
};

const persistedContactsReducer = persistReducer(persistConfig, contactReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filters: filterReducer,
  },
});

export const persistor = persistStore(store);
