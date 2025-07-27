import { Search } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
    return (
      <nav className="text-white w-full h-16 fixed top-0 z-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
          {/* Logo (esquerda) */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-3xl font-bold hover:text-blue-300">GOVT</Link>
          </div>
      
          {/* Navigation Links (centro) */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="font-bold hover:text-blue-300">Home</Link>
            <Link href="/transparencia" className="font-bold hover:text-blue-300">Portal da Transparência</Link>
            <Link href="/" className="font-bold hover:text-blue-300">Contato</Link>
          </div>
      
          {/* Busca (direita) */}
          <div className="flex-shrink-0 relative">
            <input type='text' name='buscar' placeholder='Pesquisar...'
              className='w-64 py-2 px-4 rounded-full bg-white text-zinc-800 text-sm'
            />
            <button className='absolute top-1.5 right-3 bg-transparent text-[var(--primary)]'><Search /></button>
          </div>
        </div>
      </nav>      
    );
  };
  
  export default Navbar;