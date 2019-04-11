import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header.js'
import Footer from './components/footer/footer.js'
import Home from './pages/home/home.js';
import Landing from './pages/landing/landing.js';
import Item from './pages/item/item.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
      user: "at0m_t3a",
      page: "home",
      cartCount: 2
    }
  }

  addCartCount = (event) => {
    event.preventDefault()
    this.setState({cartCount: this.state.cartCount +1})
  };

  removeCartCount = (event) => {
    event.preventDefault()

    let newTotal = this.state.cartCount -1
    newTotal = newTotal < 0 ? 0 : newTotal

    this.setState({cartCount: newTotal})
  };


  renderMainContent = () => {
    switch (this.state.page) {
      case 'home':
        return <Home/>;
      case 'landing':
        return <Landing removeCartCount={this.removeCartCount} addCartCount={this.addCartCount}/>;
      case 'item':
        return <Item />;
      default:
        return <div>i'll bite yer legs off</div>
    }
  };

  updateStatePage = (event) => {
    event.preventDefault()
    this.setState({page: event.target.value})
  };

  render() {
    return (
    <div className='whole'>
      <div className = 'radio-bar'>
        <div>Home <input type='radio' name='page' value='home' onClick={this.updateStatePage}/></div>
        <div>Landing <input type='radio' name='page' value='landing' onClick={this.updateStatePage}/></div>
        <div>Item <input type='radio' name='page' value='item' onClick={this.updateStatePage}/></div>
      </div>
      <Header currentPage={this.state.page} currentUser={this.state.user} cartCount={this.state.cartCount}/>
      <div className = 'mid'>
        {this.renderMainContent()}
      </div>
      <Footer />
    </div>     
    )
   
  }



 }


export default App;
