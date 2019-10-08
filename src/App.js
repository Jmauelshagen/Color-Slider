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
    let rgb = [this.state.red,this.state.green,this.state.blue]; 
    let styles = {
        backgroundColor: `rgb(${rgb})`,
    };
    return (
      <div className="App">
        <header className="App-header">
          <div className="ColorSlider half-opacity">
            <h2 className="zero-opacity">Color Browser</h2>
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

            <div className='colorOutput' style={styles}>
              RGB:({this.state.red},{this.state.green},{this.state.blue}) #1
            </div>
            <div className='colorOutput' style={{backgroundColor: `rgb(${rgb})`}}>
              RGB:({this.state.red},{this.state.green},{this.state.blue}) #2
            </div>
            <div className='colorOutput' style={{backgroundColor: `rgb(${this.state.red},${this.state.green},${this.state.blue})`}}>
              RGB:({this.state.red},{this.state.green},{this.state.blue}) #3
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default ColorBrowser;
