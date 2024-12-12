import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth/slice";
import contactsReducer from "./contacts/slice";
import filtersReducer from "./filters/slice";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});

export const persistor = persistStore(store);
export default store;

// import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import contactsReducer from "./contactsSlice";
// import filtersReducer from "./filtersSlice";

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filters: filtersReducer,
// });

// export const store = configureStore({
//   reducer: rootReducer,
// });
