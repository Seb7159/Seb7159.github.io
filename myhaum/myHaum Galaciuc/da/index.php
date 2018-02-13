<html>
<title> The world is </title> 
<body>
Your IP address is 

<?php 
error_reporting(0);
ini_set('display_errors', 0);
date_default_timezone_set("Europe/Bucharest"); 
$ip = $_SERVER['REMOTE_ADDR'];
echo $ip; echo "<br><br><br><br>"; 
$details = json_decode(file_get_contents("http://ipinfo.io/{$ip}/json")); 
file_put_contents("ips.txt", "ip     " . date('Y m d   H i s') . "                  " . $ip . "   " . $details->country . "\n" . "   " . $details->region . "   " . $details->city . "   " . $details->hostname . "   " . $details->loc . "   " . $details->org . "\n", FILE_APPEND); 
?>

</body>
</html>  