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


Installer les dépendances à partir de requirements.txt :pip install -r requirements.txt


Dépendances incluses : django, djangorestframework, mysqlclient, django-cors-headers, asgiref, sqlparse, tzdata.


Configurer la base de données :
Créez une base de données cloud_services dans phpMyAdmin (http://localhost/phpmyadmin).
Créez un utilisateur MySQL :CREATE USER 'api_user'@'localhost' IDENTIFIED BY 'votre_mot_de_passe';
GRANT ALL PRIVILEGES ON cloud_services.* TO 'api_user'@'localhost';
FLUSH PRIVILEGES;


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


Dépendances incluses : react, axios.


Lancer l’application :npm run dev


Accédez à http://localhost:5173 (port par défaut de Vite).



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
Capture d’écran de l’interface (si disponible).



Tests

Postman : Une collection (Cloud_Services_API.postman_collection.json) est fournie pour tester les endpoints. Importez-la dans Postman pour exécuter les tests automatiques.
Capture d’écran de Postman (si disponible).
Instructions : Voir API_DOCUMENTATION.md pour les détails des endpoints et des exemples de requêtes.

Configuration serveur

Environnement : WAMP sur Windows (Apache, PHP, MySQL, phpMyAdmin).
Base de données : MySQL, accessible via phpMyAdmin (http://localhost/phpmyadmin).
FTP : Configuré avec FileZilla Server (dossier racine : C:\wamp64\www).
Capture d’écran de phpMyAdmin (si disponible).

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
MIT License
Remarques

Assurez-vous que WAMP est en cours d’exécution avant de lancer le backend ou le frontend.
Pour des données de test, consultez API_DOCUMENTATION.md pour des exemples de services (ex. "Cloud Storage Basic").

