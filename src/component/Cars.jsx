import React from 'react';

const Car = ({ children, color }) => {
    let colorInfo = '';

    if (color) {
        colorInfo = color;
    } else {
        colorInfo = 'Neant';
    }
    
    return children && (
        <div
                style={{
                    backgroundColor: 'turquoise',
                    width: '400px',
                    padding: '10px',
                    margin: '5px auto',
                }}
            >
                <p>Marque: {children}</p>
                {/*color ? <p>Couleur: {color}</p> : <p>Couleur: Neant</p>*/}
                {/*<p>Couleur: {color ? color : 'Neant'}</p>*/}
                <p>Couleur: {colorInfo}</p>
            </div>
    )
};

export default Car;
