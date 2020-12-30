<?php
//Testez ce script en allant à http://localhost/Projet_CWA_GL_PHP/php/sqlDelete.php
require 'database.php';
//structures de données pour stocker le résultat des requêtes SQL
$id=$_GET['id']; //récuprer la valeur id via un get du formulaire qui envoie cette donnée!
$sqlDelete = "DELETE from variable where id = '{$id}' "; //pour le test, a changer avec la table sur quoi vous voulez effectuer vos opérations!

 mysqli_select_db($connexion,'projet_cwa_gl');

//Pour les variables
if ($result = mysqli_query($connexion,$sqlDelete))
{
echo "\n";
	echo "Delete complete";
echo "\n";
}else{
	http_response_code(404);
	echo "Error deleting! : " . mysqli_error($connexion);
}
?>