/* eslint-disable no-unused-vars */
import SideBar from "../../components/SideBar";
import axios from "axios";
import { useState, useEffect } from "react";
import CardComponente from "../../components/CardComponente";

const ListarComponentes = () => {
  const [componentes, setComponentes] = useState([]);
  const [error, setError] = useState(null);

  const getComponentes = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/components");
      setComponentes(response.data);
      setError(null);
      console.log(response.data);
    } catch (err) {
      setError(err.response?.data?.error || "Erro ao carregar componentes");
      console.error("Erro:", err);
    }
  };

  useEffect(() => {
    getComponentes();
  }, []);

  return (
    <div className="flex h-screen">
      <SideBar />
      <div className="flex-1 overflow-y-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Componentes cadastrados</h1>
        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4">
            {error}
          </div>
        )}

        <div className="flex flex-wrap gap-6">
          {componentes.length > 0 ? (
            componentes.map((componente) => (
              <CardComponente
                key={componente._id}
                componente={componente}
                onDelete={getComponentes}
                onUpdate={getComponentes}
              />
            ))
          ) : (
            <p className="text-gray-500">
              {error ? error : "Nenhum componente cadastrado ainda."}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListarComponentes;