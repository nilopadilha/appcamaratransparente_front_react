import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Carousel from '../carousel/Carousel';
import {
  BookOpen,
  BookUser,
  FileSearch2,
  MessagesSquare,
  Scale,
  UsersRound,
} from 'lucide-react';

const Home = () => {
  const data = [
    {
      date: '18/07/2025',
      title: 'Câmara Municipal Aprova Projeto de Transporte Gratuito para Estudantes',
      subtitle: 'Projeto foi aprovado por unanimidade e entra em vigor no próximo semestre',
    },
    {
      date: '17/07/2025',
      title: 'Vereadores Discutem Criação de Comissão Especial para Fiscalizar Obras Paradas',
      subtitle: 'Mais de 12 obras inacabadas estão no radar da nova proposta',
    },
    {
      date: '16/07/2025',
      title: 'Legislativo Municipal Aprova Revisão no Plano Diretor da Cidade',
      subtitle: 'Atualizações visam modernizar o zoneamento urbano até 2030',
    },
    {
      date: '15/07/2025',
      title: 'Projeto de Lei para Redução de Cargos Comissionados Gera Debate Acalorado',
      subtitle: 'Oposição acusa proposta de ser populista; base do governo defende “eficiência”',
    },
    {
      date: '14/07/2025',
      title: 'Câmara Cria Frente Parlamentar de Sustentabilidade Urbana',
      subtitle: 'Grupo de vereadores quer transformar a cidade em referência em políticas verdes',
    },
  ];

  return (
    <div className="flex flex-col !bg-white items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="flex flex-col gap-[32px] mt-27 w-2/3 mb-8">
        <div className="flex flex-row gap-8 h-80">
          <div className="w-1/2 relative bg-[url('/bignews.png')] bg-cover flex flex-col justify-end p-4">
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/90 to-transparent z-10" />
            <p className="text-xs z-50">19/07/2025</p>
            <h1 className="text-white text-xl font-bold w-128 z-50">
              Polícia Militar Realiza Palestra Educativa sobre Prevenção à Violência e Cidadania
            </h1>
          </div>

          <div className="w-1/6 bg-[var(--primary)] flex flex-col gap-2 overflow-y-auto px-3 relative">
            <h2 className="text-xl font-semibold sticky top-0 text-center bg-[var(--primary)] border-b-2 z-50 py-3">
              Outras notícias
            </h2>
            {data.map(item => (
              <div key={`${item.date}-${item.title}`}>
                <div className="min-h-24 p-2 mb-2 hover:bg-zinc-100/10 focus-within:bg-zinc-100 transition duration-200">
                  <p className="text-xs text-zinc-400">{item.date}</p>
                  <h3 className="text-sm font-semibold">{item.title}</h3>
                </div>
                <div className="w-3/4 h-[2px] bg-zinc-500 mx-auto" />
              </div>
            ))}
          </div>

          <div className="w-1/3 bg-gray-300">
            <h2 className="text-[var(--primary)] text-xl font-semibold px-3 py-2">Portal</h2>
            <iframe
              width="408"
              height="276"
              src="https://www.youtube.com/embed/GACcr0NJee8?si=qdqvfJHDaiSE41D-"
              title="YouTube video player"
              style={{ border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

        <div className="w-screen relative left-1/2 -translate-x-1/2 bg-[var(--primary)] text-white p-5">
          <div className="relative flex flex-row items-center justify-end w-2/3 mx-auto">
            <h1 className="absolute left-1/2 -translate-x-1/2 text-3xl font-bold">Vereadores</h1>
            <button type="button" className="underline focus:outline-none">
              Ver todos
            </button>
          </div>
          <Carousel />
        </div>

        <div className="grid grid-rows-2 grid-cols-3 gap-5">
          <div className="flex gap-4">
            <div className="bg-[var(--primary)] text-yellow-500 p-5 rounded-md hover:bg-radial from-blue-500 to-[var(--primary)] transition duration-500">
              <BookUser size={48} />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-[var(--primary)] font-semibold">Memorial do Legislativo</h2>
              <p className="text-zinc-500 text-sm">Conheça um pouco da história</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="bg-[var(--primary)] text-yellow-500 p-5 rounded-md hover:bg-radial from-blue-500 to-[var(--primary)] transition duration-500">
              <FileSearch2 size={48} />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-[var(--primary)] font-semibold">Portal da Transparência</h2>
              <p className="text-zinc-500 text-sm">
                Analise todas as informações financeiras de dentro da Câmara
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="bg-[var(--primary)] text-yellow-500 p-5 rounded-md hover:bg-radial from-blue-500 to-[var(--primary)] transition duration-500">
              <UsersRound size={48} />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-[var(--primary)] font-semibold">Portal do Servidor</h2>
              <p className="text-zinc-500 text-sm">Área destinada a informações para servidores</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="bg-[var(--primary)] text-yellow-500 p-5 rounded-md hover:bg-radial from-blue-500 to-[var(--primary)] transition duration-500">
              <BookOpen size={48} />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-[var(--primary)] font-semibold">Escola do Legislativo</h2>
              <p className="text-zinc-500 text-sm">
                Educando com cidadania todos os integrantes do Poder Legislativo
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="bg-[var(--primary)] text-yellow-500 p-5 rounded-md hover:bg-radial from-blue-500 to-[var(--primary)] transition duration-500">
              <MessagesSquare size={48} />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-[var(--primary)] font-semibold">Ouvidoria</h2>
              <p className="text-zinc-500 text-sm">
                Informações, denúncias e mais sobre o que acontece no município
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="bg-[var(--primary)] text-yellow-500 p-5 rounded-md hover:bg-radial from-blue-500 to-[var(--primary)] transition duration-500">
              <Scale size={48} />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-[var(--primary)] font-semibold">Sistema de Apoio</h2>
              <p className="text-zinc-500 text-sm">Apoio ao Sistema Legislativo</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
