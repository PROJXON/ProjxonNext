module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blog.projxon.com',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'tailwindcss.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/internships',
        destination: '/',
        permanent: true,
      },
      {
        source: '/internships/:path*',
        destination: '/',
        permanent: true,
      },
    ];
  },
};