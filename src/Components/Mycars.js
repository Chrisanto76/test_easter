import { Component } from 'react';
import Car from './Cars';
 
//create state 
class Mycars extends Component {
    state = {
        voitures: [
            { name: 'Ford', color: 'red', year: '2000' },
            { name: 'Mercedes', color: 'back', year: '2012' },
            { name: 'Peugeot', color: 'green', year: '2020' },
        ],
        titre: 'Mon Catalogue Voitures 2'
    };

    addTenYears = () => {

        const upDatedState = this.state.voitures.map((param) => {
            return param.year-= 10;
        })

        //setstate permet a react de comprendre qu'une modificqtion est faite
        this.setState({
            upDatedState
        })
    };

    render() {

        const year = new Date().getFullYear();

        return (
            <div>
                <h2 className='big'>{this.state.titre}</h2>

                {
                    this.state.voitures.map((voiture, index) => {
                        return (
                            <div key={index}>
                                <Car brand={voiture.name} color={voiture.color} year={year - voiture.year + ' ans'} />
                            </div>
                        )
                    })
                }
                <button className='butt' onClick={this.addTenYears}> + 10 ans</button>
            </div>    
        );
    }
}

export default Mycars;
