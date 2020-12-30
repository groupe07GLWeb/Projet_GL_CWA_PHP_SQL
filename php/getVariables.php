<?php
//Testez ce script en allant à http://localhost/TestPHP/php/getVariables.php
require 'database.php';
//structures de données pour stocker le résultat des requêtes SQL
$variables = [];
$sqlAllVariables = "select * from variable";

 mysqli_select_db($connexion,'projet_cwa_gl');

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
<<<<<<< HEAD
//echo "\n";
	//echo "variable";
	echo json_encode($variables);
//echo "\n";
=======
	//echo "<br>";
	//echo "variables";
	echo json_encode($variables);
	//echo "<br>";
>>>>>>> 94372b3dfa20cb8579f30c3ac378e49f0cbd97e7
}else{
	http_response_code(404);
	echo "Error retriving data of variables" . mysqli_error($connexion);
}
?>