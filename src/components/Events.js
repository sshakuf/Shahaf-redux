import React from 'react';
import { connect } from 'react-redux';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import { getESPStatus , ESPChangeEventStartTime, ESPChangeEventEndTime, ESPSendEventsToESP} from '../actions/ESP.action.js';
import InputOption from './InputOption.js'
import OnOff from './OnOff.js'
import ESPTimePicker from './TimePicker.js'
import TimePicker from 'material-ui/TimePicker';
import FlatButton from 'material-ui/FlatButton';


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

function formatTime(date) {
        var hours = date.getHours();
        hours = hours < 10 ? "0" + hours : hours;
        var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        return hours + ":" + minutes ;
}

export const Events = React.createClass({


     getESPStatus : function() {
        this.props.getESPStatus(this.props.ip);
    },

    startTimeChange: function (e) { 
        // update state 
        this.props.ESPChangeEventStartTime(e.eventId ,formatTime(e.value));
    },

    endTimeChange: function (e) {
        this.props.ESPChangeEventEndTime(e.eventId ,formatTime(e.value));
    },


    sendEventsToESP: function (e)
    {
        this.props.ESPSendEventsToESP(this.props.ip, this.props.esp.Events);
    },

    render : function() { 
        const { esp } = this.props; 
        let result = [];
                            // <td><input data-type="time" className="cellstart" type="time" value={item.Start} onChange={(e) => this.startTimeChange(e, index)}/></td>


         esp.Events.forEach((item, index) => { 
        let startTime = parseTime(item.Start);
        let endTime = parseTime(item.End);

    // <td><TimePicker hour={startTime.getHours()} eventId={index} minute={startTime.getMinutes()} value={item.Start} onChange={this.startTimeChange}></TimePicker></td> 
             
            result.push(<div className='row' >
                            <div className='col-xs-3  onoffHeight'><OnOff isActive={item.Active} eventId={index}>></OnOff></div>
                            <div className='col-xs-8 container eventRow'>
                                <div className='row '>
                                    <div className='col-xs-4 text-center'>output:</div>
                                    <div className='col-xs-8 text-left'><InputOption selectedInput={item.input} eventId={index}></InputOption></div>
                                </div>
                                <div className='row'>                                
                                    <div className='col-xs-4 text-center'>Start Time:</div>
                                    <div className='col-xs-8 text-center'><ESPTimePicker key={'startTime'+ index} eventId={index} value={startTime}  onChange={this.startTimeChange}/></div>
                                </div>
                                <div className='row '>
                                    <div className='col-xs-4 text-center'>End Time:</div>
                                    <div className='col-xs-8 text-center'><ESPTimePicker key={'endTime'+ index} eventId={index} value={endTime}  onChange={this.endTimeChange}/></div>
                                </div>
                            </div>
                        </div>
                    );
            }
           
        );
        return  <div className="table-responsive">
                    
                    <div className="container  table">
                    <div className="row">  
                        <FlatButton className='col-xs-2' label="refresh" onClick={this.getESPStatus}/>
                        <div className='col-xs-6' />
                        <FlatButton className='col-xs-2 ' label="Update" onClick={this.sendEventsToESP} disabled={!this.props.hasChanges}/>
                    </div>
                            {result}
                    </div>
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
        ESPChangeEventStartTime,
        ESPChangeEventEndTime,
        ESPSendEventsToESP
    })(Events);
