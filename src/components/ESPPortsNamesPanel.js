import React from 'react';
import { connect } from 'react-redux';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import { getESPStatus , ESPSetOutputPortData} from '../actions/ESP.action.js';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import OnOff from './OnOff.js'

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

export const ESPPortsNamesPanel = React.createClass({

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
        return  <div style={styles.root}>
                    <GridList
                    cols={3}
                    cellHeight={100}
                    padding={4}
                    style={styles.gridList}
                    >
                    {esp.PortsInfo.map((tile, index) => (
                        <GridTile
                        key={tile.Name}

                        titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                        >
                        <div className={this.getClass(tile.value)+  ' divCenter'} onClick={this.SetESPPinOutput.bind(this, {index:index, value:tile.value})}>
                        <span className='centerDiv'>
                            <span>{tile.Name}X</span>
                            <span>Off</span>
                        </span>
                        </div>
                        </GridTile>
                    ))}
                    </GridList>
                </div>;
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
        getESPStatus,
        ESPSetOutputPortData,
    })(ESPPortsNamesPanel);
