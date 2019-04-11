import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    if (this.props.currentPage === "home") {
    return (
      <header className="head-home">
          <div>LOGO</div>
          <div>Welcome to Spamazon!</div>
          <div>Kart</div>
          <div>Spamburger</div>
      </header>   
    );
    } else return (
      <header className="head-home">
      <div>LOGO</div>
      <div>Welcome to Spamazon, {this.props.currentUser}!</div>
      <div>Kart={this.props.cartCount}</div>
      <div>Spamburger</div>
  </header>   
    )
  }
}



export default Header;