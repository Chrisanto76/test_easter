import React from 'react';

function Wrapper({ children }) {
    //console.log(children);
    return (
        <div
            style={{
                backgroundColor: 'turquoise',
                width: '400px',
                padding: '10px',
                margin: '5px auto',
            }}
        >
            {children}
        </div>
    );
}

export default Wrapper;
