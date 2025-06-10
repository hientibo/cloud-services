import React from "react";

const HomePage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
            <h1 className="text-3xl font-bold mb-6">Bienvenue sur Cloud Services</h1>
            <div className="space-y-4 text-center">
                <a
                    href="/api/services/"
                    className="text-blue-600 underline hover:text-blue-800"
                >
                    Accéder à l'API (Django REST)
                </a>
                <br />
                <a
                    href="http://localhost:8081"
                    className="text-green-600 underline hover:text-green-800"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Accéder à phpMyAdmin
                </a>
            </div>
        </div>
    );
};

export default HomePage;
