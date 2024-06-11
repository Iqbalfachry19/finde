/** @type {import('next').NextConfig} */
// next.config.js

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/admin/finderlaptop',
        destination: 'https://carilaptops.cloud/findlaptop.php' // Proxy to Backend
      }
    ];
  }
};

export default nextConfig;
