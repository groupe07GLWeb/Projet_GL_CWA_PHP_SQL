<?php
require 'database.php';

// Get les données saisies.

$postdata = file_get_contents("php://input");
  // Extraction des donneés.
  $request = json_decode($postdata);


if(isset($postdata) && !empty($postdata))
{

  $id = mysqli_real_escape_string($connexion, trim($request->id));
  $nom = mysqli_real_escape_string($connexion, trim($request->nom));
  $prenom = mysqli_real_escape_string($connexion, trim($request->prenom));
  $password = mysqli_real_escape_string($connexion, trim($request->password));
  $email = mysqli_real_escape_string($connexion, trim($request->email));
  $role = mysqli_real_escape_string($connexion, trim($request->role));
 
  // mis à jour
   $sql = "UPDATE `utilisateur` SET 
   `nom`='$nom',
   `prenom`='$prenom',
   `password`='$password',
   `email`='$email',
   `role`='$role'
    WHERE `id` = '{$id}' LIMIT 1";

  if(mysqli_query($connexion, $sql))
  {
    //http_response_code(204);
  }
  else
  {
    return http_response_code(422);
  }  
}
