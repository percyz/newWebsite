import { Meteor } from 'meteor/meteor';
import { DDPRateLimiter } from 'meteor/ddp-rate-limiter';
import { _ } from 'meteor/underscore';

/*// Define a rule that matches login attempts by non-admin users
var loginRule = {
  userId: function (userId) {
    return Meteor.users.findOne(userId).type !== 'Admin';
  },
  type: 'method',
  name: 'login'
}
// Add the rule, allowing up to 5 messages every 1000 milliseconds.
DDPRateLimiter.addRule(loginRule, 5, 1000);*/