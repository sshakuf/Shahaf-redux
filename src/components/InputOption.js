import React from 'react';
import { connect } from 'react-redux';
import { ESPChangeEvnetInput } from '../actions/ESP.action.js';

export const InputOption = React.createClass({
     changeInput : function(e) {
         
        // // get the new selectedInput
        let inputName = e.target.value;
        let inputNum = -1;
        for (var index =0; index < this.props.esp.espDevice.PortsInfo.length ; index++) {
            if (this.props.esp.espDevice.PortsInfo[index].Name == inputName)
            {
                inputNum = index;
                break; 
            }

        } 
        
        this.props.ESPChangeEvnetInput(this.props.eventId, inputNum);

    },

    render : function() {

        var eventId = this.props.eventId;
        var results = this.props.esp.espDevice.PortsInfo.map(function (item, index){
            return <option  key={'inputoption'+eventId+item.Name} 
                            value={item.Name }
                            >
                                {item.Name}
                            </option>;
        });
        
        return  <select value={this.props.esp.espDevice.PortsInfo[this.props.selectedInput].Name}
                        ref={'selectInput' + eventId}
                        onChange={this.changeInput}>
                    {results}
                </select>;
    }
}); 




function mapStateToProps(state) {
    return {
        esp : state.app.esp,
        ip : state.app.ip
    }
}

export default connect(mapStateToProps, {ESPChangeEvnetInput})(InputOption);
