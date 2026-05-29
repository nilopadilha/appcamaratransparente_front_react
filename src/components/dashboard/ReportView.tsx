import React from 'react';
import { CityData } from './mockData';
import { FileDown, Printer, Share2, Info } from 'lucide-react';

interface ReportViewProps {
  data: CityData;
}

const ReportView: React.FC<ReportViewProps> = ({ data }) => {
  const tableData = [
    { category: 'Socioeconômico', metric: 'População Estimada', value: data.population.toLocaleString('pt-BR'), source: 'IBGE / Censo 2025' },
    { category: 'Socioeconômico', metric: 'PIB per capita', value: `R$ ${data.pibPerCapita.toLocaleString('pt-BR')}`, source: 'IBGE / Contas Regionais 2024' },
    { category: 'Transparência', metric: 'Índice Atricon', value: data.transparencyIndex, source: 'Radar da Transparência 2026' },
    { category: 'Transparência', metric: 'Pontuação Consolidada', value: `${data.transparencyScore}/100`, source: 'Radar da Transparência 2026' },
    { category: 'Financeiro', metric: 'Receita Corrente Líquida', value: `R$ ${data.financials.revenue.toLocaleString('pt-BR')}`, source: 'Siconfi / STN' },
    { category: 'Financeiro', metric: 'Despesas Correntes', value: `R$ ${data.financials.expenses.toLocaleString('pt-BR')}`, source: 'Siconfi / STN' },
    { category: 'Financeiro', metric: 'Gasto com Pessoal (LRF)', value: `${((data.financials.personnelCost / data.financials.revenue) * 100).toFixed(2)}%`, source: 'Relatório de Gestão Fiscal' },
    { category: 'Financeiro', metric: 'Investimentos em Obras', value: `R$ ${data.financials.investment.toLocaleString('pt-BR')}`, source: 'LOA / Créditos Adicionais' },
    { category: 'Desempenho', metric: 'Índice de Educação', value: `${data.indicators.education}%`, source: 'IDEB / Sec. Educação' },
    { category: 'Desempenho', metric: 'Cobertura de Saúde', value: `${data.indicators.health}%`, source: 'DataSUS / Sec. Saúde' },
    { category: 'Desempenho', metric: 'Segurança Pública', value: `${data.indicators.security}%`, source: 'SESED / Indicadores' },
    { category: 'Desempenho', metric: 'Índice de Governança', value: `${data.indicators.governance}%`, source: 'IGM-CFA / Atricon' },
  ];

  return (
    <div className="bg-white rounded-[40px] border-2 border-zinc-100 shadow-2xl shadow-zinc-200/50 overflow-hidden animate-in fade-in zoom-in-95 duration-700">
      <div className="p-10 border-b border-zinc-100 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8 bg-zinc-50/50">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-1 bg-yellow-400 rounded-full" />
            <h3 className="text-2xl font-black text-zinc-900 uppercase tracking-tighter">Relatório de Transparência</h3>
          </div>
          <p className="text-zinc-500 text-sm font-medium">Extração consolidada de dados auditáveis para o município de <span className="text-zinc-900 font-bold">{data.name} - {data.state}</span></p>
        </div>
        <div className="flex flex-wrap gap-4 w-full xl:w-auto">
          <button className="flex-1 xl:flex-none flex items-center justify-center gap-2 px-6 py-4 bg-white border-2 border-zinc-100 rounded-2xl text-zinc-600 font-black text-[10px] uppercase tracking-widest hover:bg-zinc-50 transition-all shadow-sm">
            <FileDown size={16} /> EXPORTAR .CSV
          </button>
          <button className="flex-1 xl:flex-none flex items-center justify-center gap-2 px-6 py-4 bg-white border-2 border-zinc-100 rounded-2xl text-zinc-600 font-black text-[10px] uppercase tracking-widest hover:bg-zinc-50 transition-all shadow-sm">
            <Printer size={16} /> IMPRIMIR PÁGINA
          </button>
          <button className="flex-1 xl:flex-none flex items-center justify-center gap-3 px-8 py-4 bg-[var(--primary)] text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl shadow-blue-900/20 hover:bg-blue-800 transition-all">
            <Share2 size={16} strokeWidth={3} /> COMPARTILHAR DADOS
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-zinc-900 text-white">
              <th className="px-10 py-6 text-[10px] font-black uppercase tracking-[0.3em]">Categoria</th>
              <th className="px-10 py-6 text-[10px] font-black uppercase tracking-[0.3em]">Indicador / Métrica</th>
              <th className="px-10 py-6 text-[10px] font-black uppercase tracking-[0.3em]">Valor Consolidado</th>
              <th className="px-10 py-6 text-[10px] font-black uppercase tracking-[0.3em]">Fonte Oficial</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100">
            {tableData.map((row, idx) => (
              <tr key={idx} className="hover:bg-zinc-50/80 transition-colors group">
                <td className="px-10 py-6">
                  <span className={`text-[9px] font-black px-4 py-1.5 rounded-lg uppercase tracking-[0.15em] ${
                    row.category === 'Financeiro' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' :
                    row.category === 'Transparência' ? 'bg-blue-50 text-blue-600 border border-blue-100' :
                    row.category === 'Desempenho' ? 'bg-purple-50 text-purple-600 border border-purple-100' :
                    'bg-zinc-100 text-zinc-500 border border-zinc-200'
                  }`}>
                    {row.category}
                  </span>
                </td>
                <td className="px-10 py-6 font-bold text-zinc-800 tracking-tight flex items-center gap-2">
                  {row.metric}
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity text-zinc-300 hover:text-zinc-600">
                    <Info size={14} />
                  </button>
                </td>
                <td className="px-10 py-6">
                   <div className="font-mono text-sm font-black text-[var(--primary)] bg-blue-50/50 px-3 py-1 rounded-md inline-block">
                     {row.value}
                   </div>
                </td>
                <td className="px-10 py-6 text-zinc-400 text-[10px] font-black uppercase tracking-wider">{row.source}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="p-10 bg-zinc-50 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2 text-zinc-400">
          <Info size={14} />
          <p className="text-[10px] font-black uppercase tracking-[0.3em]">
            Base de dados atualizada em: {new Date(data.lastUpdate).toLocaleDateString('pt-BR')}
          </p>
        </div>
        <div className="flex items-center gap-4">
           <span className="text-[10px] font-bold text-zinc-400">Certificado por:</span>
           <div className="flex gap-2">
              <div className="bg-zinc-200 w-12 h-6 rounded animate-pulse" />
              <div className="bg-zinc-200 w-12 h-6 rounded animate-pulse" />
           </div>
        </div>
      </div>
    </div>
  );
};

export default ReportView;
