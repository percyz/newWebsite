import React from 'react';


export default class Header extends React.Component {

  render() {

    return (
        <div className='container'>
          <div className='headerContainer'>
            <div className='headerContent'>
              <div className='headerWhiteSpace'></div>
              <div className='headerTags'>
                <a href="/">
                  <img className='headerChild' id='geia-green-logo' src='Geia-Green.png'/>
                </a>
                <a className='headerChild' href='/'>Download</a>
                <a className='headerChild' href='/business'>Business</a>
              </div>
            </div>
          </div>
        </div>
    )

  }

}
