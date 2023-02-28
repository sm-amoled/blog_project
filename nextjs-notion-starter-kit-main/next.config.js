// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  staticPageGenerationTimeout: 300,
  images: {
    domains: [
      'www.notion.so',
      'notion.so',
      'images.unsplash.com',
      'pbs.twimg.com',
      'abs.twimg.com',
      's3.us-west-2.amazonaws.com',
      'transitivebullsh.it'
    ],
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  },

  redirects: async() => {
    return [
      {
        source: '/computer-science-1f40aba4e3c44061812f9c9456094996',
        destination: '/EntranceCS',
        permanent: true
      },
      {
        source: '/8c2ba592e9f946418c1dfa3406f94aa9',
        destination: '/EntranceAlgorithm',
        permanent: true
      },
      {
        source : '/apple-ecosystem-38333a5b48514e6cafb849f6f8896d0f',
        destination: '/EntranceApple',
        permanent: true
      },
      {
        source : '/about-me-76ad7a0385734182b325aad3eb205609',
        destination: '/EntranceAboutme',
        permanent: true
      },
      {
        source : '/ed81a7ca23d84793ad334fa2e2458f15',
        destination: '/EntranceToy',
        permanent: true
      },
    ]
  }
})

