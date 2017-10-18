/*import { Meteor } from 'meteor/meteor';
import { Area } from '../imports/api/Leaderboard/area.js';
import { Newscore } from '../imports/api/Leaderboard/newscore.js';
import { Score } from '../imports/api/Leaderboard/score.js';
import { Organisations } from '../imports/api/Leaderboard/organisations.js';

Meteor.methods({
    escore: function (toFetch,staffNumbers) {
        console.log("tofetch is:",toFetch);
        console.log("staffnum is :",staffNumbers);
        check(toFetch, String);
        check(staffNumbers, Number);

        user = Meteor.users.findOne(this.userId);

        console.log("user is :",user.emails[0].address);
        if(!user){
            throw(new Meteor.Error(401, "error"));
        }

        Score.update( Score.find().fetch()[0]._id, {
            $addToSet: {
                [toFetch]: staffNumbers
            }
        });

    },
    enewscore: function (toFetch,y) {
        console.log("tofetch is:",toFetch);
        check(toFetch, String);
        check(y, Number);

        user = Meteor.users.findOne(this.userId);

        console.log("user is :",user.emails[0].address);
        if(!user){
            throw(new Meteor.Error(401, "error"));
        }

        Newscore.update( Newscore.find().fetch()[0]._id, {
            $addToSet: {
                [toFetch]: y
            }
        });
    },
    earea: function (toFetch,areaNumbers) {
        console.log("tofetch is:",toFetch);
        check(toFetch, String);
        check(areaNumbers, Number);

        user = Meteor.users.findOne(this.userId);

        console.log("user is :",user.emails[0].address);
        if(!user){
            throw(new Meteor.Error(401, "error"));
        }

        Area.update( Area.find().fetch()[0]._id, {
            $addToSet: {
                [toFetch]: areaNumbers
            }
        });
    },
    eorg: function(orgId,z){
        check(z, Number);
        check(orgId, String);

        user = Meteor.users.findOne(this.userId);

        console.log("user is :",user.emails[0].address);
        if(!user){
            throw(new Meteor.Error(401, "error"));
        }

        //Checks the users organisation list to see whether the orgId is present
        var flag = false;
        for(var i = 0; i < user.profile.organisation.length; i++){
            if (user.profile.organisation[i][0] == orgId) {
                flag = true;
                console.log("there is a match i is :",i)
                break;
            }else {
                console.log("no match i is :",i)
            }
        }
        if(!flag){
            throw new Meteor.Error('not-authorized');
        }else {
            Organisations.update({_id: orgId}, {
                $set: {
                    scores: z
                }
            });
        }
    }
});*/
