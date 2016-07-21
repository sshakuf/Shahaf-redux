// import React from 'react';
// import { connect } from 'react-redux';
// import { addNewItem } from '../actions/list.action.js';

// export const AddItem = React.createClass({
//     add : function() {
//         let text = this.refs.item_text.value;

//         if (text === '') return;

//         this.props.addNewItem(text);
//     },

//     render : function() {

//         return  <div>
//                     <input type='text'
//                            ref='item_text'
//                            placeholder='type more about Anna'
//                            />
//                     <button onClick={this.add}>
//                         Add
//                     </button>
//                 </div>;
//     }
// });

// export default connect(null, {
//     addNewItem
// })(AddItem);