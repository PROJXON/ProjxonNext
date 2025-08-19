import { JSX } from 'react';

export default function ApplyNow(): JSX.Element {
  return (
    <div
      className='positions-item p-4 p-lg-5 d-flex flex-column justify-content-center align-items-center'
      style={{
        backgroundImage:
          'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(\'/assets/internships/internship-background.webp\')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: 0,
      }}
    >
      <div style={{ margin: '3rem', width: '100%', maxWidth: '900px' }}>
        <h2
          className='text-yellow fw-bold mb-3 text-center'
          style={{ fontSize: '2.3rem', marginBottom: '2rem' }}
        >
          Apply To Our Momentum Internship Program!
        </h2>
        <p
          className='text-gray mb-4 text-center'
          style={{
            fontSize: '1.3rem',
            marginBottom: '2.5rem',
            maxWidth: '800px',
            marginLeft: 'auto',
            marginRight: 'auto',
            textAlign: 'center',
          }}
        >
          Looking for professional and career development? Apply to our internship
          and see how you 
          can help out!
        </p>
        <a
          href='https://www.projxon.com/careers'
          target='_blank'
          rel='noopener noreferrer'
          className='text-yellow fw-bold text-decoration-underline text-center'
          style={{
            fontSize: '1.3rem',
            background: 'none',
            border: 'none',
            padding: 0,
            display: 'inline-block',
          }}
        >
          Apply Now
        </a>
      </div>
    </div>
  );
}
