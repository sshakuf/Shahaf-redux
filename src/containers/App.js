import React from 'react';
import List from '../components/List.js';
import AddItem from '../components/AddItem.js';
import Events from '../components/Events.js';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export const App = React.createClass({
    render : function() {
        return  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <section className='app-containers'>
                    <Events />
                    {this.props.children}
                </section>
                </MuiThemeProvider>;
    }
});


