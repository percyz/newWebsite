//import { Universal } from '../../imports/api/Leaderboard/universal.js';

Meteor.methods({
    universal: function (mainindust, mainRegion, mainCity, newArray, sess) {


        user = Meteor.users.findOne(this.userId);
        if (!user) {
            throw (new Meteor.Error(401, "error"));
        }

        /** Universal entry **/
        check(mainindust, String);
        check(mainRegion, String);
        check(mainCity, String);
        /*check(bussinessName, String);*/
        const NonEmptyString = Match.Where((x) => {
            check(x, String);
            return x.length > 0;
        });
        for (var i = 0; i < newArray.length; i++) {
            check(newArray[i], NonEmptyString);
        }
        check(sess, String);

        console.log("sess is :", sess);
        /*var ar = [
            [["Accommodation"], ["1", "2"]],
            [["Motel"], ["3", "4"]],
            [["hotel"], []],
            [["Arts & Crafts"], []],
            [["Paint"], []],
            [["Design"], []],
            [["Northland"], []],
            [["All Districts"], []]
        ];*/

        var uniId = Universal.find({}).fetch()[0]._id;
        console.log("uni id is :", uniId);
        var ar = Universal.find({}).fetch();
        //console.log("ar is :", ar);
        console.log(ar.length);
        var indust = [];
        var region = [];
        var city = [];
        for (var i = 0; i < ar.length; i++) {
            //console.log("Length is :", ar[0][0][1]);
            //console.log(ar[0][1]);
            console.log("i is:", i);
            var curItem = ar[i].key;
            console.log("cur item is :", curItem);
            if (curItem.toLowerCase() == mainindust.toLowerCase()) {
                console.log("mainindust is :", mainindust);

                //var varIndust = [];
                //varIndust = ar[i].org.push(sess);
                //console.log("indust", varIndust,"location:",ar[i].org);
                Universal.update({ _id: ar[i]._id },
                    {
                        $push: { org: sess }
                    });

                //ar[i][1].push(sess);
                //console.log("ar is :", ar[i][1]);
                //return;
            }
            else if (curItem.toLowerCase() == mainRegion.toLowerCase()) {
                console.log("mainregion is :", mainRegion);
                //var varRegion = ar[i][1].push(sess);
                //console.log("before chkn :", ar[i][0],"location 1:",ar[i][1],"location2:",varRegion);
                //console.log("lets checkin", varRegion);
                Universal.update({ _id: ar[i]._id },
                    {
                        $push: { org: sess }
                    });

                //ar[i][1].push(sess);
                //console.log("ar is :", ar[i][1]);
                //return;
            }
            else if (curItem.toLowerCase() == mainCity.toLowerCase()) {
                console.log("maincity is :", mainCity);

                //var varCity = ar[i][1].push(sess);
                Universal.update({ _id: ar[i]._id },
                    {
                        $push: { org: sess }
                    });

                //ar[i][1].push(sess);
                //console.log("ar is :", ar[i][1]);
                //return;
            }
        }

        console.log("i is:", i);
        var j = 0;
        console.log("prop length is :", ar.length);
        console.log("newArLength is :", newArray.length);
        while (j < newArray.length) {
            for (var i = 0; i < ar.length; i++) {
                var curItem = ar[i].key;
                var newar = newArray[j];
                //console.log("j is :", j);
                //console.log("j is :", newArray[j]);
                //console.log("k is :", ar[k][0]);
                //console.log(ar[2][0] == newArray[j]);
                if (curItem.toLowerCase() == newar.toLowerCase()) {
                    //console.log("pushed", ar[i][0]);

                    Universal.update({ _id: ar[i]._id },
                        {
                            $push: { org: sess }
                        });


                    //ar[k][1].push(sess);
                    j++;
                    break;
                }
            }
            
        }
        //console.log("newarray:", ar);


        //[["Accommodation"], []],
        //Universal.update({
        //   [[mainindust], []]
        //});

        /** End of universal entry **/

    }
});