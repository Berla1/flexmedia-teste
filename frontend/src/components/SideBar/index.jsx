import { Link } from "react-router-dom";
import { FaListUl, FaCashRegister } from "react-icons/fa6";
import { LuCircuitBoard } from "react-icons/lu";
import { MdOutlineSettingsInputComponent } from "react-icons/md";

{
  /*  */
}

import Logo from "../../assets/flexmedia-logo.png";

const SideBar = () => {
  return (
    <div className="flex flex-col w-64 h-min-screen bg-green-100 p-4 border-r border-gray-200">
      <div className="mb-8 p-2">
        <img src={Logo} alt="Logo FlexMedia" />
      </div>
      <nav>
        <ul>
          <li>
            <Link
              to="/"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-200 transition-colors"
            >
              <LuCircuitBoard className="text-green-600" />
              <span>Listar placas</span>
            </Link>
          </li>
          <li>
            <Link
              to="/cadastrar-placas"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-200 transition-colors"
            >
              <FaCashRegister className="text-green-600" />
              <span>Cadastrar placa</span>
            </Link>
          </li>
          <li>
            <Link
              to="/listar-componentes"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-200 transition-colors"
            >
              <FaListUl className="text-green-600" />
              <span>Listar componentes</span>
            </Link>
          </li>
          <li>
            <Link
              to="/cadastrar-componentes"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-200 transition-colors"
            >
              <MdOutlineSettingsInputComponent className="text-green-600" />{" "}
              <span>Cadastrar componentes</span>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="mt-auto pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} FlexMedia
      </div>
    </div>
  );
};

export default SideBar;
