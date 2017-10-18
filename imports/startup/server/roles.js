//export const admin = ['mseibt202@gmail.com'];
export const admin = ['Casey@geia.nz','Alax@geia.nz','Hello@geia.nz'];

import { Accounts } from 'meteor/accounts-base';

import { Roles } from 'meteor/alanning:roles';


//export const LoadUserRoles = (user) => {
  //Roles.addUsersToRoles(user, ['geia-basic']);
  if( Roles.getUsersInRole('geia-su').count() < 1) {
    console.log("COUNT LESS THAN 1 for ROLEs")
  admin.forEach(function(index) {

        id = Accounts.createUser({
          email: index,
          password: "Gr33nfutur3",
          profile: { name: 'cooladmin', organisation: [] }
        });
        Meteor.users.update({_id: id}, {$set:{'emails.0.verified': true}});
      //Roles.addUsersToRoles(id, userData.roles);
      //if (user.emails[0].address == admin[index] && user.emails[0].verified == true) {
        Roles.addUsersToRoles(id, ['geia-su']);
    //}

  });
}
//};
/*
Accounts.onLogin(function(user) {
  Roles.addUsersToRoles(user, ['geia-basic']);
  //console.log(user);
});
*/
