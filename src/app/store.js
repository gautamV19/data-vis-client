import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import layersSlice from '../Features/layersSlice';


const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const reducer = combineReducers({
  layers: layersSlice,
});

const persitedReducer = persistReducer(persistConfig, reducer);

export default configureStore({
  reducer: persitedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }),
});
