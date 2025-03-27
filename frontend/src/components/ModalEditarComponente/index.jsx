import { useState } from "react";

const ModalEditarComponente = ({ componente, onClose, onSave }) => {
  const [editedData, setEditedData] = useState({
    name: componente.name,
    type: componente.type,
    specifications: componente.specifications,
  });

  const componentNames = [
    "Resistor 10KΩ",
    "Capacitor 100nF",
    "Transistor BC547",
    "Diodo 1N4007",
    "LED Azul 5mm",
    "Microcontrolador ESP32",
    "Regulador de Tensão LM7805",
    "Potenciômetro 10KΩ",
    "Sensor de Temperatura LM35",
    "Display OLED 128x64",
    "Cristal Oscilador 16MHz",
    "Indutor 100µH",
    "Placa Wi-Fi ESP8266",
    "Conversor DC-DC Step Down",
    "Amplificador Operacional LM358",
    "Relé 5V 10A",
    "Fonte Chaveada 12V 2A",
    "Sensor de Umidade DHT22",
    "CIs Lógico 74HC595",
    "Buzzer Piezoelétrico",
    "Chave Táctil 6x6mm",
    "Módulo Bluetooth HC-05",
    "Ponte H L298N",
    "Sensor Ultrassônico HC-SR04",
    "Conversor USB-TTL CP2102",
    "Eletrolítico 470µF 16V",
    "Sensor de Luz LDR",
    "MOSFET IRFZ44N",
    "Sensor de Corrente ACS712",
    "Display LCD 16x2 I2C",
    "Resistor de Precisão 1% 1KΩ",
    "Módulo GPS NEO-6M",
    "Acoplador Óptico PC817",
    "Memória EEPROM 24C256",
    "Encoder Rotativo KY-040",
    "Bateria Li-Ion 18650",
    "Módulo RFID RC522",
    "Diodo Zener 5.1V",
    "Triac BT136",
    "Fonte Step-Up XL6009",
    "Ponte Retificadora DB107",
    "Placa Sensor de Chama",
    "Sensor de Pressão BMP280",
    "RTC DS3231 (Relógio de Tempo Real)",
    "Microfone Eletrético",
    "Módulo Relé de Estado Sólido",
    "Célula de Carga 5Kg",
    "Sensor de Gás MQ-2",
    "Módulo PWM PCA9685",
    "Sensor de Inclinação SW-520D",
  ];

  const componentTypes = ["Resistor", "Capacitor", "Microcontrolador"];
  const specificationTypes = ["Resistência", "Capacitância", "Modelo"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onSave(editedData);
      onClose();
    } catch (error) {
      console.error("Erro ao salvar:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md border-2 border-green-600">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-green-600">
            Editar Componente
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-xl"
          >
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label className="block text-sm font-medium mb-1">Nome</label>
            <select
              value={editedData.name}
              onChange={(e) =>
                setEditedData({ ...editedData, name: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
              required
            >
              {componentNames.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="block text-sm font-medium mb-1">Tipo</label>
            <select
              value={editedData.type}
              onChange={(e) =>
                setEditedData({ ...editedData, type: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
              required
            >
              {componentTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="block text-sm font-medium mb-1">
              Especificações
            </label>
            <select
              value={editedData.specifications}
              onChange={(e) =>
                setEditedData({ ...editedData, specifications: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
              required
            >
              {specificationTypes.map((spec) => (
                <option key={spec} value={spec}>
                  {spec}
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
            >
              Salvar Alterações
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalEditarComponente;
