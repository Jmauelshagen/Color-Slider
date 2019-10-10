import React from 'react';

const ColorOuput = ({red,green,blue,opacity}) => {

    let rgba = [red,green,blue,opacity]; 
    let fontColor = (Number(red) + Number(green) + Number(blue)) >= 300 && Number(opacity) > 0.5 ? 'black' : 'white' ;

    let styles = {
        backgroundColor: `rgba(${rgba})`,
        color: fontColor
    };

    return (
        <div className='colorOutput' style={styles}>
            rgba({red},{green},{blue},{opacity})
        </div>
    );
};

export default ColorOuput;