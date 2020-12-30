# Projet_GL_CWA_PHP_SQL
Ceci est le projet Angular sous l'architecture PHP SQL<br/>
Les scripts Back-End du serveur sont disponnibles dans ./PHP/ <br/>
Le service.ts est disponnible dans ./client/app/src/services/ <br/>
Il vous reste a: <br/>
*Rajouter les scripts PHP: insert, update, delete (seul script PHP implémenté get: pour toutes les tables)<br/>
*Rajouter les fonctionnalités: insert, update, delete dans le service (seul fonctionnalité disponnible ici est: getAllVariables).<br/>
*Lier votre component au service (Prendre pour example: Componenet Variable)<br/>
*Rajouter les modules en relation avec vos components (Pour variable, vous trouverez le module Variables dans ./client/app/src/Modules/<br/>
~~~~~~Attention:~~~~
Il ne faut pas faire echo dans vos script PHP, le parsing JSON ne pourra pas fonctionner et vous aurez l'erreur: 'SyntaxError: Unexpected token C in JSON at position 0'
Il faut bien vérifier l'URL vers vos script PHP: si vos placez le dossier Projet_GL_CWA_PHP_SQL dans htdocs, il faut rajouter vos scripts dans le dossier php et il faut réecrire les URL vers: localhost\Projet_GL_CWA_PHP_SQL\php\VotreScript.php
