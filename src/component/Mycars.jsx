import React, { Component } from 'react';
import Car from './Cars';

class Mycars extends Component {
    render() {
        return (
            <div>
                <h1 style={{color: this.props.color}}>{this.props.title}</h1>
                <Car color= "red">Ford</Car>
                <Car>Bentley</Car>
                <Car color= "green"></Car>
                
            </div>
        );
    }
}

export default Mycars;
