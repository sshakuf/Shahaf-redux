import React from 'react';
import TimePicker from 'material-ui/TimePicker';
import { connect } from 'react-redux';
import { getESPStatus , ESPChangeEvnetStartTime} from '../actions/ESP.action.js';

export const  ESPTimePicker =  React.createClass ( {

    getInitialState: function(){
        // this.state = {value24: null, value12: null};
        return {value24: this.props.value, value12: null};
    },

  handleChangeTimePicker24 : function (event, date) {
    this.setState({value24: date});
    this.props.onChange({eventId :this.props.eventId, value:date}, event)
  },

  render() {
    return (
      <div>
        <TimePicker
          format="24hr"
          hintText="24hr Format"
          width='10px'
          value={this.props.value}
          onChange={this.handleChangeTimePicker24}
        />
      </div>
    );
  }
});



function mapStateToProps(state) {
    return {
        esp : state.app.esp,
        ip : state.app.ip
    }
}

export default connect(mapStateToProps, {})(ESPTimePicker);
