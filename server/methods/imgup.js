import { Meteor } from 'meteor/meteor';
import { Organisations } from '../../imports/api/Leaderboard/organisations.js';

Meteor.methods({
    logoupload: function (sess,imgurl) {
        check(sess,String);
        user = Meteor.users.findOne(this.userId);
        if(!user){
            throw(new Meteor.Error(401, "error"));
        }
        //console.log("sess is :",sess);
        Organisations.update( {_id: sess}, {
            $set: {
                'logo': imgurl

            }
        });
    },
    banupload: function (sess,imgurl) {
        check(sess,String);
        user = Meteor.users.findOne(this.userId);
        if(!user){
            throw(new Meteor.Error(401, "error"));
        }
        //console.log("sess is :",sess);
        Organisations.update( {_id: sess}, {
            $set: {
                'banner': imgurl

            }
        });
    },
    img1upload: function (sess,imgurl) {
        check(sess,String);
        user = Meteor.users.findOne(this.userId);
        if(!user){
            throw(new Meteor.Error(401, "error"));
        }
        //console.log("sess is :",sess);
        Organisations.update( {_id: sess}, {
            $set: {
                'image1': imgurl

            }
        });
    },
    img2upload: function (sess,imgurl) {
        check(sess,String);
        user = Meteor.users.findOne(this.userId);
        if(!user){
            throw(new Meteor.Error(401, "error"));
        }
        //console.log("sess is :",sess);
        Organisations.update( {_id: sess}, {
            $set: {
                'image2': imgurl

            }
        });
    },

});
