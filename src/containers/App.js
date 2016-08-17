import React from 'react';
import { connect } from 'react-redux';
import List from '../components/List.js';
import AddItem from '../components/AddItem.js';
import MenuESP from '../components/Menu.js';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { ESPSetIp, getESPStatus} from '../actions/ESP.action.js';



export const App = React.createClass({

    getInitialState: function(){
        // this.state = {value24: null, value12: null};
        var ip = this.props.app.esp.ip;
        if (typeof (this.props.query) !== 'undefined') {
            if (typeof(this.props.query.ip) !== 'undefined')
            {
                this.props.ESPSetIp(this.props.query.ip);
                ip = this.props.query.ip;
            }
        }

        this.props.getESPStatus(ip);       
        return {};
    },


    componentDidMount: function(){
    },


    render : function() {
        return  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <section className='app-containers'>
            <MenuESP/>
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

export default connect(mapStateToProps, {ESPSetIp, getESPStatus})(App);

