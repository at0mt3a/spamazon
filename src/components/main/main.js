import React, { Component } from 'react';
import './main.css';

class Main extends Component {
  render() {
    return (
      <main>
        <div className = "welcome">
          Knight, I bid thee welcome to Spamazon, where thou canst trade thy coin for the finest of goods.
        </div>
        <div className = "login-form">
          <form action="/action_page.php" method="get">
            <input type="text" placeholder="email" name="email"/> <br/>
            <input type="password" placeholder="password" name="password"/> <br/>
            Login -> <button type="submit" value="Submit" />
          </form>
        </div>  
      </main>   
    );
  }
}

export default Main;