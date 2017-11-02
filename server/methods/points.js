import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import _ from 'underscore';

Meteor.methods({
    removePoints: function () {
        if (!this.userId) {
            //console.log("adminedituser is cancelled");
            return this.ready();
        }

        const administrator = Roles.userIsInRole(this.userId, ['geia-su']);
        if (!administrator) {
            //console.log("edit user not called");
            return this.ready();
        }
        Meteor.users.update({ 'profile.points': { $ne: 0 } }, { $set: { 'profile.points': 0 } }, { multi: true });
    },
    checkWinner: function (input) {
        if (!this.userId) {
            //console.log("adminedituser is cancelled");
            return this.ready();
        }

        const administrator = Roles.userIsInRole(this.userId, ['geia-su']);
        if (!administrator) {
            //console.log("edit user not called");
            return this.ready();
        }

        //console.log("input is :", input);
        //console.log("type is :", typeof input);
        check(input, Number);

        var users = (Meteor.users.find({ "profile.points": { $gt: 0 } }).fetch());
        if (input > users.length) {
            input = users.length;
        }

        //console.log("input is :", input);
        var pointsArray = [];
        var nameArray = [];
        var emailArray = [];
        var winnersArray = [];
        var winnersEmailArray = [];
        var winnersNameArray = [];
        var max;
        for (var i = 0; i < users.length; i++) {
            var curPoint = users[i].profile.points;
            var curName = users[i].profile.name;
            var email = users[i].emails[0].address;
            var max = (users.length - 1);
              for (var j = 0; j < curPoint; j++) {
                  pointsArray.push(i);
              }
              nameArray.push(curName);
              emailArray.push(email);
              //console.log("pointsArray stuff ", pointsArray);
              //console.log("nameArray stuff", nameArray);
              //console.log("emailArray stuff", emailArray);
              //console.log("i is :", i);
              //console.log("max is :", max);
              if (i == max) {
                  //console.log("called");
                  //console.log("input 2 is :", input);
                  for (var k = 0; k < input; k++) {
                      //console.log("i is :", i);
                      var rand = _.random(0, (pointsArray.length)-1);
                      //console.log("pointsLengtth is :", pointsArray.length);
                      //winnersArray.push(rand);
                      var curValue = ((pointsArray[rand]) - k);
                      if (curValue < 0) {
                          curValue = 0;
                      }
                      var checkIndex = (pointsArray.indexOf(curValue));
                      //console.log("curValue is :", curValue);
                      //console.log("checkIndex is :", checkIndex);

                      //console.log("index1", emailArray[curValue]);
                      //console.log("index2", nameArray[curValue]);
                      winnersEmailArray.push(emailArray[curValue]);
                      winnersNameArray.push(nameArray[curValue]);
                      nameArray = _.without(nameArray, nameArray[curValue]);
                      emailArray = _.without(emailArray, emailArray[curValue]);
                      //console.log("name1 is :", nameArray);
                      //console.log("email1 is :", emailArray);
                      //console.log("rand is :", rand);
                      
                      pointsArray = _.without(pointsArray, curValue);
                      //console.log("points:", pointsArray);
                      //console.log("winnersname", winnersNameArray);
                      //console.log("emailswinners", winnersEmailArray);
                  }
                  ////console.log("win", winnersArray);
              }
              //console.log('Done', winnersEmailArray)
              //console.log('Name', winnersNameArray);
              if (winnersEmailArray[0] && winnersNameArray[0]) {
                  console.log('executing')
                  var firstWinner = "The first winner is : " + winnersEmailArray[0] + " " + winnersNameArray[0] + "\n";
                  //console.log(firstWinner);
                  //console.log(winnersEmailArray);
                  //console.log(winnersNameArray);
                  var rest = "The next winners are: \n";
                  for (var g = 1; g < input; g++) {
                      rest += winnersEmailArray[g] + " " + winnersNameArray[g] + "\n";
                  }
                  var allWinners = firstWinner + rest;
                  console.log("rest is :", allWinners);
                  /*Email.send({
                      to: "team@geia.nz",
                      from: "team@geia.nz",
                      subject: "Monthly winners!",
                      text: allWinners
                  });*/
              }
        }

        console.log('executing2')
        var firstWinner = "The first winner is : " + winnersEmailArray[0] + " " + winnersNameArray[0] + "\n";
        //console.log(firstWinner);
        //console.log(winnersEmailArray);
        //console.log(winnersNameArray);
        var rest = "The next winners are: \n";
        for (var g = 1; g < input; g++) {
            rest += winnersEmailArray[g] + " " + winnersNameArray[g] + "\n";
        }
        var allWinners = firstWinner + rest;
        console.log("rest is :", allWinners);


            
          //var users = Meteor.users.find();

          /*if (!users)
              return [];

          // it'll only come here after the subscription is ready, no .fetch required
          _.forEach(users, function (user) {
              //process item
              //console.log("item is :",user.users);
          })*/;
        
    }
});
