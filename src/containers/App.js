import React from 'react';
import List from '../components/List.js';
import AddItem from '../components/AddItem.js';
import Events from '../components/Events.js';

export const App = React.createClass({
    render : function() {
        return  <section className='app-containers'>
                    <Events />
                    {this.props.children}
                </section>;
    }
});


