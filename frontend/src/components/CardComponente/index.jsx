/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { FaWindowClose } from "react-icons/fa";
import axios from "axios";

const CardComponente = ({ componente, onDelete }) => {
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (componente?.board === null) {
      handleAutoDelete();
    }
  }, [componente]);

  const handleAutoDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/components/${componente._id}`);
      if (onDelete) onDelete();
    } catch (err) {
      console.error("Erro ao deletar componente automaticamente:", err);
    }
  };

  const handleDelete = async () => {
    if (window.confirm(`Tem certeza que deseja excluir o componente ${componente.name}?`)) {
      try {
        await axios.delete(`http://localhost:5000/api/components/${componente._id}`);
        onDelete();
      } catch (err) {
        alert('Erro ao deletar componente');
      }
    }
  };

  if (!componente || componente.board === null) {
    return null;
  }

  return (
    <div
      className="relative flex flex-col p-6 shadow-lg border h-fit rounded-2xl border-green-600"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h1 className="text-3xl font-normal">{componente.name}</h1>
      <p className="font-bold">ID: {componente._id}</p>
      
      <div className="mt-3">
        <p><span className="font-medium">Tipo:</span> {componente.type}</p>
        <p><span className="font-medium">Especificações:</span> {componente.specifications}</p>
      </div>

      {componente.board && (
        <>
          <h2 className="font-medium mt-3">Placa associada:</h2>
          <div className="ml-5">
            {typeof componente.board === 'object' 
              ? componente.board.name 
              : componente.board}
          </div>
        </>
      )}

      {hovered && (
        <button 
          onClick={handleDelete} 
          className="absolute right-2 top-1 transition-all duration-300 cursor-pointer"
        >
          <FaWindowClose
            size={25}
            className="text-red-500 hover:text-red-700"
          />
        </button>
      )}
    </div>
  );
};

export default CardComponente;