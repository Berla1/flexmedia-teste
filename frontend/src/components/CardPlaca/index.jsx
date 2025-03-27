const CardPlaca = () => {
    return (
        <>
            <div className="flex flex-col p-6 w-1/2 shadow-lg ">
                <h1 className="text-4xl font-normal">Nome da placa</h1>
                <p className="font-bold">ID: 981623981DK98123k</p>
                <p className="text-xs">Data de criação: 20-01-2020</p>
                <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, similique. Accusantium accusamus necessitatibus illum! Debitis earum nulla repellat, quas nobis voluptate magnam laudantium cupiditate ratione praesentium sequi odio, sed hic.</p>
                <h2 className="mt-3">Componentes associados: </h2>
                <ul>
                    <li>NanoBoard X1</li>
                    <li>IoT Core V3</li>
                    <li>FlexControl 2000</li>
                </ul>
            </div>
        </>
    );
}

export default CardPlaca;