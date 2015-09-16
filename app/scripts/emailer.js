$(document).ready(function(){

  // Initialize Parse with your Parse application & javascript keys
  Parse.initialize("Cwm22gtMkv531CNMsA4I7fC8VQ9Xgdv6IB3hPPRM", "xOlog5qNlCBuAR4kFxXRrNvuBOqMJ0ogUt6zQ3Ou");
  console.log('after emailer.js initialization');

  // Setup the form to watch for the submit event
  $('#rsvpForm').submit(function(e){
    e.preventDefault();
    console.log('after rsvpForm, emailer.js');

    // Grab the elements from the form to make up
    // an object containing name, email and message
    var data = {
      name: document.getElementById('name').value,
      dish: document.getElementById('dish').value,
      staythenight: document.getElementById('staythenight').value,
      email: document.getElementById('email').value,
      dec26: document.getElementById('dec26').value,
      jan9: document.getElementById('jan9').value
    }

    // Run our Parse Cloud Code and
    // pass our 'data' object to it
    Parse.Cloud.run("sendEmail", data, {
      success: function(object) {
        $('#response').html('Email sent!').addClass('success').fadeIn('fast');
        console.log('success from emailer.js');
      },

      error: function(object, error) {
        console.log(error);
        $('#response').html('Error! Email not sent!').addClass('error').fadeIn('fast');
        console.log('error from emailer.js');
      }
    });
  });

});
