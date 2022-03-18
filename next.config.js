/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placeimg.com'],
  },

  // env: {
  //   customKey: 'customValue'
  // },
  // basePath: '/dist',
  // compress: true,
  // async redirects() {
  //   return [
  //     {
  //       source: '/hola',
  //       destination: '/hi', //Or https://....
  //       permanent: true
  //     }
  //   ]
  // }
};

module.exports = nextConfig;
