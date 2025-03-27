import Logo from '../../assets/flexmedia-logo.png'
import { FaListUl } from "react-icons/fa6";
import { FaCashRegister } from "react-icons/fa6";
import { Link } from 'react-router';


const SideBar = () => {
    return (
        <>
            <aside className="flex flex-col h-screen w-60 bg-green-200 p-4">
                <div>
                    <img src={Logo} alt="Logo flexmedia" />
                </div>

                <div className='mt-10'>
                    <ul className='flex flex-col gap-5'>
                        <Link to={"/"}><li className='flex items-center gap-3 cursor-pointer'><FaListUl /> Listar placas</li></Link>
                        <Link to={"/cadastrar-placas"}><li className='flex items-center gap-3 cursor-pointer'><FaCashRegister />Cadastrar placa</li></Link>
                    </ul>
                </div>
            </aside>
        </>
    );
}

export default SideBar;