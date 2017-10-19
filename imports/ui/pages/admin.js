import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { ReactiveVar } from 'meteor/reactive-var';
import { Roles } from 'meteor/alanning:roles';
import { Organisations } from '../../api/Leaderboard/organisations.js';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import './admin.html';


Template.Admin.onCreated( () => {
  var newUser = Meteor.users.findOne({ _id: Meteor.userId() });
  if(!newUser){
    console.log('login')
  }else {
    Meteor.call('checkAdminTwice',newUser, function(error,result) {
      if(error){
        setTimeout("window.location.href='/'",0);
      }else if(result){
        //Template.instance().subscribe('allsecrets');
        //Template.instance().subscribe('listsecrets');
        setTimeout("window.location.href='/admin/user'",0);
      }else {
        setTimeout("window.location.href='/'",0);
      }
    })
  }
  /*if(!Meteor.userId()){
    //setTimeout("window.location.href='/'",0);
  }*/
  /*const administrator = Roles.userIsInRole(this.userId, ['geia-su']);
  console.log("admin is :",administrator);
  Template.instance().subscribe('allsecrets');
  Template.instance().subscribe('listsecrets');*/

});

Template.Admin.helpers({
  administrator() {
   if(!Meteor.userId()){
    return false
   }else {
   //  const administrator = Roles.userIsInRole(this.userId, ['geia-su']);
    //console.log("admin is :",administrator);
    /*if(administrator){
      Template.instance().subscribe('allsecrets');
      Template.instance().subscribe('listsecrets');
      setTimeout("window.location.href='/admin/users'",0);
    }else {
      //setTimeout("window.location.href='/'",0);
    }*/
  }
  },

  /*
  subsc () {
    return Template.instance().subscribe( 'listsecrets' );
  },*/
});

Template.Admin.events({
  'submit .checkAdmin'(event) {
    // Prevent default browser form submit
    event.preventDefault();
    var name = event.target.adminEmail.value;
    var password = event.target.adminPassword.value;
    console.log("Users ID is :",name,password);

    Meteor.call('checkAdmin',name,password, ( error,result ) => {
        console.log(result)
        if ( error ) {
            alert( "hrmm" );
        }else if(result == 1){
            Meteor.loginWithPassword(name, password, function (error) {
            if (error) {
             alert( "hrghgmm" );
            } else {
                //console.log("CALLING SIGNIN");
                var newUser = Meteor.users.findOne({ _id: Meteor.userId() });
                console.log('newUser is :',newUser)
                Meteor.call('checkAdminTwice', newUser, function (error, result) {
                    // identify the error
                    if (error) {
                        return ( setTimeout("window.location.href='/admin/users'",0) );
                        Meteor.logout((er) => {
                            if (er) {
                                //alert("Error logging out");
                            } else {
                                FlowRouter.go('/');
                            }
                        });
                        // show a nice error message
                        
                    } if(result == true){
                      Meteor.call('signIn',newUser, function(error) {
                        if(error){

                        }else {
                          console.log('passssed')
                          setTimeout("window.location.href='/admin/users'",0);
                        }
                      })
                      
                    }else {
                      console.log('else called')
                      Meteor.logout((er) => {
                            if (er) {
                                //alert("Error logging out");
                            } else {
                                FlowRouter.go('/');
                            }
                        });
                       setTimeout("window.location.href='/admin/users'",0);
                    }
                });
            }
        });
             
        }else if(result == 2){
          setTimeout("window.location.href='/'",0);
        }
    });
  },
})
