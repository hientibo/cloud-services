import React from "react";

const HomePage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-gray-100 p-8 relative overflow-hidden">
            {/* Arrière-plan avec effet de nuages */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <filter id="cloud-filter" x="0" y="0" width="100%" height="100%">
                        <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" />
                        <feDisplacementMap scale="20" in="SourceGraphic" />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#cloud-filter)" fill="#e0f2fe" />
                </svg>
            </div>

            {/* Contenu principal */}
            <div className="relative z-10 text-center max-w-2xl">
                {/* Logo stylisé */}
                <div className="mb-8">
                    <svg
                        className="w-16 h-16 mx-auto text-blue-600 animate-pulse-slow"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <h2 className="text-xl font-semibold text-gray-600 mt-2">Cloud Services</h2>
                </div>

                {/* Titre principal */}
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Bienvenue sur Cloud Services
                </h1>

                {/* Sous-titre */}
                <p className="text-lg text-gray-600 mb-8">
                    Découvrez nos solutions cloud innovantes pour stocker, analyser et gérer vos données en toute simplicité.
                </p>

                {/* Liens d'accès */}
                <div className="space-y-4">
                    <a
                        href="/api/services/"
                        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300 transform hover:-translate-y-1 shadow-md"
                    >
                        Accéder à l'API (Django REST)
                    </a>
                    <br />
                    <a
                        href="http://localhost:8081"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition duration-300 transform hover:-translate-y-1 shadow-md"
                    >
                        Accéder à phpMyAdmin
                    </a>
                </div>

                {/* Appel à l'action */}
                <p className="mt-6 text-sm text-gray-500">
                    Prêt à explorer ? Consultez notre{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                        documentation
                    </a>{" "}
                    pour plus d'informations.
                </p>
            </div>
        </div>
    );
};

// Animation personnalisée
const style = document.createElement("style");
style.textContent = `
    @keyframes pulse-slow {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.6; }
    }
    .animate-pulse-slow {
        animation: pulse-slow 2s infinite;
    }
`;
document.head.appendChild(style);

export default HomePage;