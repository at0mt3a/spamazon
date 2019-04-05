import React, { Component } from 'react';
import './landing.css';
import Header from '../../components/header/header.js'
import Footer from '../../components/footer/footer.js'
import Main from '../../components/main/main.js'
import Side from '../../components/side/side.js'

class Landing extends Component {
    render() {
      return (
        <div className="landing">
          <header/>
          <div className="middle">
            <side>blah</side>
            <main>hullo</main>
          </div>
          <footer/>
        </div>
      );
    }
  }
  
  export default Landing;
  