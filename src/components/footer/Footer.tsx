import { Facebook, Instagram, Search, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
    return (
      <footer className="w-full mt-auto bg-gray-100 py-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-start justify-between gap-8">
          <div className='flex flex-col text-zinc-500 text-sm/6 min-w-[150px]'>
            <h4 className='text-zinc-600 font-semibold text-md mb-2'>INSTITUCIONAL</h4>
            <Link href="/" className="hover:text-[var(--primary)] transition-colors">História da Câmara</Link>
            <Link href="/" className="hover:text-[var(--primary)] transition-colors">Mesa Diretora</Link>
            <Link href="/" className="hover:text-[var(--primary)] transition-colors">Vereadores</Link>
            <Link href="/" className="hover:text-[var(--primary)] transition-colors">Diretores da CM</Link>
            <Link href="/" className="hover:text-[var(--primary)] transition-colors">Escola do Legislativo</Link>
          </div>

          <div className='flex flex-col text-zinc-500 text-sm/6 min-w-[150px]'>
            <h4 className='text-zinc-600 font-semibold text-md mb-2'>PROCESSO LEGISLATIVO</h4>
            <Link href="/" className="hover:text-[var(--primary)] transition-colors">Sistema de Apoio</Link>
            <Link href="/" className="hover:text-[var(--primary)] transition-colors">Regimento Interno</Link>
          </div>

          <div className='flex flex-col text-zinc-500 text-sm/6 min-w-[150px]'>
            <h4 className='text-zinc-600 font-semibold text-md mb-2'>PORTAL DA TRANSPARÊNCIA</h4>
            <Link href="/transparencia" className="hover:text-[var(--primary)] transition-colors">Acesso à Informação</Link>
            <Link href="/transparencia" className="hover:text-[var(--primary)] transition-colors">Dados Financeiros</Link>
          </div>

          <div className='flex flex-col text-zinc-500 text-sm/6 min-w-[150px]'>
            <h4 className='text-zinc-600 font-semibold text-md mb-2'>COMUNICAÇÃO INTEGRADA</h4>
            <Link href="/" className="hover:text-[var(--primary)] transition-colors">TV Câmara</Link>
            <Link href="/" className="hover:text-[var(--primary)] transition-colors">Rádio Câmara</Link>
            <Link href="/" className="hover:text-[var(--primary)] transition-colors">Assessoria</Link>
          </div>

          <div className='flex flex-col text-zinc-500 text-sm/6 min-w-[150px]'>
            <h4 className='text-zinc-600 font-semibold text-md mb-2'>OUVIDORIA</h4>
            <Link href="/" className="hover:text-[var(--primary)] transition-colors">Fale Conosco</Link>
            <Link href="/" className="hover:text-[var(--primary)] transition-colors">Fale com o vereador</Link>
          </div>

          <div className='flex flex-col text-zinc-500 text-sm/6 min-w-[150px]'>
            <h4 className='text-zinc-600 font-semibold text-md mb-2'>Redes Sociais</h4>
            <div className='flex flex-row gap-2 text-white'>
                <a href="#" className='rounded-full p-2 bg-yellow-400 hover:bg-yellow-500 transition duration-300'><Facebook size={20} /></a>
                <a href="#" className='rounded-full p-2 bg-yellow-400 hover:bg-yellow-500 transition duration-300'><Instagram size={20} /></a>
                <a href="#" className='rounded-full p-2 bg-yellow-400 hover:bg-yellow-500 transition duration-300'><Twitter size={20} /></a>
                <a href="#" className='rounded-full p-2 bg-yellow-400 hover:bg-yellow-500 transition duration-300'><Youtube size={20} /></a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-8 pt-4 border-t border-gray-200 text-center text-zinc-400 text-xs">
          © {new Date().getFullYear()} Portal Municipal. Protótipo para Transparência Pública.
        </div>
      </footer>      
    );
  };
  
  export default Footer;