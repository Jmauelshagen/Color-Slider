import React from 'react';

const ColorSlider = ({name, value, changeSlider}) => {

    return (
        <div className="slider" >
            <label className={`zero-opacity ${name}`} for={name}>{name}</label>
            <input type="range" id={name} className={name} min="0" max="255" value={value} onChange={(event) => changeSlider(name, event.target.value)}/>
            <label className={`zero-opacity ${name}`} for={name}>{value}</label>
        </div>
    );
};

export default ColorSlider;