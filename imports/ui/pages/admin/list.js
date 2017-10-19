import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { ReactiveVar } from 'meteor/reactive-var';
import { Roles } from 'meteor/alanning:roles';
import { Organisations } from '../../../api/Leaderboard/organisations.js';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

Bert.defaults.hideDelay = 10000;
import './list.html';

Template.List.onCreated(() => {

  if(!Meteor.userId()){
    setTimeout("window.location.href='/'",0);
  }
  const administrator = Roles.userIsInRole(this.userId, ['geia-su']);
  console.log("admin is :",administrator);

  Template.instance().subscribe('allsecrets');
  Template.instance().subscribe('listsecrets');

  //Logs
});

Template.List.events({
  'submit .updateorg'(event) {
    event.preventDefault();
    var orgid = event.target.orgid.value;
    var orgname = event.target.orgname.value;
    //var orgvalidated = event.target.orgvalidated.value;
    //var orgstate = event.target.orgstate.value;
   // var orgauthstatus = event.target.orgauthstatus.value;
   // var orgstars = event.target.orgstars.value;
    var orgcurscore = event.target.orgcurscore.value;
    //var orgnewscore = event.target.orgnewscore.value;
    var orgrewards = event.target.orgrewards.value;

    Meteor.call('admineditorg',orgid,orgname,orgrewards,orgcurscore, ( error ) => {
        if ( error ) {
            alert( error.reason );
        }else {
            Bert.alert( "Change was successfull on " + orgname, 'success' );
            //console.log("Should of worked??")
        }
    });
  },
  'submit .logoutAdmin'(event){
    event.preventDefault();
    Meteor.logout((er) => {
            if (er) {
                //alert("Error logging out");
            } else {
                FlowRouter.go('/');
            }
        });
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

Template.List.helpers({
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
Template.List.events({
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
