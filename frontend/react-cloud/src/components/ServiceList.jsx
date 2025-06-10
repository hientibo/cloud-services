import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const API_URL = "/api/services/";

const ServiceList = () => {
    const [services, setServices] = useState([]);
    const [form, setForm] = useState({
        id: null,
        name: "",
        description: "",
        price: "",
        service_type: "STORAGE",
    });
    const [loading, setLoading] = useState(true);
    const formRef = useRef(null); // Référence au formulaire

    const fetchServices = async () => {
        try {
            const response = await axios.get(API_URL);
            setServices(response.data);
        } catch (error) {
            console.error("Erreur lors du chargement des services:", error);
            alert("Erreur lors du chargement des services.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchServices();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (form.id) {
                await axios.put(`${API_URL}${form.id}/`, form);
            } else {
                await axios.post(API_URL, form);
            }
            fetchServices();
            setForm({ id: null, name: "", description: "", price: "", service_type: "STORAGE" });
        } catch (err) {
            alert("Erreur : " + (err.response?.data?.name?.[0] || "Inconnue"));
        }
    };

    const handleDelete = async (id) => {
        await axios.delete(`${API_URL}${id}/`);
        fetchServices();
    };

    const handleEdit = (service) => {
        setForm(service);
        // Faire défiler vers le formulaire après avoir rempli les données
        if (formRef.current) {
            formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    if (loading) return <div className="text-center p-6">Chargement...</div>;

    return (
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6 sm:p-8 md:p-10">
            <h1 className="text-2xl font-bold mb-4">Services Cloud</h1>

            <form
                ref={formRef} // Ajout de la référence au formulaire
                onSubmit={handleSubmit}
                className="space-y-4"
            >
                <input
                    type="text"
                    placeholder="Nom"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="w-full px-4 py-2 border rounded"
                />
                <textarea
                    placeholder="Description"
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    className="w-full px-4 py-4 border rounded h-24 resize-y"
                />
                <input
                    type="number"
                    step="0.01"
                    placeholder="Prix"
                    value={form.price}
                    onChange={(e) => setForm({ ...form, price: e.target.value })}
                    required
                    className="w-full px-4 py-2 border rounded"
                    min="0"
                />
                <select
                    value={form.service_type}
                    onChange={(e) => setForm({ ...form, service_type: e.target.value })}
                    className="w-full px-4 py-2 border rounded"
                >
                    <option value="STORAGE">Storage</option>
                    <option value="NETWORK">Network</option>
                    <option value="SECURITY">Security</option>
                    <option value="AI">AI/ML</option>
                    <option value="ANALYTICS">Analytics</option>
                    <option value="DEVOPS">DevOps</option>
                    <option value="DATABASE">Database</option>
                    <option value="COMPUTE">Compute</option>
                    <option value="OTHER">Other</option>
                </select>
                <div className="flex gap-2">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        {form.id ? "Modifier" : "Ajouter"}
                    </button>
                    {form.id && (
                        <button
                            type="button"
                            onClick={() =>
                                setForm({ id: null, name: "", description: "", price: "", service_type: "STORAGE" })
                            }
                            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                        >
                            Annuler
                        </button>
                    )}
                </div>
            </form>

            <ul className="mt-6 space-y-3 sm:space-y-4">
                {services.map((srv) => (
                    <li
                        key={srv.id}
                        className="border p-4 rounded flex items-start justify-between"
                    >
                        <div className="flex-1 max-w-[70%]">
                            <p className="font-semibold">{srv.name} - {srv.price}€</p>
                            <p className="text-sm text-gray-600 whitespace-pre-wrap break-words">{srv.description}</p>
                            <p className="text-xs text-gray-500">Type : {srv.service_type}</p>
                        </div>
                        <div className="flex-shrink-0 ml-4 space-x-2">
                            <button
                                onClick={() => handleEdit(srv)}
                                className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500"
                            >
                                Modifier
                            </button>
                            <button
                                onClick={() => handleDelete(srv.id)}
                                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                            >
                                Supprimer
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ServiceList;