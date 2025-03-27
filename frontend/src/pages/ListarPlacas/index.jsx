import CardPlaca from "../../components/CardPlaca";
import SideBar from "../../components/SideBar";

const ListarPlacas = () => {
  return (
    <>
      <main className="flex">
        <SideBar />
        <div className="flex flex-col">
            <h1 className="text-4xl font-normal mt-10 ml-10">Placas cadastradas</h1>
        <CardPlaca />
        </div>
      </main>
    </>
  );
};

export default ListarPlacas;
