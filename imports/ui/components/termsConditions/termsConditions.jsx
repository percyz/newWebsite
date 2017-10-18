import React from 'react';
import { Link } from 'react-router';
import GLOBAL from '../../../global.js';


var highlightStyle = {"backgroundColor": "white","fontWeight":"bolder","fontSize":"120%"}

export default class TermsConditions extends React.Component {

  render() {

    return (
      <div className ='container' >
        <div className='homeContainer' style={{backgroundColor: GLOBAL.COLOR.GREEN}}>
          <div className='topAbout'>
            <img className='Geia-Rewards-White' src='Geia-White.png'/>
          </div>

          <div className='midAbout' style={{width: GLOBAL.WEB.DESKTOP}}>
            <div className='midAboutContainer'>
              <div className='aboutBox'>
                <p style={{fontSize: GLOBAL.FONT.BIG, textAlign:'center'}}>Terms and Conditions</p>
                <div className='aboutParagraph'>
                <p style={{fontSize: GLOBAL.FONT.SMALL}}>These terms and conditions apply when using Geia products and services. By using this website, Geia Rewards iOS App, or the Android App, you acknowledge that you have read and accepted these terms and conditions. </p>
                <p style={{fontSize: GLOBAL.FONT.SMALL}}>These terms and conditions are subject to change and will be updated in this description accordingly.</p>
                </div>


                <p style={{fontSize: GLOBAL.FONT.MEDIUM, textAlign:'center'}}>Participating with Geia Rewards</p>
                <div className='aboutParagraph'>
                <p style={{fontSize: GLOBAL.FONT.SMALL}}>Geia Rewards allows you to scan QR codes with Reward Partners to collect points. Each point counts as one entry into the weekly cash prize draw which is announced on our Facebook livestream 3pm every Friday.</p>
                <p style={{fontSize: GLOBAL.FONT.SMALL}}>The randomly selected winners will receive $50 NZD. This will be funded by up to 15% of Geia’s revenue.</p>
                <p style={{fontSize: GLOBAL.FONT.SMALL}}>Each Reward Partner has a unique QR code at their counter and will award you 20 points when you scan with our App. All QR codes have a cool down period of 30 minutes before they can be scanned again. </p>
                </div>


                <p style={{fontSize: GLOBAL.FONT.MEDIUM, textAlign:'center'}}>Winning Prizes</p>
                <div className='aboutParagraph'>
                <p style={{fontSize: GLOBAL.FONT.SMALL}}>Prize winners will have their total points reset to 1. If they only had 1 point upon winning, then it will remain the same.</p>
                <p style={{fontSize: GLOBAL.FONT.SMALL}}>Prize winners must claim their prize within 60 days of being publicly announced as winners. They will receive a phone call, an email, and text notification on the day they win. If they do not respond and/or claim their prize within 14 days they will receive one more phone call, email, and text notification to claim their prize.</p>
                <p style={{fontSize: GLOBAL.FONT.SMALL}}>If a prize is not claimed within the 60-day period, then their full prize will be placed back into the prize pool and will be reallocated in the next draw.</p>
                <p style={{fontSize: GLOBAL.FONT.SMALL}}>Prize winners will not engage in illegal activities with their prize at any point. If they are proven to breach this condition, then they will not be eligible to enter into another draw with Geia for 36 months.</p>
                <p style={{fontSize: GLOBAL.FONT.SMALL}}>If winners choose to pick up their prize in person they must bring a current form of identification. If they choose to receive it online, they must provide Geia with a New Zealand bank account number which the prize money can be transferred to. This must be provided to Geia within 60 days of winning the prize.</p>
                <p style={{fontSize: GLOBAL.FONT.SMALL}}>Prize winners may decline their prize, in which case it will be placed back into the prize pool for the following draw. Prize winners may also choose to redirect their prize to someone or something else, at the discretion of Geia.</p>
                </div>

                <p style={{fontSize: GLOBAL.FONT.MEDIUM, textAlign:'center'}}>Business Assessment</p>
                <div className='aboutParagraph'>
                <p style={{fontSize: GLOBAL.FONT.SMALL}}>The Geia assessment is designed to help customers identify the energy efficiency of participating businesses. This is done by measuring the monthly energy usage and carbon emission equivalents derived from reports published by the Ministry for the Environment whilst following the standards of ISO 14064-1. This focuses on Scope 1 emissions of Stationary Combustion, and on Scope 2 emissions from purchased electricity.</p>
                <p style={{fontSize: GLOBAL.FONT.SMALL}}>By completing the assessment, the business agree that Geia can hold and use the data information for analytical purposes. They are also agreeing that they are an authorized person to represent and complete the assessment on behalf of their business the information entered is relating to. The information provided by them about their business, if mentioned to be commercially sensitive, will be treated as such. Any information provided to third parties can only be used for statistical purposes. Information used for this purpose will not contain any identifying properties, and will be merged with all other users’ data. No raw data for a single user will ever be released to a third party except in circumstances where we are specifically allowed to under the Privacy Act 1993 (for example, in cases where the Police ask us for information to assist with its investigation of an alleged criminal offence). We take data security very seriously. We have rigorous data security policies and practices aimed at mitigating the risks of unauthorized access to, and loss, misuse or wrongful alteration of, personal information held by us.</p>
                <p style={{fontSize: GLOBAL.FONT.SMALL}}>Customers will be given greater incentive to shop with businesses that are more energy efficient. This comparison will be draw by the above energy usage assessment. Keeping this a fair playing field is important, and as such the final score will be normalised by factoring in size of active premises, number of staff, and hours of operation.</p>
                </div>

                <p style={{fontSize: GLOBAL.FONT.MEDIUM, textAlign:'center'}}>Privacy</p>
                <div className='aboutParagraph'>
                <p style={{fontSize: GLOBAL.FONT.SMALL}}>When registering to use Geia Rewards we require information to allow us to identify and contact the weekly winners in order to redeem their prize. This includes their first name, last name, email address, and phone number.</p>
                <p style={{fontSize: GLOBAL.FONT.SMALL}}>We do not share any of your personal details with third parties. We do share the total amount of scans the QR code receive.</p>
                <p style={{fontSize: GLOBAL.FONT.SMALL}}>We take data security seriously. We have rigorous data security policies and practices aimed at mitigating the risks of unauthorised access to, and loss, misuse or wrongful alteration of, personal information held by us.</p>
                <p style={{fontSize: GLOBAL.FONT.SMALL}}>We take measures to destroy or ensure anonymity for personal information held by us if we no longer need to use it for any lawful purpose.</p>
                <p style={{fontSize: GLOBAL.FONT.SMALL, paddingBottom:'30px'}}>We are dedicated to keeping your details safe and secure from scams and fraud. If you are ever in any doubt about the authenticity of any communications that are or seem to be from Geia, please email us at hello@geia.nz immediately and include a copy of the communication in question.</p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
