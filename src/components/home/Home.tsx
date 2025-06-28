import React from 'react';
import Image from "next/image";
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Carousel from '../carousel/Carousel';
import { BookOpen, BookUser, FileSearch2, MessagesSquare, Scale, UsersRound } from 'lucide-react';

const Home = () => {
  return (
    <>
    <div className="flex flex-col !bg-white items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="flex flex-col gap-[32px] mt-27 w-2/3 mb-8">
        <div className='flex flex-row gap-8 h-80'>
          <div className='w-1/2 bg-gray-300 flex items-center justify-center'>
            <h1 className='text-[var(--primary)] text-5xl font-bold'>Big News</h1>
          </div>

          <div className='w-1/6 bg-[var(--primary)] flex flex-col gap-2 overflow-y-auto px-3 relative'>
            <h2 className='text-xl font-semibold sticky top-0 text-center bg-[var(--primary)] z-50 py-3'>Small News Gap</h2>
            <div className='min-h-24 border-b-white border-b-2 p-2'>News 1</div>
            <div className='min-h-24 border-b-white border-b-2 p-2'>News 2</div>
            <div className='min-h-24 border-b-white border-b-2 p-2'>News 3</div>
            <div className='min-h-24 border-b-white border-b-2 p-2'>News 4</div>
            <div className='min-h-24 border-b-white border-b-2 p-2'>News 5</div>
          </div>

          <div className='w-1/3 bg-gray-300'>
            <h2 className='text-[var(--primary)] text-xl font-semibold px-3 py-2'>Embeds</h2>
            <iframe width="408" height="276" src="https://www.youtube.com/embed/GACcr0NJee8?si=qdqvfJHDaiSE41D-"
              title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
            />
          </div>
        </div>

        <div className='w-screen relative left-1/2 -translate-x-1/2 bg-[var(--primary)] text-white p-5'>
          <div className='relative flex flex-row items-center justify-end w-2/3 mx-auto'>
            <h1 className='absolute left-1/2 -translate-x-1/2 text-3xl font-bold'>Vereadores</h1>
            <a className=''>Ver todos</a>
          </div>

          <Carousel/>
        </div>

        <div className='grid grid-rows-2 grid-cols-3 gap-5'>
          <div className='flex gap-4'>
            <div className='bg-[var(--primary)] text-yellow-500 p-5 rounded-md'>
              <BookUser size={48} />
            </div>
            <div className='flex flex-col gap-2'>
              <h2 className='text-[var(--primary)] font-semibold'>Memorial do Legislativo</h2>
              <p className='text-zinc-500 text-sm'>Conheça um pouco da história</p>
            </div>
          </div>

          <div className='flex gap-4'>
            <div className='bg-[var(--primary)] text-yellow-500 p-5 rounded-md'>
              <FileSearch2 size={48} />
            </div>
            <div className='flex flex-col gap-2'>
              <h2 className='text-[var(--primary)] font-semibold'>Portal da Transparência</h2>
              <p className='text-zinc-500 text-sm'>Analise todas as informações financeiras de dentro da Câmara</p>
            </div>
          </div>

          <div className='flex gap-4'>
            <div className='bg-[var(--primary)] text-yellow-500 p-5 rounded-md'>
              <UsersRound size={48} />
            </div>
            <div className='flex flex-col gap-2'>
              <h2 className='text-[var(--primary)] font-semibold'>Portal do Servidor</h2>
              <p className='text-zinc-500 text-sm'>Área destinada a informações para servidores</p>
            </div>
          </div>

          <div className='flex gap-4'>
            <div className='bg-[var(--primary)] text-yellow-500 p-5 rounded-md'>
              <BookOpen size={48} />
            </div>
            <div className='flex flex-col gap-2'>
              <h2 className='text-[var(--primary)] font-semibold'>Escola do Legislativo</h2>
              <p className='text-zinc-500 text-sm'>Educando com cidadania todos os integrantes do Poder Legislativo</p>
            </div>
          </div>

          <div className='flex gap-4'>
            <div className='bg-[var(--primary)] text-yellow-500 p-5 rounded-md'>
              <MessagesSquare size={48} />
            </div>
            <div className='flex flex-col gap-2'>
              <h2 className='text-[var(--primary)] font-semibold'>Ouvidoria</h2>
              <p className='text-zinc-500 text-sm'>Informações, denúncias e mais sobre o que acontece no município</p>
            </div>
          </div>

          <div className='flex gap-4'>
            <div className='bg-[var(--primary)] text-yellow-500 p-5 rounded-md'>
              <Scale size={48} />
            </div>
            <div className='flex flex-col gap-2'>
              <h2 className='text-[var(--primary)] font-semibold'>Sistema de Apoio</h2>
              <p className='text-zinc-500 text-sm'>Apoio ao Sistema Legislativo</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
    
    </>
  )
}

export default Home;
