import React, { useState } from 'react';
import { Search, MapPin, X, GraduationCap } from 'lucide-react';
import { CityData, featuredCities, rnMunicipalities } from './mockData';

interface CitySelectorProps {
  onSelect: (city: CityData) => void;
  selectedCityId?: string;
}

const CitySelector: React.FC<CitySelectorProps> = ({ onSelect, selectedCityId }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const filteredNames = rnMunicipalities.filter(name => 
    name.toLowerCase().includes(searchTerm.toLowerCase())
  ).slice(0, 8); // Limit suggestions for better UX

  const handleSelectName = async (name: string) => {
    setSearchTerm(name);
    setShowDropdown(false);
    // We need to trigger the selection in the parent
    // The parent calls getCityData, so we just need to pass a mock-like object 
    // or change the interface. Let's keep it simple: we pass a partial with the name.
    onSelect({ name } as CityData);
  };

  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="relative group max-w-2xl">
        <div className="flex items-center gap-4 mb-4">
           <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
              <Search size={16} />
           </div>
           <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em]">Busca Global (167 municípios do RN)</p>
        </div>
        
        <div className="relative">
          <input 
            type="text" 
            placeholder="Digite o nome de qualquer cidade do RN..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setShowDropdown(true);
            }}
            onFocus={() => setShowDropdown(true)}
            className="w-full pl-6 pr-12 py-5 rounded-[24px] border-2 border-zinc-100 bg-zinc-50/30 focus:bg-white focus:border-[var(--primary)] outline-none transition-all shadow-sm text-lg font-medium placeholder:text-zinc-400"
          />
          {searchTerm && (
            <button 
              onClick={() => {
                setSearchTerm('');
                setShowDropdown(false);
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 transition-colors"
            >
              <X size={20} />
            </button>
          )}

          {/* Search Dropdown */}
          {showDropdown && searchTerm.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-3xl border-2 border-zinc-100 shadow-2xl z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
              {filteredNames.length > 0 ? (
                <div className="p-2">
                  {filteredNames.map((name) => (
                    <button
                      key={name}
                      onClick={() => handleSelectName(name)}
                      className="w-full text-left px-6 py-4 hover:bg-blue-50 rounded-2xl flex items-center gap-3 transition-colors group"
                    >
                      <MapPin size={16} className="text-zinc-300 group-hover:text-blue-500" />
                      <span className="font-bold text-zinc-700">{name}</span>
                      <span className="ml-auto text-[10px] font-black text-zinc-300 uppercase tracking-widest">Selecionar</span>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center">
                  <p className="text-zinc-400 text-sm italic font-medium">Nenhuma cidade encontrada no RN...</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      
      <div className="flex flex-col gap-4">
        <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em]">Sugestões de Acesso Rápido</p>
        <div className="flex flex-wrap gap-3">
          {featuredCities.map((city) => (
            <button
              key={city.id}
              onClick={() => {
                setSearchTerm(city.name);
                onSelect(city);
              }}
              className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all border-2 ${
                selectedCityId === city.id 
                ? 'bg-[var(--primary)] text-white border-[var(--primary)] shadow-2xl shadow-blue-900/20 scale-105' 
                : 'bg-white text-zinc-600 border-zinc-100 hover:border-zinc-300 hover:bg-zinc-50'
              }`}
            >
              <MapPin size={16} strokeWidth={3} className={selectedCityId === city.id ? 'text-yellow-400' : 'text-zinc-400'} />
              {city.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CitySelector;
