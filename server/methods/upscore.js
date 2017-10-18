import { Meteor } from 'meteor/meteor';
import { Area } from '../../imports/api/Leaderboard/area.js';
import { Newscore } from '../../imports/api/Leaderboard/newscore.js';
import { Score } from '../../imports/api/Leaderboard/score.js';
import { Minstaffarea } from '../../imports/api/Leaderboard/minstaffarea.js';
import { Organisations } from '../../imports/api/Leaderboard/organisations.js';
import { Assess } from '../../imports/api/Leaderboard/assess.js';

Meteor.methods({
    newtotal: function (toFetch,staffNumbers,areaNumbers,Total,testing,orgId,areaLength,scoreLength,
                         newScoreLength,scoreSetting) {
        check(toFetch,String);
        check(staffNumbers,Number);
        check(areaNumbers,Number);
        check(Total,Number);
        check(testing,String);
        check(scoreSetting,Number);
        check(orgId,String);
        console.log("testing is :",testing);
        user = Meteor.users.findOne(this.userId);

        console.log("user is :",user.emails[0].address);
        if(!user){
            throw(new Meteor.Error(401, "error"));
        }

        var newInd = toFetch.slice(9);
        console.log("current industry",newInd);

        //console.log("IMPORTANT orgId is ",orgId);
        /** escore Meteor call **/
        console.log("tofetch is:",toFetch);
        console.log("Input staff num is :",staffNumbers);
        console.log("Input area num is :",areaNumbers);
        check(toFetch, String);
        check(staffNumbers, Number);

        Score.update( Score.find().fetch()[0]._id, {
            $addToSet: {
                [toFetch]: staffNumbers
            }
        });

        /** End of escore Meteor call **/

        /**earea Meteor call**/
        Area.update( Area.find().fetch()[0]._id, {
            $addToSet: {
                [toFetch]: areaNumbers
            }
        });

        /**upDate rawTotal**/

        Organisations.update({_id: orgId}, {
            $set: {
                rawTotal: Total,
                staffNum: staffNumbers,
                areaNum: areaNumbers
            }
        });

        var arraysNum = [];
        var arrayaNum = [];
        for(var i = 0; i < Organisations.find().fetch().length; i++){

            sNum = Organisations.find().fetch()[i];
            aNum = Organisations.find().fetch()[i];

            if(sNum.staffNum > 0 && sNum.industry == [newInd]){
                arraysNum.push(sNum.staffNum);

            }

            if(sNum.areaNum > 0 && sNum.industry == [newInd]){
                arrayaNum.push(aNum.areaNum);

            }
        }

        console.log("arraysNum",arraysNum);
        console.log("arrayaNum",arrayaNum);

        scoreLength = arraysNum;
        areaLength = arrayaNum;



        /** End of earea Meteor call**/

        /* Finds the minimum score */
        /** For score collection (searches through the score collection for lowest score for appropriate industry)*/
        //console.log("Important SCORELENGTH Length IS :",scoreLength.length);
        console.log("Important SCORELENGTH IS :",scoreLength);
        var staffNumberMin;
/**/        if(scoreLength.length < 2){
            console.log("set first score to min:",staffNumbers);
            staffNumberMin = Number(staffNumbers);
        }else {
            staffNumberMin = scoreLength[0];
            for(var i = 1; i < scoreLength.length; i++){
                if(Number(scoreLength[i]) < staffNumberMin){
                    //console.log("i is :",i);
                    //console.log("min is:",staffNumberMin)
                    //console.log("scorelength i :", Number(scoreLength[i]) ,"is less than scorelength i-1 :", Number(scoreLength[i-1]));
                    staffNumberMin = Number(scoreLength[i]);
                }
            }
        }




        /** For area collection (searches through the area collection for lowest score for appropriate industry)*/
       console.log("Important areaLength IS :",areaLength);
        var areaMin;
        var y;
/**/        if(areaLength.length < 2){
            console.log("set first area to min:",areaNumbers);
            areaMin = Number(areaNumbers);
        }else {
            areaMin = areaLength[0];
            for(var i = 1; i < areaLength.length; i++){
                if(Number(areaLength[i]) < areaMin){
                    areaMin = Number(areaLength[i]);
                }
            }
        }

        /** Re-calculates the 'Y' score if a new minimum value is triggered **/

        console.log("Intial staffmin is ",staffNumberMin);
        console.log("Intial areamin is :",areaMin);
        //console.log("this.minSA()[0]",Minstaffarea.find().fetch()[0]);
        //console.log("this.minSA()[0]",Minstaffarea.find().fetch()[0].Accommodation.MinArea);
        //console.log("this.minSA()[0]",Minstaffarea.find().fetch()[0].Accommodation.MinStaff);
        console.log("Intial staff in minstaffarea",Minstaffarea.find().fetch()[0][newInd].MinStaff);
        console.log("Intial area in minstaffarea",Minstaffarea.find().fetch()[0][newInd].MinArea);

        //Finds the length of the selected industry's length in the Score collection
        var scoreL = Score.find().fetch()[0].industry[testing].length;
        //Finds the length of the selected industry's length in the Area collection
        var areaL = Area.find().fetch()[0].industry[testing].length;

        /* this is the first organisation, save the min satff/area number */
        if(Minstaffarea.find().fetch()[0][newInd].MinStaff == "0"){

            console.log("first time set minstaffarea, staff num: ",staffNumberMin);

            Minstaffarea.update( Minstaffarea.find().fetch()[0]._id, {
                $set: {
                    [newInd]: {
                        "MinStaff": staffNumberMin,
                        "MinArea": areaMin,
                    }
                }
            });

            console.log("staff in minstaffarea 1:", Minstaffarea.find().fetch()[0][newInd].MinStaff);
            console.log("area in minstaffarea 1:", Minstaffarea.find().fetch()[0][newInd].MinArea);

            y = (Total/((Math.log10(staffNumbers/staffNumberMin))+(Math.log10(areaNumbers/areaMin))+1)).toFixed(0);
            console.log("y is :",y);
            y = Number(y);

            Newscore.update( Newscore.find().fetch()[0]._id, {
                $addToSet: {
                    [toFetch]: y
                }
             });

            Organisations.update({_id: orgId}, {
                $set: {
                    yScore: y
                }
             });

        }
        else{
            console.log("staff in minstaffarea 2", Minstaffarea.find().fetch()[0][newInd].MinStaff);
            console.log("area in minstaffarea 2", Minstaffarea.find().fetch()[0][newInd].MinArea);
            /* if the min staff or min area update, min will increase */
            if((Number(Minstaffarea.find().fetch()[0][newInd].MinStaff) != Number(staffNumberMin)) || (Number(Minstaffarea.find().fetch()[0][newInd].MinArea) != Number(areaMin))){

                console.log("new BIGIF IS CALLED ######### ");

                /*update min staff and area */
                if((Number(Minstaffarea.find().fetch()[0][newInd].MinStaff) != Number(staffNumberMin)) && (Number(Minstaffarea.find().fetch()[0][newInd].MinArea) != Number(areaMin))){

                    Minstaffarea.update( Minstaffarea.find().fetch()[0]._id, {
                        $set: {
                            [newInd]: {
                                "MinStaff": staffNumberMin,
                                "MinArea": areaMin,
                            }
                        }
                    });
                    console.log("new IMPORTANT staffmin is 0: ",Number(Minstaffarea.find().fetch()[0][newInd].MinStaff));
                    console.log("new IMPORTANT areamin  is 0: ",Number(Minstaffarea.find().fetch()[0][newInd].MinArea));
                }

                /* update the min staff in minstaffarea */
                var originalMinArea = Minstaffarea.find().fetch()[0][newInd].MinArea;
                if(Number(Minstaffarea.find().fetch()[0][newInd].MinStaff) != Number(staffNumberMin)){

                    Minstaffarea.update( Minstaffarea.find().fetch()[0]._id, {
                        $set: {
                            [newInd]: {
                                "MinStaff": staffNumberMin,
                                "MinArea" : originalMinArea,
                            }
                        }
                    });
                    console.log("new IMPORTANT staffmin is 1 ",Number(Minstaffarea.find().fetch()[0][newInd].MinStaff));
                    console.log("new IMPORTANT areamin is 1 :",Number(Minstaffarea.find().fetch()[0][newInd].MinArea));
                }
                 /* update the min area in minstaffarea */
                var originalMinStaff = Minstaffarea.find().fetch()[0][newInd].MinStaff;
                if(Number(Minstaffarea.find().fetch()[0][newInd].MinArea) != Number(areaMin)){

                    Minstaffarea.update( Minstaffarea.find().fetch()[0]._id, {
                        $set: {
                            [newInd]: {
                                "MinStaff": originalMinStaff,
                                "MinArea": areaMin,
                            }
                        }
                    });
                    console.log("new IMPORTANT staffmin is 2 ",Number(Minstaffarea.find().fetch()[0][newInd].MinStaff));
                    console.log("new IMPORTANT areamin is 2 :",Number(Minstaffarea.find().fetch()[0][newInd].MinArea));
                }

/*
                if(areaMin > areaNumbers){
                    areaMin = areaNumbers
                }

                if(staffNumberMin > staffNumbers){
                    staffNumberMin = staffNumbers
                }
*/
                console.log("Final IMPORTANT staffmin IS:",staffNumberMin);
                console.log("Final IMPORTANT AREAMIN IS:",areaMin);

                      //var editTotal = 0;
                      var currentInd = Organisations.find().fetch();
                      var currentAssess = Assess.find().fetch();
                      console.log("IMPORTANT function called",Organisations.find().count());
                      //Loop over organisation to see if find the industries that match the industry that triggered the flag
                      for(var i = 0; i < Organisations.find().count(); i++){
                          console.log("cur name is :",currentInd[i].name);
                          console.log("Check currentIndRawTotal is empty:",currentInd[i].rawTotal == "");
                        if(currentInd[i].industry == testing && currentInd[i].rawTotal != ""){
                          //Now need to loop over assess collection to Re-calculate 'Y'
                          var curName = currentInd[i].name;
        /**/              var curId = currentInd[i]._id;
                          var curRawTotal = currentInd[i].rawTotal;

                          var tempStaff = currentInd[i].staffNum;
                          var tempArea = currentInd[i].areaNum;

                          console.log("currentInd[i].name is:", currentInd[i].name);
                          console.log("curID is :",curId);
                          console.log("curRawTotal is :",curRawTotal);
                          /** Start of assess loop **/
                          //for(var j = 0; j < Assess.find().count(); j++){
                              //console.log("Check score is not empty!!!!",currentInd[i].yScore);
                              //console.log("curName == currentAssess[j].name ~~~~~~~~~~~",  currentAssess[j].name);
                            //if(curName == currentAssess[j].name){
                              //if(curName == currentInd[j].name){
                              //console.log("We have a match!!!");
                              //console.log("currentInd is : ",currentAssess[j].name);
                              //Loops through the Assess collection to create a new total for 'Y'
                              /*for(var k = 0; k < 36; k++){
                                editTotal += (Assess.find().fetch()[0].types[k][1][0]);
                              }
                              editTotal = Math.round(editTotal);*/

                              y = (curRawTotal/((Math.log10(tempStaff/staffNumberMin))+(Math.log10(tempArea/areaMin))+1)).toFixed(0);
                              console.log("y is :",y);
                              y = Number(y);

                              //y = Number(curRawTotal);

                              Newscore.update( Newscore.find().fetch()[0]._id, {
                                  $addToSet: {
                                      [toFetch]: y
                                  }
                              });
                              console.log("CURID IS :",curId);
                              Organisations.update({_id: curId}, {
                                  $set: {
                                      yScore: y
                                  }
                              });
                              //console.log("IMPORTANT: editTotal is :",editTotal);
                              console.log("IMPORTANT: Y IS :",y);
                            //}
                          //}
                            /** end of assess loop **/
                        }else {
                          console.log("We don't have a match!!");
                          console.log("currentInd is : ",currentInd[i].industry);
                          console.log("testing is :",testing);
                        }
                      }          /** End of the 'Y' re-calculation **/

            }
            else{
                console.log("new BIGIF NOT CALLED  ######### ");
                // Do normal 'Y' Score!
                //For Newscore collection finds appropriate industry based off the given organisation id
/*
                if(areaMin > areaNumbers){
                areaMin = areaNumbers
                }

                if(staffNumberMin > staffNumbers){
                    staffNumberMin = staffNumbers
                }
*/
                console.log("IMPORTANT staffmin IS :",staffNumberMin);
                console.log("IMPORTANT AREAMIN IS:",areaMin);
                console.log("newScoreLength is :",newScoreLength);
                console.log("newScoreLength.length is :",newScoreLength.length);

                 //enewscore
                y = (Total/((Math.log10(staffNumbers/staffNumberMin))+(Math.log10(areaNumbers/areaMin))+1)).toFixed(0);
                console.log("y is :",y);
                y = Number(y);

                Newscore.update( Newscore.find().fetch()[0]._id, {
                    $addToSet: {
                        [toFetch]: y
                    }
                });

                Organisations.update({_id: orgId}, {
                    $set: {
                        yScore: y
                    }
                });
            }
        }


/*
        if(Number(areaMin) > Number(areaNumbers) || Number(staffNumberMin) > Number(staffNumbers)){



          }
          else {

          }
*/
            /** End of enewscore **/
          /** Re-Calculation of Z **/


          var curyscore = Organisations.findOne({_id: orgId}).yScore;
          console.log("IMPORTANT curyscore is :",curyscore);

          var newScoreMinz;
          var newScoreMaxz;
          var currentIndz = Organisations.find().fetch();
          console.log("NewscoreLengthZ is :",newScoreLength);
          if(newScoreLength.length < 1){
            console.log("NewscoreLengthZ is < 1");
              newScoreMinz = curyscore;
              newScoreMaxz = curyscore;
          }else {
              newScoreMinz = curyscore;
              newScoreMaxz = curyscore;
              for(var k = 0; k < Organisations.find().count(); k++){

                  //console.log("cur name is :",currentInd[i].name);
                  //console.log("Check currentIndRawTotal is empty:",currentInd[i].rawTotal == "");
                if(currentIndz[k].industry == testing && currentIndz[k].yScore != ""){
                    if(currentIndz[k].yScore < newScoreMinz){
                      newScoreMinz = currentIndz[k].yScore;
                  }else if(currentIndz[k].yScore > newScoreMaxz) {
                      newScoreMaxz = currentIndz[k].yScore;
                  }
                }
              }
          }
              /*
              console.log("NewscoreLengthZ is >= 1");
              newScoreMinz = Number(newScoreLength[0]);
              newScoreMaxz = Number(newScoreLength[0]);
              for(var i = 1; i < newScoreLength.length; i++){
                  if(Number(newScoreLength[i]) < newScoreMinz){
                      newScoreMinz = Number(newScoreLength[i]);
                  }else if(Number(newScoreLength[i]) > newScoreMaxz) {
                      newScoreMaxz = Number(newScoreLength[i]);
                  }
              }
          }*/
          console.log("z's current y is :",y);
          console.log("z's minz is :",newScoreMinz);
          console.log("z's maxz is :",newScoreMaxz);
          //Only second time its put in, it becomes NAN
          //is it = or shud it be < than || > than

        //if current y is the Minmum value of Maxmun value in collections
/**/      //if(curyscore == newScoreMinz || curyscore == newScoreMaxz){
            console.log("BIGIF IS CALLEDZ");
            /* just one value in the collections*/

            /*Becasue the zScore normalization will produce a '0' and a '1000' score when number of organisations greater 1, 
            this is not good when few organisations registered. We keep the calculation function and outcomes,
             but we use the yScore on leaderboard instand of zScore temporarily. Now we just show yScore on the admin page for assesment.*/
            if(newScoreMinz == newScoreMaxz){
                console.log("just one yScore, let zScore = yScore", Number(curyscore));
                console.log("just one yScore, let zScore = yScore", orgId);
                if(curyscore < 0 ){
                    console.log("yScore < 0");
                    Organisations.update({_id: orgId}, {
                          $set: {
                              newScores: 0
                          }
                    });
                }
                else if(curyscore > 1000){
                    console.log("yScore > 1000");
                    Organisations.update({_id: orgId}, {
                          $set: {
                              newScores: 1000
                          }
                    });
                }
                else{
                      Organisations.update({_id: orgId}, {
                          $set: {
                              newScores: Number(curyscore)
                          }
                      });
                }
            }
            /* there are more than one value in the collections */
            else{
              //var editTotal = 0;

                      if(newScoreMinz > curyscore){
                          newScoreMinz = curyscore;
                      }

                      if(newScoreMaxz < curyscore){
                          newScoreMaxz = curyscore;
                      }
                      var currentInd = Organisations.find().fetch();
                      console.log("IMPORTANT function called",Organisations.find().count());
                      //Loop over organisation to see if find the industries that match the industry that triggered the flag
                      for(var i = 0; i < Organisations.find().count(); i++){
                                //Found the current industry
                                var curScore = currentInd[i].yScore;
                                  console.log("currentInd[i].yScore is : ;", currentInd[i].yScore);
                                if(currentInd[i].industry == testing && curScore != ""){

                                      //Now need to loop over Z collection to Re-calculate 'Z'
                                      console.log("IMPORTANT curScore is:",curScore);
                                      var curId = currentInd[i]._id;
                                          console.log("We have a match!!!");
                                          console.log("Z current name is :",currentInd[i].name);
                                          console.log("NewScoreMinz is :",newScoreMinz);
                                          console.log("NewScoreMaxz is :",newScoreMaxz);
                                          var z = 0;
                                          //if(curScore = newScoreMinz || curScore == newScoreMaxz){
                                        /*if(newScoreMinz == newScoreMaxz){
                                              z = curScore;
                                              console.log("firstIF is z = ",z);
                                         }else {*/
                                              console.log("2ndIF is z = ",z);
                                              console.log("2ndIF y is :",y);
                                              z = (1000*((curScore - Number(newScoreMinz))/((Number(newScoreMaxz) - Number(newScoreMinz))))).toFixed(0);
                                          //}

                                          if(z > 1000){
                                              console.log("3rdIF is z = ",z);
                                              z = 1000;

                                          }
                                          if(z < 0){
                                              console.log("4thIF is z = ",z);
                                              z = 0;
                                          }

                                          console.log("Z in big if is:",z);

                                          z = Number(z);
                                          Organisations.update({_id: curId}, {
                                              $set: {
                                                  newScores: z
                                              }
                                          });


                                }else {
                                  console.log("We don't have a match!!");
                                  console.log("currentInd is : ",currentInd[i].industry);
                                  console.log("testing is :",testing);
                                }
                      }
            }





        //}
          /** else: do the normal calculation**/


          /** Checking the re-calculation of 'Z' **/
          /*for(var a = 0; a < newScoreL; a++ ){
            if(newScoreL[a] < y){
              console.log("NEWSCOREFLAG TRIGGERED :");
            }
          }*/
          /** End of re-calculation of 'Z' **/


        //console.log("lowest score for area : ", areaMin);

        //Score.update({_id : Score.find().fetch()[0]._id},{$set:{ Agriculture : staffNumbers}});
        //Score.update({_id: Meteor.userId()}, {$addToSet: {"this.scoreMain()[this.orgMain]": [staffNumbers]}});


        //console.log("Total is :",Total);
        //console.log("tempTotal is :",temp);
        //console.log("staffNumbers is :",staffNumbers);
        //console.log("scoreMin is :",scoreMin);
        //console.log("areaNumbers is :",areaNumbers);
        //console.log("areaMin is :",areaMin);
        /** Calculating the "Y" part of the formula **/

        /*
        y = (Total/((Math.log10(staffNumbers/scoreMin))+(Math.log10(areaNumbers/areaMin))+1)).toFixed(0);
        console.log("y is :",y);
        y = Number(y);
        */



        /** End of eorg Method call **/
        console.log("END *********************************************************");
    }
});
