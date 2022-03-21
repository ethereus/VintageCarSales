<?php
  require 'vendor/autoload.php';
  use \Mailjet\Resources;
  $mj = new \Mailjet\Client('hidden','hidden',true,['version' => 'v3.1']);
  $body = [
    'Messages' => [
      [
        'From' => [
          'Email' => "carsvintage5@gmail.com",
          'Name' => "Vintage Car Sales"
        ],
        'To' => [
          [
            'Email' => $_POST["email"],
            'Name' => $_POST["firstname"]
          ]
        ],
        'Subject' => "Test Drive Booking Confirmation.",
        'TextPart' => "Dear Customer, thank you for choosing VintageCarSales.",
        'HTMLPart' => "<h3>We hope you enjoy your test drive. </h3>",
        'CustomID' => "Sale"
      ]
    ]
  ];
  $response = $mj->post(Resources::$Email, ['body' => $body]);
?>


<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Test Drives</title>
<link href="style.css" rel="stylesheet" type="text/css" media="screen and (min-width: 500px)">
<script src="script.js"></script>
</head>

<body>
  <nav id="navi">
    <ul>
     <li><a href="index.html">Home</a></li>
     <li><a href="store.html">Store</a></li>
     <li><a href="dealers.html">Dealers</a></li>
     <li><a href="ourbrand.html">Our brand</a></li>
     <li><a href="testdrive.php">Test drives</a></li>
     <li><a href="contact.html">Contact</a></li>
    </ul>
  </nav>

  <header class="container">
    <img class="imghead" src="Images/banner.jpg" alt="Vintage Cars Banner">
    <div class="headertext"><h1>Test Drives</h1></div>
  </header>

</head>

<body class="test-drive-body">

    <h3 class="center-list">Book a Test Drive session down below:</h3>

    <div class="center-list">
    
    <form method="post">
	  
	    <div class="row">
	      <div class="col-50">
	        <label for="fname"><i class="fa fa-user"></i> First Name</label>
	        <input type="text" id="fname" name="firstname" placeholder="John">

	        <label for="lname"><i class="fa fa-envelope"></i> Last Name</label>
	        <input type="text" id="lname" name="lname" placeholder="Doe">

	        <label for="email"><i class="fa fa-address-card-o"></i> Email</label>
	        <input type="text" id="adr" name="email" placeholder="john@gmail.com">

	        <label for="number"><i class="fa fa-institution"></i> Phone Number</label>
	        <input type="text" id="number" name="number" placeholder="00000000000">

	        <label for="state">Car</label>
	        <input type="text" id="car" name="car" placeholder="">

	        <label for="zip">Date</label>
	        <input type="date" id="date" name="date" placeholder="01/01/22">

	        <br>

	        <button class="center-btn" onclick="book()">Book!</button>

	    </div>
    </form>
</div>


</body>


</html>
