import React from 'react';
import ReactDOM from 'react-dom';
import Root from './src/containers/Root.js';
import configureStore from './src/store/configureStore.js';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// ID of the DOM element to mount app on
const DOM_APP_EL_ID = 'app';

let store = configureStore();

// Render the router
ReactDOM.render((
    <Root store={store} />
), document.getElementById(DOM_APP_EL_ID));
