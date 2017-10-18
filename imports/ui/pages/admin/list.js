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

  list() {
    return Meteor.users.find({});
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
