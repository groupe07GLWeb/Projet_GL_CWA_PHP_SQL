<?php

require 'database.php';

$id = $_GET['id']; 


$sql = "SELECT * FROM `utilisateur` WHERE `id` ='{$id}' LIMIT 1";

 if($result = mysqli_query($connexion,$sql))
{
   $index = 0;

  $row = mysqli_fetch_assoc($result);
  
  $utilisateurs[$index]['id'] = $row['id'];
  $utilisateurs[$index]['nom'] = $row['nom'];
  $utilisateurs[$index]['prenom'] = $row['prenom'];
  $utilisateurs[$index]['password'] = $row['password'];
  $utilisateurs[$index]['email'] = $row['email'];
  $utilisateurs[$index]['role'] = $row['role'];

  echo json_encode($utilisateurs);
}
else
{
  http_response_code(404);
}