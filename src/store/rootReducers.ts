import { combineReducers } from 'redux';
import { darkModeReducer } from './slices/dark-mode/darkMode';
const combinedReducers = combineReducers({
    darkMode: darkModeReducer,
});
export default combinedReducers;