
// Use Parse.Cloud.define to define as many cloud functions as you want.
Parse.Cloud.define("sendEmail", function(request, response) {
  var sendgrid = require("sendgrid");
  sendgrid.initialize("chareesa", "involve");
  console.log('welcome to main.js');

  var name = request.params.name;
  var coming = request.params.coming;
  var staythenight = request.params.staythenight;
  var dish = request.params.dish;
  var email = request.params.email;
  var address = request.params.address;

  sendgrid.sendEmail({
    to: "chareesagraham@gmail.com",
    from: email,
    fromname: name,
    subject: "This is for me, Chareesa",
    text: name + " has rsvp'd just now! Are they coming?" + coming + ". They will bring " + dish + " with them. Will they stay the night? " + staythenight + ". Email? " + email + ". Home Address? " + address
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
   subject: "Thank you for the rsvp!",
   text: "Hi " + name + "! Thanks for sending your rsvp to Charla's party on Jan 1st. If you submitted that you're coming, paper invitations/reminders will be sent soon to the address you provided. If you have any pictures of you and Charla, I'd love it if you'd send them to me (whether you're going or not) or bring them with you to the party. My email is chareesagraham@gmail.com Thank you so much for your rsvp!!"
   },

   {
     success: function(httpResponse) {
       console.log(httpResponse);
       response.success("Email sent!");
    },
     error: function(httpResponse) {
       console.error(httpResponse);
       response.error("Uh oh, something went wrong");
    }
  });
});
