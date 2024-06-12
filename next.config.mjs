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
        source: '/admin/assets/logo1.png',
        destination: 'https://finderlaptop.vercel.app/assets/logo1.png' // Proxy to Backend
      }
    ];
  }
};

export default nextConfig;
