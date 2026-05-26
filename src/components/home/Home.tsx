import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Carousel from '../carousel/Carousel';
import LegislativeTimeline from './LegislativeTimeline';
import Image from 'next/image';
import {
  BookOpen,
  BookUser,
  FileSearch2,
  MessagesSquare,
  Scale,
  UsersRound,
  Calendar,
  ChevronRight,
} from 'lucide-react';

const Home = () => {
  const newsData = [
    {
      date: '18/07/2025',
      category: 'Legislativo',
      title: 'Câmara Municipal Aprova Projeto de Transporte Gratuito para Estudantes',
    },
    {
      date: '17/07/2025',
      category: 'Fiscalização',
      title: 'Vereadores Discutem Criação de Comissão Especial para Fiscalizar Obras Paradas',
    },
    {
      date: '16/07/2025',
      category: 'Urbanismo',
      title: 'Legislativo Municipal Aprova Revisão no Plano Diretor da Cidade',
    },
    {
      date: '15/07/2025',
      category: 'Debate',
      title: 'Projeto de Lei para Redução de Cargos Comissionados Gera Debate Acalorado',
    },
    {
      date: '14/07/2025',
      category: 'Sustentabilidade',
      title: 'Câmara Cria Frente Parlamentar de Sustentabilidade Urbana',
    },
  ];

  const quickAccess = [
    { icon: <BookUser size={32} />, title: 'Memorial', desc: 'História do Legislativo', color: 'bg-blue-50 text-blue-600' },
    { icon: <FileSearch2 size={32} />, title: 'Transparência', desc: 'Dados e contas públicas', color: 'bg-green-50 text-green-600' },
    { icon: <UsersRound size={32} />, title: 'Servidor', desc: 'Portal do funcionário', color: 'bg-purple-50 text-purple-600' },
    { icon: <BookOpen size={32} />, title: 'Escola', desc: 'Cursos e cidadania', color: 'bg-yellow-50 text-yellow-600' },
    { icon: <MessagesSquare size={32} />, title: 'Ouvidoria', desc: 'Denúncias e sugestões', color: 'bg-red-50 text-red-600' },
    { icon: <Scale size={32} />, title: 'Sistemas', desc: 'Apoio Legislativo', color: 'bg-zinc-50 text-zinc-600' },
  ];

  return (
    <div className="flex flex-col bg-white items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="flex flex-col gap-[48px] mt-8 w-full max-w-7xl px-4 mb-12">
        {/* Hero Section: News & Portal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main News */}
          <div className="lg:col-span-2 relative h-[450px] group overflow-hidden rounded-xl shadow-lg">
            <Image 
              src="/bignews.png" 
              alt="Destaque" 
              fill 
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
            <div className="absolute bottom-0 left-0 p-8 z-20 text-white">
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold mb-3 inline-block">
                EDUCAÇÃO & CIDADANIA
              </span>
              <div className="flex items-center gap-2 text-zinc-300 text-sm mb-2">
                <Calendar size={14} />
                <span>19 de Julho, 2025</span>
              </div>
              <h1 className="text-3xl font-bold leading-tight hover:text-yellow-400 transition-colors cursor-pointer">
                Polícia Militar Realiza Palestra Educativa sobre Prevenção à Violência e Cidadania
              </h1>
            </div>
          </div>

          {/* Sidebar News */}
          <div className="flex flex-col bg-zinc-50 rounded-xl border border-zinc-200 overflow-hidden shadow-sm">
            <div className="bg-[var(--primary)] p-4">
              <h2 className="text-white font-bold flex items-center gap-2">
                Últimas Notícias
              </h2>
            </div>
            <div className="flex-1 overflow-y-auto max-h-[380px] custom-scrollbar">
              {newsData.map((item, idx) => (
                <div key={idx} className="p-4 hover:bg-white transition-colors border-b border-zinc-200 last:border-0 cursor-pointer group">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] font-bold text-[var(--primary)] uppercase tracking-wider">{item.category}</span>
                    <span className="text-[10px] text-zinc-400">{item.date}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-zinc-800 group-hover:text-[var(--primary)] transition-colors line-clamp-2 leading-snug">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
            <button className="p-3 text-sm font-bold text-[var(--primary)] hover:bg-zinc-100 transition-colors text-center border-t border-zinc-200">
              Ver todas as notícias
            </button>
          </div>
        </div>

        {/* Video Section */}
        <div className="w-full bg-zinc-100 rounded-2xl p-6 flex flex-col lg:flex-row gap-8 items-center shadow-inner">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-[var(--primary)] mb-4 border-l-4 border-yellow-500 pl-4 uppercase tracking-tight">TV Câmara Natal</h2>
            <p className="text-zinc-600 mb-6 text-lg leading-relaxed">Acompanhe ao vivo as sessões plenárias, audiências públicas e toda a programação da nossa TV legislativa.</p>
            <button className="bg-[var(--primary)] text-white px-8 py-3 rounded-full font-bold hover:bg-blue-800 transition-all flex items-center gap-3 shadow-lg hover:shadow-blue-200/50">
              Assistir ao vivo
              <ChevronRight size={18} />
            </button>
          </div>
          <div className="w-full lg:w-[500px] aspect-video rounded-xl overflow-hidden shadow-2xl ring-4 ring-white">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/GACcr0NJee8?si=qdqvfJHDaiSE41D-"
              title="YouTube video player"
              style={{ border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

        {/* Vereadores Section */}
        <div className="w-screen relative left-1/2 -translate-x-1/2 bg-[var(--primary)] py-16 shadow-2xl">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-4">
              <div className="text-center md:text-left">
                <h2 className="text-4xl font-black text-white uppercase tracking-tighter">Nossos Vereadores</h2>
                <p className="text-blue-100 mt-2 font-medium">Conheça os representantes do povo na Câmara Municipal.</p>
              </div>
              <button type="button" className="bg-white text-[var(--primary)] px-6 py-2 rounded-full font-bold hover:bg-yellow-400 hover:text-black transition-all shadow-lg">
                Ver todos os perfis
              </button>
            </div>
            <Carousel />
          </div>
        </div>

        {/* Bottom Section: Timeline & Quick Access */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Legislative Timeline */}
          <div className="lg:col-span-3">
            <LegislativeTimeline />
          </div>

          {/* Quick Access Grid */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-zinc-900 rounded-2xl p-6 text-white shadow-xl">
                <h2 className="text-xl font-bold mb-1 uppercase tracking-tight">Acesso Rápido</h2>
                <p className="text-zinc-400 text-xs mb-6 font-medium">Serviços e portais integrados</p>
                <div className="grid grid-cols-2 gap-3">
                    {quickAccess.map((item, idx) => (
                        <div key={idx} className="bg-white/5 hover:bg-white/10 p-4 rounded-xl transition-all cursor-pointer group border border-white/5">
                            <div className={`${item.color} w-10 h-10 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg`}>
                                {React.cloneElement(item.icon as React.ReactElement, { size: 20 })}
                            </div>
                            <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                            <p className="text-[10px] text-zinc-500 line-clamp-1">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Newsletter Call-to-action */}
            <div className="bg-yellow-400 rounded-2xl p-6 flex items-center justify-between group cursor-pointer overflow-hidden relative shadow-lg">
                <div className="z-10">
                    <h3 className="font-black text-zinc-900 text-lg uppercase leading-tight">Receba as<br/>Novidades</h3>
                    <p className="text-zinc-800 text-xs mt-1 font-bold">Assine nosso informativo</p>
                </div>
                <div className="bg-black text-white p-3 rounded-full z-10 group-hover:scale-110 transition-transform">
                    <ArrowRight size={24} />
                </div>
                <div className="absolute -right-4 -bottom-4 text-black/10 transition-transform group-hover:scale-110">
                    <Calendar size={120} />
                </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
