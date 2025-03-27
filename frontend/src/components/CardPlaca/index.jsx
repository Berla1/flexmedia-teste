/* eslint-disable no-unused-vars */
import { useState } from "react";
import { FaWindowClose, FaEdit } from "react-icons/fa";
import axios from "axios";
import ModalEditarPlaca from "../ModalEditarPlaca";

const CardPlaca = ({ placa, onDelete, onUpdate }) => {
  const [hovered, setHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleDelete = async () => {
    if (window.confirm(`Tem certeza que deseja excluir a placa ${placa.name}?`)) {
      try {
        await axios.delete(`http://localhost:5000/api/boards/${placa._id}`);
        onDelete();
      } catch (err) {
        alert("Erro ao deletar placa");
      }
    }
  };

  const handleUpdate = async (updatedData) => {
    try {
      await axios.put(`http://localhost:5000/api/boards/${placa._id}`, updatedData);
      onUpdate();
    } catch (err) {
      alert("Erro ao atualizar placa");
    }
  };

  return (
    <>
      <div
        className="relative flex flex-col p-6 shadow-lg border rounded-2xl border-green-600 "
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="flex-1">
          <h1 className="text-3xl font-normal">{placa.name}</h1>
          <p className="font-bold mt-1">ID: {placa._id}</p>
          <p className="text-xs">
            Cadastrada em: {new Date(placa.createdAt).toLocaleDateString()}
          </p>
          <p className="mt-3 ">{placa.description}</p>

          {placa.components.length > 0 && (
            <div className="mt-2 border-t border-gray-300 pt-2">
              <h2 className="font-medium">Componentes associados: </h2>
              <ul>
                {placa.components.map((component) => (
                  <li key={component._id} className="ml-5">
                    {component.name}
                  </li>
                ))}
              </ul>
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
        <ModalEditarPlaca
          placa={placa}
          onClose={() => setShowModal(false)}
          onSave={handleUpdate}
        />
      )}
    </>
  );
};

export default CardPlaca;