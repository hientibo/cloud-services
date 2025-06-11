Projet Cloud Services
Introduction

Réalisé en stage chez INTEGRIS SARL, ce projet propose une solution de gestion de services cloud (stockage, calcul, etc.) avec un backend Django (API RESTful), un frontend React (Vite, Tailwind CSS), et une infrastructure Docker. Développé initialement sur Windows avec WAMP, il a été adapté pour Linux.
Prérequis

    Système : Windows (WAMP) ou Linux (Docker).
    Logiciels : Node.js/npm, Python 3.8+, Git, Docker, Postman.
    Optionnel : WAMP, mysql-connector-python.

Installation
Développement Local (Windows)

    Clone le dépôt :
    bash

    git clone https://github.com/hientibo/cloud-services.git
    cd cloud_services
    git checkout main
    Backend (Django) :
        cd backend
        pip install -r requirements.txt
        Configure MySQL dans settings.py (base cloud_services, utilisateur api_user).
        python manage.py makemigrations && python manage.py migrate
        python manage.py runserver (port 8000).
    Frontend (React) :
        cd frontend/react-cloud
        npm install
        Configure Tailwind (npx tailwindcss init -p, ajuste tailwind.config.js).
        npm run build (génère build/).
        npm run dev (port 5173).
    API : Active CORS dans backend/settings.py pour http://localhost:5173.

Déploiement avec Docker (Linux)

    Installe Docker et Docker Compose.
    docker-compose up --build dans le répertoire racine.
    Accède à http://localhost:8080.

Fonctionnalités

    API : CRUD sur /api/services/.
    Interface : Liste et gestion des services, stylisée avec Tailwind.
    Tests : Collection Postman incluse.

Difficultés et Résolutions
Base de Données (MySQL)

    Problème : Connexion échouée sur Windows (WAMP) due à un mot de passe ou service MySQL inactif.
    Solution : Vérifié WAMP, créé api_user via phpMyAdmin, mis à jour settings.py.

Docker

    Problème : Conflits de ports et volumes vides dans /var/www/html.
    Solution : Ajusté docker-compose.yml, redémarré avec docker-compose up --build, défini /home/ftpuser/build:/var/www/html.

Apache (via Docker)

    Problème : Fichiers statiques non chargés à cause de chemins ou permissions.
    Solution : Vérifié logs (docker-compose logs web), corrigé le volume, ajusté permissions avec chown.

FTP (vsftpd)

    Problème : Échec avec status=2/INVALIDARGUMENT, connexion refusée.
    Solution : Corrigé /etc/vsftpd.conf, ouvert port 21 (ufw allow 21), redémarré avec systemctl restart vsftpd.

Versionnage Git

    Branche : main (stable).
    Commandes :
        git pull origin main
        git add . && git commit -m "message"
        git push origin main
    Dépôt : https://github.com/hientibo/cloud-services.

Démonstration

    Durée : 10-15 min.
    Plan : Intro (2 min), installation (4 min), API/Postman (4 min), interface (3 min), Q&A (2 min).

Contributeurs

    Développeur : Tibo
    Entreprise : INTEGRIS SARL
    Contact : contact@cloud-services.com

Licence

MIT License
Remarques

    Active MySQL avant Django.
    Vérifie logs Docker en cas d’erreur.
    Adaptation de Windows à Linux a requis des ajustements de chemins et permissions.