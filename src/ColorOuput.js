import React from 'react';

const ColorOuput = ({red,green,blue}) => {

    let rgb = [red,green,blue]; 
    let fontColor = (Number(red) + Number(green) + Number(blue)) >= 300 ? 'black' : 'white' ;

    let styles = {
        backgroundColor: `rgb(${rgb})`,
        color: fontColor
    };

    return (
        <div className='colorOutput' style={styles}>
            RGB:({red},{green},{blue}) #0
        </div>
    );
};

export default ColorOuput;