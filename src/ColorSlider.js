import React from 'react';

const ColorSlider = ({name, value, index}) => {
    return (
        <div className="slider" >
            <label className={name} for={name}>{name}</label>
            <input type="range" id={name} className={name} min="0" max="255" value={value}/>
            <label className={name} for={name}>{value}</label>
        </div>
    );
};

export default ColorSlider;