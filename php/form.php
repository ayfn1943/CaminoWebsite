<?php
// session_start();
$host = 'localhost';
$dbname = 'CaminoForm';
$user = 'root';

$dsn = "mysql:host=$host;dbname=$dbname";
$db = new PDO($dsn, $user);

// $uid = $_REQUEST['uid'];
// $_SESSION['uid'] = $uid;
$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$phone = $_REQUEST['phone'];
$country = $_REQUEST['myCountry']; 
$text = $_REQUEST['subject'];

$sql = "
    insert into CaminoAsk (name, email, phone, country, text)
    values (?, ?, ?, ?, ?)
";
$stmt = $db->prepare($sql);
$stmt->execute([$name, $email, $phone, $country, $text]);

?>