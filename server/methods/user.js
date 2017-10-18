import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';

Meteor.methods({

  edituser: function (emailAddress,firstName,userPhone) {
    console.log("edit user is called");
      check(emailAddress, String);
      check(firstName, String);
      check(userPhone, String);

      user = Meteor.users.findOne(this.userId);
      id = user._id;
      console.log("user is :",user);
      if(!user){
          throw(new Meteor.Error(401, "error"));
      }
      console.log(emailAddress);
      console.log(userPhone);
      console.log(firstName);

      Meteor.users.update({_id:id},

        {$set:{
            emails: [{
            address: emailAddress,
            verified: true,
          }],
            "profile.name": firstName,
            "profile.phone": userPhone

        }}
                        );

    },

  signIn: function (user) {
      _generateStampedLoginToken = function () {
          return {
              token: Random.secret(),
              when: new Date
          };
      }

      var stampedLoginToken = Accounts._generateStampedLoginToken();

      //console.log("signin user is :",user)

      Accounts._insertLoginToken(user._id, stampedLoginToken);
  },

    adminedituser: function(id,emailAddress,firstName,userPhone,points){
      console.log("i think its 3!");
      if (!this.userId) {
        console.log("adminedituser is cancelled");
        return this.ready();
      }

      const administrator = Roles.userIsInRole(this.userId, ['geia-su']);
      if (!administrator) {
          console.log("edit user not called");
        return this.ready();
      }
      console.log("admin edit user is called");
      points = Number(points);
      Meteor.users.update({_id:id},

      /*
      {$set:{
          "emails": {
          "address": emailAddress
          },
          "profile": {
              "name": firstName,
              "phone": userPhone
           }
      }}*/
      /*{$set:{
          emails: [{
          address: emailAddress,
          verified: true,
        }],
          profile: {
              name: firstName,
              phone: userPhone
           }
      }}*/
      {$set:{
          emails: [{
          address: emailAddress,
          verified: true,
        }],
          "profile.name": firstName,
          "profile.phone": userPhone,
          "profile.points": points

      }}
    );

      }
});
