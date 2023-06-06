<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
  $to = "acsanchez2909@gmail.com";
  $subject = "Form submission from " . $_POST["name"];
  $message = $_POST["message"];
  $headers = "From: " . $_POST["email"] . "\r
";
  $headers .= "Reply-To: " . $_POST["email"] . "\r
";
  $headers .= "Content-Type: text/plain; charset=UTF-8\r
";

  if(mail($to, $subject, $message, $headers)) {
    echo "Thank you for your message!";
  } else {
    echo "Sorry, there was a problem sending your message.";
  }
}
?>