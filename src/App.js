import React, { Component } from 'react';
import './App.css';
import ColorSlider from './ColorSlider';

class ColorBrowser extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Color Browser</h2>
          <ColorSlider 
            name = {'red'}
            value = {200}
            />
          <ColorSlider
            name = {'green'}
            value = {45}
            />
          <ColorSlider
            name = {'blue'}
            value = {5}
          />
          {/* <div class="slider" >
            <input type="range" id="r" name="r" min="0" max="255"/> <label class="r"  for="r">Red</label>
          </div>
          <input type="range" id="g" name="g" min="0" max="255"/>
          <label class="g" for="g">Green</label>
          <input type="range" id="b" name="g" min="0" max="255"/>
          <label class="b" for="b">Blue</label> */}
        </header>
      </div>
    );
  }
}

export default ColorBrowser;
