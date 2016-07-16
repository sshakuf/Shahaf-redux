import React from 'react';
import { connect } from 'react-redux';
import { removeItem } from '../actions/list.action.js';

export const List = React.createClass({
     remove : function(index) {
        this.props.remove(index);
    },

    render : function() {
        const { list } = this.props;
        let result = [];

        // for (var index= 0, len = list.length; index < len; index++) {
        //     let item = list[index];
        list.forEach((item, index) => {
            result.push(<li key={'list-' + index}> {item} <button onClick={() => this.remove(index)}>X</button></li> );
        }
        );
        return  <ul className='List'>
                    {result}
                </ul>;
    }
});

function mapStateToProps(state) {
    return {
        list : state.app.list,
        
    }
}
// function mapStateToActions() {
//     return {
//         remove: removeItem,
//     }
// }

export default connect(mapStateToProps, {remove: removeItem})(List);
