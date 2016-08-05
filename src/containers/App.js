import React from 'react';
import { connect } from 'react-redux';
import List from '../components/List.js';
import AddItem from '../components/AddItem.js';
import Menu from '../components/Menu.js';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import { ESPSetIp} from '../actions/ESP.action.js';


export const App = React.createClass({

    getInitialState: function(){
        // this.state = {value24: null, value12: null};
        
        if (typeof (this.props.query) !== 'undefined') {
            if (typeof(this.props.query.ip) !== 'undefined')
            {
                this.props.ESPSetIp(this.props.query.ip);
            }
        }

        return {};
    },



    render : function() {
        return  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <section className='app-containers'>
            <Menu/>
            <div className="container-fluid">
                {this.props.children}
            </div>
                </section>
                </MuiThemeProvider>;
    }
});

function mapStateToProps(state, ownProps) {
    return {
        app : state.app,
        query : ownProps.location.query
    }
}

export default connect(mapStateToProps, {ESPSetIp})(App);

