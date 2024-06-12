/** @type {import('next').NextConfig} */
// next.config.js

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/admin/finderlaptop',
        destination: 'https://carilaptops.cloud/findlaptop.php' // Proxy to Backend
      },
         {
        source: '/admin/get_laptop.php',
        destination: 'https://carilaptops.cloud/get_laptop.php' // Proxy to Backend
      },
         {
        source: '/admin/assets/:path*', // Matches all paths under /admin/assets/
        destination: 'https://finderlaptop.vercel.app/assets/:path*' // Proxy to Backend
      }
    ];
  }
};

export default nextConfig;
