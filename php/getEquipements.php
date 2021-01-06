<?php
//Testez ce script en allant à http://localhost/Projet_GL_CWA_PHP_SQL/php/getEquipements.php

require 'database.php';
//structures de données pour stocker le résultat des requêtes SQL
$equipements = [];
$sqlAllEquipements = "select * from equipement";

 mysqli_select_db($connexion,'projet_cwa_gl');

//Pour les equipements

if ($result = mysqli_query($connexion,$sqlAllEquipements ))
{
	$index = 0;
	while ($row = mysqli_fetch_assoc($result))
	{
		$equipements[$index]['id'] = $row['id'];
		$equipements[$index]['nom_equipement'] = $row['nom_equipement'];
		$equipements[$index]['operation'] = $row['operation'];
		$equipements[$index]['etat'] = $row['etat'];
		$index++;
	}
	//echo "equipements";
echo json_encode($equipements);
//echo "\n";

}else{
	http_response_code(404);
	echo "Error retriving data of equipements". mysqli_error($connexion);
echo "\n";
}	

?>