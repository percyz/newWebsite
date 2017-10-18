import { Meteor } from 'meteor/meteor';
import { Regions } from '../../api/Leaderboard/regions.js';
import { Industries } from '../../api/Leaderboard/industries.js';
import { Newscore } from '../../api/Leaderboard/newscore.js';
import { Area } from '../../api/Leaderboard/area.js';
import { Score } from '../../api/Leaderboard/score.js';
import { Minstaffarea } from '../../api/Leaderboard/minstaffarea.js';
import { Z } from '../../api/Leaderboard/z.js';
import { Qr } from '../../api/Leaderboard/qr.js';

console.log("Starting server...");

import './roles.js';
import './publications.js';


if (Meteor.isServer) {
    
    /** start of qr **/
    if(Qr.find().count() < 1){
        Qr.insert({
             "ar": [
            {
              "orgid": "123ghghf4",
              "orgname": "percybsns",
              "status": "valid",
              "qr": "http://www.validated",
              "count": 6
            },
            {
              "orgid": "hello123",
              "orgname": "mikes",
              "status": "self",
              "qr": "http://www.self-assessed",
              "count": 4
            }
          ]
        })
    }
    /** Start of newscore **/
    if(Newscore.find().count() < 1){

        Newscore.insert({

            "industry": {
                "Accommodation": [],
                "Accountant": [],
                "Airlines & Aviation": [],
                "Apparel & Fashion": [],
                "Arts & Crafts": [],
                "Automotive": [],
                "Bars and Restaurants": [],
                "Business Services": [],
                "Cafe": [],
                "Civil Engineering": [],
                "Construction Commercial": [],
                "Construction Residential": [],
                "eCommerce": [],
                "Education & Training": [],
                "Energy Services": [],
                "Entertainment": [],
                "Environmental Services": [],
                "Fast Food": [],
                "Financial Services": [],
                "Food Products Manufacturing": [],
                "Foundations & Non-Profits": [],
                "Government Organisations": [],
                "Health Services": [],
                "Import & Export": [],
                "Information Technology": [],
                "Institutions": [],
                "Landscaping": [],
                "Legal Services": [],
                "Leisure, Travel, Tourism": [],
                "Logistics & Supply Chain": [],
                "Manufacturing": [],
                "Marketing & Advertising": [],
                "Media": [],
                "Museums": [],
                "Other": [],
                "Primary Industries":[],
                "Secondary Industries":[],
                "Painting & Plastering": [],
                "Philanthropy": [],
                "Photography": [],
                "Professional Services": [],
                "Real Estate": [],
                "Religious Institution": [],
                "Retail": [],
                "Scientific & Technical Services": [],
                "Supermarkets": [],
                "Telecommunications": [],
                "Tertiary Education": [],
                "Utilities": [],
                "Veterinary": [],
                "Wholesale": []
            }
        });
        console.log("Newscore3 is :",Newscore.find().count())
    }

    /** Start of minstaffarea
    if(Minstaffarea.find().count() < 1){

        Minstaffarea.insert({
            "MinStaff": "",
            "MinArea": "",
        });
        console.log("Minstaffarea is :",Minstaffarea.find().count())
    }
    **/
//console.log("Minstaffarea.find().count()",Minstaffarea.find().count());
    if(Minstaffarea.find().count() < 1){
        Minstaffarea.insert({

                "Accommodation":
                {
                    "MinStaff": "0",
                    "MinArea": "0",
                },
                "Accountant":
                {
                    "MinStaff":"0",
                    "MinArea":"0",
                },
                "Airlines & Aviation":
                {
                    "MinStaff":"0",
                    "MinArea":"0",
                },
                "Apparel & Fashion":
                {
                    "MinStaff":"0",
                    "MinArea":"0",
                },
                "Arts & Crafts":
                {
                    "MinStaff":"0",
                    "MinArea":"0",
                },
                "Automotive":
                {
                    "MinStaff":"0",
                    "MinArea":"0",
                },
                "Bars and Restaurants":
                {
                    "MinStaff":"0",
                    "MinArea":"0",
                },
                "Business Services":
                {
                    "MinStaff":"0",
                    "MinArea":"0",
                },
                "Cafe":
                {
                    "MinStaff":"0",
                    "MinArea":"0",
                },
                "Civil Engineering":
                 {
                    "MinStaff":"0",
                    "MinArea":"0",
                },
                "Construction Commercial":
                {
                    "MinStaff":"0",
                    "MinArea":"0",
                },
                "Construction Residential":
                {
                    "MinStaff":"0",
                    "MinArea":"0",
                },
                "eCommerce":
                 {
                    "MinStaff":"0",
                    "MinArea":"0",
                },
                "Education & Training":
                 {
                    "MinStaff":"0",
                    "MinArea":"0",
                },
                "Energy Services":
                 {
                    "MinStaff":"0",
                    "MinArea":"0",
                },
                "Entertainment":
                 {
                    "MinStaff":"0",
                    "MinArea":"0",
                },
                "Environmental Services":
                 {
                    "MinStaff":"0",
                    "MinArea":"0",
                },
                "Fast Food":
                 {
                    "MinStaff":"0",
                    "MinArea":"0",
                },
                "Financial Services":
                  {
                    "MinStaff":"0",
                    "MinArea":"0",
                },
                "Food Products Manufacturing":
                  {
                    "MinStaff":"0",
                    "MinArea":"0",
                },
                "Foundations & Non-Profits":
                 {
                    "MinStaff":"0",
                    "MinArea":"0",
                },
                "Government Organisations":
                {
                    "MinStaff":"0",
                    "MinArea":"0",
                },
                "Health Services":
                 {
                    "MinStaff":"0",
                    "MinArea":"0",
                },
                "Import & Export":
                 {
                    "MinStaff":"0",
                    "MinArea":"0",
                },
                "Information Technology":
                 {
                    "MinStaff":"0",
                    "MinArea":"0",
                },
                "Institutions":
                {
                    "MinStaff":"0",
                    "MinArea":"0",
                },
                "Landscaping":
                  {
                    "MinStaff":"0",
                    "MinArea":"0",
                },
                "Legal Services":
                 {
                    "MinStaff":"0",
                    "MinArea":"0",
                },
                "Leisure, Travel, Tourism":
                  {
                    "MinStaff":"0",
                    "MinArea":"0",
                },
                "Logistics & Supply Chain":
                  {
                    "MinStaff":"0",
                    "MinArea":"0",
                },
                "Manufacturing":
                 {
                    "MinStaff":"0",
                    "MinArea":"0",
                },
                "Marketing & Advertising":
                 {
                    "MinStaff":"0",
                    "MinArea":"0",
                },
                "Media":
                {
                    "MinStaff":"0",
                    "MinArea":"0",
                },
                "Museums":
                 {
                    "MinStaff":"0",
                    "MinArea":"0",
                },
                "Other":
                 {
                    "MinStaff":"0",
                    "MinArea":"0",
                },
            "Primary Industries":{
                    "MinStaff":"0",
                    "MinArea":"0",
             },
            "Secondary Industries":{
                    "MinStaff":"0",
                    "MinArea":"0",
             },
                "Painting & Plastering":
                  {
                    "MinStaff":"0",
                    "MinArea":"0",
                },
                "Philanthropy":
                 {
                    "MinStaff":"0",
                    "MinArea":"0",
                },
                "Photography":
                {
                    "MinStaff":"0",
                    "MinArea":"0",
                },
                "Professional Services":
                 {
                    "MinStaff":"0",
                    "MinArea":"0",
                },
                "Real Estate":
                 {
                    "MinStaff":"0",
                    "MinArea":"0",
                },
                "Religious Institution":
                 {
                    "MinStaff":"0",
                    "MinArea":"0",
                },
                "Retail":
                 {
                    "MinStaff":"0",
                    "MinArea":"0",
                },
                "Scientific & Technical Services":
                  {
                    "MinStaff":"0",
                    "MinArea":"0",
                },
                "Supermarkets":
                 {
                    "MinStaff":"0",
                    "MinArea":"0",
                },
                "Telecommunications":
                 {
                    "MinStaff":"0",
                    "MinArea":"0",
                },
                "Tertiary Education":
                {
                    "MinStaff":"0",
                    "MinArea":"0",
                },
                "Utilities":
                 {
                    "MinStaff":"0",
                    "MinArea":"0",
                },
                "Veterinary":
                 {
                    "MinStaff":"0",
                    "MinArea":"0",
                },
                "Wholesale":
                 {
                    "MinStaff":"0",
                    "MinArea":"0",
                }

        });

    }
    /*End of minstaffarea insert*/

    /** Start of area insert **/
    if(Area.find().count() < 1){
        Area.insert({

            "industry": {
                "Accommodation": [],
                "Accountant": [],
                "Airlines & Aviation": [],
                "Apparel & Fashion": [],
                "Arts & Crafts": [],
                "Automotive": [],
                "Bars and Restaurants": [],
                "Business Services": [],
                "Cafe": [],
                "Civil Engineering": [],
                "Construction Commercial": [],
                "Construction Residential": [],
                "eCommerce": [],
                "Education & Training": [],
                "Energy Services": [],
                "Entertainment": [],
                "Environmental Services": [],
                "Fast Food": [],
                "Financial Services": [],
                "Food Products Manufacturing": [],
                "Foundations & Non-Profits": [],
                "Government Organisations": [],
                "Health Services": [],
                "Import & Export": [],
                "Information Technology": [],
                "Institutions": [],
                "Landscaping": [],
                "Legal Services": [],
                "Leisure, Travel, Tourism": [],
                "Logistics & Supply Chain": [],
                "Manufacturing": [],
                "Marketing & Advertising": [],
                "Media": [],
                "Museums": [],
                "Other": [],
                "Primary Industries":[],
                "Secondary Industries":[],
                "Painting & Plastering": [],
                "Philanthropy": [],
                "Photography": [],
                "Professional Services": [],
                "Real Estate": [],
                "Religious Institution": [],
                "Retail": [],
                "Scientific & Technical Services": [],
                "Supermarkets": [],
                "Telecommunications": [],
                "Tertiary Education": [],
                "Utilities": [],
                "Veterinary": [],
                "Wholesale": []
            }
        });

    }
    /*End of area insert*/

    /** Start of score insert */
    if(Score.find().count() < 1){
        Score.insert({

            "industry": {
                "Accommodation": [],
                "Accountant": [],
                "Airlines & Aviation": [],
                "Apparel & Fashion": [],
                "Arts & Crafts": [],
                "Automotive": [],
                "Bars and Restaurants": [],
                "Business Services": [],
                "Cafe": [],
                "Civil Engineering": [],
                "Construction Commercial": [],
                "Construction Residential": [],
                "eCommerce": [],
                "Education & Training": [],
                "Energy Services": [],
                "Entertainment": [],
                "Environmental Services": [],
                "Fast Food": [],
                "Financial Services": [],
                "Food Products Manufacturing": [],
                "Foundations & Non-Profits": [],
                "Government Organisations": [],
                "Health Services": [],
                "Import & Export": [],
                "Information Technology": [],
                "Institutions": [],
                "Landscaping": [],
                "Legal Services": [],
                "Leisure, Travel, Tourism": [],
                "Logistics & Supply Chain": [],
                "Manufacturing": [],
                "Marketing & Advertising": [],
                "Media": [],
                "Museums": [],
                "Other": [],
                "Primary Industries":[],
                "Secondary Industries":[],
                "Painting & Plastering": [],
                "Philanthropy": [],
                "Photography": [],
                "Professional Services": [],
                "Real Estate": [],
                "Religious Institution": [],
                "Retail": [],
                "Scientific & Technical Services": [],
                "Supermarkets": [],
                "Telecommunications": [],
                "Tertiary Education": [],
                "Utilities": [],
                "Veterinary": [],
                "Wholesale": []
            }

        });

    }
    /** z score collection **/
    if(Z.find().count() < 1){
        Z.insert({

            "industry": {
                "Accommodation": [],
                "Accountant": [],
                "Airlines & Aviation": [],
                "Apparel & Fashion": [],
                "Arts & Crafts": [],
                "Automotive": [],
                "Bars and Restaurants": [],
                "Business Services": [],
                "Cafe": [],
                "Civil Engineering": [],
                "Construction Commercial": [],
                "Construction Residential": [],
                "eCommerce": [],
                "Education & Training": [],
                "Energy Services": [],
                "Entertainment": [],
                "Environmental Services": [],
                "Fast Food": [],
                "Financial Services": [],
                "Food Products Manufacturing": [],
                "Foundations & Non-Profits": [],
                "Government Organisations": [],
                "Health Services": [],
                "Import & Export": [],
                "Information Technology": [],
                "Institutions": [],
                "Landscaping": [],
                "Legal Services": [],
                "Leisure, Travel, Tourism": [],
                "Logistics & Supply Chain": [],
                "Manufacturing": [],
                "Marketing & Advertising": [],
                "Media": [],
                "Museums": [],
                "Other": [],
                "Primary Industries":[],
                "Secondary Industries":[],
                "Painting & Plastering": [],
                "Philanthropy": [],
                "Photography": [],
                "Professional Services": [],
                "Real Estate": [],
                "Religious Institution": [],
                "Retail": [],
                "Scientific & Technical Services": [],
                "Supermarkets": [],
                "Telecommunications": [],
                "Tertiary Education": [],
                "Utilities": [],
                "Veterinary": [],
                "Wholesale": []
            }
        });

    }
    /** End of Z **/

    /* Stuff for industries collection */

    if(Industries.find().count() < 1){

        Industries.insert({
            "industry": [
                "All Industries",
                "Accommodation",
                "Accountant",
                "Airlines & Aviation",
                "Apparel & Fashion",
                "Arts & Crafts",
                "Automotive",
                "Bars and Restaurants",
                "Business Services",
                "Cafe",
                "Civil Engineering",
                "Construction Commercial ",
                "Construction Residential",
                "eCommerce",
                "Education & Training",
                "Energy Services",
                "Entertainment",
                "Environmental Services",
                "Fast Food",
                "Financial Services",
                "Food Products Manufacturing",
                "Foundations & Non-Profits",
                "Government Organisations",
                "Health Services",
                "Import & Export",
                "Information Technology",
                "Institutions",
                "Landscaping",
                "Legal Services",
                "Leisure, Travel, Tourism",
                "Logistics & Supply Chain",
                "Manufacturing",
                "Primary Industries",
                "Secondary Industries",
                "Marketing & Advertising",
                "Media",
                "Museums",
                "Other",
                "Painting & Plastering",
                "Philanthropy",
                "Photography",
                "Professional Services",
                "Real Estate",
                "Religious Institution",
                "Retail",
                "Scientific & Technical Services",
                "Supermarkets",
                "Telecommunications",
                "Tertiary Education",
                "Utilities",
                "Veterinary",
                "Wholesale"
            ],
        });
    }

    /* Stuff for the regions collection */

    if(Regions.find().count() < 1){
        Regions.insert({
            "region": [
                "All Regions",
                "Northland",
                "Auckland",
                "Waikato",
                "Bay of Plenty",
                "Gisborne",
                "Hawke's Bay",
                "Taranaki",
                "Manawatu-Wanganui",
                "Wellington",
                "Tasman",
                "Marlborough",
                "West Coast",
                "Canterbury",
                "Otago",
                "Southland",
                "Nelson"
            ],
            "cities": {
                "All Regions":[
                  "All Districts",
                ],
                "Northland" : [
                    "All Districts",
                    "Whangarei (city)",
                    "Kerikeri",
                    "Kaitaia",
                    "Dargaville",
                    "Kaikohe",
                    "Ruakaka",
                    "Paihia",
                    "Mangawhai",
                    "Taipa-Mangonui",
                    "Moerewa",
                    "Waipu",
                    "Hikurangi",
                    "Kawakawa",
                ],
                "Auckland" : [
                    "All Districts",
                    "Auckland (city)",
                    "Pukekohe",
                    "Waiuku",
                    "Waiheke Island",
                    "Snells Beach",
                    "Warkworth",
                    "Helensville",
                    "Wellsford",

                ],
                "Waikato" : [
                    "All Districts",
                    "Hamilton (city)",
                    "Taupo",
                    "Cambridge",
                    "Te Awamutu",
                    "Tokoroa",
                    "Huntly",
                    "Matamata",
                    "Morrinsville",
                    "Thames",
                    "Waihi",
                    "Whitianga",
                    "Te Kuiti",
                    "Paeroa",
                    "Te Aroha",
                    "Putaruru",
                    "Turangi",
                    "Raglan",
                    "Otorohanga",
                    "Te Kauwhata",
                    "Coromandel",
                    "Tairua",
                    "Ngatea",
                ],
                "Bay of Plenty" : [
                    "All Districts",
                    "Tauranga (city)",
                    "Rotorua",
                    "Whakatane",
                    "Te Puke",
                    "Kawerau",
                    "Katikati",
                    "Opotiki",
                    "Waihi Beach",
                    "Murupara",
                    "Edgecumbe",

                ],
                "Gisborne" : [
                    "All Districts",
                    "Gisborne (city)",
                    "Tolaga Bay",
                    "Waerengaahika",
                    "Waerengaokuri",
                    "Waikohu",
                    "Wainui",
                    "Waipaoa",
                    "Waipiro",
                    "Waitakaro",
                    "Whakaangiangi",
                    "Whangara",
                    "Wharekopae",
                    "Whareponga",
                    "Whatatutu",
                    "Whataupoko",
                ],
                "Hawke's Bay" : [
                    "All Districts",
                    "Hastings (city)",
                    "Napier",
                    "Wairoa",
                    "Waipukurau",
                    "Waipawa",
                ],
                "Taranaki" : [
                    "All Districts",
                    "New Plymouth (city)",
                    "Hawera",
                    "Waitara",
                    "Stratford",
                    "Inglewood",
                    "Eltham",
                    "Opunake",
                    "Patea",

                ],
                "Manawatu-Wanganui" : [
                    "All Districts",
                    "Palmerston North (City)",
                    "Whanganui",
                    "Levin",
                    "Feilding",
                    "Dannevirke",
                    "Marton",
                    "Taumarunui",
                    "Foxton",
                    "Pahiatua",
                    "Taihape",
                    "Bulls",
                    "Woodville",
                    "Shannon",
                    "Ohakune",
                    "Raetihi",
                    "Waiouru",

                ],
                "Wellington" : [
                    "All Districts",
                    "Wellington (city)",
                    "Lower Hutt",
                    "Porirua",
                    "Kapiti",
                    "Upper Hutt",
                    "Masterton",
                    "Otaki",
                    "Carterton",
                    "Featherston",
                    "Greytown",
                    "Martinborough",
                ],
                "Tasman" : [
                    "All Districts",
                    "Brightwater",
                    "Motueka",
                    "Takaka",
                    "Wakefield",
                ],
                "Marlborough" : [
                    "All Districts",
                    "Blenheim (city)",
                    "Picton",
                    "Havelock",
                    "Seddon",
                    "Ward",
                    "Rai Valley",
                    "Renwick",
                    "Clarence",
                    "Clifford Bay",
                ],
                "West Coast" : [
                    "All Districts",
                    "Greymouth (city)",
                    "Westport",
                    "Hokitika",
                    "Reefton",
                ],
                "Canterbury" : [
                    "All Districts",
                    "Christchurch (city)",
                    "Timaru",
                    "Ashburton",
                    "Rangiora",
                    "Rolleston",
                    "Lincoln",
                    "Temuka",
                    "Woodend",
                    "Waimate",
                    "Geraldine",
                    "Oxford",
                    "Darfield",
                    "Kaikoura",
                    "Methven",
                    "Leeston",
                    "Amberley",
                    "Pleasant Point",
                    "Twizel",
                    "Rakaia",
                ],
                "Otago" : [
                    "All Districts",
                    "Dunedin (city)",
                    "Queenstown",
                    "Oamaru",
                    "Wanaka",
                    "Alexandra",
                    "Cromwell",
                    "Balclutha",
                    "Arrowtown",
                    "Milton",
                    "Waikouaiti",
                ],
                "Nelson" : [
                    "All Districts",
                    "Nelson (city)",
                    "Nelson North",
                    "Tahunanui-Port Hills",
                    "Stoke",
                ],
                "Southland" : [
                    "All Districts",
                    "Invercargill (City)",
                    "Gore",
                    "Winton",
                    "Te Anau",
                    "Bluff",
                    "Riverton",
                ]
            }
        });
    }

}
/*
ServiceConfiguration.configurations.remove({
    service: 'facebook'
});

ServiceConfiguration.configurations.insert({
    service: 'facebook',
    appId: '1541850032494777',
    secret: 'f6f44f76d305cca81e345a463478c9f1'
});
*/
