import React from 'react';
import { Link } from 'react-router';
import GLOBAL from '../../../global.js';


var highlightStyle = {"backgroundColor": "white","fontWeight":"bolder","fontSize":"120%"}

export default class Home extends React.Component {

  render() {

    return (
      <div className ='container' >
        <div className='homeContainer'>
          <div className='topHome' style={{backgroundColor: GLOBAL.COLOR.GREEN}}>
            <img className='Geia-Rewards-White' src='Geia-White.png'/>
            <p className='Geia-Rewards' style={{fontSize: GLOBAL.FONT.BIG}}>Geia Rewards</p>
            <p className='homeText' style={{fontSize: GLOBAL.FONT.BIG}}>Win cash while saving the planet?</p>
            <p className='homeText' style={{fontSize: GLOBAL.FONT.BIG}}>Sure thing.</p>
            <div className='homeAppStore'>
              <a href='https://play.google.com/store/apps/details?id=com.geiaapp'>
              <img className='appIcons' src='Google.png'/>
              </a>
              <a href='https://itunes.apple.com/us/app/geia/id1293126369?ls=1&mt=8'>
              <img className='appIcons' src='Apple.png'/>
              </a>
            </div>
          </div>

          <div className='midHome' style={{width: GLOBAL.WEB.DESKTOP}}>
            <div className='midHomeContainer'>
              <div className='homeBox'>
                <img className='homeRewards' src='Shop.png'/>
                <p style={{fontSize: GLOBAL.FONT.MEDIUM}}>Shop with Rewards</p>
                <p style={{fontSize: GLOBAL.FONT.MEDIUM}}>Partners</p>
              </div>
              <div className='homeBox'>
                <img className='homeRewards' src='Scan.png'/>
                <p style={{fontSize: GLOBAL.FONT.MEDIUM}}>Scan &amp; Collect Points</p>
              </div>
              <div className='homeBox'>
                <img className='homeRewards homeCash' src='Cash.png'/>
                <p style={{fontSize: GLOBAL.FONT.MEDIUM}}>Win Cash</p>
              </div>
            </div>

            <div className='midHomeText'>
              <p style={{fontSize: GLOBAL.FONT.BIG}}>Pretty easy.</p>
              <p style={{fontSize: GLOBAL.FONT.BIG}}>What&apos;s the catch you ask?</p>
              <p style={{fontSize: GLOBAL.FONT.BIG}}>Well, you make the world a better place.</p>
              <p style={{fontSize: GLOBAL.FONT.SMALL}}>And we think that&apos;s a pretty good catch.</p>
              <a href='/about' style={{textDecoration:'none'}}>
              <div className='homeLearnMore' style={{fontSize: GLOBAL.FONT.MEDIUM,
                  borderColor: GLOBAL.COLOR.GREEN, borderStyle: 'solid'}}>
                <p>Learn More</p>
              </div>
              </a>
              <p style={{fontSize: GLOBAL.FONT.BIG}}>Or</p>
            </div>
          </div>

          <div className='botHome' style={{backgroundColor: GLOBAL.COLOR.GREEN}}>
            <p style={{fontSize: GLOBAL.FONT.MEDIUM, color: 'white', margin: 'auto'}}>Download the App now</p>
            <div className='homeAppStoreBottom'>
              <a href='https://play.google.com/store/apps/details?id=com.geiaapp'>
              <img className='appIconsBottom' src='Google.png'/>
              </a>
              <a href='https://itunes.apple.com/us/app/geia/id1293126369?ls=1&mt=8'>
              <img className='appIconsBottom' src='Apple.png'/>
              </a>
            </div>
        </div>
        </div>
      </div>
    );
  }
};
