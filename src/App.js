import React, { Component } from 'react';
import './App.css';
import Home from './pages/home/home.js';
import Landing from './pages/landing/landing.js';
import Item from './pages/item/item.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "at0m_t3a",
      page: "item"
    }
  }

  RouterLinks = () => {

  }

  updateStatePage = (event) => {
    event.preventDefault()
    this.setState({page: event.target.value})
  };

  render() {
    switch (this.state.page) {
      case 'home' :
        return <div className='whole'>
        <div className = 'radio-bar'>
          <div>Home <input type='radio' name='page' value='home' onClick={this.updateStatePage}/></div>
          <div>Landing <input type='radio' name='page' value='landing' onClick={this.updateStatePage}/></div>
          <div>Item <input type='radio' name='page' value='item' onClick={this.updateStatePage}/></div>
        </div>
        <Home />
        </div>;
      case 'landing' :
        return <div className='whole'>
        <div className = 'radio-bar'>
          <div>Home <input type='radio' name='page' value='home' onClick={this.updateStatePage}/></div>
          <div>Landing <input type='radio' name='page' value='landing' onClick={this.updateStatePage}/></div>
          <div>Item <input type='radio' name='page' value='item' onClick={this.updateStatePage}/></div>
        </div>
        <Landing />
        </div>;
      case 'item' :
        return <div className='whole'>
        <div className = 'radio-bar'>
          <div>Home <input type='radio' name='page' value='home' onClick={this.updateStatePage}/></div>
          <div>Landing <input type='radio' name='page' value='landing' onClick={this.updateStatePage}/></div>
          <div>Item <input type='radio' name='page' value='item' onClick={this.updateStatePage}/></div>
        </div>
        <Item />
        </div>;
      default:
        return <div>I'll bite yer legs off. "Page Not Found"</div>
  }
 }
}

export default App;
