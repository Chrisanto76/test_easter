import React, { Component } from 'react';
import './App.css';
import Mycars from './component/Mycars';

class App extends Component {
    state = {
        title: 'Mon catalogue voitures 2',
        color: 'green',
    };

    render() {
        return (
            <div className='App'>
                <Mycars color={this.state.color} title={this.state.title} />
            </div>
        );
    }
}

export default App;
