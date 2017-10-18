import React from 'react';


export default class Footer extends React.Component {

  render() {

    return (
      <div className='container'>
        <div className='footerContainer'>
              <a className='footerChild' href='/aboutus'>About</a>
              <a className='footerChild' href='/contactus'>Contact Us</a>
              <a className='footerChild' href='/termsconditions'>Terms &amp; Conditions</a>
        </div>
      </div>
    )

  }

}
