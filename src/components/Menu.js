import React from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';

export const Menu = React.createClass({

    render : function() {
        return  <AppBar
    title="Home Controller"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />;
    }
});

function mapStateToProps(state) {
    return {
        app : state.app,
    }
}

export default connect(mapStateToProps)(Menu);
