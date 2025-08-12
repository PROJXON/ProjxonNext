import { JSX } from "react";

export default function ClientLogos(): JSX.Element {
  const yellowFilter = '#FFD700';
  return (
    <div style={{ background: '#000', padding: '0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '3rem 2rem' }}>
        <h2 style={{ textAlign: 'center', fontWeight: 600, color: '#FFD700', fontSize: '2.5rem', marginBottom: '2.5rem', marginTop: 0, padding: '1rem 0' }}>
          Trusted By Our Clients
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '2.5rem 2rem',
            alignItems: 'center',
            justifyItems: 'center',
            maxWidth: 900,
            margin: '0 auto',
            padding: '2rem 0',
          }}
        >
          <img
            width="221"
            height="67"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg"
            alt="Transistor"
            style={{ maxHeight: 67, width: '140%', objectFit: 'contain', filter: yellowFilter, padding: '0.5rem' }}
          />
          <img
            width="221"
            height="67"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-white.svg"
            alt="Reform"
            style={{ maxHeight: 67, width: '140%', objectFit: 'contain', filter: yellowFilter, padding: '0.5rem' }}
          />
          <img
            width="221"
            height="67"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg"
            alt="Tuple"
            style={{ maxHeight: 67, width: '140%', objectFit: 'contain', filter: yellowFilter, padding: '0.5rem' }}
          />
          <img
            width="221"
            height="67"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg"
            alt="SavvyCal"
            style={{ maxHeight: 67, width: '140%', objectFit: 'contain', filter: yellowFilter, padding: '0.5rem' }}
          />
          <img
            width="221"
            height="67"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg"
            alt="Statamic"
            style={{ maxHeight: 67, width: '140%', objectFit: 'contain', filter: yellowFilter, padding: '0.5rem' }}
          />
        </div>
      </div>
    </div>
  );
}
