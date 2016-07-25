import React from 'react';
import { connect } from 'react-redux';
import { getESPStatus , ESPChangeEvnetStartTime} from '../actions/ESP.action.js';
import InputOption from './InputOption.js'
import OnOff from './OnOff.js'
import TimePicker from './TimePicker.js'


function parseTime(timeString)
{
    //console.log('parsetime - ' + timeString);
    if (timeString == '') return null;
    var d = new Date();
    var time = timeString.match(/(\d+)(?::(\d\d))?\s*(p?)/);
    d.setHours( parseInt(time[1],10) + ( ( parseInt(time[1],10) < 12 && time[4] ) ? 12 : 0) );
    d.setMinutes( parseInt(time[2],10) || 0 );
    return d;
}

export const Events = React.createClass({
     getESPStatus : function() {
        this.props.getESPStatus(this.props.ip);
    },

    startTimeChange: function (e, eventId) { 
        // update state 
        this.props.ESPChangeEvnetStartTime(e.eventId ,e.value);
    },

    endTimeChange: function (e) {
        this.props.ESPChangeEvnetStartTime(e.eventId ,e.value);
    },

    render : function() { 
        const { esp } = this.props; 
        let result = [];
                            // <td><input data-type="time" className="cellstart" type="time" value={item.Start} onChange={(e) => this.startTimeChange(e, index)}/></td>


         esp.Events.forEach((item, index) => { 
        let startTime = parseTime(item.Start);
        let endTime = parseTime(item.End);

             
            result.push(<tr key={'eventtablerow-' + index}>
                            <td> {item.id} </td>
                            <td><OnOff isActive={item.Active} eventId={index}>></OnOff></td>
                            <td><InputOption selectedInput={item.input} eventId={index}></InputOption></td>
                            <td><TimePicker hour={startTime.getHours()} eventId={index} minute={startTime.getMinutes()} value={item.Start} onChange={this.startTimeChange}></TimePicker></td> 
                            <td><TimePicker hour={endTime.getHours()} eventId={index} minute={endTime.getMinutes()} value={item.End} onChange={this.endTimeChange}></TimePicker></td> 
                            <td>{item.Interval}</td>
                        </tr> 
                    );
            }
        );
        return  <div className="table-responsive">
                <button ref="RefreshButton" onClick={this.getESPStatus}>Refresh</button>
                <table className="table">
                    <thead>
                    <tr>
                        <th className="cellid">Id</th>
                        <th className="cellactive">Active</th>
                        <th className="cellport">Port</th>
                        <th className="cellstart">Start</th>
                        <th className="cellend">End</th>
                        <th >interval Days</th>
                    </tr>
                    </thead>
                    <tbody>
                    {result}
                    </tbody>
                    </table>
                    <TimePicker></TimePicker> 
                    </div>;
    }
});




function mapStateToProps(state) {
    return {
        esp : state.app.esp.espDevice,
        ip : state.app.esp.ip
    }
}

export default connect(mapStateToProps, 
    {
        getESPStatus,
        ESPChangeEvnetStartTime
    })(Events);
