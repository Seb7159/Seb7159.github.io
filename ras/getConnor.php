<?php
$typed = $_GET['t']; 
/*
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $typed);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_VERBOSE, 0); 
$output = curl_exec($ch); 
echo $output; 
curl_close($ch);
 */

print file_get_contents($typed); 
?>
