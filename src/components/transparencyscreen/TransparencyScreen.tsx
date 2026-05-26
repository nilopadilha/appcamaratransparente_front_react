"use client";
import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import { useRouter } from 'next/navigation';
import { Download, ExternalLink, Search, Filter, FileText, ChevronRight } from 'lucide-react';
import Footer from '../footer/Footer';

const functions = [
    {
        name: "RELATÓRIOS FINANCEIROS",
        type: "dropdown",
        category: "Finanças",
        content: ['Balanço Anual 2024', 'Despesas de Pessoal', 'Relatório de Gestão Fiscal']
    },
    {
        name: "LICITAÇÕES E CONTRATOS",
        type: "dropdown",
        category: "Administrativo",
        content: ['Editais 2025', 'Contratos Vigentes', 'Atas de Registro de Preços']
    },
    {
        name: "QUADRO DE SERVIDORES",
        type: 'download',
        category: "Recursos Humanos",
        content: '/servidores.pdf'
    },
    {
        name: "LEGISLAÇÃO MUNICIPAL",
        type: 'redirect',
        category: "Legislativo",
        content: 'https://www.cmnat.rn.gov.br/legislacao'
    }
];

const TransparencyScreen = () => {
  const [openDropdown, setOpenDropdown] = useState<Record<string, boolean>>({});
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("Todos");
  const router = useRouter();

  const categories = ["Todos", ...Array.from(new Set(functions.map(f => f.category)))];

  const filteredFunctions = functions.filter(fn => {
    const matchesSearch = fn.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterCategory === "Todos" || fn.category === filterCategory;
    return matchesSearch && matchesFilter;
  });

  const toggleDropdown = (name: string) => {
    setOpenDropdown(prev => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <div className='bg-zinc-50 flex flex-col w-full min-h-screen'>
      <Navbar />
      
      {/* Header Section */}
      <div className='w-full bg-[var(--primary)] text-white py-12 px-4 shadow-lg'>
        <div className="max-w-5xl mx-auto text-center">
            <h1 className='text-4xl md:text-5xl font-extrabold mb-4 uppercase tracking-tight'>Portal da Transparência</h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">Acesso rápido e fácil às informações públicas, garantindo a fiscalização e a participação cidadã.</p>
        </div>
      </div>

      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-12">
        {/* Controls Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
                <input 
                    type="text" 
                    placeholder="O que você procura? (ex: licitações, salários...)"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 bg-white focus:ring-2 focus:ring-[var(--primary)] outline-none transition-all shadow-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="flex items-center gap-2 bg-white border border-zinc-200 rounded-xl px-3 shadow-sm">
                <Filter size={18} className="text-zinc-400" />
                <select 
                    className="py-3 pr-8 bg-transparent outline-none text-zinc-600 font-medium cursor-pointer"
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                >
                    {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>
            </div>
        </div>

        {/* Content List */}
        <div className="grid gap-4">
            {filteredFunctions.length > 0 ? (
                filteredFunctions.map((fn, index) => {
                    const isDropdown = fn.type === 'dropdown';
                    const isOpen = openDropdown[fn.name];

                    return (
                        <div key={index} className="bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden transition-all hover:border-[var(--primary)]">
                            <button
                                onClick={() => isDropdown ? toggleDropdown(fn.name) : (fn.type === 'redirect' ? window.open(fn.content as string, '_blank') : null)}
                                className={`w-full flex justify-between items-center p-5 text-left transition-colors ${isOpen ? 'bg-zinc-50' : ''}`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-blue-50 text-[var(--primary)] rounded-lg">
                                        <FileText size={24} />
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-bold text-[var(--primary)] uppercase tracking-widest">{fn.category}</span>
                                        <h3 className="text-lg font-bold text-zinc-800 uppercase leading-tight">{fn.name}</h3>
                                    </div>
                                </div>
                                {isDropdown ? (
                                    <ChevronRight className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} />
                                ) : (
                                    fn.type === 'download' ? <Download className="text-zinc-400" /> : <ExternalLink className="text-zinc-400" />
                                )}
                            </button>

                            {isOpen && isDropdown && Array.isArray(fn.content) && (
                                <div className="bg-zinc-50 border-t border-zinc-100 animate-in fade-in slide-in-from-top-2 duration-300">
                                    {fn.content.map((item, i) => (
                                        <a
                                            key={i}
                                            href="#"
                                            className="flex justify-between items-center px-8 py-4 border-b border-zinc-100 last:border-0 hover:bg-white transition-colors group"
                                        >
                                            <span className="text-zinc-600 font-medium group-hover:text-[var(--primary)]">{item}</span>
                                            <div className="flex items-center gap-2 text-[var(--primary)] opacity-0 group-hover:opacity-100 transition-opacity">
                                                <span className="text-xs font-bold">ACESSAR</span>
                                                <ExternalLink size={14} />
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })
            ) : (
                <div className="text-center py-20 bg-white rounded-2xl border-2 border-dashed border-zinc-200">
                    <p className="text-zinc-400 font-medium">Nenhum resultado encontrado para sua busca.</p>
                </div>
            )}
        </div>
      </main>

      <Footer />
    </div>
  )
}

        <Footer />
    </div>
  )
}

export default TransparencyScreen;
