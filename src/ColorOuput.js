import React from 'react';

const ColorOuput = ({red,green,blue}) => {
    return (
        <div className='colorOutput'>
            RGB:({red},{green},{blue})
        </div>
    );
};

export default ColorOuput;