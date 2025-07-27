import { Facebook, Instagram, Search, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
    return (
      <nav className="text-white w-full mt-auto !bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto flex items-start justify-between">
          <div className='flex flex-col text-zinc-500 text-sm/6'>
            <h4 className='text-zinc-600 font-semibold text-md'>INSTITUCIONAL</h4>
            <a>História da Câmara</a>
            <a>Mesa Diretora</a>
            <a>Vereadores</a>
            <a>Diretores da CM</a>
            <a>Escola do Legislativo</a>
          </div>

          <div className='flex flex-col text-zinc-500 text-sm/6'>
            <h4 className='text-zinc-600 font-semibold text-md'>PROCESSO LEGISLATIVO</h4>
            <a>Sistema de Apoio</a>
            <a>Regimento Interno</a>
          </div>

          <div className='flex flex-col text-zinc-500 text-sm/6'>
            <h4 className='text-zinc-600 font-semibold text-md'>PORTAL DA TRANSPARÊNCIA</h4>
          </div>

          <div className='flex flex-col text-zinc-500 text-sm/6'>
            <h4 className='text-zinc-600 font-semibold text-md'>COMUNICAÇÃO INTEGRADA</h4>
            <a>TV Câmara</a>
            <a>Rádio Câmara</a>
            <a>Assessoria</a>
          </div>

          <div className='flex flex-col text-zinc-500 text-sm/6'>
            <h4 className='text-zinc-600 font-semibold text-md'>OUVIDORIA</h4>
            <a>Fale Conosco</a>
            <a>Fale com o vereador</a>
          </div>

          <div className='flex flex-col text-zinc-500 text-sm/6'>
            <h4 className='text-zinc-600 font-semibold text-md'>Redes Sociais</h4>
            <div className='flex flex-row gap-2 text-white'>
                <a className='rounded-full p-3 bg-yellow-400 hover:bg-yellow-500 transition duration-500'><Facebook /></a>
                <a className='rounded-full p-3 bg-yellow-400 hover:bg-yellow-500 transition duration-500'><Instagram /></a>
                <a className='rounded-full p-3 bg-yellow-400 hover:bg-yellow-500 transition duration-500'><Twitter /></a>
                <a className='rounded-full p-3 bg-yellow-400 hover:bg-yellow-500 transition duration-500'><Youtube /></a>
            </div>
          </div>
        </div>
      </nav>      
    );
  };
  
  export default Navbar;