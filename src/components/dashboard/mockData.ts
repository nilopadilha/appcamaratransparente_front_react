export interface CityData {
  id: string;
  name: string;
  state: string;
  population: number;
  pibPerCapita: number;
  transparencyIndex: 'Diamante' | 'Ouro' | 'Prata' | 'Bronze';
  transparencyScore: number;
  lastUpdate: string;
  indicators: {
    education: number;
    health: number;
    security: number;
    governance: number;
    sustainability: number;
    infrastructure: number;
  };
  financials: {
    revenue: number;
    expenses: number;
    investment: number;
    personnelCost: number;
    debtLevel: number;
  };
}

// Top municipalities for quick access
export const featuredCities: CityData[] = [
  {
    id: '1',
    name: 'Natal',
    state: 'RN',
    population: 896708,
    pibPerCapita: 28456.12,
    transparencyIndex: 'Diamante',
    transparencyScore: 98.5,
    lastUpdate: '2026-05-20',
    indicators: {
      education: 85,
      health: 78,
      security: 72,
      governance: 94,
      sustainability: 65,
      infrastructure: 81
    },
    financials: {
      revenue: 4200000000,
      expenses: 3850000000,
      investment: 350000000,
      personnelCost: 1950000000,
      debtLevel: 15.4
    }
  },
  {
    id: '2',
    name: 'Mossoró',
    state: 'RN',
    population: 300618,
    pibPerCapita: 24120.45,
    transparencyIndex: 'Ouro',
    transparencyScore: 89.2,
    lastUpdate: '2026-05-18',
    indicators: {
      education: 82,
      health: 74,
      security: 68,
      governance: 88,
      sustainability: 58,
      infrastructure: 72
    },
    financials: {
      revenue: 1200000000,
      expenses: 1100000000,
      investment: 100000000,
      personnelCost: 580000000,
      debtLevel: 12.1
    }
  },
  {
    id: '3',
    name: 'Parnamirim',
    state: 'RN',
    population: 267036,
    pibPerCapita: 22150.30,
    transparencyIndex: 'Prata',
    transparencyScore: 78.4,
    lastUpdate: '2026-05-15',
    indicators: {
      education: 79,
      health: 70,
      security: 65,
      governance: 76,
      sustainability: 62,
      infrastructure: 68
    },
    financials: {
      revenue: 850000000,
      expenses: 820000000,
      investment: 30000000,
      personnelCost: 450000000,
      debtLevel: 8.5
    }
  },
  {
    id: '4',
    name: 'Caicó',
    state: 'RN',
    population: 68343,
    pibPerCapita: 18450.00,
    transparencyIndex: 'Ouro',
    transparencyScore: 85.1,
    lastUpdate: '2026-05-10',
    indicators: {
      education: 88,
      health: 76,
      security: 82,
      governance: 84,
      sustainability: 70,
      infrastructure: 65
    },
    financials: {
      revenue: 250000000,
      expenses: 230000000,
      investment: 20000000,
      personnelCost: 120000000,
      debtLevel: 5.2
    }
  }
];

// Full list of RN municipalities (167)
export const rnMunicipalities = [
  "Acari", "Afonso Bezerra", "Água Nova", "Alexandria", "Almino Afonso", "Alto do Rodrigues", "Angicos", "Antônio Martins", "Apodi", "Areia Branca", 
  "Arês", "Assu", "Baía Formosa", "Baraúna", "Barcelona", "Bento Fernandes", "Bodó", "Bom Jesus", "Brejinho", "Caiçara do Norte", 
  "Caiçara do Rio do Vento", "Caicó", "Campo Redondo", "Canguaretama", "Caraúbas", "Carnaúba dos Dantas", "Carnaubais", "Ceará-Mirim", "Cerro Corá", "Coronel Ezequiel", 
  "Coronel João Pessoa", "Cruzeta", "Currais Novos", "Doutor Severiano", "Encanto", "Equador", "Espírito Santo", "Extremoz", "Felipe Guerra", "Fernando Pedroza", 
  "Florânia", "Francisco Dantas", "Frutuoso Gomes", "Galinhos", "Goianinha", "Governador Dix-Sept Rosário", "Grossos", "Guamaré", "Ielmo Marinho", "Ipanguaçu", 
  "Ipueira", "Itajá", "Itaú", "Jaçanã", "Jandaíra", "Janduís", "Januário Cicco", "Japi", "Jardim de Angicos", "Jardim de Piranhas", 
  "Jardim do Seridó", "João Câmara", "João Dias", "José da Penha", "Jucurutu", "Jundiá", "Lagoa d'Anta", "Lagoa de Pedras", "Lagoa de Velhos", "Lagoa Nova", 
  "Lagoa Salgada", "Lajes", "Lajes Pintadas", "Lucrécia", "Luís Gomes", "Macaíba", "Macau", "Major Sales", "Marcelino Vieira", "Martins", 
  "Maxaranguape", "Messias Targino", "Montanhas", "Monte Alegre", "Monte das Gameleiras", "Mossoró", "Natal", "Nísia Floresta", "Nova Cruz", "Olho-d'Água do Borges", 
  "Ouro Branco", "Paraná", "Paraú", "Parazinho", "Parelhas", "Parnamirim", "Passa e Fica", "Passagem", "Pau dos Ferros", "Pedra Grande", 
  "Pedra Preta", "Pedro Avelino", "Pedro Velho", "Pendências", "Pilões", "Poço Branco", "Portalegre", "Porto do Mangue", "Pureza", "Rafael Fernandes", 
  "Rafael Godeiro", "Riacho da Cruz", "Riacho de Santana", "Riachuelo", "Rio do Fogo", "Rodolfo Fernandes", "Ruy Barbosa", "Santa Cruz", "Santa Maria", "Santana do Matos", 
  "Santana do Seridó", "Santo Antônio", "São Bento do Norte", "São Bento do Norte", "São Fernando", "São Francisco do Oeste", "São Gonçalo do Amarante", "São João do Sabugi", "São José de Mipibu", "São José do Campestre", 
  "São José do Seridó", "São Miguel", "São Miguel do Gostoso", "São Paulo do Potengi", "São Pedro", "São Rafael", "São Tomé", "São Vicente", "Senador Elói de Souza", "Senador Georgino Avelino", 
  "Serra de São Bento", "Serra do Mel", "Serra Negra do Norte", "Serrinha", "Serrinha dos Pintos", "Severiano Melo", "Sítio Novo", "Taboleiro Grande", "Taipu", "Tangará", 
  "Tenente Ananias", "Tenente Laurentino Cruz", "Tibau", "Tibau do Sul", "Timbaúba dos Batistas", "Touros", "Triunfo Potiguar", "Umarizal", "Upanema", "Várzea", 
  "Venha-Ver", "Vera Cruz", "Viçosa", "Vila Flor"
];

// Mock generator for any RN municipality
const generateMockCityData = (name: string): CityData => {
  // Use string length and char codes to create semi-deterministic but varied mock data
  const seed = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  
  const popBase = (seed % 50000) + 5000;
  const pibBase = (seed % 15000) + 12000;
  const transparencyScore = (seed % 40) + 60; // 60 to 100
  
  let index: 'Diamante' | 'Ouro' | 'Prata' | 'Bronze' = 'Bronze';
  if (transparencyScore > 95) index = 'Diamante';
  else if (transparencyScore > 85) index = 'Ouro';
  else if (transparencyScore > 75) index = 'Prata';

  return {
    id: `dynamic-${seed}`,
    name,
    state: 'RN',
    population: popBase,
    pibPerCapita: pibBase,
    transparencyIndex: index,
    transparencyScore,
    lastUpdate: '2026-05-25',
    indicators: {
      education: (seed % 30) + 65,
      health: (seed % 30) + 60,
      security: (seed % 30) + 55,
      governance: (seed % 30) + 60,
      sustainability: (seed % 30) + 50,
      infrastructure: (seed % 30) + 55
    },
    financials: {
      revenue: popBase * 2000,
      expenses: popBase * 1800,
      investment: popBase * 200,
      personnelCost: popBase * 1100,
      debtLevel: (seed % 20) + 2
    }
  };
};

export const getCityData = (name: string): Promise<CityData | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // First check featured list
      const featured = featuredCities.find(c => c.name.toLowerCase() === name.toLowerCase());
      if (featured) {
        resolve(featured);
        return;
      }
      
      // Then check the full list and generate
      const exists = rnMunicipalities.find(m => m.toLowerCase() === name.toLowerCase());
      if (exists) {
        resolve(generateMockCityData(exists));
      } else {
        resolve(undefined);
      }
    }, 1200);
  });
};
