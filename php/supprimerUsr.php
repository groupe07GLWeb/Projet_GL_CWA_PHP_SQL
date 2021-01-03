<?php

require 'database.php';
$id=$_GET['id'];

$sql = "DELETE FROM `utilisateur` WHERE `id` ='{$id}' LIMIT 1";

if(mysqli_query($connexion, $sql))
{
  http_response_code(204);
}
else
{
  return http_response_code(422);
}
