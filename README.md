Projet Cloud Services
Introduction
Ce projet, réalisé dans le cadre d'un stage chez INTEGRIS SARL, vise à développer une solution complète pour la gestion de services cloud. Il comprend :

Un backend basé sur Django avec une API RESTful pour gérer des services cloud (stockage, calcul, sécurité, etc.).
Un frontend en React (via Vite) pour une interface utilisateur interactive, stylisé avec Tailwind CSS.
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
git checkout main

Backend (Django)

Naviguer dans le dossier backend :cd backend


Installer les dépendances à partir de requirements.txt :pip install -r requirements.txt


Dépendances incluses : django, djangorestframework, mysqlclient, django-cors-headers, asgiref, sqlparse, tzdata.


Configurer la base de données :
Assurez-vous que WAMP est en cours d’exécution et que le service MySQL est démarré (icône WAMP verte).
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
        'HOST': '127.0.0.1',
        'PORT': '3306',
    }
}




Appliquer les migrations :python manage.py makemigrations
python manage.py migrate


Lancer le serveur :python manage.py runserver


L’API sera accessible à http://localhost:8000/api/.



Frontend (React)

Naviguer dans le dossier frontend :cd frontend/react-cloud


Installer les dépendances :npm install


Dépendances incluses : react, axios, tailwindcss@3.4.14, postcss, autoprefixer.


Configurer Tailwind CSS :
Générez les fichiers de configuration :npx tailwindcss init -p


Mettez à jour tailwind.config.js pour inclure vos fichiers React :/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


Renommez postcss.config.js en postcss.config.cjs et mettez à jour son contenu :module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}


Ajoutez les directives Tailwind à src/index.css :@tailwind base;
@tailwind components;
@tailwind utilities;




Configurer ESLint :
Un fichier .eslinrc.cjs est inclus pour configurer ESLint. Il est compatible avec React et ESM. Pour vérifier le linting :npm run lint




Lancer l’application :npm run dev


Accédez à http://localhost:5173.



Intégration API

Le frontend consomme l’API Django via des requêtes HTTP (ex. GET http://127.0.0.1:8000/api/services/).
Le composant ServiceList (dans src/components/ServiceList.jsx) gère l’affichage, l’ajout, la modification et la suppression des services.
Configurez CORS dans backend/settings.py si nécessaire :CORS_ALLOWED_ORIGINS = [
    'http://localhost:5173',
]



Fonctionnalités

API RESTful :
GET /api/services/ : Liste tous les services.
POST /api/services/ : Crée un service.
GET /api/services/<id>/ : Récupère un service.
PUT /api/services/<id>/ : Modifie un service.
DELETE /api/services/<id>/ : Supprime un service.
Documentation détaillée : API_DOCUMENTATION.md.


Interface client :
Affichage de la liste des services avec nom, description complète, prix et type.
Formulaire élargi pour ajouter ou modifier un service (champs : nom, description longue, prix, type).
Boutons pour modifier ou supprimer un service.
Titre de la page défini sur "Cloud Services - INTEGRIS SARL".
Stylisation avec Tailwind CSS.
Capture de l’interface (si disponible).



Tests

Postman : Une collection (screenshots/Cloud_Services_API.postman_collection.json) est fournie pour tester les endpoints. Importez-la dans Postman pour exécuter les tests automatiques.
Capture d’écran de Postman (si disponible).
Instructions : Voir API_DOCUMENTATION.md pour des exemples d’appels API.

Configuration serveur

Environnement : Vite/React sur le serveur frontal et WAMP sur Windows pour le backend (Apache, MySQL, PHP, phpMyAdmin).
Base de données : MySQL, accessible sur http://localhost/phpmyadmin.
FTP : Configuré avec FileZilla Server (dossier racine : /wamp/www).
Capture d’écran de phpMyAdmin (si disponible).

Démonstration

Durée : 15 minutes.
Plan suggéré :
2 min : Présentation du projet et objectifs.
5 min : Démonstration de l’installation (clonage, configuration backend/frontend).
5 min : Test de l’API avec Postman et navigation dans l’interface React (ajout, modification, suppression).
3 min : Questions et conclusion.


Accéder au dépôt GitHub pour les ressources : https://github.com/hientibo/cloud-services.

Contributeurs

Développeur : Tibo
Entreprise : INTEGRIS SARL
Contact : contact@cloud-services.com

Licence
MIT License
Remarques

Assurez-vous que WAMP est en cours d’exécution et que le service MySQL est démarré avant de lancer le serveur backend.
Si vous utilisez Python 3.13, assurez-vous que mysqlclient est compatible. Sinon, utilisez mysql-connector-python comme alternative.
Pour des exemples de données, voir API Documentation pour des exemples de services (ex. "Cloud Storage Basic").

