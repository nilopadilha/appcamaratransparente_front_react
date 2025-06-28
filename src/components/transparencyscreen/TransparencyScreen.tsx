"use client";
import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import { useRouter } from 'next/navigation';
import { Download, ExternalLink } from 'lucide-react';
import Footer from '../footer/Footer';

const functions = [
    {
        name: "DROPDOWN",
        type: "dropdown",
        content: ['Option 1', 'Option 2', 'Option 3']
    },
    {
        name: "DOWNLOAD",
        type: 'download',
        content: '/file.svg'
    },
    {
        name: "REDIRECT",
        type: 'redirect',
        content: '/'
    }
];

const TransparencyScreen = () => {
  const [openDropdown, setOpenDropdown] = useState<Record<string, boolean>>({});
  const router = useRouter();

  const toggleDropdown = (name: string) => {
    setOpenDropdown(prev => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <div className='bg-white flex flex-col w-full min-h-screen'>
      <Navbar />
      <div className='w-full border-b-4 border-b-yellow-400 mt-16 py-3'>
        <p className='text-4xl text-[var(--primary)] text-center font-bold'>Portal da Transparência</p>
      </div>

      <div className="border rounded shadow-sm w-full max-w-1/2 mx-auto my-8">
        {functions.map((fn, index) => {
            switch (fn.type) {
            case 'dropdown':
                return (
                <div key={index}>
                <button
                    onClick={() => toggleDropdown(fn.name)}
                    className="w-full flex justify-between items-center px-4 py-5 bg-gray-100 border-b font-semibold text-gray-700"
                >
                    <div className="flex items-center gap-2">
                    <span>{fn.name}</span>
                    </div>
                    <span className="text-xl">☰</span>
                </button>
                {openDropdown[fn.name] &&
                Array.isArray(fn.content) &&
                fn.content.map((item, i) => (
                    <div
                    key={i}
                    className="flex justify-between items-center px-6 py-3 border-b hover:bg-gray-50"
                    >
                    <div className="flex items-center gap-2 text-blue-600">
                        🔗 <span>{item}</span>
                    </div>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                        <ExternalLink/>
                    </a>
                    </div>
                    ))}
                </div>
                );
            case 'download':
                return (
                <div key={index}>
                    <a
                    href={typeof fn.content === 'string' ? fn.content : undefined}
                    download
                    className="w-full flex justify-between items-center px-4 py-5 bg-gray-100 border-b font-semibold text-gray-700"
                    >
                    {fn.name}
                    <Download />
                    </a>
                </div>
                );

            case 'redirect':
                return (
                <div key={index}>
                    <button
                    onClick={() => {
                        if (typeof fn.content === 'string') {
                        router.push(fn.content);
                        }
                    }}
                    className="w-full flex justify-between items-center px-4 py-5 bg-gray-100 border-b font-semibold text-gray-700"
                    >
                    {fn.name}
                    <ExternalLink />
                    </button>
                </div>
                );

            default:
                return null;
            }
          })}
        </div>

        <Footer />
    </div>
  )
}

export default TransparencyScreen;
