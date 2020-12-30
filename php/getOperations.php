<?php
//Testez ce script en allant à http://localhost/Projet_CWA_GL_PHP/php/getOperations.php

require 'database.php';
//structures de données pour stocker le résultat des requêtes SQL
$operations = [];
$sqlAllOperations = "select * from operation";

 mysqli_select_db($connexion,'projet_cwa_gl');

//Pour les operations

	if ($result = mysqli_query($connexion,$sqlAllOperations ))
{
	$index = 0;
	while ($row = mysqli_fetch_assoc($result))
	{
		$operations[$index]['id'] = $row['id'];
		$operations[$index]['nettoyage'] = $row['nettoyage'];
		$operations[$index]['ventilation'] = $row['ventilation'];
		$operations[$index]['injectionPesticide'] = $row['injectionPesticide'];
		$index++;
	}
		echo "operations";
echo json_encode($operations);
echo "\n";
}else{
	http_response_code(404);
	echo "Error retriving data of operations" . mysqli_error($connexion);
echo "\n";
}	

?>