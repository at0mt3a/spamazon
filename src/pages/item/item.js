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
          <main>
            <div className="display-box">
              <div id="item-name">item_name</div>
              <div className='item-mid'>
                <div id="item-holder">
                  <div className="pic">item pic</div>
                  <div className="description">item described</div>
                  <div className="action-holder">add button here</div>
                </div>
              </div>
              <div id="item-reviews">reviews: this is a very silly item</div>
            </div>
          </main>
        </div>
      );
    }
  }
  
  export default Item;