import { useState } from "react";
import { FaWindowClose } from "react-icons/fa";

const CardPlaca = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <div
        className="relative flex flex-col p-6 shadow-lg bg-amber-50 h-fit rounded-2xl w-3/4 m-10"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <h1 className="text-3xl font-normal">Nome da placa</h1>
        <p className="font-bold">ID: 981623981DK98123k</p>
        <p className="text-xs">Data de criação: 20-01-2020</p>
        <p className="mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
          similique. Accusantium accusamus necessitatibus illum! Debitis earum
          nulla repellat, quas nobis voluptate magnam laudantium cupiditate
          ratione praesentium sequi odio, sed hic.
        </p>
        <h2 className="font-medium mt-3">Componentes associados: </h2>
        <ul>
          <li>NanoBoard X1</li>
          <li>IoT Core V3</li>
          <li>FlexControl 2000</li>
        </ul>
        {hovered && (
          <butto className="absolute top-2 right-3 transition-all duration-300 cursor-pointer">
            <FaWindowClose
              size={25}
              className="text-red-500 hover:text-red-700"
            />
          </butto>
        )}
      </div>
    </>
  );
};

export default CardPlaca;
