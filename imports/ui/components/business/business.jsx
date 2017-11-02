import React from 'react';
import { Link } from 'react-router';
import GLOBAL from '../../../global.js';


var highlightStyle = {"backgroundColor": "white","fontWeight":"bolder","fontSize":"120%"};
var flagemail = true;

export default class Business extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      emailCheck: true,
      emailSubmit: true
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log('e is :',e)
    e.preventDefault();
    this.setState({email: e.target.value});
  }

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  onSubmit() {
    //var ele = $(e.target);
    //e.preventDefault()
    console.log("this.state.email--:", this.state.email, flagemail, this.state.emailCheck);
    var email = this.state.email;
    console.log("email:", email);
    var pattern =/^[a-zA-Z0-9_\-]+(\.[a-zA-Z0-9_\-]+)*@[a-zA-Z0-9_\-]+(\.[a-zA-Z0-9_\-]+)*$/;

    if( !pattern.test( email ) ) {
      console.log("emailcheck: ", this.state.emailCheck);
      this.setState({emailCheck: false});
      /*
        $( "#emailError" )
            .text( "Please enter a valid email." )
            .show()
            .fadeOut( 5000 );
      */
        flagemail = true;
        //event.preventDefault();
        return;
    } else {
      this.setState({emailCheck: true});
        flagemail = false;
    };

    console.log("flagemail:", flagemail);

    if(!flagemail) {
      this.setState({emailSubmit: false});
      
      Meteor.call(
        'sendEmail',
        'hello@geia.nz',
        email,
        email + ' is interested in Geia',
        email + ' has contacted us from the business page', (error, response) => {
          if ( error ) {

              //Bert.alert( error.reason, 'danger' );
          } else {
              Bert.alert( "Thank&apos;s we&apos;ll be in touch",'success' );
          }
        }
      ); 
      
      /*Meteor.call(
        'sendEmail',
        'zhaji077@gmail.com',
        email,
        'Hello from sendGrid',
        'This is a test email for sendGrid 04:31'
      )*/
    }else{
      console.log("invalid email");
    }

  }

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
                <a href='/about' style={{textDecoration:'none'}}>
                <div className='homeLearnMore' style={{fontSize: GLOBAL.FONT.MEDIUM,
                  borderColor: GLOBAL.COLOR.GREEN, borderStyle: 'solid'}}>
                <p>Learn More</p>
                </div>
                </a>
          </div>
          </div>
          <div className='businessBot' style={{backgroundColor: GLOBAL.COLOR.GREEN}}>
            <p style={{fontSize: GLOBAL.FONT.MEDIUM, color: 'white'}}>Interested? Drop us a line.</p>

              <div className='businessEmailContainer' >
                <input
                  style={{width:'230px', height:'30px', borderRadius:'6px', paddingLeft: '10px'}}
                  type='text'
                  className='businessInput'
                  onChange={this.handleChange}
                  placeholder="Your email"
                />
              <div className='businessSubmit' onClick={this.onSubmit} style={{fontSize: GLOBAL.FONT.SMALL,
                  borderColor: 'white', borderStyle: 'solid'}}>
                <p>Submit</p>
                </div>
              <div style={{paddingLeft:'20px'}}>
                {/*
              <button className='businessEmailButton'
                style={{ backgroundColor:'#88c040', color:'white', borderColor: 'white'}}
                onClick={this.onSubmit} >
                Submit
              </button>
              */}
            </div>

              {this.state.emailCheck? null : <span style={{color:'red'}} className = "businessEmailCheck">Invalid email!</span> }

            </div>

          {this.state.emailSubmit? null : <p style={{fontSize: GLOBAL.FONT.MEDIUM, color: 'white', margin: 'auto'}}>Thank&apos;s we&apos;ll be in touch.</p>}
        </div>
        </div>
      </div>
    );
  }
};
