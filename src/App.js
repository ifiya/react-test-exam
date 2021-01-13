import './App.css';
import './css/index.css';
import Footer from './js/Footer.js';
import React, { Component } from 'react'
class App extends React.Component {
  handleChange() {
    return <div>123456</div>
  }
  render() {
    return (
      <div id="textMain">
        <div id="main">
          <Footer />,
        </div>
      </div>
    );
  }

}

export default App;
