import React from 'react';
import { connect } from 'react-redux';
import { ESPChangeEvnetActive } from '../actions/ESP.action.js';

export const OnOff = React.createClass({
     changeOnOff : function(e) {
        this.props.ESPChangeEvnetActive(this.props.eventId, this.props.isActive == '1' ? '0' : '1'); 
    },

    render : function() {
        
        return  <div className="onoffswitch">
                    <input type="checkbox" name="onoffswitch"  
                        checked={this.props.isActive == '1'} 
                        className="onoffswitch-checkbox" 
                        key={"myonoffswitch" + this.props.eventId}
                        />
                            <label className="onoffswitch-label"
                                onClick={this.changeOnOff}  
                                htmlFor={"myonoffswitch" + this.props.eventId}>
                                    <span className="onoffswitch-inner"></span>
                                    <span className="onoffswitch-switch"></span>
                            </label>
                </div>;
    }
}); 




function mapStateToProps(state) {
    return {
        esp : state.app.esp,
        ip : state.app.ip
    }
}

export default connect(mapStateToProps, {ESPChangeEvnetActive})(OnOff);
