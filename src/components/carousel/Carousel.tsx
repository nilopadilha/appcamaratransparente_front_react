'use client';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useEffect, useCallback } from 'react';

const images = [
  '/img1.jpg',
  '/img2.jpg',
  '/img3.jpg',
  '/img4.jpg',
  '/img5.jpg',
  '/img6.jpg',
  '/img7.jpg',
  '/img8.jpg',
];

const data = [
  { name: 'Paulo Ananias', party: 'Partido Trabalhista Nacional (PTN)', image: '/img1.jpg' },
  { name: 'Irene Yara Tapajós', party: 'União das Etnias Brasileiras (UEB)', image: '/img2.jpg' },
  { name: 'Dr. Augusto Lira', party: 'Partido da Justiça Social (PJS)', image: '/img3.jpg' },
  { name: 'Marcos Tavares', party: 'Aliança Nacional Democrática (AND)', image: '/img4.jpg' },
  { name: 'Verônica Matos', party: 'Frente Popular Brasileira (FPB)', image: '/img5.jpg' },
  { name: 'Fábio Mendonça', party: 'Partido da Liberdade e Equilíbrio (PLE)', image: '/img6.jpg' },
  { name: 'Renata Dourado', party: 'Partido de Renovação Cívica (PRC)', image: '/img7.jpg' },
  { name: 'Cel. Ricardo Vianna', party: 'Partido da Ordem e Desenvolvimento (POD)', image: '/img8.jpg' },
];

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, slidesToScroll: 1, align: 'start' },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  )

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  useEffect(() => {
    const interval = setInterval(scrollNext, 3000)
    return () => clearInterval(interval)
  }, [scrollNext])

  return (
    <div className="w-2/3 mx-auto mt-8 py-2 overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {data.map((src, index) => (
          <div
            key={index}
            className="flex-[0_0_16.6667%] px-2" // 100% / 6 = 16.6667%
          >
            <div className="rounded-lg overflow-hidden shadow relative hover:scale-105 transition-transform duration-300">
              <img src={src.image} alt={src.name} className="w-full h-auto" />
              
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/90 to-transparent z-10" />
              
              <div className="absolute bottom-0 p-2 text-white text-sm font-semibold z-50 w-full">
                <p className="truncate">{src.name}</p>
                <p className="text-[0.6rem] font-normal truncate">{src.party}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
