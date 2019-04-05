import React, { Component } from 'react';
import './item.css';
import Header from '../../components/header/header.js'
import Footer from '../../components/footer/footer.js'
import Main from '../../components/main/main.js'
import Side from '../../components/side/side.js'

class Item extends Component {
    render() {
      return (
        <div className="item">
          <Header />
          <main>hullo</main>
          <Footer />
        </div>
      );
    }
  }
  
  export default Item;