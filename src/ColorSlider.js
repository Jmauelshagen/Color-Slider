import React from 'react';

const ColorSlider = () => {
    return (
        <div className="slider" >
            <input type="range" id="r" name="r" min="0" max="255"/> <label className="r"  for="r">Red</label>
        </div>
        // <div className="slider" >
        //     <input type="range" id="r" name="r" min="0" max="255"/> <label className="r"  for="r">Red</label>
        // </div>
        // <div className="slider" >
        //     <input type="range" id="r" name="r" min="0" max="255"/> <label className="r"  for="r">Red</label>
        // </div>
    );
};

export default ColorSlider;