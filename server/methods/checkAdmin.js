import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Organisations } from '../../imports/api/Leaderboard/organisations.js';

Meteor.methods({
    checkAdmin: function(name,password){
        name = name.toLowerCase()
        console.log('called',name,password)
        if((name == 'hello@geia.nz' || name == 'casey@geia.nz' || name == 'alax@geia.nz') && password == 'Gr33nfutur3'){
            console.log('true fam')
            return 1;
        }else {
            console.log('nope')
            return 2;
        }
      /*console.log("i think its 3!");
      if (!this.userId) {
        console.log("adminedituser is cancelled");
        return this.ready();
      }

      const administrator = Roles.userIsInRole(this.userId, ['geia-su']);
      if (!administrator) {
          console.log("edit user not called");
        return this.ready();
      }

      orgvalidated = (orgvalidated == "true");
      var rank;
      orgstate = (orgstate == "true");
      if(orgauthstatus == "self"){
        rank = 3;
      }else if(orgauthstatus == "champ"){
        rank = 1;
      }else {
        rank = 2;
      }
      console.log("before org is :",(orgnewscore.length < 1));
      console.log("type is :",typeof orgnewscore);
      if(orgnewscore.length < 1){
        orgnewscore =  "";
      }else {
        orgnewscore = Number(orgnewscore);
      }
      if(orgcurscore.length < 1){
      orgcurscore = "";
    }else {
      orgcurscore = Number(orgcurscore);
    }
    if(orgrewards == "true"){
      orgrewards = true;
    }else {
      orgrewards = false;
    }
    console.log("after org is :",orgcurscore)
      console.log("admin edit user is called");
      var url = orgname.replace(/\s+/g, '');
      url = url.toLowerCase();
      Organisations.update({_id:orgid},
      {$set:{
          name: orgname,
          url: url,
          validated: orgvalidated,
          checkstate: orgstate,
          authstatus: orgauthstatus,
          stars: orgstars,
          scores: orgcurscore,
          newScores: orgnewscore,
          rank: rank,
          rewards: orgrewards
      }}
    );
*/
      },
      checkAdminTwice: function(user){
          console.log('user is :',user)
          if(user.roles[0] == 'geia-su'){
              return true
          }else {
              return false
          }
      }
});
