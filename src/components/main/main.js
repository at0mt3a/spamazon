import React, { Component } from 'react';
import './main.css';

class Main extends Component {
  render() {
    return (
      <div className='main-home'>
        <div className = "welcome-box">
          <div className='message'>Knight, I bid thee welcome to</div>
          <div className='message'>Spamazon,</div>
          <div className='message'>where thou canst trade thy coin for the finest of goods, vittles, and inane accoutrements.</div>
          <div className='message'>May thy journey be swift, and thine aim be true.</div>
          <div className='message'>First ye must answer me these questions three.</div>
          <div className='message'>Look over there --></div>
        </div>
        <div className = "form-box">
          <form action="/action_page.php" method="get">
            <div><input type="text" placeholder="quest@email.com" name="email"/></div>
            <div><input type="password" placeholder="password" name="password"/></div>
            <div><input type="text" placeholder="favorite color" name="fav-color"/></div>
            <div>Login -> <button type="submit" value="Submit" /></div>
          </form>
        </div>  
      </div>   
    );
  }
}

export default Main;