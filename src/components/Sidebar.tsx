import React from 'react';
import { Link } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-50 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300`}
    >
      <div className="bg-codigo-certo-red w-64 h-full p-4">
        <button onClick={toggleSidebar} className="text-codigo-certo-white">
          <FaTimes size={24} />
        </button>
        <ul className="mt-8">
          <li>
            <Link
              to="personal-info"
              smooth={true}
              duration={500}
              className="cursor-pointer text-codigo-certo-white"
              onClick={toggleSidebar}
            >
              Informações Pessoais
            </Link>
          </li>
          <li className="mt-4">
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer text-codigo-certo-white"
              onClick={toggleSidebar}
            >
              Sobre
            </Link>
          </li>
          <li className="mt-4">
            <Link
              to="motivations"
              smooth={true}
              duration={500}
              className="cursor-pointer text-codigo-certo-white"
              onClick={toggleSidebar}
            >
              Motivações
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
