<html>
<head>
	<title> ASAP chat </title>

	<style>
		
	</style>
</head>

<body>

<?php 

if( isset($_GET['long']) || isset($_GET['lat']) ){
	$long = $_GET['long'];
	$lat  = $_GET['lat']; 

	$link = mysql_connect('localhost', 'seba', 'seba1234');		// CONNECT TO DATABASE 
	if (!$link) {
	    die('Could not connect: ' . mysql_error());
	}
	mysql_select_db('seba');									// GET LAST ID NUMBER 
	$result = mysql_fetch_array(mysql_query("SELECT * FROM asap_id ORDER BY SignedUpOn DESC LIMIT 1")); 
	$new_id = $result[1] + 1; 


	$link = mysql_connect('localhost', 'seba', 'seba1234');		// SEND NEW ID NUMBER TO DATABASE 
	mysql_select_db('seba');
	mysql_query("INSERT INTO asap_id (No, Longitude, Latitude) values ( ".$new_id." , ".$long." , ".$lat." )"); 

	echo $long." ".$lat; 
}
else{
	echo '<h1>No location found!</h1>';
}

?> 


</body>
</html>