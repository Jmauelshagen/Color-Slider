import React, { Component } from 'react';
import './App.css';
import ColorSlider from './ColorSlider';
import ColorOutput from './ColorOuput';

class ColorBrowser extends Component {
  state = {
    red: 0,
    green: 0,
    blue: 0,
  }

  handleChange = (name, value) => {
    console.log(name, value);
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="ColorSlider opacity">
            <h2>Color Browser</h2>
            <ColorSlider 
              name = {'red'}
              value = {this.state.red}
              changeSlider={this.handleChange}
              />
            <ColorSlider
              name = {'green'}
              value = {this.state.green}
              changeSlider={this.handleChange}
              />
            <ColorSlider
              name = {'blue'}
              value = {this.state.blue}
              changeSlider={this.handleChange}
            />
            <ColorOutput
              // state = {this.state}
              red = {this.state.red}
              green = {this.state.green}
              blue = {this.state.blue}
            />
            <div className='colorOutput'>
              RGB:({this.state.red},{this.state.green},{this.state.blue})
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default ColorBrowser;
