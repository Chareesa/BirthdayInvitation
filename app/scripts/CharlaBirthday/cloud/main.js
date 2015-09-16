
// Use Parse.Cloud.define to define as many cloud functions as you want.
Parse.Cloud.define("sendEmail", function(request, response) {
  var sendgrid = require("sendgrid");
  sendgrid.initialize("chareesa", "involve");
  console.log('entered main.js');

  var name = request.params.name;
  var dish = request.params.dish;
  var staythenight = request.params.staythenight;
  var email = request.params.email;
  var dec26 = request.params.dec26;
  var jan9 = request.params.jan9;

  sendgrid.sendEmail({
    to: "chareesagraham@gmail.com",
    from: email,
    fromname: name,
    subject: "This is for me, Chareesa",
    text: name + " has rsvp'd! <br> They will bring " + dish + " with them. <br> Will they stay the night? " + staythenight + ". Available dec 26? " + dec26 + ". Jan 1st? " + jan1 + ". Jan 9? " + jan9 + "."
  },

   {
     success: function(httpResponse) {
       console.log(httpResponse);
       response.success("Email sent!");
       console.log("success from main.js");
     },
     error: function(httpResponse) {
       console.error(httpResponse);
       response.error("Uh oh, something went wrong");
       console.log("error from main.js");
     }
   });

  sendgrid.sendEmail({
   to: email,
   from: "chareesagraham@gmail.com",
   fromname: "Chareesa Graham",
   subject: "This is for RSVP'ers",
   text: "Thank you " + name
   },

   {
     success: function(httpResponse) {
       console.log(httpResponse);
       response.success("Email sent!");
       console.log('success from main.js');
    },
     error: function(httpResponse) {
       console.error(httpResponse);
       response.error("Uh oh, something went wrong");
       console.log('error from main.js');
    }
  });
});
