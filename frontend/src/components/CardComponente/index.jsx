/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState } from "react";
import { FaWindowClose } from "react-icons/fa";

const CardComponente = ({ componente, onDelete }) => {
  const [hovered, setHovered] = useState(false);

  const handleDelete = async () => {
    if (
      window.confirm(
        `Tem certeza que deseja excluir a placa ${componente.name}?`
      )
    ) {
      try {
        await axios.delete(
          `http://localhost:5000/api/components/${componente._id}`
        );
        onDelete();
      } catch (err) {
        alert("Erro ao deletar placa");
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
        <h1 className="text-3xl font-normal">{componente.name}</h1>
        <p className="font-bold">ID: {componente._id}</p>
        <p>{componente.description}</p>
        <p className="text-xs">Especificação: {componente.specifications}</p>
        <h2 className="mt-5 font-semibold">Placa associada: </h2>
        <p className="ml-4">{componente.board.name}</p>
        <p className="ml-4">ID: {componente.board._id}</p>
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
    </>
  );
};

export default CardComponente;
