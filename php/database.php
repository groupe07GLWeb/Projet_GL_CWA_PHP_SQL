<?php

header("Content-Type: application/json; charset=UTF-8");

define('db_host', 'localhost');
define('db_user', 'root');
define('db_pass', '');
define('db_name', 'projet_cwa_gl');

function connect (){
	$connect = mysqli_connect(db_host,db_user,db_pass,db_name);
//	mysqli_select_db($connect, "projet_cwa_gl" ); 
	if (mysqli_connect_errno())
	{
		die("Failed to connect to MYSQL db:" . mysqli_connect_error());
	}

	//if connection success
	mysqli_set_charset($connect, 'utf8');
	//echo("Connection established to Database: " . mysqli_get_host_info($connect));
	return $connect;
}

$connexion = connect();

?>
