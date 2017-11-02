import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor'

if(Meteor.isServer){
    Meteor.publish("rpw", function(){
    //console.log(' i be called kid')
    return Meteor.users.find({});
    })
};
