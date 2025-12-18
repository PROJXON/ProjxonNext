import React from 'react';

export default function ClientLogos() {
  const logos = [
    { src: '/assets/partnership/client-logos/App-Forge-Solutions.png', alt: 'App Forge Solutions' },
    { src: '/assets/partnership/client-logos/celyfos_redone_logo.png', alt: 'Celyfos' },
    { src: '/assets/partnership/client-logos/PhelanFocus.png', alt: 'PhelanFocus' },
    { src: '/assets/partnership/client-logos/nest.png', alt: 'Nest' },
    { src: '/assets/partnership/client-logos/rebelOne.png', alt: 'Rebel One' },
  ];

  const repeatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className='py-5' style={{ 
      background: 'linear-gradient(135deg, #1a1a1a 0%, #000000 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative elements */}
      <div style={{
        position: 'absolute',
        top: '-50%',
        right: '-10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(255, 215, 0, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }}></div>
      
      <div style={{
        position: 'absolute',
        bottom: '-30%',
        left: '-5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(255, 215, 0, 0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }}></div>

      <div className='container' style={{ position: 'relative', zIndex: 1 }}>
        <div className='text-center mb-5'>
          <div className='d-inline-block mb-3 px-4 py-2' style={{
            background: 'rgba(255, 215, 0, 0.1)',
            border: '1px solid rgba(255, 215, 0, 0.3)',
            borderRadius: '50px',
            color: '#FFD700',
            fontSize: '0.875rem',
            fontWeight: '600',
            letterSpacing: '0.1em',
            textTransform: 'uppercase'
          }}>
            Our Partners
          </div>
          <h2 className='sections-heading fw-bold mb-2' style={{ 
            color: '#FFD700',
            fontSize: '3rem',
            letterSpacing: '-0.02em'
          }}>
            Trusted By Our Partners
          </h2>
          <p className='mx-auto' style={{
            color: 'rgba(255, 255, 255, 0.6)',
            maxWidth: '600px',
            fontSize: '1.1rem'
          }}>
          </p>
        </div>
        
        <div className='position-relative overflow-hidden py-5' style={{
          background: 'linear-gradient(to right, rgba(255, 215, 0, 0.05), rgba(255, 215, 0, 0.12), rgba(255, 215, 0, 0.05))',
          borderTop: '2px solid rgba(255, 215, 0, 0.2)',
          borderBottom: '2px solid rgba(255, 215, 0, 0.2)',
          backdropFilter: 'blur(10px)'
        }}>
          {/* Gradient overlays for smooth edges */}
          <div style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '150px',
            background: 'linear-gradient(to right, #000000, transparent)',
            zIndex: 2,
            pointerEvents: 'none'
          }}></div>
          <div style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: '150px',
            background: 'linear-gradient(to left, #000000, transparent)',
            zIndex: 2,
            pointerEvents: 'none'
          }}></div>

          <style>
            {`
              @keyframes scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-33.3333%); }
              }
              .logo-scroll {
                display: flex;
                flex-direction: row;
                gap: 5rem;
                align-items: center;
                animation: scroll 30s linear infinite;
              }
              .logo-scroll:hover {
                animation-play-state: paused;
              }
              .logo-item {
                flex-shrink: 0;
                transition: all 0.3s ease;
              }
              .logo-item:hover {
                transform: translateY(-5px) scale(1.05);
              }
              .logo-item img {
                border-radius: 12px;
              }
              .logo-item-celyfos img {
                background: rgba(255, 255, 255, 0.95);
                padding: 0.5rem;
              }
            `}
          </style>
          
          <div className='logo-scroll'>
            {repeatedLogos.map((logo, idx) => (
              <div key={idx} className={`logo-item ${logo.alt === 'Celyfos' ? 'logo-item-celyfos' : ''}`}>
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  width={180} 
                  height={70} 
                  className='img-fluid'
                  style={{ width: 'auto', height: '70px', objectFit: 'contain' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}