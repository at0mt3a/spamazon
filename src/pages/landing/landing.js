import React, { Component } from 'react';
import './landing.css';
import Side from '../../components/side/side.js'

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "at0m_t3a",
      sideIsOpen: true
    }
  }

  renderSide = () => {
    switch (this.state.sideIsOpen) {
      case true:
        return <Side />;
      case false:
        return <div></div>
      default:
        return <div>i'll bite yer legs off</div>
    }
  };

  updateStateSide = (event) => {
    event.preventDefault()
    this.setState({sideIsOpen: !this.state.sideIsOpen})
  };

  render() {
    return (
      <div className="landing">
        <div className="middle">
        <div><button className="toggleSide" type="button" onClick={this.updateStateSide}>Toggle Side</button></div>
          {this.renderSide()}
          <main>
          <div><button className="cartUp" type="button" onClick={this.props.removeCartCount}>"-"</button></div>
          <div><button className="cartDown" type="button" onClick={this.props.addCartCount}>"+"</button></div>
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
      </div>
    );
  }
}
  
  export default Landing;
  