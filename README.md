![Alt text](SARL.jpg?raw=true "Title")
# Pages WEB et chemin d'accès:
Login : localhost:4200/ <br/>
Visualiser équipement: localhost:4200/equipment<br/>
Parcours cereales: localhost:4200/parcereale<br/>
Silo : localhost:4200/silo<br/>
Lorsque on lance le projet, c'est la page "login" qui s'affiche. <br/>
Vous pouvez voir les routes dans le fichier "app-routing.module.ts" et les changer.<br/>

# Projet_GL_CWA_PHP_SQL
Ceci est le projet Angular sous l'architecture PHP SQL<br/>
Les scripts Back-End du serveur sont disponnibles dans ./PHP/ <br/>
Le service.ts est disponnible dans ./client/src/app/services/ <br/>
Il vous reste a: <br/>
*Rajouter les scripts PHP: insert, update, delete (seul script PHP implémenté get: pour toutes les tables)<br/>
*Rajouter les fonctionnalités: insert, update, delete dans le service (seul fonctionnalité disponnible ici est: getAllVariables).<br/>
*Lier votre component au service (Prendre pour example: Componenet Variable)<br/>
*Rajouter les modules en relation avec vos components (Pour variable, vous trouverez le module Variables dans ./client/app/src/Modules/<br/>
~~~~~~Attention:~~~~
ENLEVEZ  'echo' dans vos script PHP, le parsing JSON ne pourra pas fonctionner et vous aurez l'erreur: 'SyntaxError: Unexpected token C in JSON at position 0'
Il faut bien vérifier l'URL vers vos script PHP: si vos placez le dossier Projet_GL_CWA_PHP_SQL dans htdocs, il faut rajouter vos scripts dans le dossier php et il faut réecrire les URL vers: localhost\Projet_GL_CWA_PHP_SQL\php\VotreScript.php
