import React from 'react';

const ColorOuput = ({red,green,blue}) => {

    let rgb = [red,green,blue]; 
    let styles = {
        backgroundColor: `rgb(${rgb})`,
    };

    return (
        <div className='colorOutput' style={styles}>
            RGB:({red},{green},{blue}) #0
        </div>
    );
};

export default ColorOuput;