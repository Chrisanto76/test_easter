import { Component } from 'react';
import Car from './Cars';

class Mycars extends Component {
    state = {
        voitures: [
            { name: 'Ford', color: 'red', year: '2000' },
            { name: 'Mercedes', color: 'back', year: '2012' },
            { name: 'Peugeot', color: 'green', year: '2020' },
        ],
    };

    addTenYears = () => {
        console.log('active');
    };

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>

                <button onClick={this.addTenYears}> + 10 ans</button>

                <Car
                    color={this.state.voitures[0].color}
                    year={this.state.voitures[0].year}
                >
                    {this.state.voitures[0].name}
                </Car>
                <Car
                    color={this.state.voitures[1].color}
                    year={this.state.voitures[1].year}
                >
                    {this.state.voitures[1].name}
                </Car>
                <Car
                    color={this.state.voitures[2].color}
                    year={this.state.voitures[2].year}
                >
                    {this.state.voitures[2].name}
                </Car>
            </div>
        );
    }
}

export default Mycars;
