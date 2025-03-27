import SideBar from "../../components/SideBar";
import FormCadastroPlaca from "../../components/FormCadastroPlaca";
import { useState } from "react";

const CadastrarPlacas = () => {
  const [refreshList, setRefreshList] = useState(false);

  const handleBoardAdded = () => {
    setRefreshList((prev) => !prev);
  };

  return (
    <div className="flex min-h-screen">
      <SideBar />
      <div className="flex-1 p-8">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-6">
          <FormCadastroPlaca onBoardAdded={handleBoardAdded} />
          {refreshList && (
            <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg">
              Placa cadastrada com sucesso!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CadastrarPlacas;