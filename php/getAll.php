<?php
//Testez ce script en allant à http://localhost/Projet_GL_CWA_PHP_SQL/php/getAll.php

require 'database.php';
//structures de données pour stocker le résultat des requêtes SQL
$variables = [];
$anomalies = [];
$cereales = [];
$equipements = [];
$operations = [];
$utilisateurs = [];
//Les reqêtes SQL
$sqlAllVariables = "select * from variable";
$sqlAllAnomalies = "select * from anomalie";
$sqlAllCereales = "select * from cereale";
$sqlAllEquipements = "select * from equipement";
$sqlAllOperations = "select * from operation";
$sqlAllUtilisateurs = "select * from utilisateur";

// mysqli_select_db($connexion,'projet_cwa_gl');

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
	echo "\n";
	echo "variables";
	echo json_encode($variables);
	echo "\n";
}else{
	http_response_code(404);
	echo "Error retriving data of variables" . mysqli_error($connexion);
}


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
		$cereales[$index]['qualité'] = $row['qualité'];
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
	echo "equipements";
echo json_encode($equipements);
echo "\n";

}else{
	http_response_code(404);
	echo "Error retriving data of equipements". mysqli_error($connexion);
echo "\n";
}	

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

//Pour les utilisateurs

	
if ($result = mysqli_query($connexion,$sqlAllUtilisateurs ))
{
	$index = 0;
	while ($row = mysqli_fetch_assoc($result))
	{
		$utilisateurs[$index]['id'] = $row['id'];
		$utilisateurs[$index]['nom'] = $row['nom'];
		$utilisateurs[$index]['prenom'] = $row['prenom'];
		$utilisateurs[$index]['mdp'] = $row['mdp'];
		$utilisateurs[$index]['email'] = $row['email'];
		$utilisateurs[$index]['role'] = $row['role'];
		$index++;
	}
	echo "utilisateurs";
echo json_encode($utilisateurs);
echo "\n";
}else{
	http_response_code(404);
	echo "Error retriving data of utilisateurs" . mysqli_error($connexion);
echo "\n";
}

?>