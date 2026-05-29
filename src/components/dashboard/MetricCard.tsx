import React from 'react';
import { LucideIcon, ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  colorClass: string;
  bgClass: string;
  trend?: {
    value: number;
    isUp: boolean;
  };
}

const MetricCard: React.FC<MetricCardProps> = ({ 
  title, 
  value, 
  subtitle, 
  icon: Icon, 
  colorClass, 
  bgClass,
  trend 
}) => {
  return (
    <div className="bg-white p-8 rounded-[40px] border-2 border-zinc-100 shadow-lg shadow-zinc-200/20 hover:shadow-2xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
      <div className="flex justify-between items-start mb-8 relative z-10">
        <div className={`p-5 ${bgClass} ${colorClass} rounded-2xl group-hover:rotate-6 transition-transform shadow-inner`}>
          <Icon size={32} strokeWidth={2.5} />
        </div>
        {trend && (
          <div className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-tighter ${
            trend.isUp ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 'bg-rose-50 text-rose-600 border border-rose-100'
          }`}>
            {trend.isUp ? <ArrowUpRight size={12} strokeWidth={3} /> : <ArrowDownRight size={12} strokeWidth={3} />}
            {trend.value}%
          </div>
        )}
      </div>
      
      <div className="relative z-10">
        <h4 className="text-zinc-400 text-[10px] font-black uppercase tracking-[0.25em] mb-2">{title}</h4>
        <p className="text-4xl font-black text-zinc-900 tracking-tighter leading-none">{value}</p>
        {subtitle && (
          <div className="flex items-center gap-2 mt-3">
             <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
             <p className="text-zinc-500 text-xs font-bold tracking-tight">{subtitle}</p>
          </div>
        )}
      </div>

      {/* Subtle Background Pattern */}
      <div className="absolute -right-4 -bottom-4 text-zinc-50 opacity-0 group-hover:opacity-100 transition-opacity">
        <Icon size={120} />
      </div>
    </div>
  );
};

export default MetricCard;
