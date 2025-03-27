import CadastrarComponentes from "./pages/CadastrarComponentes"
import CadastrarPlacas from "./pages/CadastrarPlacas"
import ListarComponentes from "./pages/ListarComponentes"
import ListarPlacas from "./pages/ListarPlacas"
import { BrowserRouter, Route, Routes } from 'react-router' 

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListarPlacas />}></Route>
        <Route path="/cadastrar-placas" element={<CadastrarPlacas />}></Route>
        <Route path="/listar-componentes" element={<ListarComponentes />}></Route>
        <Route path="/cadastrar-componentes" element={<CadastrarComponentes />}></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
