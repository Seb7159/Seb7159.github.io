<?php

$password = $_GET['p']; 
$lastg=$_GET['lastg'];

if($password=="abc"){

	$dbname = "seba_data_gas";

	$conn = mysql_connect("localhost", "seba", "seba1234");

	if($conn){
		mysql_select_db("seba", $conn);
		$sql = "INSERT INTO ".$dbname." (LGSBU) VALUES (".$lastg.")"; 											
		
		if (mysql_query($sql)) 
 		   echo "Okay";
		else 
  		  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
		}
	else
		die("Connection failed: " . mysqli_connect_error());	

}
else
	echo "Password not good!"; 

?> 
