import React from 'react';
import './GetTheApp.css';

function GetTheApp() {
  return (
    <div className='get-app'>
      <div className='get-app-body'>
        <img src='images/gettheapp.png' alt='gettheapp' />
        <div className='overlay-content'>
          <h2>Get the app and move your package even faster</h2>
          <p>Our mobile app is the fastest way to get the Qwikway service faster. Use the Qwikway app at your convenience to move your package!</p>
          <div className='get-app-btns'>
                <img src="images/Button.png" alt="download" />
                <img src="images/Button2.png" alt="download" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetTheApp;
