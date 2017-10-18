import React from 'react';
import { Link } from 'react-router';
import GLOBAL from '../../../global.js';
import GoogleMapReact from 'google-map-react'


var highlightStyle = {"backgroundColor": "white","fontWeight":"bolder","fontSize":"120%"}
const Marker = () => <img src='Location.png' width={50} height={50}/> 

export default class ContactUs extends React.Component {

  render() {

    return (
      <div className ='container' >
        <div className='homeContainer'>
          <div className='contactTop' style={{backgroundColor: GLOBAL.COLOR.GREEN}}>
            <p className='Geia-Rewards' style={{fontSize: GLOBAL.FONT.MEDIUM}}>We would love to hear from you!</p>
            <p className='Geia-Rewards' style={{fontSize: GLOBAL.FONT.MEDIUM}}>Contact us at:</p>
            <p className='Geia-Rewards' style={{fontSize: GLOBAL.FONT.BIG}}>hello@geia.nz</p>
            <p className='Geia-Rewards' style={{fontSize: GLOBAL.FONT.SMALL}}>Or drop by our office @ 20 Leithbank, Dunedin</p>
          </div>

          <div className='contactMap'>
            <GoogleMapReact
              style={{width: '100%', height: '400px', position: 'relative'}}
              defaultCenter = {{lat: -45.866992, lng: 170.51738}}
              zoom={14}>
              <Marker
                lat={-45.866992}
                lng={170.51738}
                text={'Geia'}/>
            </GoogleMapReact>
          </div>
        </div>
      </div>
    );
  }
};
