import { useState } from 'react';
import axios from 'axios';

const FormCadastroComponente = ({ onComponentAdded }) => {
  const [component, setComponent] = useState({
    name: '',
    type: '',
    specifications: '',
    board: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

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

  const componentTypes = ['Resistor', 'Capacitor', 'Microcontrolador'];
  const specificationTypes = ["Resistência", "Capacitância", "Modelo"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!component.name || !component.type || !component.specifications || !component.board) {
      setError('Preencha todos os campos obrigatórios');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      await axios.post('http://localhost:5000/api/components', component);
      setComponent({ 
        name: '',
        type: '',
        specifications: '',
        board: ''
      });
      if (onComponentAdded) onComponentAdded();
    } catch (err) {
      setError(err.response?.data?.error || 'Erro ao cadastrar componente');
      console.error('Erro:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setComponent(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full ">
      <h2 className="text-xl font-semibold mb-4">Cadastrar Novo Componente</h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Nome do Componente <span className="text-red-700">*</span>
          </label>
          <select
            name="name"
            value={component.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-700 focus:border-gray-700"
            required
          >
            <option value="">Selecione um componente</option>
            {componentNames.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Tipo <span className="text-red-700">*</span>
          </label>
          <select
            name="type"
            value={component.type}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-700 focus:border-gray-700"
            required
          >
            <option value="">Selecione um tipo</option>
            {componentTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Especificações <span className="text-red-700">*</span>
          </label>
          <select
            name="specifications"
            value={component.specifications}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-700 focus:border-gray-700"
            required
          >
            <option value="">Selecione uma especificação</option>
            {specificationTypes.map((spec) => (
              <option key={spec} value={spec}>
                {spec}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Placa Associada (ID) <span className="text-red-700">*</span>
          </label>
          <input
            type="text"
            name="board"
            value={component.board}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-700 focus:border-gray-700"
            placeholder="Digite o ID da placa"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${isSubmitting ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500`}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Cadastrando...
            </>
          ) : 'Cadastrar Componente'}
        </button>
      </form>
    </div>
  );
};

export default FormCadastroComponente;