import CadastrarPlacas from "./pages/CadastrarPlacas"
import ListarPlacas from "./pages/ListarPlacas"
import { BrowserRouter, Route, Routes } from 'react-router' 

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListarPlacas />}></Route>
        <Route path="/cadastrar-placas" element={<CadastrarPlacas />}></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
