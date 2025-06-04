Projet Cloud Services
Introduction
Ce projet, réalisé dans le cadre d'un stage chez INTEGRIS SARL, vise à développer une solution complète pour la gestion de services cloud. Il comprend :

Un backend basé sur Django avec une API RESTful pour gérer des services cloud (stockage, calcul, sécurité, etc.).
Un frontend en React (via Vite) pour une interface utilisateur interactive.
Une configuration serveur utilisant WAMP sur Windows, avec MySQL et phpMyAdmin.
Des tests automatisés avec Postman.

Prérequis

Système d’exploitation : Windows (avec WAMP installé).
Logiciels nécessaires :
Node.js et npm (pour le frontend).
Python 3.8+ (pour le backend).
Git (pour cloner le dépôt).
WAMP Server (Apache, PHP, MySQL, phpMyAdmin).
Postman (pour tester l’API).



Installation
Cloner le dépôt
git clone https://github.com/hientibo/cloud-services.git
cd cloud_services

Backend (Django)

Naviguer dans le dossier backend :cd backend


Installer les dépendances :pip install -r requirements.txt


Si requirements.txt n’existe pas, créez-le avec les dépendances utilisées (ex. django, djangorestframework, mysqlclient, django-cors-headers) et exécutez la commande ci-dessus.


Configurer la base de données :
Créez une base de données cloud_services dans phpMyAdmin (http://localhost/phpmyadmin).
Mettez à jour settings.py avec vos identifiants MySQL :DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'cloud_services',
        'USER': 'api_user',
        'PASSWORD': 'votre_mot_de_passe',
        'HOST': 'localhost',
        'PORT': '3306',
    }
}




Appliquer les migrations :python manage.py migrate


Lancer le serveur :python manage.py runserver


L’API sera accessible à http://localhost:8000/api/.



Frontend (React)

Naviguer dans le dossier frontend :cd frontend/react-cloud


Installer les dépendances :npm install


Lancer l’application :npm run dev


Accédez à http://localhost:5173 (ou le port indiqué dans la console).



Fonctionnalités

API RESTful :
GET /api/services/ : Liste tous les services.
POST /api/services/ : Crée un service.
GET /api/services/<id>/ : Récupère un service.
PUT /api/services/<id>/ : Modifie un service.
DELETE /api/services/<id>/ : Supprime un service.
Documentation détaillée : API_DOCUMENTATION.md.


Interface cliente :
Affichage de la liste des services dans un tableau.
Formulaire pour ajouter un nouveau service.
Boutons pour modifier ou supprimer un service.



Tests

Postman : Une collection (Cloud_Services_API.postman_collection.json) est fournie pour tester les endpoints. Importez-la dans Postman pour exécuter les tests automatiques.
Instructions : Voir API_DOCUMENTATION.md pour les détails des endpoints et des exemples de requêtes.

Configuration serveur

Environnement : WAMP sur Windows (Apache, PHP, MySQL, phpMyAdmin).
FTP : Configuré avec FileZilla Server (dossier racine : C:\wamp64\www).
Documentation d’installation : Incluse dans les commentaires du code backend et dans le rapport final.

Démonstration

Durée : 15 minutes.
Plan suggéré :
2 min : Présentation du projet et objectifs.
5 min : Démonstration de l’installation (clonage, configuration backend/frontend).
5 min : Test de l’API avec Postman et navigation dans l’interface React.
3 min : Questions et conclusion.


Accédez au dépôt GitHub pour les ressources : https://github.com/hientibo/cloud-services.

Contributeurs

Développeur : Tibo
Entreprise : INTEGRIS SARL
Contact : contact@integriscloud.com

Licence
MIT License (ou spécifiez une licence appropriée selon les exigences d’INTEGRIS SARL).
Remarques

Assurez-vous que WAMP est en cours d’exécution avant de lancer le backend ou le frontend.
Pour des données de test, consultez API_DOCUMENTATION.md pour des exemples de services (ex. "Cloud Storage Basic").

