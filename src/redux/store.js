import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReduser from './contactsSlice';
import filterReducer from './filterSlice';

const rootReducer = combineReducers({
  contacts: contactsReduser,
  filter: filterReducer,
})

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReduser = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReduser,

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;