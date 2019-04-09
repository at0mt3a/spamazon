import React, { Component } from 'react';
import './landing.css';
import Header from '../../components/header/header.js'
import Footer from '../../components/footer/footer.js'
import Main from '../../components/main/main.js'
import Side from '../../components/side/side.js'

class Landing extends Component {
  static state = {
    
  }
    render() {
      return (
        <div className="landing">
          <Header />
          <div className="middle">
            <Side />
            <main>
              <div className="item-display"></div>
              <div className="item-display"></div>
              <div className="item-display"></div>
              <div className="item-display"></div>
              <div className="item-display"></div>
              <div className="item-display"></div>
              <div className="item-display"></div>
              <div className="item-display"></div>
              <div className="item-display"></div>
              <div className="item-display"></div>
              <div className="item-display"></div>
            </main>
          </div>
          <Footer/>
        </div>
      );
    }
  }
  
  export default Landing;
  