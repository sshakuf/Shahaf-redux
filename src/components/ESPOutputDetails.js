import React from 'react';
import { connect } from 'react-redux';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import { getESPStatus , ESPSetOutputPortData} from '../actions/ESP.action.js';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '100%',
    height: '100%',
    overflowY: 'auto',
    marginBottom: 24,
  },

};

export const ESPOutputDetails = React.createClass({

    getClass : function(val)
    {
        if (val == '1')
            return 'switchOn';
        
        return 'switchOff';
    },

     SetESPPinOutput : function(e) {
        let v = e.value == '1' ? '0' : '1';
       this.props.ESPSetOutputPortData(this.props.ip, e.index, v);
    },


    render : function() {
         
        const { esp } = this.props; 
        return  <Paper zDepth={2}>
                    {esp.PortsInfo.map((tile, index) => (
                        <TextField hintText={tile.Name} style={style} underlineShow={false} />
                        <Divider />
                    ))}
                    </Paper>;
    }
});


 

function mapStateToProps(state, ownProps) {
    return {
        esp : state.app.esp.espDevice,
        ip : state.app.esp.ip,
        hasChanges: state.app.esp.hasChanges,
    }
}

export default connect(mapStateToProps, 
    {
        ESPSetOutputPortData,
    })(ESPOutputDetails);
