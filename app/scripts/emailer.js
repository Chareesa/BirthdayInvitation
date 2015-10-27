$(document).ready(function(){

  // Initialize Parse with your Parse application & javascript keys
  Parse.initialize("Cwm22gtMkv531CNMsA4I7fC8VQ9Xgdv6IB3hPPRM", "xOlog5qNlCBuAR4kFxXRrNvuBOqMJ0ogUt6zQ3Ou");

  // Setup the form to watch for the submit event
  $('#rsvpForm').submit(function(e){
    e.preventDefault();

    // Grab the elements from the form to make up
    // an object containing name, email and message
    var data = {
      name: document.getElementById('name').value,
      coming: document.getElementById('coming').value,
      staythenight: document.getElementById('staythenight').value,
      dish: document.getElementById('dish').value,
      email: document.getElementById('email').value,
      address: document.getElementById('address').value
    }

    // Run our Parse Cloud Code and
    // pass our 'data' object to it
    Parse.Cloud.run("sendEmail", data, {
      success: function(object) {
        $('#response').html('Your rsvp has been sent!').addClass('success').fadeIn('fast');
        $('#rsvpModal').hide();
        window.setTimeout( function(){
          window.location = "#";
        }, 2000 );
        $('#joinPartyBtn').replaceWith($('<h4>' + 'Thank you for your rsvp' + '</h4>'));

      },

      error: function(object, error) {
        console.log(error);
        $('#response').show();
        $('#response').html('Oh no! <br> Something happened or not enough information was entered. <br> Hold on, I\'ll bring that form back.').addClass('error').fadeIn('fast');
        $('#rsvpModal').hide();
        window.setTimeout( function(){
          $('#rsvpModal').show();
          $('#response').hide();
        }, 3800 );
      }
    });
  });

});
