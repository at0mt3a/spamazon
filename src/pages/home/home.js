import React, { Component } from 'react';
import './home.css';
import Header from '../../components/header/header.js'
import Footer from '../../components/footer/footer.js'
import Main from '../../components/main/main.js'

class Home extends Component {
  static state = {
    
  }
  render() {
    return (
      <div className="Home">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default Home;
