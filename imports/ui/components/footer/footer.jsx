import React from 'react';


export default class Footer extends React.Component {

  render() {

    return (
      <div className='container'>
        <div className='footerContainer'>
              <a className='footerChild' href='#'>About</a>
              <a className='footerChild' href='#'>Contact Us</a>
              <a className='footerChild' href='#'>Terms &amp; Conditions</a>
        </div>
      </div>
    )

  }

}
