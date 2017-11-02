import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { Meteor } from 'meteor/meteor';
import GLOBAL from '../../../global.js';

var flagEmail = true;
var flagemail = true;

export default class resetPassword extends TrackerReact(React.Component) {


    constructor(props) {
        super(props);
        this.state = {
          email: "",
          emailCheck: true,
          emailSubmit: true,
          subscription: {
              publishOrganisations: Meteor.subscribe("rpw")
          },
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
      console.log('e is :',e)
      e.preventDefault();
      this.setState({email: e.target.value});
    }

    onSubmit(){
        console.log("this.state.email--:", this.state.email, flagemail, this.state.emailCheck);
        //e.preventDefault();

        //var ele = $(e.target);

        //var email = ele.find("#cEmail").val();

        var email = this.state.email;
        var pattern =/^[a-zA-Z0-9_\-]+(\.[a-zA-Z0-9_\-]+)*@[a-zA-Z0-9_\-]+(\.[a-zA-Z0-9_\-]+)*$/;

        if( !pattern.test( email ) ) {
          console.log("emailcheck: ", this.state.emailCheck);
          this.setState({emailCheck: false});
            flagemail = true;
            //event.preventDefault();
            return;
        } else {
          this.setState({emailCheck: true});
            flagemail = false;
        };

        var userId = ''
        var user = Meteor.users.findOne({ 'emails.address': email });
        console.log("email, flagemail, user:", email, flagemail, user);
        if(user != null){
          userId = user._id;
          if(!flagemail){

              console.log("Okay cool kid", user, userId);
              //Accounts.sendResetPasswordEmail(userId, [email])
              //Accounts.sendResetPasswordEmail(userId, email)
                  /*, (er) => {
                  if (er) {
                      alert("Password could not be changed");
                  } else {
                      alert("Password has been changed");
                      //FlowRouter.go('/');
                  }
              });*/

              Meteor.call('rspw',userId,email,( error, response ) => {
                      if ( error ) {
                          Bert.alert( error.reason, 'danger' );
                      } else {
                          Bert.alert( "Email sent!",'success' );
                      }
               });
          }
        }else {
          Bert.alert( 'There is no user registered under that email', 'danger' );
        }
        //console.log("userId is :", userId);
        //var email = user.emails[0].address;
        //console.log("email is :", email);



    }


    render() {

        return (

            <div className="content">

              <div className='homeContainer' style={{backgroundColor: GLOBAL.COLOR.GREEN}}>
                <div className='topAbout'>
                  <img className='Geia-Rewards-White' src='Geia-White.png'/>
                </div>

                <div className='midAbout' style={{width: GLOBAL.WEB.DESKTOP}}>
                  <div className='midAboutContainer'>
                    <div className='aboutBox'>
                       <h1 style={{textAlign: 'center'}}>Reset your Geia password</h1>
                       <br />
                       <h3 style={{textAlign: 'center'}}>Submit your email address below and we&rsquo;ll send you a link to reset your password.</h3>
                       <div className="businessEmailContainer">
                           <input
                             id='cEmail'
                             style={{width:'230px', height:'30px', borderRadius:'6px', paddingLeft: '10px'}}
                             type='text'
                             className='businessInput'
                             onChange={this.handleChange}
                             placeholder="Your email"
                           />

                           <div className='businessSubmit' onClick={this.onSubmit} style={{fontSize: GLOBAL.FONT.SMALL,
                               borderColor: 'white', borderStyle: 'solid', backgroundColor: GLOBAL.COLOR.GREEN,
                               margin: '20px auto 20px 20px'}}>
                             <p>Submit</p>
                           </div>
                           {this.state.emailCheck? null : <span style={{color:'red'}} className = "businessEmailCheck">Invalid email!</span> }
                       </div>
                 </div>
                  </div>
                </div>
                </div>
            </div>
        );
    }
}
