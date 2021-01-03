<?php
//Testez ce script en allant à http://localhost/Projet_GL_CWA_PHP_SQL/php/getVariables.php
require 'database.php';
//structures de données pour stocker le résultat des requêtes SQL
$variables = [];
$sqlAllVariables = "select * from variable";

 //mysqli_select_db($connexion,'projet_cwa_gl');

//Pour les variables
if ($result = mysqli_query($connexion,$sqlAllVariables))
{
	$index = 0;
	while ($row = mysqli_fetch_assoc($result))
	{
		$variables[$index]['id'] = $row['id'];
		$variables[$index]['temperature'] = $row['temperature'];
		$variables[$index]['humidite'] = $row['humidite'];
		$variables[$index]['poussiere'] = $row['poussiere'];
		$variables[$index]['insecticide'] = $row['insecticide'];
		$index++;
	}
//echo "\n";
	//echo "variable";
	echo json_encode($variables);
//echo "\n";
}else{
	http_response_code(404);
	echo "Error retriving data of variables" . mysqli_error($connexion);
}
?>
