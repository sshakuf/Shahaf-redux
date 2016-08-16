import React from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { push } from 'react-router-redux';

export const MenuESP = React.createClass({

    getInitialState: function(){
        return {open: false};
    } ,


    handleMenuItem: function(i){
        switch (i) {
            case 0:
                    // this.props.dispatch(push('/ports'));
                    window.location.replace(  window.location.pathname + window.location.search + '#/ports?ip=' + this.props.app.esp.ip + "&");
                break;
            case 1:
                    // this.props.dispatch(push('/'));
                    window.location.replace(  window.location.pathname + window.location.search + '#/?ip=' + this.props.app.esp.ip+"&");
                break;
        
            default:
                break;
        }
        this.setState({open: false});
        
    },

    handleTouchTap : function (event)  {
        // This prevents ghost click.
        event.preventDefault();

        this.setState({ open: true, anchorEl: event.currentTarget });
    },

    handleRequestClose : function ()  {
        this.setState({ open: false });
    },

    render : function() {
        return  <div>
      <div>
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            <MenuItem onTouchTap={this.handleMenuItem.bind(this,0)} primaryText='Outputs'></MenuItem>
            <MenuItem onTouchTap={this.handleMenuItem.bind(this,1)} primaryText='Events'></MenuItem>
          </Menu>
        </Popover>
      </div>
<AppBar
    title="Home Controller"
    iconClassNameRight="muidocs-icon-navigation-expand-more" onLeftIconButtonTouchTap={this.handleTouchTap}>
        </AppBar>  
        </div>
    }
});

function mapStateToProps(state) {
    return {
        app : state.app,
    }
}

export default connect(mapStateToProps)(MenuESP);
