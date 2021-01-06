<?php
//Testez ce script en allant à http://localhost/Projet_GL_CWA_PHP_SQL/php/updateEquipements.php

require 'database.php';
//structures de données pour stocker le résultat des requêtes SQL
$data = file_get_contents("php://input");
//echo $data;
$equipement = json_decode($data);

mysqli_select_db($connexion,'projet_cwa_gl');

$id = mysqli_real_escape_string($connexion, (int)$equipement->id);
$nom_equipement = mysqli_real_escape_string($connexion, $equipement->nom);
$operation = mysqli_real_escape_string($connexion, $equipement->op);
$etat = mysqli_real_escape_string($connexion, (int)$equipement->etat);

$sqlupdate = "UPDATE equipement SET operation = '$operation', etat = '$etat' where id = '{$id}'";


echo json_encode($equipement);


//Pour les equipements

 mysqli_select_db($connexion,'projet_cwa_gl');

if ($result = mysqli_query($connexion,$sqlupdate))
{
//echo "\n";
//	echo "update complete";
//echo "\n";
}else{
	http_response_code(404);
	echo "Error updating! : " . mysqli_error($connexion);
}

?>