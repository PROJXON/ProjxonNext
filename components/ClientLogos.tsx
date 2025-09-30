'use client';
import { JSX } from 'react';
import Image from 'next/image';

export default function ClientLogos(): JSX.Element {
  const logos = [
    { src: '/assets/partnership/client-logos/App-Forge-Solutions.png', alt: 'App Forge Solutions' },
    { src: '/assets/partnership/client-logos/celyfos_redone_logo.png', alt: 'Celyfos' },
    { src: '/assets/partnership/client-logos/PhelanFocus.png', alt: 'PhelanFocus' },
    { src: '/assets/partnership/client-logos/nest.png', alt: 'Nest' },
    { src: '/assets/partnership/client-logos/rebelOne.png', alt: 'Rebel One' },
  ];

  const repeatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className='client-logos-section py-16 overflow-hidden'>
      <div className='client-logos-container max-w-7xl mx-auto px-4'>
        <h2 className='client-logos-heading text-3xl font-bold text-center mb-12'>
          Trusted By Our Clients
        </h2>
        <div className='relative overflow-hidden'>
          <style>
            {`
              @keyframes scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-33.3333%); }
              }
              .animate-scroll {
                display: flex;
                flex-direction: row;
                gap: 4rem;
                align-items: center;
                animation: scroll 20s linear infinite;
              }
              .animate-scroll:hover {
                animation-play-state: paused;
              }
            `}
          </style>
          <div className='animate-scroll'>
            {repeatedLogos.map((logo, idx) => (
              <div key={idx} className='flex-shrink-0'>
                <Image 
                  src={logo.src} 
                  alt={logo.alt} 
                  width={240} 
                  height={100} 
                  className='object-contain'
                  style={{ width: 'auto', height: '100px' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
