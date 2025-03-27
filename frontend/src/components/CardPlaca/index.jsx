/* eslint-disable no-unused-vars */
import { useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import axios from "axios";

const CardPlaca = ({ placa, onDelete }) => {
  const [hovered, setHovered] = useState(false);

  const handleDelete = async () => {
    if (window.confirm(`Tem certeza que deseja excluir a placa ${placa.name}?`)) {
      try {
        await axios.delete(`http://localhost:5000/api/boards/${placa._id}`);
        onDelete(); 
      } catch (err) {
        alert('Erro ao deletar placa');
      }
    }
  };

  return (
    <>
      <div
        className="relative flex flex-col p-6 shadow-lg border h-fit rounded-2xl border-green-600"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <h1 className="text-3xl font-normal">{placa.name}</h1>
        <p className="font-bold">ID: {placa._id}</p>
        <p className="text-xs">Cadastrada em: {new Date(placa.createdAt).toLocaleDateString()}</p>
        <p className="mt-3">
          {placa.description}
        </p>
        {placa.components.length > 0 && (
          <>
            <h2 className="font-medium mt-3">Componentes associados: </h2>
            <ul>
              {placa.components.map((component) => (
                <li key={component._id} className="ml-5">
                  {component.name}
                </li>
              ))}
            </ul>
          </>
        )}
        {hovered && (
          <button onClick={handleDelete} className="absolute right-2 top-1 transition-all duration-300 cursor-pointer">
            <FaWindowClose
              size={25}
              className="text-red-500 hover:text-red-700"
            />
          </button>
        )}
      </div>
    </>
  );
};

export default CardPlaca;
