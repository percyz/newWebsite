import React from 'react';
import { Link } from 'react-router';
import GLOBAL from '../../../global.js';


var highlightStyle = {"backgroundColor": "white","fontWeight":"bolder","fontSize":"120%"}

export default class Business extends React.Component {

  render() {

    return (
      <div className ='container' >
        <div className='homeContainer'>
          <div className='topHome' style={{backgroundColor: GLOBAL.COLOR.GREEN}}>
            <img className='Geia-Rewards-White' src='Geia-White.png'/>
            <p className='Geia-Rewards' style={{fontSize: GLOBAL.FONT.BIG}}>Geia Rewards</p>
            <p className='homeText' style={{fontSize: GLOBAL.FONT.BIG}}>Grow your business and save the planet</p>
          </div>
          <div className='midHome' style={{width: GLOBAL.WEB.DESKTOP}}>
            <div className='midHomeContainer'>
              <div className='homeBox'>
                <img className='homeRewards' src='Grow.png'/>
                <p style={{fontSize: GLOBAL.FONT.MEDIUM}}>Drive Sales</p>
              </div>
              <div className='homeBox'>
                <img className='homeRewards businessCustomers' src='Customers.png'/>
                <p style={{fontSize: GLOBAL.FONT.MEDIUM}}>Create</p>
                <p style={{fontSize: GLOBAL.FONT.MEDIUM}}>Loyal Customers</p>
              </div>
              <div className='homeBox'>
                <img className='homeRewards' src='Energy.png'/>
                <p style={{fontSize: GLOBAL.FONT.MEDIUM}}>Save on Energy</p>
                <p style={{fontSize: GLOBAL.FONT.MEDIUM}}>Costs</p>
              </div>
            </div>
            <div className='midHomeText'>
                <p style={{fontSize: GLOBAL.FONT.BIG}}>What would you do with more customers</p>
                <p style={{fontSize: GLOBAL.FONT.BIG}}>and lower energy bills?</p>
                <div className='homeLearnMore' style={{fontSize: GLOBAL.FONT.MEDIUM,
                  borderColor: GLOBAL.COLOR.GREEN, borderStyle: 'solid'}}>
                <p>Learn More</p>
              </div>
          </div>
          </div>
          <div className='botHome' style={{backgroundColor: GLOBAL.COLOR.GREEN}}>
            <p style={{fontSize: GLOBAL.FONT.MEDIUM, color: 'white', margin: 'auto'}}>Interested? Drop us a line.</p>
            <p style={{fontSize: GLOBAL.FONT.MEDIUM, color: 'white', margin: 'auto'}}>Thank&apos;s we&apos;ll be in touch.</p>
        </div>
        </div>
      </div>
    );
  }
};
