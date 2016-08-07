import React from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { push } from 'react-router-redux';

export const Menu = React.createClass({

    getInitialState: function(){
        return {open: false};
    } ,

    handleToggle : function () {
        this.setState({open: !this.state.open})
    },

    handleMenuItem: function(i){
        switch (i) {
            case 0:
                    // this.props.dispatch(push('/ports'));
                    window.location.replace(  window.location.pathname + window.location.search + '#/ports');
                break;
            case 1:
                    // this.props.dispatch(push('/'));
                    window.location.replace(  window.location.pathname + window.location.search + '#/');
                break;
        
            default:
                break;
        }
        this.setState({open: false});
        
    },


    render : function() {
        return  <AppBar
    title="Home Controller"
    iconClassNameRight="muidocs-icon-navigation-expand-more" onLeftIconButtonTouchTap={this.handleToggle}>
        <Drawer open={this.state.open}>
          <MenuItem onTouchTap={this.handleMenuItem.bind(this,0)}>Outputs</MenuItem>
          <MenuItem onTouchTap={this.handleMenuItem.bind(this,1)}>Events</MenuItem>
        </Drawer>
        <a href="#/">Edit contact</a>;
        
        </AppBar>  
    }
});

function mapStateToProps(state) {
    return {
        app : state.app,
    }
}

export default connect(mapStateToProps)(Menu);
