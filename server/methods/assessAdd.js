import { Meteor } from 'meteor/meteor';
import { Assess } from '../../imports/api/Leaderboard/assess.js';
import { Organisations } from '../../imports/api/Leaderboard/organisations.js';

Meteor.methods({

    assessadd: function (orgId, gC1_1, gC1_2 , gC1_3 , gC2_1, gC2_2 , gC2_3 , gC3_1, gC3_2 ,
        gC3_3 , gC4_1, gC4_2 , gC4_3 , gC5_1, gC5_2 , gC5_3 , gC6_1, gC6_2 ,
        gC6_3 , gC7_1 , gC7_2 , gC7_3 , gC7_4 , gC7_5 ,
        gC7_6 , gC8_1 , gC8_2 , gC9_1 , gC9_2 , gC9_3 ,
        gC10_1 , gC11_1 , gC11_2 , gC11_3 , gC11_4 , gC11_5 ,
        gC12_1 , gC12_2, staffNumbers, areaNumbers) {


          user = Meteor.users.findOne(this.userId);
          if(!user){
              throw(new Meteor.Error(401, "error"));
          }
          check(orgId, String);
          check(gC1_1,Number);
          check(gC1_2,Number);
          check(gC1_3,Number);
          check(gC2_1,Number);
          check(gC2_2,Number);
          check(gC2_3,Number);
          check(gC3_1,Number);
          check(gC3_2,Number);
          check(gC3_3,Number);
          check(gC4_1,Number);
          check(gC4_2,Number);
          check(gC4_3,Number);
          check(gC5_1,Number);
          check(gC5_2,Number);
          check(gC5_3,Number);
          check(gC6_1,Number);
          check(gC6_2,Number);
          check(gC6_3,Number);
          check(gC7_1,Number);
          check(gC7_2,Number);
          check(gC7_3,Number);
          check(gC7_4,Number);
          check(gC7_5,Number);
          check(gC7_6,Number);
          check(gC8_1 ,Number);
          check( gC8_2 ,Number);
          check(gC9_1 ,Number);
          check(gC9_2 ,Number);
          check(gC9_3 ,Number);
          check(gC10_1 ,Number);
          check(gC11_1 ,Number);
          check(gC11_2 ,Number);
          check(gC11_3 ,Number);
          check(gC11_4 ,Number);
          check(gC11_5 ,Number);
          check(gC12_1 ,Number);
          check(gC12_2, Number);
          check(staffNumbers, Number);
          check(areaNumbers, Number);
          var orgName = Organisations.findOne({_id: orgId}).name;
          console.log("ORGNAME IS :",orgName);
          Assess.insert({
            "date": Date(),
            "name": orgName,
            "types": [

              [["Coal boiler electricity generation"], [gC1_1]],
              [["Coal boiler Kg of coal consumed"], [gC1_2]],
              [["Coal boiler electricity back to grid"], [gC1_3]],
              [["LPG boiler electricity generation"], [gC2_1]],
              [["LPG boiler Kg of LPG consumed"], [gC2_2]],
              [["LPG boiler electricity back to grid"], [gC2_3]],
              [["Woodchip boiler electricity generation"], [gC3_1]],
              [["Woodchip boiler Kg of Woodchip consumed"], [gC3_2]],
              [["Woodchip boiler electricity back to grid"], [gC3_3]],
              [["Diesel boiler electricity generation"], [gC4_1]],
              [["Diesel boiler L’s of diesel consumed"], [gC4_2]],
              [["Diesel boiler electricity back to grid"], [gC4_3]],
              [["Heavy fuel oil boiler electricity generation"], [gC5_1]],
              [["Heavy fuel oil L’s of Heavy fuel oil consumed"], [gC5_2]],
              [["Heavy fuel oil electricity back to grid"], [gC5_3]],
              [["Light fuel oil boiler electricity generation"], [gC6_1]],
              [["Light fuel oil L’s of Light fuel oil consumed"], [gC6_2]],
              [["Light fuel oil electricity back to grid"], [gC6_3]],
              [["Other combustion Kg Wood"], [gC7_1]],
              [["Other combustion Kg Coal"], [gC7_2]],
              [["Other combustion Kg LPG"], [gC7_3]],
              [["Other combustion L’s Diesel"], [gC7_4]],
              [["Other combustion L’s Heavy Fuel Oil"], [gC7_5]],
              [["Other combustion L’s Light Fuel Oil"], [gC7_6]],
              [["Fleet  total kilometres travelled Km"], [gC8_1]],
              [["Total Taxi Spend NZD$"], [gC8_2]],
              [["Domestic Flights Total Km’s"], [gC9_1]],
              [["International short haul Total Km’s"], [gC9_2]],
              [["International long haul Total Km’s"], [gC9_3]],
              [["Total kWh of electricity purchased"], [gC10_1]],
              [["Solar panel generation kWh"], [gC12_1]],
              //"Solar panel generation kWh to grid ": "feild32data",
              [["Wind turbine systems kWh"], [gC12_2]],
              //"Wind turbine generation Kwh to grid": "feild34data",
              [["Waste and Disposal L’s Mixed waste"], [gC11_1]],
              [["Waste and Disposal L’s Office waste"], [gC11_2]],
              [["Waste and Disposal L’s Paper and textiles"], [gC11_3]],
              [["Waste and Disposal L’s Garden and food"], [gC11_4]],
              [["Waste and Disposal L’s Wood"], [gC11_5]]
            ]
          });
    }
});
