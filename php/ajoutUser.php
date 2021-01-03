<?php
require 'database.php';

 $postdata = file_get_contents("php://input");
 $request = json_decode($postdata);
if(isset($postdata) && !empty($postdata))
{
  

  //print_r($request);
  
  // Sanitize.
  $nom = mysqli_real_escape_string($connexion, trim($request->nom));
  $prenom = mysqli_real_escape_string($connexion, trim($request->prenom));
  $password = mysqli_real_escape_string($connexion, trim($request->password));
  $email = mysqli_real_escape_string($connexion, trim($request->email));
  $role = mysqli_real_escape_string($connexion, trim($request->role));
 

  // Store.
  $sql = "INSERT INTO `utilisateur`(
     `nom`,
     `prenom`,
     `password`,
     `email`,
     `role`
 ) VALUES
  ('{$nom}',
  '{$prenom}',
  '{$password}',
  '{$email}',
  '{$role}'
  )";

  if(mysqli_query($connexion, $sql))
  {
    http_response_code(201);
  }
  else
  {
    http_response_code(422);
  }
}