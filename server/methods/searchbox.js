import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Organisations } from '../../imports/api/Leaderboard/organisations.js';

Meteor.methods({
    checkfalse: function(orgid){
        console.log("checkfalse id is :",orgid)

      Organisations.update({_id:orgid},
      {$set:{
          state: false
      }}
    );

     },
    checktrue: function(orgid){
        console.log("checktrue id is :",orgid)

      Organisations.update({_id:orgid},
      {$set:{
          state: true
      }}
    );

     }
});
