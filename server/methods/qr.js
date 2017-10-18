import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Qr } from '../../imports/api/Leaderboard/qr.js';

Meteor.methods({

    
  ch: function (id,orgid,curlength) {
      
      check(id,String);
      check(orgid,String);
      check(curlength,Number);
      
      console.log("champ");
      user = Meteor.users.findOne(this.userId);
      if(!user && user._id != id){
          throw(new Meteor.Error(401, "error"));
      }
      curId = user._id;
      
      /** Seeing whether they have a point feild yet **/
      if(!user.profile.points){
          newpoints = 250;
      }else {
      newpoints = Number(user.profile.points) + 250;
      }
      console.log("newpoints is :",newpoints);
      
      var date = new Date();

      //var newdate = moment().format('l LT');
      var curdate = moment().valueOf();
      //console.log("newdate is :",newdate);
      
      if(!user.profile.date){
          console.log("no date feild");
      
          Meteor.users.update({_id:curId},

            {$set:{
                "profile.points": newpoints,
                "profile.date": curdate
            }}
          );
          
           /** update orgs count (amount of times been scanned) **/
              currentqr = Qr.find().fetch()[0].ar;
              console.log("currentqr is :",currentqr);
              for(var i = 0; i < curlength; i++){
                  console.log("curlength is :",curlength);
                  if(currentqr[i].orgid == orgid){
                      console.log("if statement called!");
                      newcount = Number(currentqr[i].count)+1;
                      console.log("newcount is :",newcount);
                      console.log("db count is :",currentqr[i].count);
                      //var c = ar[i];
                      
                        /*db.collection.update(
                            { _id: <matching id>, "items.id": 1111 },
                            { "$inc": { "items.$.qty": 1 } }
                        )*/
                      
                      /*console.log("c is :",[c]);
                      console.log("second c is :",c);*/
                      Qr.update( 
                        { _id: Qr.find().fetch()[0]._id, "ar.orgid": orgid}, 
                        { "$inc": { "ar.$.count": 1 } }
                      );
                  }
              }
              
              
              return newpoints;
          
      }else {
          console.log("there is a date");
          var old = user.profile.date;
          console.log("old date was :",old);
          var newdate = curdate - old;
          console.log("newdate is :",newdate);
          if (newdate < 1200000){
              throw (new Meteor.Error(401, "Sorry, looks like you have to wait for " + ((7200-(newdate/1000))/60).toFixed(0)+" more minutes"));
          }else {
              console.log("else statement called");
              Meteor.users.update({_id:curId},
                {$set:{
                    "profile.points": newpoints,
                    "profile.date": curdate
                }}
            );
              
              /** update orgs count (amount of times been scanned) **/
              currentqr = Qr.find().fetch()[0].ar;
              console.log("currentqr is :",currentqr);
              for(var i = 0; i < curlength; i++){
                  console.log("curlength is :",curlength);
                  if(currentqr[i].orgid == orgid){
                      console.log("if statement called!");
                      newcount = Number(currentqr[i].count)+1;
                      console.log("newcount is :",newcount);
                      console.log("db count is :",currentqr[i].count);
                      //var c = ar[i];
                      
                        /*db.collection.update(
                            { _id: <matching id>, "items.id": 1111 },
                            { "$inc": { "items.$.qty": 1 } }
                        )*/
                      
                      /*console.log("c is :",[c]);
                      console.log("second c is :",c);*/
                      Qr.update( 
                        { _id: Qr.find().fetch()[0]._id, "ar.orgid": orgid}, 
                        { "$inc": { "ar.$.count": 1 } }
                      );
                  }
              }
              
              
              return newpoints;
          }
      }
    

  },
    se: function (id,orgid,curlength) {
      
      check(id,String);
      check(orgid,String);
      check(curlength,Number);
      
      console.log("champ");
      user = Meteor.users.findOne(this.userId);
      if(!user && user._id != id){
          throw(new Meteor.Error(401, "error"));
      }
      curId = user._id;
      
      /** Seeing whether they have a point feild yet **/
      if(!user.profile.points){
          newpoints = 1;
      }else {
      newpoints = Number(user.profile.points) + 1;
      }
      console.log("newpoints is :",newpoints);
      
      var date = new Date();

      //var newdate = moment().format('l LT');
      var curdate = moment().valueOf();
      //console.log("newdate is :",newdate);
      
      if(!user.profile.date){
          console.log("no date feild");
      
          Meteor.users.update({_id:curId},

            {$set:{
                "profile.points": newpoints,
                "profile.date": curdate
            }}
          );
          
           /** update orgs count (amount of times been scanned) **/
              currentqr = Qr.find().fetch()[0].ar;
              console.log("currentqr is :",currentqr);
              for(var i = 0; i < curlength; i++){
                  console.log("curlength is :",curlength);
                  if(currentqr[i].orgid == orgid){
                      console.log("if statement called!");
                      newcount = Number(currentqr[i].count)+1;
                      console.log("newcount is :",newcount);
                      console.log("db count is :",currentqr[i].count);
                      //var c = ar[i];
                      
                        /*db.collection.update(
                            { _id: <matching id>, "items.id": 1111 },
                            { "$inc": { "items.$.qty": 1 } }
                        )*/
                      
                      /*console.log("c is :",[c]);
                      console.log("second c is :",c);*/
                      Qr.update( 
                        { _id: Qr.find().fetch()[0]._id, "ar.orgid": orgid}, 
                        { "$inc": { "ar.$.count": 1 } }
                      );
                  }
              }
              
              
              return newpoints;
          
      }else {
          console.log("there is a date");
          var old = user.profile.date;
          console.log("old date was :",old);
          var newdate = curdate - old;
          console.log("newdate is :",newdate);
          if(newdate < 1200000){
              throw (new Meteor.Error(401, "Sorry, looks like you have to wait for " + ((7200 - (newdate / 1000)) / 60).toFixed(0) + " more minutes"));
          }else {
              console.log("else statement called");
              Meteor.users.update({_id:curId},
                {$set:{
                    "profile.points": newpoints,
                    "profile.date": curdate
                }}
            );
              
              /** update orgs count (amount of times been scanned) **/
              currentqr = Qr.find().fetch()[0].ar;
              console.log("currentqr is :",currentqr);
              for(var i = 0; i < curlength; i++){
                  console.log("curlength is :",curlength);
                  if(currentqr[i].orgid == orgid){
                      console.log("if statement called!");
                      newcount = Number(currentqr[i].count)+1;
                      console.log("newcount is :",newcount);
                      console.log("db count is :",currentqr[i].count);
                      //var c = ar[i];
                      
                        /*db.collection.update(
                            { _id: <matching id>, "items.id": 1111 },
                            { "$inc": { "items.$.qty": 1 } }
                        )*/
                      
                      /*console.log("c is :",[c]);
                      console.log("second c is :",c);*/
                      Qr.update( 
                        { _id: Qr.find().fetch()[0]._id, "ar.orgid": orgid}, 
                        { "$inc": { "ar.$.count": 1 } }
                      );
                  }
              }
              
              
              return newpoints;
          }
      }
    

  },
    va: function (id,orgid,curlength) {
      
      check(id,String);
      check(orgid,String);
      check(curlength,Number);
      
      console.log("champ");
      user = Meteor.users.findOne(this.userId);
      if(!user && user._id != id){
          throw(new Meteor.Error(401, "error"));
      }
      curId = user._id;
      
      /** Seeing whether they have a point feild yet **/
      if(!user.profile.points){
          newpoints = 50;
      }else {
      newpoints = Number(user.profile.points) + 50;
      }
      console.log("newpoints is :",newpoints);
      
      var date = new Date();

      //var newdate = moment().format('l LT');
      var curdate = moment().valueOf();
      //console.log("newdate is :",newdate);
      
      if(!user.profile.date){
          console.log("no date feild");
      
          Meteor.users.update({_id:curId},

            {$set:{
                "profile.points": newpoints,
                "profile.date": curdate
            }}
          );
          
           /** update orgs count (amount of times been scanned) **/
              currentqr = Qr.find().fetch()[0].ar;
              console.log("currentqr is :",currentqr);
              for(var i = 0; i < curlength; i++){
                  console.log("curlength is :",curlength);
                  if(currentqr[i].orgid == orgid){
                      console.log("if statement called!");
                      newcount = Number(currentqr[i].count)+1;
                      console.log("newcount is :",newcount);
                      console.log("db count is :",currentqr[i].count);
                      //var c = ar[i];
                      
                        /*db.collection.update(
                            { _id: <matching id>, "items.id": 1111 },
                            { "$inc": { "items.$.qty": 1 } }
                        )*/
                      
                      /*console.log("c is :",[c]);
                      console.log("second c is :",c);*/
                      Qr.update( 
                        { _id: Qr.find().fetch()[0]._id, "ar.orgid": orgid}, 
                        { "$inc": { "ar.$.count": 1 } }
                      );
                  }
              }
              
              
              return newpoints;
          
      }else {
          console.log("there is a date");
          var old = user.profile.date;
          console.log("old date was :",old);
          var newdate = curdate - old;
          console.log("newdate is :",newdate);
          if (newdate < 1200000){
              throw (new Meteor.Error(401, "Sorry, looks like you have to wait for " + ((7200 - (newdate / 1000)) / 60).toFixed(0) + " more minutes"));
          }else {
              console.log("else statement called");
              Meteor.users.update({_id:curId},
                {$set:{
                    "profile.points": newpoints,
                    "profile.date": curdate
                }}
            );
              
              /** update orgs count (amount of times been scanned) **/
              currentqr = Qr.find().fetch()[0].ar;
              console.log("currentqr is :",currentqr);
              for(var i = 0; i < curlength; i++){
                  console.log("curlength is :",curlength);
                  if(currentqr[i].orgid == orgid){
                      console.log("if statement called!");
                      newcount = Number(currentqr[i].count)+1;
                      console.log("newcount is :",newcount);
                      console.log("db count is :",currentqr[i].count);
                      //var c = ar[i];
                      
                        /*db.collection.update(
                            { _id: <matching id>, "items.id": 1111 },
                            { "$inc": { "items.$.qty": 1 } }
                        )*/
                      
                      /*console.log("c is :",[c]);
                      console.log("second c is :",c);*/
                      Qr.update( 
                        { _id: Qr.find().fetch()[0]._id, "ar.orgid": orgid}, 
                        { "$inc": { "ar.$.count": 1 } }
                      );
                  }
              }
              
              
              return newpoints;
          }
      }
    

  }
});
