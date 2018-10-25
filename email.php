<?php
/*
Template Name: Post Contact Mail page Template
 */
?>

<?php

$title = "Inkowly";
if (isset($_GET['email'])) {
    $toId = "vpradeep.velu@gmail.com";
    $copymail = $_GET['copymail'];
    $username = $_GET['username'];
    $phone = $_GET['phone'];
    $email = $_GET['email'];
    $message = $_GET['message'];
    if ($copymail == 'copyemail') {$to = $toId . ',' . $email;} else { $to = $toId;}

    // subject
    $subject = 'Inkowly';

    // message
    $message = '
    <html>
    <head><title>Inkowly</title></head>
    <body>
    <table style="width:500px;border:1px solid #ccc;" cellpadding="5">
      <tr><th bgcolor="#cccccc" colspan="2"><p style="font-size:15px;color:#333;">Inkowly</p></th></tr>
      <tr><td style="width:50px;border-bottom:1px solid #ccc;">Name</td><td style="border-bottom:1px solid #ccc;">: ' . $username . '</td></tr>
      <tr><td style="width:50px;border-bottom:1px solid #ccc;">E-mail</td><td style="border-bottom:1px solid #ccc;">: ' . $email . '</td></tr>
      <tr><td style="width:50px;border-bottom:1px solid #ccc;">Phone</td><td style="border-bottom:1px solid #ccc;">: ' . $phone . '</td></tr>
      <tr><td style="width:50px;">Message</td><td>: ' . $message . '</td></tr>
    </table>
    </body>
    </html>';

    // To send HTML mail, the Content-type header must be set
    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

    $toId = $to;
    // Additional headers
    $headers .= 'To: <' . $toId . '>' . "\r\n";
    $headers .= 'From:Inkowly <' . $toId . '>' . "\r\n";
    //$headers .= 'Cc: '.$toId.'' . "\r\n";
    //$headers .= 'Cc: info@annuaireus.com' . "\r\n";
    $headers .= 'Bcc: ' . $toId . '' . "\r\n";

    // Mail it
    mail($to, $subject, $message, $headers);
    $msg = "<p class='alert alert-success'><strong>Success: </strong>Your Email has been sent Sucessfully.</p>";
}

if ($toId == '' && $msg == '') {
    $msg = "<p class='alert alert-danger'><strong>Error: </strong>Some thing went wrong. Please try again.</span></p>";
}

echo $msg;
