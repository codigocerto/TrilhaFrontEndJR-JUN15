import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars } from 'react-icons/fa';
import Sidebar from './Sidebar';
import DarkModeToggle from './DarkModeToggle';
import Badge from './Badge';

const Header: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="bg-codigo-certo-red text-codigo-certo-white p-4 dark:bg-codigo-certo-dark-bg dark:text-codigo-certo-dark-text fixed w-full top-0 z-50">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Codigo Certo Coders <Badge color="success">New</Badge></h1>
          <ul className="hidden md:flex space-x-4">
            <li>
              <Link to="personal-info" smooth={true} duration={500} className="cursor-pointer">Informações Pessoais</Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500} className="cursor-pointer">Sobre</Link>
            </li>
            <li>
              <Link to="motivations" smooth={true} duration={500} className="cursor-pointer">Motivações</Link>
            </li>
          </ul>
          <div className="flex items-center space-x-4">
            <DarkModeToggle />
            <button onClick={toggleSidebar} className="md:hidden text-codigo-certo-white">
              <FaBars size={24} />
            </button>
          </div>
        </nav>
      </header>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
}

export default Header;
