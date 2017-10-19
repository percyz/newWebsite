import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Organisations } from '../../imports/api/Leaderboard/organisations.js';

Meteor.methods({
    admineditorg: function(orgid,orgname,orgrewards,orgcurscore){
      console.log("i think its 3!",orgcurscore);
      if (!this.userId) {
        console.log("adminedituser is cancelled");
        return this.ready();
      }

      const administrator = Roles.userIsInRole(this.userId, ['geia-su']);
      if (!administrator) {
          console.log("edit user not called");
        return this.ready();
      }

      if(orgcurscore.length < 1){
      orgcurscore = "";
      } else if (orgcurscore == "undefined") {
          orgcurscore = "undefined";   
      } else {
          orgcurscore = Number(orgcurscore);
      }

    if(orgrewards == "true"){
      orgrewards = true;
    }else {
      orgrewards = false;
    }
    console.log("after org is :",orgcurscore)
      console.log("admin edit user is called");
      /*var url = orgname.replace(/\s+/g, '');
      url = url.toLowerCase();*/
      Organisations.update({_id:orgid},
      {$set:{
          name: orgname,
          scores: orgcurscore,
          rewards: orgrewards
      }}
    );

      }
});
