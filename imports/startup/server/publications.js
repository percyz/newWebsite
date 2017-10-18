import { Meteor } from 'meteor/meteor';

import { Accounts } from 'meteor/accounts-base';

import { Roles } from 'meteor/alanning:roles';

import { Organisations } from '../../api/Leaderboard/organisations.js';



Meteor.publish('allsecrets', function usersList() {
  console.log("i think its 1!");
  const administrator = Roles.userIsInRole(this.userId, ['geia-su']);
  const staff = Roles.userIsInRole(this.userId, ['geia-staff']);
  if (!administrator && !staff) {
      console.log("users.all NOT is called");
    return this.ready();
  }
  console.log("users.all is called");
  return Organisations.find();
  //return Meteor.users.find();
});

/*Meteor.publish('users.one', function (userID) {
  return Meteor.users.findOne({
    _id: userID,
  });
});*/

Meteor.publish('listsecrets', function usersList() {
  console.log("i think its 2!");
  if (!this.userId) {
    console.log("users.list is cancelled");
    return this.ready();
  }

  const administrator = Roles.userIsInRole(this.userId, ['geia-su']);
  if (!administrator) {
      console.log("users.list NOT is called");
    return this.ready();
  }
  console.log("users.list is called");
  return Meteor.users.find({}, {fields: {'services': 0}})
  //return Meteor.users.find({});
});
