/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    mode: 'production',
    disable: false,
  },
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
    domains: ['placeimg.com', 'api.lorem.space'],
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
});
