<?php
//Testez ce script en allant à http://localhost/Projet_GL_CWA_PHP_SQL/php/getCereales.php

require 'database.php';
//structures de données pour stocker le résultat des requêtes SQL
$cereales = [];
$sqlAllCereales = "select * from cereale";

// mysqli_select_db($connexion,'projet_cwa_gl');

//Pour les cereales
if ($result = mysqli_query($connexion,$sqlAllCereales ))
{
	$index = 0;
	while ($row = mysqli_fetch_assoc($result))
	{
		$cereales[$index]['id'] = $row['id'];
		$cereales[$index]['type'] = $row['type'];
		$cereales[$index]['poids'] = $row['poids'];
		$cereales[$index]['date_arrivage'] = $row['date_arrivage'];
		$cereales[$index]['date_expedition'] = $row['date_expedition'];
		$cereales[$index]['num_cellule'] = $row['num_cellule'];
		$cereales[$index]['qualite'] = $row['qualite'];
		$index++;
	}
	echo "cereales";
	echo json_encode($cereales);
echo "\n";
}else{
	http_response_code(404);
	echo "Error retriving data of cereales". mysqli_error($connexion);
echo "\n";
}	
?>