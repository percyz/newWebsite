import React from 'react';
import { Link } from 'react-router';
import GLOBAL from '../../../global.js';


var highlightStyle = {"backgroundColor": "white","fontWeight":"bolder","fontSize":"120%"}

export default class AboutUs extends React.Component {

  render() {

    return (
      <div className ='container' >
        <div className='homeContainer' style={{backgroundColor: GLOBAL.COLOR.GREEN}}>
          <div className='topAbout'>
            <img className='Geia-Rewards-White' src='Geia-White.png'/>
          </div>

          <div className='midAbout' style={{width: GLOBAL.WEB.DESKTOP}}>
            <div className='midAboutContainer'>
              <div className='aboutBoxLeft'>
                <div className='aboutParagraph'>
                <p style={{fontSize: GLOBAL.FONT.BIG}}>Mission</p>
                <p style={{fontSize: GLOBAL.FONT.SMALL}}>Geia stands to empower people to drive change, while making it profitable for business to do the right thing.</p>
                <p style={{fontSize: GLOBAL.FONT.SMALL}}>We help businesses improve their energy efficiency, while rewarding customers for shopping with them.</p>
                </div>

                <div className='aboutParagraph'>
                <p style={{fontSize: GLOBAL.FONT.BIG}}>Benefits</p>
                <p style={{fontSize: GLOBAL.FONT.MEDIUM}}>For the Business:</p>
                <li style={{fontSize: GLOBAL.FONT.SMALL}}>Drive sales</li>
                <li style={{fontSize: GLOBAL.FONT.SMALL}}>Increase customer loyalty</li>
                <li style={{fontSize: GLOBAL.FONT.SMALL}}>Save on energy costs</li>
                <p style={{fontSize: GLOBAL.FONT.MEDIUM}}>For the Customer:</p>
                <li style={{fontSize: GLOBAL.FONT.SMALL}}>Vote with their money</li>
                <li style={{fontSize: GLOBAL.FONT.SMALL}}>Win cash prizes</li>
                </div>

                <div className='aboutParagraph'>
                <p style={{fontSize: GLOBAL.FONT.BIG}}>How it works</p>
                <p style={{fontSize: GLOBAL.FONT.MEDIUM}}>For the Business:</p>
                <li style={{fontSize: GLOBAL.FONT.SMALL}}>Consent is given to Geia to access the business’s monthly power bill statements</li>
                <li style={{fontSize: GLOBAL.FONT.SMALL}}>Business agrees to becoming a Geia Reward Partner</li>
                <li style={{fontSize: GLOBAL.FONT.SMALL}}>Business receives and displays their unique QR code for customers to sca</li>
                <li style={{fontSize: GLOBAL.FONT.SMALL}}>Business can choose to receive help on improving energy efficiency</li>
                <p style={{fontSize: GLOBAL.FONT.MEDIUM}}>For the Customer:</p>
                <li style={{fontSize: GLOBAL.FONT.SMALL}}>Customer downloads the Geia Rewards App from the App Store or Google Play</li>
                <li style={{fontSize: GLOBAL.FONT.SMALL}}>Customer identifies the business as a Reward Partner and chooses to shop there</li>
                <li style={{fontSize: GLOBAL.FONT.SMALL}}>Customer scans QR codes at the counter of the business to collect points</li>
                <li style={{fontSize: GLOBAL.FONT.SMALL, paddingBottom:'30px'}}>For every point collected, the customer gains one entry into the weekly cash prize draw</li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
