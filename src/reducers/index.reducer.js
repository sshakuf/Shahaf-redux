
import { combineReducers } from 'redux';
import { espReducer, default_state as esp_state } from '../reducers/ESP.reducer.js';

export const default_state = {
    ...esp_state   
};

export const rootReducer = combineReducers({
    esp : espReducer
})