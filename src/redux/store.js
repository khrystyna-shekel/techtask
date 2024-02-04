import { catalogReducer } from "./cars/slice";
import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "favourites",
  version: 1,
  storage,
  whitelist: ["favouritesList"],
};

const persistedReducer = persistReducer(persistConfig, catalogReducer);

export const store = configureStore({
  reducer: {
    catalog: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // devTools: process.env.NODE_ENV !== "production",
});

export let persistor = persistStore(store);
