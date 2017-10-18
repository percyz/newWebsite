import { Meteor } from 'meteor/meteor';

//Email URL

Meteor.startup(function () {
    //  smtp://USERNAME:PASSWORD@HOST:PORT
    //process.env.MAIL_URL = 'smtp://chuckrobbie202@gmail.com:qwerty12345678910@smtp.gmail.com:587';
    //"MAIL_URL": "smtp://YOURgMAILuSERNAME%40gmail.com:@smtp.gmail.com:587/"
    process.env.MAIL_URL = 'smtp://hello@geia.nz:Gr33n1337:@smtp.gmail.com:587';
    Accounts.emailTemplates.siteName = "Geia";
    Accounts.emailTemplates.from = "Geia <admin@Geia.com>";

Accounts.emailTemplates.verifyEmail = {
  subject() {
    return "Verify Your Email Address";
  },
  text( user, url ) {
    var newurl = url.slice(30);
    newurl = "https://www.geia.nz" + newurl;
    console.log("orig url:", url);
    console.log("newURL is :", newurl);
    let emailAddress   = user.emails[0].address,
        urlWithoutHash = newurl,
        supportEmail   = "hello@geia.nz",
        emailBody      = `To verify your email address (${emailAddress}) visit the following link:\n\n${urlWithoutHash}\n\n If you did not request this verification, please ignore this email. If you feel something is wrong, please contact our support team: ${supportEmail}.`;

    return emailBody;
  }
};

// Configures "reset password account" email link
Accounts.emailTemplates.resetPassword.text = function (user, url) {
    var token = url.substring(url.lastIndexOf('/') + 1, url.length);
    var newUrl = Meteor.absoluteUrl('reset/' + token);
    newUrl = url.slice(30);
    geiaUrl = "https://www.geia.nz";
    newUrl = geiaUrl + newUrl; 
    //console.log("newUrl is :", newUrl);
    var str = 'Hello,\n';
    str += 'To reset your password, please click follow link...\n';
    str += newUrl;
    str += "\nThanks, from team at Geia";
    //console.log("str is :", str);
    return str;
}
/*    Accounts.urls.resetPassword = function (token) {
        console.log("token is :", token);
    return Meteor.absoluteUrl("rspw-password/" + token);
};*/

});

// In your server code: define a method that the client can call
Meteor.methods({
    sendEmail: function (to, from, subject, text) {
        check([to, from, subject, text], [String]);
        // Let other method calls from the same client start running,
        // without waiting for the email sending to complete.
        this.unblock();
        Email.send({
            to: to,
            from: from,
            subject: subject,
            text: text
        });
    },

    //reset password
    rspw: function (userId, email) {
        check([userId, email], [String]);
        Accounts.sendResetPasswordEmail(userId, email);
    },
    //Verification email

    sendVerificationLink() {
        let userId = Meteor.userId();
        if ( userId ) {
            return Accounts.sendVerificationEmail( userId );
        }
    }


    /*,

    'company/imageupdate': function(orgId) {

        //Check that the id is a String
        check(orgId, String);
        //Check whether current user is logged in
        if (! this.userId) {
            throw new Meteor.Error('not-authorized');
        }

        user = Meteor.users.findOne(this.userId);
        var flag = false;
        for(var i = 0; i < user.profile.organisation.length; i++){
            if (user.profile.organisation[i] == orgId) {
                flag = true;
                console.log("there is a match i is :",i)
                break;
            }else {
                console.log("no match i is :",i)
            }
        }
        if(flag === false){
             console.log("flag is :",flag)
             throw new Meteor.Error('not-authorized');
        }


        */
    // ensure the inputs are formatted correctly
    /* check(companyId, String);

        user = Meteor.users.findOne(this.userId);
        if(!user){
            return false;
        }
        for(var i = 0; i > Meteor.users.organisation.length; i++){
            if (Meteor.users.organisation[i] === companyId && user) {
                flag = false;
            }
        }
        return flag; */
    /*} */
});
