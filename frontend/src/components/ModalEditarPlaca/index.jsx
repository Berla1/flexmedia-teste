import { useState } from "react";

const ModalEditarPlaca = ({ placa, onClose, onSave }) => {
  const [editedName, setEditedName] = useState(placa.name);
  const [editedDescription, setEditedDescription] = useState(placa.description);
  const [isSaving, setIsSaving] = useState(false);

  const boardModels = [
    "NanoBoard X1",
    "FlexControl 2000",
    "IoT Core V3",
    "SmartShield Alpha",
    "MegaCircuit Z",
    "PowerNode X",
    "SensorLink Pro",
    "AutoTech Board",
    "EdgeCompute Y",
    "EmbeddedX",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      await onSave({
        name: editedName,
        description: editedDescription,
      });
      onClose();
    } catch (error) {
      console.error("Erro ao salvar:", error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md border-2 border-green-600">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-green-600">Editar Placa</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-xl"
          >
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label className="block text-sm font-medium mb-1">Modelo</label>
            <select
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
              required
            >
              {boardModels.map((model) => (
                <option key={model} value={model}>
                  {model}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="block text-sm font-medium mb-1">Descrição</label>
            <textarea
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
              rows="4"
              required
            />
          </div>

          <div className="flex justify-end gap-2 mt-4 ">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors cursor-pointer"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors disabled:bg-green-400 cursor-pointer"
              disabled={isSaving}
            >
              {isSaving ? "Salvando..." : "Salvar Alterações"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalEditarPlaca;
