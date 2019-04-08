import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    return (
      <header className="head-home">
          <div>LOGO</div>
          <div>Welcome to Spamazon!</div>
          <div>Spamburger Menu</div>
      </header>   
    
    );
  }
}

export default Header;