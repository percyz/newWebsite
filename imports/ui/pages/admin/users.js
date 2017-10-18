import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { ReactiveVar } from 'meteor/reactive-var';
import { Roles } from 'meteor/alanning:roles';
import { Organisations } from '../../../api/Leaderboard/organisations.js';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

Bert.defaults.hideDelay = 10000;
import './users.html';

Template.Users.onCreated(() => {

  if(!Meteor.userId()){
    setTimeout("window.location.href='/'",0);
  }
  const administrator = Roles.userIsInRole(this.userId, ['geia-su']);
  console.log("admin is :",administrator);

  Template.instance().subscribe('allsecrets');
  Template.instance().subscribe('listsecrets');

  //Logs
});

Template.Users.events({
  'submit .updateuser'(event) {
    // Prevent default browser form submit
    event.preventDefault();
    var name = event.target.name.value;
    var email = event.target.email.value;
    var phone = event.target.phone.value;
    var id = event.target.id.value;
    console.log("Users ID is :",id);
    console.log("updateuser text target is :",name);
    console.log("updateuser text target is :",email);
    console.log("updateuser text target is :",phone);

    Meteor.call('adminedituser',id,email,name,phone, ( error ) => {
        if ( error ) {
            alert( error.reason );
        }else {
            Bert.alert( "Change was successfull on " + name, 'success' );
            //console.log("Should of worked??")
        }
    });
  },
  'submit .updateorg'(event) {
    event.preventDefault();
    var orgid = event.target.orgid.value;
    var orgname = event.target.orgname.value;
    var orgvalidated = event.target.orgvalidated.value;
    var orgstate = event.target.orgstate.value;
    var orgauthstatus = event.target.orgauthstatus.value;
    var orgstars = event.target.orgstars.value;
    var orgcurscore = event.target.orgcurscore.value;
    var orgnewscore = event.target.orgnewscore.value;
    var orgrewards = event.target.orgrewards.value;

    console.log("id is :",orgid)
    console.log("Users ID is :",orgname);
    console.log("updateuser text target is :",orgvalidated);
    console.log("updateuser text target is :",orgstate);
    console.log("updateuser text target is :",orgauthstatus);

    Meteor.call('admineditorg',orgid,orgname,orgvalidated,orgstate,orgauthstatus,orgstars,orgcurscore,orgnewscore,orgrewards, ( error ) => {
        if ( error ) {
            alert( error.reason );
        }else {
            Bert.alert( "Change was successfull on " + orgname, 'success' );
            //console.log("Should of worked??")
        }
    });
  },
  'submit .updateListing'(event){
    event.preventDefault();
    var orgemail = event.target.orgemail.value;
    Meteor.call('sendEmail',orgemail,'team@geia','Geia listing accepted','Geia listing approved, you can now view your organisation on the leaderboard https://www.geia.nz/leaderboard', ( error ) => {
        if ( error ) {
            alert( error.reason );
        }else {
            Bert.alert( "Leaderboard listing email sent to "+ orgemail + " Good job team", 'success' );
            //console.log("Should of worked??")
        }
    });
  },
  'submit .updateAssess'(event){
    event.preventDefault();
    var orgemail = event.target.orgemail.value;
    Meteor.call('sendEmail',orgemail,'team@geia','Geia assessment approved','Congratulations, your assessment has been approved', ( error ) => {
        if ( error ) {
            alert( error.reason );
        }else {
            Bert.alert( "Assessment completion email sent to "+ orgemail + " Good job team", 'success' );
            //console.log("Should of worked??")
        }
    });
  },
  'submit .removeUse'(event){
      event.preventDefault();
      Meteor.call('removePoints',( error ) => {
        if ( error ) {
            alert( error.reason );
        }else {
            Bert.alert( "You have removed everyone's points!", 'success' );
            
        }
      })
  },
  'submit .checkWinner'(event){
      event.preventDefault();
      Meteor.call('checkWinner',( error,response ) => {
        if ( error ) {
            alert( error.reason );
        }else {
            var list = Meteor.users.find({});
            /*console.log("one is :",list.length);
            console.log("two is :",list.length());
            for(var i = 0; i < list.length; i++){
                console.log(i);
            }
            
            console.log("user is :",list);*/
            Bert.alert( "The new winner is "+response+" you should get an email now", 'success' );
            
        }
      })
  },
  'click .helpBlue'(event){
    Bert.alert( "Blue tick takes `true or false` sets the validated tick. If you type false and it says change is successful, it will show blank", 'info' );
  },
  'click .helpLead'(event){
    Bert.alert( "Takes `true or false` puts them on Leaderboard. If you type false and it says change is successful, it will show blank", 'info' );
  },
  'click .helpcvs'(event){
    Bert.alert( "Takes `champ or valid or self` (champion/validated/self-validated)", 'info' );
  },
  'click .helpstars'(event){
    Bert.alert( "Takes `1 or 2 or 3` amount of stars for a listing", 'info' );
  },
  'click .helpcurs'(event){
    Bert.alert( "Current score is what is shown, and New score is from an assessment which doesn't get shown unless you copy the `New Score` and put it in Current Score (Updates the listing)", 'info' );
  }
});

Template.Users.helpers({
  /*
  errorCreate() {
    return Template.instance().errorCreate.get();
  },
  successCreate() {
    return Template.instance().successCreate.get();
  },
  errorList() {
    return Template.instance().errorList.get();
  },
  successList() {
    return Template.instance().successList.get();
  },
  */
  administrator() {
    if(!Meteor.userId()){
      setTimeout("window.location.href='/'",0);
    }
    const administrator = Roles.userIsInRole(Meteor.user()._id, ['geia-su']);
    if(administrator){
      return administrator;
    }else {
      console.log("not admin");
      setTimeout("window.location.href='/'",0);
    }
  },

  users() {
    return Meteor.users.find({});
  },
  orgs(){
    //if (Template.instance().subscriptionsReady()) {
      return Organisations.find({});
    //}
  },
  role(user, role) {
    if (user.roles != undefined) {
      if (user.roles[0] == role) {
        return true;
      }
    }
    return false;
  }
});

/*
Template.Users.events({
  'click div.list div.button.enroll': function(e, template) {
    enrollUser.callPromise({
      user: $(e.target).parent().attr('id')
    }).then(function(result) {
      template.errorList.set();
      template.successList.set('Successfully sent enrollment email for '+result);
    }).catch(function(error) {
      template.errorList.set('Error: '+error.reason);
      template.successList.set();
    });
  },
  'click div.create div.button': function(e, template) {
    createUser.callPromise({
      email: $('.create #email').val(),
      firstName: $('.create #firstName').val(),
      lastName: $('.create #lastName').val(),
      phone: $('.create #phone').val(),
      business: $('.create #business').val()
    }).then(function(result) {
        console.log(result);
        addUserRole.callPromise({
          user: result,
          role: $('.create #role').val()
        }).then(function(result) {
          template.errorCreate.set();
          template.successCreate.set('Successfully registered account for '+result);
          return;
        }).catch(function(error) {
          template.successCreate.set();
          template.errorCreate.set('Error: '+error.reason);
          return;
        });
        return;
    }).catch(function(error) {
      template.successCreate.set();
      template.errorCreate.set('Error: '+error.reason);
      return;
    });
  }
});*/
