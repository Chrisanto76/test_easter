const Car = ({ color, brand, year }) => {
    const colorInfo = color ? <p>Couleur: {color}</p> : <p>Couleur: "Néant"</p>;

    if (brand) {
        return (
            <div
                style={{
                    backgroundColor: '#248c9e',
                    width: '300px',
                    padding: '10px',
                    margin: '5px auto',
                    borderRadius: '5px',
                    border:'1px solid white'
                }}
            >
                <p>Marque: {brand}</p>
                <p>Age: {year}</p>
                {colorInfo}
            </div>
        );
    }

    // return null // ce return est Facultatif
};

export default Car;
