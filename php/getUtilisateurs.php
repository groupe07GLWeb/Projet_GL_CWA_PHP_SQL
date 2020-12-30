<?php
//Testez ce script en allant à http://localhost/Projet_CWA_GL_PHP/php/getUtilisateurs.php

require 'database.php';
//structures de données pour stocker le résultat des requêtes SQL
$utilisateurs = [];
$sqlAllUtilisateurs = "select * from utilisateur";

 mysqli_select_db($connexion,'projet_cwa_gl');

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