import SideBar from "../../components/SideBar";
import FormCadastroPlaca from "../../components/FormCadastroPlaca";
import { useState } from "react";

const CadastrarPlacas = () => {

  // eslint-disable-next-line no-unused-vars
  const [refreshList, setRefreshList] = useState(false);

  const handleBoardAdded = () => {
    setRefreshList(prev => !prev); 
  };

  return (
    <>
      <main className="flex">
        <SideBar />
        <FormCadastroPlaca onBoardAdded={handleBoardAdded}/>
      </main>
    </>
  );
};

export default CadastrarPlacas;
