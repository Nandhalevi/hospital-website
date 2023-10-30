<?php
//get data from form  
$name = $_POST['name'];
$email= $_POST['email'];
$mobile = $_POST['mobile'];
$age= $_POST['age'];
$date= $_POST['date'];

$to = "drsaraswat@gmail.com";

$subject = "Mail From contact form";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Mobile =" . $mobile . "\r\n Age =" . $age . "\r\n Date =" . $date;
$headers = "From: noreply@saraswat.com" . "\r\n" .
"CC: chitra@redwudcreations.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:index.html");
