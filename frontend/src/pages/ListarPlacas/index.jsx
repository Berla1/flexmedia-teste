import { useState, useEffect } from "react";
import axios from "axios";
import CardPlaca from "../../components/CardPlaca";
import SideBar from "../../components/SideBar";

const ListarPlacas = () => {
  const [placas, setPlacas] = useState([]);
  const [error, setError] = useState(null);

  const getPlacas = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/boards");
      setPlacas(response.data);
      setError(null);
    } catch (err) {
      setError(err.response?.data?.error || "Erro ao carregar placas");
      console.error("Erro:", err);
    }
  };

  useEffect(() => {
    getPlacas();
  }, []);

  return (
    <div className="flex h-screen">
      <SideBar />
      <div className="flex-1 overflow-y-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Placas cadastradas</h1>
        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4">
            {error}
          </div>
        )}

        <div className="flex flex-wrap gap-6">
          {placas.length > 0 ? (
            placas.map((placa) => (
              <CardPlaca key={placa._id} placa={placa} onDelete={getPlacas} onUpdate={getPlacas}/>
            ))
          ) : (
            <p className="text-gray-500">
              {error ? error : "Nenhuma placa cadastrada ainda."}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListarPlacas;
