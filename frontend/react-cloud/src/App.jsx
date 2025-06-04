import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/services/";

function App() {
  const [services, setServices] = useState([]);
  const [form, setForm] = useState({
    id: null,
    name: "",
    description: "",
    price: "",
    service_type: "STORAGE",
  });

  // Charger la liste des services
  const fetchServices = async () => {
    const response = await axios.get(API_URL);
    setServices(response.data);
  };

  useEffect(() => {
    fetchServices();

  }, []);

  // Créer un service
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (form.id) {
        // Modification
        await axios.put(`${API_URL}${form.id}/`, form);
      } else {
        // Création
        await axios.post(API_URL, form);
      }

      fetchServices();
      setForm({ id: null, name: "", description: "", price: "", service_type: "STORAGE" });
    } catch (err) {
      console.error(err);
      alert("Erreur : " + (err.response?.data?.name?.[0] || "Inconnue"));
    }
  };


  // Mettre à jour un service
  const handleEdit = (service) => {
    setForm({
      id: service.id,
      name: service.name,
      description: service.description,
      price: service.price,
      service_type: service.service_type,
    });
  };


  // Supprimer un service
  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}${id}/`);
    fetchServices();
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Services Cloud</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
        <input
          type="text"
          placeholder="Nom"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <input
          type="number"
          step="0.01"
          placeholder="Prix"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          required
        />
        <select
          value={form.service_type}
          onChange={(e) => setForm({ ...form, service_type: e.target.value })}
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
        <button type="submit">Confirmer</button>
        {form.id && (
          <button type="button" onClick={() => setForm({ id: null, name: "", description: "", price: "", service_type: "STORAGE" })}>
            Annuler la modification
          </button>
        )}

      </form>

      <ul>
        {services.map((srv) => (
          <li key={srv.id}>
            <strong>{srv.name}</strong> - {srv.price}€ [{srv.service_type}]
            <button onClick={() => handleEdit(srv)} style={{ marginLeft: 10 }}>
              Modifier
            </button>
            <button onClick={() => handleDelete(srv.id)} style={{ marginLeft: 10 }}>
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
