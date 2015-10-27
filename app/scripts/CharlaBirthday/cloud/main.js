
// Use Parse.Cloud.define to define as many cloud functions as you want.
Parse.Cloud.define("sendEmail", function(request, response) {
  var sendgrid = require("sendgrid");
  sendgrid.initialize("chareesa", "involve");
  console.log('welcome to main.js');

  var name = request.params.name;
  var dish = request.params.dish;
  var staythenight = request.params.staythenight;
  var email = request.params.email;
  var jan1 = request.params.jan1;
  var dec26 = request.params.dec26;
  var jan9 = request.params.jan9;

  sendgrid.sendEmail({
    to: "chareesagraham@gmail.com",
    from: email,
    fromname: name,
    subject: "This is for me, Chareesa",
    text: name + " has rsvp'd just now! They will bring " + dish + " with them. Will they stay the night? " + staythenight + ". Available dec 26? " + dec26 + ". Jan 1st? " + jan1 + ". Jan 9? " + jan9 + "."
  },

   {
     success: function(httpResponse) {
       console.log(httpResponse);
       response.success("Email sent!");
       console.log("success from the main.js");
     },
     error: function(httpResponse) {
       console.error(httpResponse);
       response.error("Uh oh, something went wrong");
       console.log("error from the main.js");
     }
   });

  sendgrid.sendEmail({
   to: email,
   from: "chareesagraham@gmail.com",
   fromname: "Chareesa Graham",
   subject: "Thank you for your rsvp to Charla's Birthday",
   text: "Hi " + name + "! Thanks for sending your rsvp to Charla's party on Jan 1st. If you submitted that you're coming, paper invitations will soon be sent to the address you provided."
   },

   {
     success: function(httpResponse) {
       console.log(httpResponse);
       response.success("Email sent!");
       console.log('success from the main.js');
    },
     error: function(httpResponse) {
       console.error(httpResponse);
       response.error("Uh oh, something went wrong");
       console.log('error from the main.js');
    }
  });
});
