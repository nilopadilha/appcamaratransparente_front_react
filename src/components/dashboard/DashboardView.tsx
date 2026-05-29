import React from 'react';
import { CityData } from './mockData';
import MetricCard from './MetricCard';
import { 
  Users, 
  TrendingUp, 
  ShieldCheck, 
  GraduationCap, 
  HeartPulse, 
  ShieldAlert, 
  GanttChartSquare,
  BadgeDollarSign,
  Leaf,
  Construction,
  Wallet
} from 'lucide-react';

interface DashboardViewProps {
  data: CityData;
}

const DashboardView: React.FC<DashboardViewProps> = ({ data }) => {
  const getTransparencyColor = (index: string) => {
    switch (index) {
      case 'Diamante': return 'text-blue-600 bg-blue-50';
      case 'Ouro': return 'text-yellow-600 bg-yellow-50';
      case 'Prata': return 'text-zinc-500 bg-zinc-100';
      default: return 'text-orange-600 bg-orange-50';
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Top Section: Essential Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <MetricCard 
          title="População Residente"
          value={data.population.toLocaleString('pt-BR')}
          subtitle="Fonte: Estimativa IBGE 2024"
          icon={Users}
          colorClass="text-indigo-600"
          bgClass="bg-indigo-50"
        />
        <MetricCard 
          title="PIB per capita"
          value={`R$ ${data.pibPerCapita.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
          subtitle="Produto Interno Bruto"
          icon={TrendingUp}
          colorClass="text-emerald-600"
          bgClass="bg-emerald-50"
          trend={{ value: 2.4, isUp: true }}
        />
        <MetricCard 
          title="Índice de Transparência"
          value={data.transparencyIndex}
          subtitle={`Selo Atricon: ${data.transparencyScore}/100`}
          icon={ShieldCheck}
          colorClass={getTransparencyColor(data.transparencyIndex).split(' ')[0]}
          bgClass={getTransparencyColor(data.transparencyIndex).split(' ')[1]}
        />
        <MetricCard 
          title="Investimento Anual"
          value={`R$ ${(data.financials.investment / 1000000).toFixed(1)}M`}
          subtitle="Obras e Infraestrutura"
          icon={BadgeDollarSign}
          colorClass="text-amber-600"
          bgClass="bg-amber-50"
          trend={{ value: 5.8, isUp: true }}
        />
      </div>

      {/* Middle Section: Detailed Indicators & Progress Bars */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-white p-10 rounded-[40px] border-2 border-zinc-100 shadow-xl shadow-zinc-200/50">
          <h3 className="text-2xl font-black text-zinc-900 mb-10 uppercase tracking-tighter flex items-center gap-4">
            <div className="w-10 h-10 bg-zinc-900 rounded-xl flex items-center justify-center text-white">
              <GanttChartSquare size={20} />
            </div>
            Desempenho por Área
          </h3>
          <div className="space-y-8">
            {[
              { label: 'Educação', value: data.indicators.education, icon: GraduationCap, color: 'bg-blue-600' },
              { label: 'Saúde', value: data.indicators.health, icon: HeartPulse, color: 'bg-rose-500' },
              { label: 'Segurança', value: data.indicators.security, icon: ShieldAlert, color: 'bg-orange-500' },
              { label: 'Governança', value: data.indicators.governance, icon: ShieldCheck, color: 'bg-emerald-500' },
              { label: 'Sustentabilidade', value: data.indicators.sustainability, icon: Leaf, color: 'bg-green-600' },
              { label: 'Infraestrutura', value: data.indicators.infrastructure, icon: Construction, color: 'bg-zinc-800' },
            ].map((item) => (
              <div key={item.label} className="space-y-3 group">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <item.icon size={18} className="text-zinc-400 group-hover:text-zinc-900 transition-colors" />
                    <span className="font-bold text-zinc-700 tracking-tight">{item.label}</span>
                  </div>
                  <span className="font-black text-zinc-900">{item.value}%</span>
                </div>
                <div className="h-5 bg-zinc-100 rounded-full overflow-hidden border border-zinc-50 p-1">
                  <div 
                    className={`h-full ${item.color} rounded-full transition-all duration-1000 ease-out shadow-sm`}
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="bg-zinc-900 p-10 rounded-[40px] text-white shadow-2xl relative overflow-hidden flex-1">
            <div className="relative z-10">
              <h3 className="text-2xl font-black mb-10 uppercase tracking-tighter flex items-center gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-emerald-400">
                  <Wallet size={20} />
                </div>
                Saúde Financeira
              </h3>
              <div className="space-y-12">
                <div>
                  <p className="text-zinc-400 text-[10px] font-black uppercase tracking-[0.3em] mb-3">Receita Total Consolidada</p>
                  <p className="text-5xl font-black text-emerald-400 tracking-tighter">R$ {(data.financials.revenue / 1000000000).toFixed(2)}B</p>
                </div>
                
                <div className="grid grid-cols-2 gap-12">
                  <div>
                    <p className="text-zinc-400 text-[10px] font-black uppercase tracking-[0.3em] mb-3">Gasto com Pessoal</p>
                    <p className="text-3xl font-black text-white tracking-tighter">R$ {(data.financials.personnelCost / 1000000).toFixed(0)}M</p>
                    <p className="text-[10px] text-zinc-500 font-bold mt-1">Límite LRF: 54%</p>
                  </div>
                  <div>
                    <p className="text-zinc-400 text-[10px] font-black uppercase tracking-[0.3em] mb-3">Nível de Endividamento</p>
                    <p className="text-3xl font-black text-blue-400 tracking-tighter">{data.financials.debtLevel}%</p>
                    <p className="text-[10px] text-zinc-500 font-bold mt-1">Capacidade: Alta</p>
                  </div>
                </div>
                
                <div className="pt-10 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-zinc-400 text-[10px] font-black uppercase tracking-[0.3em] mb-1">Superávit Estimado</p>
                    <p className="text-xl font-bold text-emerald-400">R$ {((data.financials.revenue - data.financials.expenses) / 1000000).toFixed(1)}M</p>
                  </div>
                  <button className="px-8 py-4 bg-white text-zinc-900 font-black rounded-2xl hover:bg-yellow-400 transition-all uppercase tracking-widest text-[10px] shadow-xl">
                    Detalhamento Fiscal
                  </button>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-600 rounded-full blur-[120px] opacity-20" />
          </div>

          <div className="bg-yellow-400 p-8 rounded-[40px] shadow-xl flex items-center justify-between group cursor-pointer overflow-hidden relative">
            <div className="z-10">
              <h4 className="text-zinc-900 font-black text-xl uppercase tracking-tighter leading-none">Radar da Transparência</h4>
              <p className="text-zinc-800 text-sm font-bold mt-1">Consulte a metodologia oficial da Atricon</p>
            </div>
            <div className="bg-black text-white p-4 rounded-2xl z-10 group-hover:rotate-12 transition-transform shadow-lg">
              <ShieldCheck size={24} />
            </div>
            <div className="absolute -right-4 -bottom-4 text-black/5 transition-transform group-hover:scale-110">
              <ShieldCheck size={140} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;
