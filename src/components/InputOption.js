import React from 'react';
import { connect } from 'react-redux';
import { ESPChangeEvnetInput } from '../actions/ESP.action.js';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


export const InputOption = React.createClass({
     changeInput : function(event, index, value)  {
         
        // // get the new selectedInput
        let inputName = value;
        let inputNum = -1;
        for (var i =0; i < this.props.esp.espDevice.PortsInfo.length ; i++) {
            if (this.props.esp.espDevice.PortsInfo[i].Name == inputName)
            {
                inputNum = i;
                break; 
            }

        } 
        
        this.props.ESPChangeEvnetInput(this.props.eventId, inputNum);

    },

    render : function() {

        var eventId = this.props.eventId;
        var results = this.props.esp.espDevice.PortsInfo.map(function (item, index){
            return <MenuItem  key={'inputoption'+eventId+item.Name} 
                            value={item.Name }
                            primaryText={item.Name}/>
        });
        
        return  <SelectField  
                        value={this.props.esp.espDevice.PortsInfo[this.props.selectedInput].Name}
                        ref={'selectInput' + eventId}
                        onChange={this.changeInput}>
                    {results}
                </SelectField>;
    }
}); 




function mapStateToProps(state) {
    return {
        esp : state.app.esp,
        ip : state.app.ip
    }
}

export default connect(mapStateToProps, {ESPChangeEvnetInput})(InputOption);
