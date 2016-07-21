import React from 'react';
import { connect } from 'react-redux';
import { getESPStatus } from '../actions/ESP.action.js';
import InputOption from './InputOption.js'
import OnOff from './OnOff.js'

export const Events = React.createClass({
     remove : function() {
        this.props.getESPStatus(this.props.ip);
    },

    render : function() {
        const { esp } = this.props;
        let result = [];

//                              
        
         esp.Events.forEach((item, index) => {
            result.push(<tr key={'eventtablerow-' + index}>
                            <td> {item.id} </td>
                            <td><OnOff isActive={item.Active} eventId={index}>></OnOff></td>
                            <td><InputOption selectedInput={item.input} eventId={index}></InputOption></td>
                            <td>{item.Start}</td>
                            <td>{item.End}</td>
                            <td>{item.Interval}</td>
                        </tr>
                    );
            }
        );
        return  <div className="table-responsive">
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
                    </table></div>;
    }
});




function mapStateToProps(state) {
    return {
        esp : state.app.esp,
        ip : state.app.ip
        
    }
}
// function mapStateToActions() {
//     return {
//         remove: removeItem,
//     }
// }

export default connect(mapStateToProps, {getESPStatus})(Events);
