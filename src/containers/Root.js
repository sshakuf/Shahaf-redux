import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import App from './App.js';
import List from '../components/List.js';
import Events from '../components/Events.js';
import ESPPortPanel from '../components/ESPPortPanel.js';
import ESPPortsNamesPanel from '../components/ESPPortsNamesPanel.js';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

const Root = React.createClass({
    render: function() {
        const { store } = this.props;
        const { history } = this.props;

        return  <Provider store={store}>
            <Router history={ history }>
                <Route path='/' component={App}>
                    <IndexRoute component={Events}/>
                    <Route path='/' component={Events}/>
                    <Route path='/list' component={List}/>
                    <Route path='/Ports' component={ESPPortPanel}/>
                    <Route path='/ports_name' component={ESPPortsNamesPanel}/>
                </Route>
            </Router>
        </Provider>;

    }
});

Root.propTypes = {
    store :  PropTypes.object.isRequired,
    history : PropTypes.object.isRequired
};

export default Root;