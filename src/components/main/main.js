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
            Email: <input type="text" name="email"/> <br/>
            Password: <input type="password" name="password"/> <br/>
            Submit -> <button type="submit" value="Submit" />
          </form>
        </div>  
      </main>   
    );
  }
}

export default Main;