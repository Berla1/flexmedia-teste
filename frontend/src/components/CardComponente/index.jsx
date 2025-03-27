/* eslint-disable no-unused-vars */
import { useState } from "react";
import { FaWindowClose, FaEdit } from "react-icons/fa";
import axios from "axios";
import ModalEditarComponente from "../ModalEditarComponente";

const CardComponente = ({ componente, onDelete, onUpdate }) => {
  const [hovered, setHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleDelete = async () => {
    if (window.confirm(`Tem certeza que deseja excluir ${componente.name}?`)) {
      try {
        await axios.delete(`http://localhost:5000/api/components/${componente._id}`);
        onDelete();
      } catch (error) {
        alert("Erro ao deletar componente");
      }
    }
  };

  const handleUpdate = async (updatedData) => {
    try {
      await axios.put(`http://localhost:5000/api/components/${componente._id}`, updatedData);
      onUpdate();
    } catch (error) {
      alert("Erro ao atualizar componente");
    }
  };

  return (
    <>
      <div
        className="relative flex flex-col p-6 shadow-lg border rounded-2xl border-green-600 w-[350px] min-h-[250px] flex-shrink-0"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="flex-1">
          <h1 className="text-3xl font-normal">{componente.name}</h1>
          <p className="font-bold mt-1">ID: {componente._id}</p>
          
          <div className="mt-3">
            <p><span className="font-medium">Tipo:</span> {componente.type}</p>
            <p><span className="font-medium">Especificações:</span> {componente.specifications}</p>
          </div>

          {componente.board && (
            <div className="mt-3 border-t border-gray-200 pt-2">
              <h2 className="font-medium">Placa associada:</h2>
              <div className="ml-5">
                {typeof componente.board === 'object' 
                  ? componente.board.name 
                  : componente.board}
              </div>
            </div>
          )}
        </div>

        {hovered && (
          <div className="absolute right-2 top-1 flex gap-2">
            <button
              onClick={() => setShowModal(true)}
              className="text-blue-500 hover:text-blue-700 transition-colors"
            >
              <FaEdit size={20} />
            </button>
            <button
              onClick={handleDelete}
              className="text-red-500 hover:text-red-700 transition-colors"
            >
              <FaWindowClose size={25} />
            </button>
          </div>
        )}
      </div>

      {showModal && (
        <ModalEditarComponente
          componente={componente}
          onClose={() => setShowModal(false)}
          onSave={handleUpdate}
        />
      )}
    </>
  );
};

export default CardComponente;