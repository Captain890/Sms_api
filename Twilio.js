const accountSid=process.env.TWILIO_ACCOUNT_SID;
const authToken=process.env.TWILIO_AUTH_TOKEN;
//const data=require('./data');


const client = require('twilio')("AC174796247215d76433998d4e2832019a", "dadf543158c85e16d717802a72a78c8a");




var cron = require('node-cron');
var getList = require('./data');
console.log(getList);

// cron.schedule("*/20 * * * * *", (req,res) => {	client.messages
//   .create({
//      body:"Today's fuel consumption is " +getList ,
//      from: '+13607955462',
//      to: '+919599499093'
//    })
//   .then(message => console.log(message.sid))
  
//   console.log('Message sent');
  
// });  
 




