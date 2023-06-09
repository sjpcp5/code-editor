import { combineReducers } from 'redux';
import { darkModeReducer } from './slices/dark-mode/darkMode';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['darkMode'],
};
const combinedReducers = combineReducers({
    darkMode: darkModeReducer,
});
const persistedReducer = persistReducer(persistConfig, combinedReducers);

export default persistedReducer;