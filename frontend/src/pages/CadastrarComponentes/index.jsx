import SideBar from "../../components/SideBar";
import FormCadastroComponente from "../../components/FormCadastroComponente";
import { useState } from "react";

const CadastrarComponentes = () => {
  const [refreshList, setRefreshList] = useState(false);

  const handleComponentAdded = () => {
    setRefreshList((prev) => !prev);
  };

  return (
    <div className="flex min-h-screen">
      <SideBar />
      <div className="flex-1 p-8">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-6">
          <FormCadastroComponente onComponentAdded={handleComponentAdded} />
          {refreshList && (
            <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg">
              Componente cadastrado com sucesso!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CadastrarComponentes;