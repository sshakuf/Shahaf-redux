import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { rootReducer as app_reducer, default_state as app_state } from '../reducers/index.reducer.js';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';


export const default_state = {   
    ...app_state
};

const finalCreateStore = compose(
    applyMiddleware(thunk),
    applyMiddleware(createLogger({
        collapsed: true
    })),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

export default function configureStore(initialState) {

    initialState = {
        app : default_state
    };

    const rootReducer = combineReducers({
        app : app_reducer
    });

    return finalCreateStore(rootReducer, initialState);
}