import { Facebook, Instagram, Search, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
    const [email, setEmail] = React.useState('');
    const [subscribed, setSubscribed] = React.useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
      e.preventDefault();
      if (email) {
        setSubscribed(true);
        setTimeout(() => setSubscribed(false), 3000);
        setEmail('');
      }
    };

    return (
      <footer className="w-full mt-auto bg-gray-100 py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-12">
          <div className='flex flex-col text-zinc-500 text-sm/6 min-w-[150px]'>
            <h4 className='text-zinc-600 font-bold text-xs uppercase tracking-[0.2em] mb-4'>INSTITUCIONAL</h4>
            <Link href="/institucional/historia" className="hover:text-[var(--primary)] transition-colors py-1">História Municipal</Link>
            <Link href="/institucional/representantes" className="hover:text-[var(--primary)] transition-colors py-1">Nossos Representantes</Link>
            <Link href="/institucional/estrutura" className="hover:text-[var(--primary)] transition-colors py-1">Estrutura de Governo</Link>
            <Link href="/" className="hover:text-[var(--primary)] transition-colors py-1">Escola de Cidadania</Link>
          </div>

          <div className='flex flex-col text-zinc-500 text-sm/6 min-w-[150px]'>
            <h4 className='text-zinc-600 font-bold text-xs uppercase tracking-[0.2em] mb-4'>PROCESSO</h4>
            <Link href="/processo/projetos" className="hover:text-[var(--primary)] transition-colors py-1">Projetos de Lei</Link>
            <Link href="/processo/sessoes" className="hover:text-[var(--primary)] transition-colors py-1">Sessões e Atas</Link>
            <Link href="/processo/projetos" className="hover:text-[var(--primary)] transition-colors py-1">Regimento Interno</Link>
          </div>

          <div className='flex flex-col text-zinc-500 text-sm/6 min-w-[150px]'>
            <h4 className='text-zinc-600 font-bold text-xs uppercase tracking-[0.2em] mb-4'>TRANSPARÊNCIA</h4>
            <Link href="/transparencia" className="hover:text-[var(--primary)] transition-colors py-1">Contas Públicas</Link>
            <Link href="/transparencia" className="hover:text-[var(--primary)] transition-colors py-1">Dados Financeiros</Link>
            <Link href="/ouvidoria" className="hover:text-[var(--primary)] transition-colors py-1">Fale Conosco</Link>
          </div>

          <div className="lg:col-span-1 xl:col-span-3">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-200">
                <h4 className='text-zinc-800 font-black text-sm uppercase tracking-tight mb-2'>Assine nosso informativo</h4>
                <p className="text-zinc-500 text-xs mb-6 font-medium leading-relaxed">Fique por dentro das decisões e ações do seu município diretamente no seu e-mail.</p>
                
                {!subscribed ? (
                  <form onSubmit={handleSubscribe} className="flex gap-2">
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Seu melhor e-mail..."
                      className="flex-1 bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2 text-sm focus:bg-white focus:ring-2 focus:ring-[var(--primary)] outline-none transition-all"
                    />
                    <button type="submit" className="bg-[var(--primary)] text-white px-6 py-2 rounded-xl text-xs font-black hover:bg-blue-800 transition-colors uppercase tracking-widest">
                      Assinar
                    </button>
                  </form>
                ) : (
                  <div className="bg-green-50 text-green-700 px-4 py-3 rounded-xl flex items-center gap-3 animate-in fade-in zoom-in-95">
                    <Search size={16} className="rotate-45" /> {/* Mocking a checkmark with rotated search for now if Lucide Check isn't imported */}
                    <span className="text-xs font-bold uppercase">Inscrição realizada com sucesso!</span>
                  </div>
                )}

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-zinc-100">
                  <div className='flex flex-row gap-3'>
                      <a href="#" className='w-10 h-10 rounded-full flex items-center justify-center bg-zinc-900 text-white hover:bg-[var(--primary)] transition-all'><Facebook size={18} /></a>
                      <a href="#" className='w-10 h-10 rounded-full flex items-center justify-center bg-zinc-900 text-white hover:bg-[var(--primary)] transition-all'><Instagram size={18} /></a>
                      <a href="#" className='w-10 h-10 rounded-full flex items-center justify-center bg-zinc-900 text-white hover:bg-[var(--primary)] transition-all'><Twitter size={18} /></a>
                      <a href="#" className='w-10 h-10 rounded-full flex items-center justify-center bg-zinc-900 text-white hover:bg-[var(--primary)] transition-all'><Youtube size={18} /></a>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest leading-none">Protótipo Municipal</p>
                    <p className="text-[10px] text-zinc-400 font-medium">Transparência em foco</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-zinc-200 text-center text-zinc-400 text-[10px] font-bold uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} Portal Municipal • Protótipo white-label para Governança Digital
        </div>
      </footer>      
    );
  };
  
  export default Footer;