<?php
<<<<<<< HEAD
header("Content-Type: application/json; charset=UTF-8");
//Pour vérifier que ce script php marche, accèder à : http://localhost/Projet_CWA_GL_PHP/php/database.php
=======
//Pour vérifier que ce script php marche, accèder à : http://localhost/TestPHP/php/database.php

/*header('Access-Control-Allow-Origin: http://localhost:4200'); 
 header('Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE, PUT'); 
  header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, origin, authorization, accept, client-security-token");*/

>>>>>>> 94372b3dfa20cb8579f30c3ac378e49f0cbd97e7
define('db_host', 'localhost');
define('db_user', 'root');
define('db_pass', '');
define('db_name', '');
function connect (){
	$connect = mysqli_connect(db_host,db_user,db_pass,db_name);
	if (mysqli_connect_errno($connect))
	{
		die("Failed to connect to MYSQL db:" . mysqli_connect_error());
	}

	//if connection success
	mysqli_set_charset($connect, 'utf8');
	//echo("Connection established to Database: " . mysqli_get_host_info($connect));
	return $connect;
}
/*function cors() {
    
    // Allow from any origin
    if (isset($_SERVER['HTTP_ORIGIN'])) {
        // Decide if the origin in $_SERVER['HTTP_ORIGIN'] is one
        // you want to allow, and if so:
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }
    
    // Access-Control headers are received during OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            // may also be using PUT, PATCH, HEAD etc
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         
        
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
    
        exit(0);
    }
    
<<<<<<< HEAD
    echo "You have CORS!";
}*/
//$corsThing = cors();
=======
   // echo "You have CORS!";
}
$corsThing = cors();*/
>>>>>>> 94372b3dfa20cb8579f30c3ac378e49f0cbd97e7

$connexion = connect();
?>