import React, { Component } from 'react';
import './item.css';


class Item extends Component {
  static state = {
    
  }
    render() {
      return (
        <div className="item">
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