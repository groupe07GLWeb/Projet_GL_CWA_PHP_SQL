<?php
//Testez ce script en allant à http://localhost/Projet_CWA_GL_PHP/php/getAnomalies.php

require 'database.php';
//structures de données pour stocker le résultat des requêtes SQL
$anomalies = [];
$sqlAllAnomalies = "select * from anomalie";

 mysqli_select_db($connexion,'projet_cwa_gl');

//Pour les anomalies
if ($result = mysqli_query($connexion,$sqlAllAnomalies ))
{
	$index = 0;
	while ($row = mysqli_fetch_assoc($result))
	{
		$anomalies[$index]['id'] = $row['id'];
		$anomalies[$index]['date_intervention'] = $row['date_intervention'];
		$anomalies[$index]['descriptif_anomalie'] = $row['descriptif_anomalie'];
		$anomalies[$index]['resolu'] = $row['resolu'];
		$anomalies[$index]['operation_effectue'] = $row['operation_effectue'];
		$index++;
	}
	echo "anomalies";	
echo json_encode($anomalies);
echo "\n";
}else{
	http_response_code(404);
	echo "Error retriving data of anomalies" . mysqli_error($connexion);
echo "\n";
}	
?>