import { Meteor } from 'meteor/meteor';
import { Match } from 'meteor/check'
import { Organisations } from '../../imports/api/Leaderboard/organisations.js';

Meteor.methods({
    regOrg: function (mainindust,mainRegion,mainCity,
                       authorized,authorizedstatus,orgname,
                       orgemail,orgphoneday,orgphoneafter,globalAddress,orgdescrip,
                       orgsust,mondayfinish,mondaystart,tuesdaystart,tuesdayfinish,
                       wednesdaystart,wednesdayfinish,thursdaystart,thursdayfinish,
                       fridaystart,fridayfinish,saturdaystart,saturdayfinish,
                       sundaystart,sundayfinish,lat,lng,mondaystartsub,mondayfinishsub,
                       tuesdaystartsub,tuesdayfinishsub,wednesdaystartsub,wednesdayfinishsub,
                       thursdaystartsub,thursdayfinishsub,fridaystartsub,fridayfinishsub,
                       saturdaystartsub,saturdayfinishsub,sundaystartsub,sundayfinishsub,hoursChecked,online,appoint,newArray) {

        user = Meteor.users.findOne(this.userId);
        if(!user){
            throw(new Meteor.Error(401, "error"));
        }
        console.log("hours checked is :",hoursChecked);
        console.log("online checked is :",online);
        console.log("appoint checked is :",appoint);
        console.log(typeof hoursChecked);
        console.log(typeof online);
        console.log(typeof appoint);
        check([hoursChecked,online,appoint],[Boolean]);
        //console.log("orgstreet is :",orgstreet);
        console.log("type is:",typeof orgname);
        //console.log("type is:",typeof orgstreet);
        console.log("type is:",typeof orgdescrip);
        console.log("type is:",typeof orgsust);
        //console.log("orginsta is :",orginsta)
        //console.log("type is:",typeof orginsta);
        check(mainindust, String);
        check(mainRegion, String);
        check(mainCity, String);
        check(globalAddress, String);
        check(authorizedstatus, String);
        check(orgemail, String);
        //Match.test(newArray, Number);
        console.log("checkarray is :", newArray);
        const NonEmptyString = Match.Where((x) => {
            check(x, String);
            return x.length > 0;
        });
        for (var i = 0; i < newArray.length; i++) {
            check(newArray[i], NonEmptyString);
        }


        /*check(orgwebsite, String);
        check(orgfb, String);
        check(orgtwitter, String);
        check(orglinked, String);
        check(orgyoutube, String);
        check(orgpin, String);
        check(orginsta, String);*/
        //check(orgpoststreet, String);
        //check(mainRegionPostal, String);
        check(orgname, String);
        //check(orgstreet, String);
        check(orgdescrip, String);
        check(orgsust, String);
        check(orgphoneday,String);
        check(orgphoneafter,String);
        /*if(orgtwitter != ""){
            //console.log("orgtw 0 is :",orgtwitter[0]);
            //console.log("orgtw check is :",orgtwitter[0] =='h');
            if(orgtwitter[0] != 'h' && orgtwitter[1] != 't'){
                orgtwitter = "http://"+orgtwitter;
            }
        }
        if(orgfb != ""){
            if(orgfb[0] != 'h' && orgfb[1] != 't'){
            orgfb = "http://"+orgfb;
            }
        }
        if(orginsta != ""){
            if(orglinked[0] != 'h' && orglinked[1] != 't'){
            orginsta = "http://"+orginsta;
            }
        }
        if(orglinked != ""){
            if(orglinked[0] != 'h' && orglinked[1] != 't'){
            orglinked = "http://"+orglinked;
            }
        }
        if(orgpin != ""){
            if(orgpin[0] != 'h' && orgpin[1] != 't'){
            orgpin = "http://"+orgpin;
            }
        }
        if(orgyoutube != ""){
            if(orgyoutube[0] != 'h' && orgyoutube[1] != 't'){
            orgyoutube = "http://"+orgyoutube;
            }
        }
        if(orgwebsite != ""){
            if(orgwebsite[0] != 'h' && orgwebsite[1] != 't'){
            orgwebsite = "http://"+orgwebsite;
            }
        }*/

        var url = orgname.replace(/\s+/g, '');
        url = url.toLowerCase();
         /*console.log("type is:", mondayfinish);
        console.log("type is:", tuesdayfinish);
        console.log("type is:", wednesdayfinish);
        console.log("type is:", thursdayfinish);
        console.log("type is:", fridayfinish);
        console.log("type is:", saturdayfinish);
        console.log("type is:", sundayfinish);
        console.log("type is:", mondaystart);
        console.log("type is:", tuesdaystart);
        console.log("type is:", wednesdaystart);
        console.log("type is:", thursdaystart);
        console.log("type is:", fridaystart);
        console.log("type is:", saturdaystart);
        console.log("type is:", sundaystart);
        //check([orgname,orgstreet,orgdescrip,orgsust], [String]);
        console.log("type is:",typeof orgpost);
        console.log("type is:",typeof orgpostpost);
        console.log("type is:",typeof orgphoneday);
        console.log("type is:",typeof orgphoneafter);
        console.log("type is:",typeof mondayfinish);
        console.log("type is:",typeof tuesdayfinish);
        console.log("type is:",typeof wednesdayfinish);
        console.log("type is:",typeof thursdayfinish);
        console.log("type is:",typeof fridayfinish);
        console.log("type is:",typeof saturdayfinish);
        console.log("type is:",typeof sundayfinish);
        console.log("type is:",typeof mondaystart);
        console.log("type is:",typeof tuesdaystart);
        console.log("type is:",typeof wednesdaystart);
        console.log("type is:",typeof thursdaystart);
        console.log("type is:",typeof fridaystart);
        console.log("type is:",typeof saturdaystart);
        console.log("type is:",typeof sundaystart);*/
        check([mondayfinish,mondaystart,tuesdaystart,tuesdayfinish,
                       wednesdaystart,wednesdayfinish,thursdaystart,thursdayfinish,
                       fridaystart,fridayfinish,saturdaystart,saturdayfinish,
                       sundaystart,sundayfinish,lat,lng,mondaystartsub,mondayfinishsub,
                       tuesdaystartsub,tuesdayfinishsub,wednesdaystartsub,wednesdayfinishsub,
                       thursdaystartsub,thursdayfinishsub,fridaystartsub,fridayfinishsub,saturdaystartsub,
                       saturdayfinishsub,sundaystartsub,sundayfinishsub], [Number]);
        if(orgphoneday == 0){
            orphoneday = "";
        }
        if(orgphoneafter == 0){
            orgphoneafter = "";
        }

        /**Makes sure there is not a copy of phone day and phone after hours **/
        if(orgphoneday == orgphoneafter){
          orgphoneafter = "";
        }
        Organisations.insert({

            "name": orgname,
            "address": {
                "street": globalAddress,
                "town": mainCity,
                "city": mainCity,
                "region": mainRegion,
                "country": "New Zealand",
                "postCode": "",
                "Postalstreet": "",
                "Postaltown": "",
                "Postalcity": "",
                "Postalregion": "",
                "country": "New Zealand",
                "PostalpostCode": ""
            },
            "organisationSize": "1-10",
            "description": orgdescrip,
            "sustainable": orgsust,
            "latitude": lat,
            "longitude": lng,
            "operatingHours": {
                "mondaystart":mondaystart,
                "mondaysubstart": mondaystartsub,
                "mondayfinish":mondayfinish,
                "mondaysubfinish": mondayfinishsub,
                "tuesdaystart":tuesdaystart,
                "tuesdaysubstart": tuesdaystartsub,
                "tuesdayfinish":tuesdayfinish,
                "tuesdaysubfinish": tuesdayfinishsub,
                "wednesdaystart":wednesdaystart,
                "wednesdaysubstart": wednesdaystartsub,
                "wednesdayfinish":wednesdayfinish,
                "wednesdaysubfinish": wednesdayfinishsub,
                "thursdaystart":thursdaystart,
                "thursdaysubstart": thursdaystartsub,
                "thursdayfinish":thursdayfinish,
                "thursdaysubfinish": thursdayfinishsub,
                "fridaystart":fridaystart,
                "fridaysubstart": fridaystartsub,
                "fridayfinish":fridayfinish,
                "fridaysubfinish": fridayfinishsub,
                "saturdaystart":saturdaystart,
                "saturdaysubstart": saturdaystartsub,
                "saturdayfinish":saturdayfinish,
                "saturdaysubfinish": saturdayfinishsub,
                "sundaystart":sundaystart,
                "sundaysubstart": sundaystartsub,
                "sundayfinish":sundayfinish,
                "sundaysubfinish": sundayfinishsub
            },
            "hoursChecked": hoursChecked,
            "online": online,
            "appoint": appoint,
            "phone1": orgphoneday,
            "phone2": orgphoneafter,
            "email": orgemail,
            "website": "",
            "facebook": "",
            "twitter": "",
            "youtube": "",
            "LinkedIn": "",
            "Pinterest": "",
            "Instagram": "",
            "logo": "Default-Logo-Image-300x300.jpg",
            "image1": "",
            "image2": "",
            "banner": "Default-Banner-Image-1500x300.jpg",
            "badges":"none",
            "listingType": "premiere",
            "administrator": ["userID_1", "userID_2"],//These should be the actual user IDs
            "staff": ["userID_1,", "userID_2"],
            "scores":"",
            "newScores":"",
            "yScore": "",
            "rawTotal": "",
            "staffNum": "",
            "areaNum": "",
            "stars":"",
            "industry": mainindust,
            "subIndustry": newArray,
            "url": url,
            "validated": false,
            "checkstate": false,
            "state": true,
            "currentState": "Yes",
            "authstatus": "self",
            "rewards": false,
            "rank": 3
        });

        var userOrgId = Organisations.findOne({"name": orgname})._id;
        console.log("userordId is :",userOrgId);
        //SessionAmplify.set('regOrgId', userOrgId);
        //console.log(SessionAmplify.get('regOrgId'));
        Meteor.users.update({_id: Meteor.userId()}, {$addToSet: {"profile.organisation": [userOrgId,orgname]}});
    },
    //Updates the EditOrg page
    'orgupdate': function(orgId,mainindust,mainRegion,mainCity,authorizedstatus,orgname,
                           orgemail,orgphoneday,orgphoneafter,orgwebsite,
                           orgfb,orgtwitter,orglinked,orgyoutube,orgpin,orginsta,
                           orgstreet,orgdescrip,
                           orgsust,mondayfinish,mondaystart,tuesdaystart,tuesdayfinish,
                       wednesdaystart,wednesdayfinish,thursdaystart,thursdayfinish,
                       fridaystart,fridayfinish,saturdaystart,saturdayfinish,
                       sundaystart,sundayfinish,mondaystartsub,mondayfinishsub,
                       tuesdaystartsub,tuesdayfinishsub,wednesdaystartsub,wednesdayfinishsub,
                       thursdaystartsub,thursdayfinishsub,fridaystartsub,fridayfinishsub,
                       saturdaystartsub,saturdayfinishsub,sundaystartsub,sundayfinishsub,hoursChecked,online,appoint) {
        // ensure the inputs are formatted correctly
        //console.log("orgupdate is called: ",orgId);
        check(mainindust, String);
        check(mainRegion, String);
        check(mainCity, String);
        //check(authorized, String);
        check(authorizedstatus, String);
        check(orgemail, String);
        check(orgwebsite, String);
        check(orgfb, String);
        check(orgtwitter, String);
        check(orglinked, String);
        check(orgyoutube, String);
        check(orgpin, String);
        check(orginsta, String);
        //check(orgpoststreet, String);
        //check(mainRegionPostal, String);
        check(orgname, String);
        check(orgstreet, String);
        check(orgdescrip, String);
        check(orgsust, String);
        check(orgphoneday, String);
        check(orgphoneafter, String);
        check([hoursChecked,online,appoint],[Boolean]);
        /*console.log("id is:",orgId);
              console.log("type is:", mondayfinish);
        console.log("type is:", tuesdayfinish);
        console.log("type is:", wednesdayfinish);
        console.log("type is:", thursdayfinish);
        console.log("type is:", fridayfinish);
        console.log("type is:", saturdayfinish);
        console.log("type is:", sundayfinish);
        console.log("type is:", mondaystart);
        console.log("type is:", tuesdaystart);
        console.log("type is:", wednesdaystart);
        console.log("type is:", thursdaystart);
        console.log("type is:", fridaystart);
        console.log("type is:", saturdaystart);
        console.log("type is:", sundaystart);
        //check([orgname,orgstreet,orgdescrip,orgsust], [String]);
        console.log("type is:",typeof orgpost);
        console.log("type is:",typeof orgpostpost);
        console.log("type is:",typeof orgphoneday);
        console.log("type is:",typeof orgphoneafter);
        console.log("type is:",typeof mondayfinish);
        console.log("type is:",typeof tuesdayfinish);
        console.log("type is:",typeof wednesdayfinish);
        console.log("type is:",typeof thursdayfinish);
        console.log("type is:",typeof fridayfinish);
        console.log("type is:",typeof saturdayfinish);
        console.log("type is:",typeof sundayfinish);
        console.log("type is:",typeof mondaystart);
        console.log("type is:",typeof tuesdaystart);
        console.log("type is:",typeof wednesdaystart);
        console.log("type is:",typeof thursdaystart);
        console.log("type is:",typeof fridaystart);
        console.log("type is:",typeof saturdaystart);
        console.log("type is:",typeof sundaystart);
        check([orgpost,orgpostpost], [Number]);*/
        /** NEED TO CHECK WHEN FREE
        mondayfinish,mondaystart,tuesdaystart,tuesdayfinish,
                       wednesdaystart,wednesdayfinish,thursdaystart,thursdayfinish,
                       fridaystart,fridayfinish,saturdaystart,saturdayfinish,
                       sundaystart,sundayfinish,mondaystartsub,mondayfinishsub,
                       tuesdaystartsub,tuesdayfinishsub,wednesdaystartsub,wednesdayfinishsub,
                       thursdaystartsub,thursdayfinishsub,fridaystartsub,fridayfinishsub,saturdaystartsub,
                       saturdayfinishsub,sundaystartsub,sundayfinishsub
                       **/
        if(orgphoneday == 0){
            orphoneday = "";
        }
        if(orgphoneafter == 0){
            orgphoneafter = "";
        }

        if(orgtwitter != ""){
            //console.log("orgtw 0 is :",orgtwitter[0]);
            //console.log("orgtw check is :",orgtwitter[0] =='h');
            if(orgtwitter[0] != 'h' && orgtwitter[1] != 't'){
                orgtwitter = "http://"+orgtwitter;
            }
        }
        if(orgfb != ""){
            if(orgfb[0] != 'h' && orgfb[1] != 't'){
            orgfb = "http://"+orgfb;
            }
        }
        if(orginsta != ""){
            if(orglinked[0] != 'h' && orglinked[1] != 't'){
            orginsta = "http://"+orginsta;
            }
        }
        if(orglinked != ""){
            if(orglinked[0] != 'h' && orglinked[1] != 't'){
            orglinked = "http://"+orglinked;
            }
        }
        if(orgpin != ""){
            if(orgpin[0] != 'h' && orgpin[1] != 't'){
            orgpin = "http://"+orgpin;
            }
        }
        if(orgyoutube != ""){
            if(orgyoutube[0] != 'h' && orgyoutube[1] != 't'){
            orgyoutube = "http://"+orgyoutube;
            }
        }
        if(orgwebsite != ""){
            if(orgwebsite[0] != 'h' && orgwebsite[1] != 't'){
            orgwebsite = "http://"+orgwebsite;
            }
        }

        user = Meteor.users.findOne(this.userId);
        if(!user){
            throw(new Meteor.Error(401, "error"));
        }

        /*if(orgpostpost == 0 || orgpostpost == ""){
            orgpostpost = "";
        }*/
        var url = orgname.replace(/\s+/g, '');
        url = url.toLowerCase();
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
            Organisations.update({_id:orgId},

                                 {$set:{
                                     "name": orgname,
                                     "address": {
                                         "street": orgstreet,
                                         "town": mainCity,
                                         "city": mainCity,
                                         "region": mainRegion,
                                         "country": "New Zealand",
                                         "postCode": "",
                                         "Postalstreet": "",
                                         "Postaltown": "",
                                         "Postalcity": "",
                                         "Postalregion": "",
                                         "PostalpostCode": ""
                                     },
                                     //"organisationSize": "1-10",
                                     "description": orgdescrip,
                                     "sustainable": orgsust,
                                     "operatingHours": {
                                        "mondaystart":mondaystart,
                                        "mondaysubstart": mondaystartsub,
                                        "mondayfinish":mondayfinish,
                                        "mondaysubfinish": mondayfinishsub,
                                        "tuesdaystart":tuesdaystart,
                                        "tuesdaysubstart": tuesdaystartsub,
                                        "tuesdayfinish":tuesdayfinish,
                                        "tuesdaysubfinish": tuesdayfinishsub,
                                        "wednesdaystart":wednesdaystart,
                                        "wednesdaysubstart": wednesdaystartsub,
                                        "wednesdayfinish":wednesdayfinish,
                                        "wednesdaysubfinish": wednesdayfinishsub,
                                        "thursdaystart":thursdaystart,
                                        "thursdaysubstart": thursdaystartsub,
                                        "thursdayfinish":thursdayfinish,
                                        "thursdaysubfinish": thursdayfinishsub,
                                        "fridaystart":fridaystart,
                                        "fridaysubstart": fridaystartsub,
                                        "fridayfinish":fridayfinish,
                                        "fridaysubfinish": fridayfinishsub,
                                        "saturdaystart":saturdaystart,
                                        "saturdaysubstart": saturdaystartsub,
                                        "saturdayfinish":saturdayfinish,
                                        "saturdaysubfinish": saturdayfinishsub,
                                        "sundaystart":sundaystart,
                                        "sundaysubstart": sundaystartsub,
                                        "sundayfinish":sundayfinish,
                                        "sundaysubfinish": sundayfinishsub
                                     },
                                     "hoursChecked": hoursChecked,
                                     "online": online,
                                     "appoint": appoint,
                                     "phone1": orgphoneday,
                                     "phone2": orgphoneafter,
                                     "email": orgemail,
                                     "website": orgwebsite,
                                     "facebook": orgfb,
                                     "twitter": orgtwitter,
                                     "youtube": orgyoutube,
                                     "LinkedIn": orglinked,
                                     "Pinterest": orgpin,
                                     "Instagram": orginsta,
                                     /*"logo": "",
                                     "image1": "",
                                     "image2": "",*/
                                     //"badges":"none",
                                     //"listingType": "premiere",
                                     //"administrator": ["userID_1", "userID_2"],//These should be the actual user IDs
                                     //"staff": ["userID_1,", "userID_2"],
                                     // "scores":"",
                                     //"stars":"",
                                     "industry": mainindust,
                                     "url": url,
                                     //"validated": true,
                                     //"state": false,
                                     //currentState: authorized,
                                     authstatus: authorizedstatus
                                 }});
        }
    },
    //For listing status social media stuff
    'social': function (orgId,orgwebsite,
    orgfb,orgtwitter,orglinked,orgyoutube,orgpin,orginsta){
      console.log("website is :",orgwebsite);
      check(orgwebsite, String);
      check(orgfb, String);
      check(orgtwitter, String);
      check(orglinked, String);
      check(orgyoutube, String);
      check(orgpin, String);
      check(orginsta, String);
      if(orgtwitter != ""){
          //console.log("orgtw 0 is :",orgtwitter[0]);
          //console.log("orgtw check is :",orgtwitter[0] =='h');
          if(orgtwitter[0] != 'h' && orgtwitter[1] != 't'){
              orgtwitter = "http://"+orgtwitter;
          }
      }
      if(orgfb != ""){
          if(orgfb[0] != 'h' && orgfb[1] != 't'){
          orgfb = "http://"+orgfb;
          }
      }
      if(orginsta != ""){
          if(orglinked[0] != 'h' && orglinked[1] != 't'){
          orginsta = "http://"+orginsta;
          }
      }
      if(orglinked != ""){
          if(orglinked[0] != 'h' && orglinked[1] != 't'){
          orglinked = "http://"+orglinked;
          }
      }
      if(orgpin != ""){
          if(orgpin[0] != 'h' && orgpin[1] != 't'){
          orgpin = "http://"+orgpin;
          }
      }
      if(orgyoutube != ""){
          if(orgyoutube[0] != 'h' && orgyoutube[1] != 't'){
          orgyoutube = "http://"+orgyoutube;
          }
      }
      if(orgwebsite != ""){
          if(orgwebsite[0] != 'h' && orgwebsite[1] != 't'){
          orgwebsite = "http://"+orgwebsite;
          }
      }

      Organisations.update({_id:orgId},

                           {$set:{
                               "website": orgwebsite,
                               "facebook": orgfb,
                               "twitter": orgtwitter,
                               "youtube": orgyoutube,
                               "LinkedIn": orglinked,
                               "Pinterest": orgpin,
                               "Instagram": orginsta,
                           }});
    }

});
