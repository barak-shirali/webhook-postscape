<?php
// Replace your@email.com 
$mailTo = 'your@email.com';

if ($_POST['formtype'] == 'top') {
	$firstname = $_POST['firstname'];
	$email = $_POST['email'];
	$subject = ('Contact Form').' [ '.$_SERVER["HTTP_HOST"].' ] ';
	$message = $_POST['message'];
	$body = ("Name: $firstname \n\nEmail: $email \n\nMessage: $message" );
} else {
	$firstname = $_POST['firstname'];
	$email = $_POST['email'];
	$subject = ('Quote Form').' [ '.$_SERVER["HTTP_HOST"].' ] ';
	$website = $_POST['website'];
	$budget = $_POST['budget'];
	$message = $_POST['message'];
	$body = ("Name: $firstname \n\nWebsite: $website \n\nBudget: $budget \n\nEmail: $email \n\nMessage: $message" );
}

$headers = ('From:') .' <'.$firstname.'>' . "\r\n" . ('Reply-To:') . $email;
mail($mailTo, $subject, $body, $headers);
?>