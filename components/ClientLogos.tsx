import { JSX } from 'react';
import Image from 'next/image';

export default function ClientLogos(): JSX.Element {
  const logos = [
    { src: '/assets/partnership/client-logos/App-Forge-Solutions.png', alt: 'App Forge Solutions' },
    { src: '/assets/partnership/client-logos/celyfos_redone_logo.png', alt: 'Celyfos' },
    { src: '/assets/partnership/client-logos/PhelanFocus.png', alt: 'PhelanFocus' },
    { src: '/assets/partnership/client-logos/nest.png', alt: 'Nest' },
  ];

  return (
    <div className='client-logos-section'>
      <div className='client-logos-container'>
        <h2 className='client-logos-heading'>Trusted By Our Clients</h2>
        <div className='client-logos-grid'>
          {logos.map((logo, idx) => (
            <div key={idx} className='logo-card'>
              <Image src={logo.src} alt={logo.alt} width={250} height={100} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
