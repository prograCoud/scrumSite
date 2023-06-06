$(document).ready(function() {
    $('#contact-form').submit(function(e) {
      e.preventDefault();
      var name = $('#name').val();
      var email = $('#email').val();
      var message = $('#message').val();
      if (name == "" || email == "" || message == "") {
        alert("Please fill all fields!");
        return;
      }
      $.ajax({
        type: "POST",
        url: "sendmail.php",
        data: { name: name, email: email, message: message },
        success: function() {
          alert("Thank you for your message!");
          $('#name').val("");
          $('#email').val("");
          $('#message').val("");
        },
        error: function() {
          alert("Sorry, there was a problem sending your message.");
        }
      });
    });
  });
  