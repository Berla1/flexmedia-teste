import { useState } from 'react';
import axios from 'axios';

const FormCadastroPlaca = ({ onBoardAdded }) => {
  const [board, setBoard] = useState({
    name: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const boardOptions = [
    'NanoBoard X1',
    'FlexControl 2000',
    'IoT Core V3',
    'SmartShield Alpha',
    'MegaCircuit Z',
    'PowerNode X',
    'SensorLink Pro',
    'AutoTech Board',
    'EdgeCompute Y',
    'EmbeddedX'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!board.name) {
      setError('Selecione o modelo da placa');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      await axios.post('http://localhost:5000/api/boards', board);
      setBoard({ name: '', description: '' });
      if (onBoardAdded) onBoardAdded();
    } catch (err) {
      setError(err.response?.data?.error || 'Erro ao cadastrar placa');
      console.error('Erro:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBoard(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full p-6">
      <h2 className="text-xl font-semibold mb-4">Cadastrar Nova Placa</h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Modelo da Placa <span className="text-red-700">*</span>
          </label>
          <select
            name="name"
            value={board.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-700 focus:border-gray-700"
            required
          >
            <option value="">Selecione um modelo</option>
            {boardOptions.map((model) => (
              <option key={model} value={model}>
                {model}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Descrição
          </label>
          <textarea
            name="description"
            value={board.description}
            onChange={handleChange}
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-700 focus:border-gray-700"
            placeholder="Digite uma descrição para a placa"
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
          ) : 'Cadastrar Placa'}
        </button>
      </form>
    </div>
  );
};

export default FormCadastroPlaca;