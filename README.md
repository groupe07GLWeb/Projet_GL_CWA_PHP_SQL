# Projet_GL_CWA_PHP_SQL
Ceci est le projet Angular sous l'architecture PHP SQL\n
Les scripts Back-End du serveur sont disponnibles dans ./PHP/ \n
Le service.ts est disponnible dans ./client/app/src/services/ \n
Il vous reste a: \n
Rajouter les scripts PHP: insert, update, delete (seul script PHP implémenté get: pour toutes les tables)\n
Rajouter les fonctionnalités: insert, update, delete dans le service (seul fonctionnalité disponnible ici est: getAllVariables).\n
Lier votre component au service (Prendre pour example: Componenet Variable)\n
Rajouter les modules en relation avec vos components (Pour variable, vous trouverez le module Variables dans ./client/app/src/Modules/\n
~~~~~~Attention:~~~~
Il ne faut pas faire echo dans vos script PHP, le parsing JSON ne pourra pas fonctionner et vous aurez l'erreur: 'SyntaxError: Unexpected token C in JSON at position 0'
Il faut bien vérifier l'URL vers vos script PHP: si vos placez le dossier Projet_GL_CWA_PHP_SQL dans htdocs, il faut rajouter vos scripts dans le dossier php et il faut réecrire les URL vers: localhost\Projet_GL_CWA_PHP_SQL\php\VotreScript.php
