import { Link } from "react-router-dom";
import { FaListUl, FaCashRegister } from "react-icons/fa6";
import Logo from "../../assets/flexmedia-logo.png";

const SideBar = () => {
  return (
    <div className="flex flex-col w-64 h-min-screen bg-green-100 p-4 border-r border-gray-200">
      <div className="mb-8 p-2">
        <img
          src={Logo}
          alt="Logo FlexMedia"
        />
      </div>
      <nav className="flex-1">
        <ul className="space-y-2">
          <li>
            <Link
              to="/"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-200 transition-colors"
            >
              <FaListUl className="text-green-600" />
              <span>Listar Placas</span>
            </Link>
          </li>
          <li>
            <Link
              to="/cadastrar-placas"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-200 transition-colors"
            >
              <FaCashRegister className="text-green-600" />
              <span>Cadastrar Placa</span>
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
