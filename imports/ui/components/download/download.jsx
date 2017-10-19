import React from 'react';
import { Link } from 'react-router';
import GLOBAL from '../../../global.js';


var highlightStyle = {"backgroundColor": "white","fontWeight":"bolder","fontSize":"120%"}

export default class Download extends React.Component {

  render() {

    return (
      <div className ='container' >
        <div className='homeContainer'>
          <div className='topHome' style={{backgroundColor: GLOBAL.COLOR.GREEN}}>
            <img className='Geia-Rewards-White' src='Geia-White.png'/>
            <p className='Geia-Rewards' style={{fontSize: GLOBAL.FONT.BIG}}>Pretty easy.</p>
            <p className='homeText' style={{fontSize: GLOBAL.FONT.BIG}}>What’s the catch you ask?</p>
            <p className='homeText' style={{fontSize: GLOBAL.FONT.BIG}}>Well, you make the world a better place.</p>
            <p className='homeText' style={{fontSize: GLOBAL.FONT.MEDIUM}}>And we think that’s a pretty good catch.</p>
          </div>
        </div>
      </div>
    );
  }
};
