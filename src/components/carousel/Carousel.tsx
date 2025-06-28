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
    <div className="w-2/3 mx-auto mt-8 overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {images.map((src, index) => (
          <div
            key={index}
            className="flex-[0_0_16.6667%] px-2" // 100% / 6 = 16.6667%
          >
            <div className="rounded-lg overflow-hidden shadow">
              <img src={src} alt={`Slide ${index}`} className="w-full h-auto" />
              <div className="bg-gradient-to-t from-black/60 to-transparent p-2 text-white text-sm font-semibold">
                Nome Exemplo<br />Partido
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
