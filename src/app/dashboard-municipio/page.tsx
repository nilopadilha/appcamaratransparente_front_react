"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import CitySelector from '@/components/dashboard/CitySelector';
import DashboardView from '@/components/dashboard/DashboardView';
import ReportView from '@/components/dashboard/ReportView';
import { CityData, getCityData, featuredCities } from '@/components/dashboard/mockData';
import { LayoutDashboard, FileSpreadsheet, Loader2, AlertCircle, Info } from 'lucide-react';

export default function MunicipalDashboard() {
  const [selectedCity, setSelectedCity] = useState<CityData | null>(null);
  const [viewMode, setViewMode] = useState<'dashboard' | 'report'>('dashboard');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Initial load
  useEffect(() => {
    handleCitySelect(featuredCities[0]);
  }, []);

  const handleCitySelect = async (city: CityData) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await getCityData(city.name);
      if (data) {
        setSelectedCity(data);
      } else {
        setError('Município não localizado em nossas bases oficiais.');
      }
    } catch (err) {
      setError('Falha na comunicação com o servidor de dados (API Atricon/IBGE).');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col bg-zinc-50 min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      
      {/* Hero Header: Bold & Neo-Brutalist */}
      <div className="w-full bg-[var(--primary)] text-white pt-24 pb-40 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-12">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-yellow-400 text-black px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">
                  Portal da Transparência
                </span>
                <span className="text-blue-200 text-xs font-bold flex items-center gap-1">
                  <Info size={14} /> Dados Auditados
                </span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
                Painel de <br />
                <span className="text-yellow-400">Indicadores</span>
              </h1>
              <p className="text-blue-100 text-xl font-medium max-w-xl leading-relaxed">
                Monitore o desempenho financeiro e social dos municípios potiguares através de dados consolidados do IBGE e Radar da Transparência Pública.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row bg-black/20 p-2 rounded-[32px] backdrop-blur-xl border border-white/10 shadow-2xl">
              <button 
                onClick={() => setViewMode('dashboard')}
                className={`flex items-center justify-center gap-3 px-10 py-5 rounded-[24px] font-black uppercase tracking-[0.15em] text-[10px] transition-all duration-300 ${
                  viewMode === 'dashboard' ? 'bg-white text-[var(--primary)] shadow-xl scale-[1.02]' : 'text-white hover:bg-white/5'
                }`}
              >
                <LayoutDashboard size={18} strokeWidth={3} /> DASHBOARD VISUAL
              </button>
              <button 
                onClick={() => setViewMode('report')}
                className={`flex items-center justify-center gap-3 px-10 py-5 rounded-[24px] font-black uppercase tracking-[0.15em] text-[10px] transition-all duration-300 ${
                  viewMode === 'report' ? 'bg-white text-[var(--primary)] shadow-xl scale-[1.02]' : 'text-white hover:bg-white/5'
                }`}
              >
                <FileSpreadsheet size={18} strokeWidth={3} /> RELATÓRIO TÉCNICO
              </button>
            </div>
          </div>
        </div>
        
        {/* Abstract Background Shapes */}
        <div className="absolute top-20 right-[5%] w-96 h-96 border-[32px] border-white/5 rounded-full pointer-events-none rotate-12" />
        <div className="absolute -bottom-20 left-[20%] w-64 h-64 bg-yellow-400/10 rounded-[60px] rotate-45 pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_0%,transparent_100%)]" />
      </div>

      <main id="main-content" className="flex-1 w-full max-w-7xl mx-auto px-6 -mt-24 pb-32 relative z-20">
        <div className="flex flex-col gap-12">
          
          {/* Main Selection Card */}
          <div className="bg-white p-10 md:p-16 rounded-[48px] shadow-2xl shadow-blue-900/10 border-2 border-zinc-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8">
               <div className="w-16 h-16 bg-zinc-50 rounded-3xl flex items-center justify-center text-zinc-200 group-hover:text-yellow-400 transition-colors">
                  <LayoutDashboard size={32} />
               </div>
            </div>
            
            <div className="flex flex-col gap-10 relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-16 h-1.5 bg-yellow-400 rounded-full" />
                <h2 className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.5em]">Localidade Selecionada</h2>
              </div>
              
              <div className="flex flex-col lg:flex-row lg:items-center gap-12">
                <div className="flex-1">
                   <CitySelector 
                    onSelect={handleCitySelect} 
                    selectedCityId={selectedCity?.id} 
                  />
                </div>
                {selectedCity && !isLoading && (
                  <div className="lg:w-64 bg-zinc-50 p-6 rounded-3xl border border-zinc-100 animate-in fade-in slide-in-from-right-4">
                     <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-4 text-center">Resumo Atual</p>
                     <div className="space-y-4">
                        <div className="flex justify-between items-center">
                           <span className="text-xs font-bold text-zinc-500">UF</span>
                           <span className="text-xs font-black text-zinc-900">{selectedCity.state}</span>
                        </div>
                        <div className="flex justify-between items-center">
                           <span className="text-xs font-bold text-zinc-500">Score</span>
                           <span className="text-xs font-black text-blue-600">{selectedCity.transparencyScore}/100</span>
                        </div>
                        <div className="h-2 w-full bg-zinc-200 rounded-full overflow-hidden">
                           <div className="h-full bg-blue-600 rounded-full" style={{ width: `${selectedCity.transparencyScore}%` }} />
                        </div>
                     </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Content Transition Area */}
          <div className="min-h-[500px]">
            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-40 gap-8 bg-white rounded-[48px] border-2 border-dashed border-zinc-200 shadow-inner">
                <div className="relative">
                  <Loader2 className="text-[var(--primary)] animate-spin" size={64} strokeWidth={3} />
                  <div className="absolute inset-0 bg-blue-500/10 blur-2xl animate-pulse" />
                </div>
                <div className="text-center">
                  <p className="text-2xl font-black text-zinc-900 uppercase tracking-tighter mb-2">Processando Indicadores</p>
                  <p className="text-zinc-500 font-medium max-w-xs mx-auto">Sincronizando com as bases do IBGE e Tribunal de Contas...</p>
                </div>
              </div>
            ) : error ? (
              <div className="flex flex-col items-center justify-center py-40 gap-8 bg-rose-50 rounded-[48px] border-2 border-rose-100 text-rose-600 shadow-xl shadow-rose-900/5">
                <div className="bg-rose-600 text-white p-6 rounded-3xl shadow-lg">
                  <AlertCircle size={48} strokeWidth={3} />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-black uppercase tracking-tighter mb-2">Erro na Consulta</h3>
                  <p className="font-medium text-rose-500/80 mb-8">{error}</p>
                  <button 
                     onClick={() => selectedCity && handleCitySelect(selectedCity)}
                     className="px-10 py-5 bg-rose-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-rose-700 transition-all shadow-xl shadow-rose-900/20"
                  >
                    Tentar Novamente
                  </button>
                </div>
              </div>
            ) : selectedCity ? (
              <div className="transition-all duration-500 ease-in-out">
                {viewMode === 'dashboard' ? (
                  <DashboardView data={selectedCity} />
                ) : (
                  <ReportView data={selectedCity} />
                )}
              </div>
            ) : (
              <div className="text-center py-40 bg-white rounded-[48px] border-2 border-dashed border-zinc-100">
                <LayoutDashboard size={48} className="mx-auto text-zinc-200 mb-6" />
                <p className="text-zinc-400 font-black uppercase tracking-[0.3em] text-xs">Aguardando seleção de município</p>
              </div>
            )}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
